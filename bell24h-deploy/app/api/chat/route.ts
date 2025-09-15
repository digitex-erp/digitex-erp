import { NextRequest, NextResponse } from 'next/server'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

interface ChatRequest {
  message: string
  history: Message[]
}

export async function POST(request: NextRequest) {
  try {
    const { message, history }: ChatRequest = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      )
    }

    // Get API key from environment variables
    const apiKey = process.env.PERPLEXITY_API_KEY
    
    if (!apiKey) {
      console.error('PERPLEXITY_API_KEY environment variable is not set')
      return NextResponse.json(
        { 
          response: 'I apologize, but the AI service is currently unavailable. Please check back later or contact support.'
        },
        { status: 200 }
      )
    }

    // Prepare conversation context
    const conversationHistory = history
      .slice(-5) // Keep last 5 messages for context
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n')

    const systemPrompt = `You are Bell24h, a professional AI customer support assistant. You are helpful, knowledgeable, and courteous. 
    
    Guidelines:
    - Provide clear, concise, and helpful responses
    - Be professional but friendly
    - If you don't know something, admit it and offer to help find the information
    - Focus on solving the customer's problem
    - Keep responses under 200 words unless more detail is specifically requested
    
    Previous conversation context:
    ${conversationHistory}
    
    Current user message: ${message}`

    // Call Perplexity API
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are Bell24h, a professional AI customer support assistant. Be helpful, knowledgeable, and courteous.'
          },
          {
            role: 'user',
            content: systemPrompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
        stream: false
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Perplexity API error:', response.status, errorText)
      
      return NextResponse.json(
        { 
          response: 'I apologize, but I\'m experiencing technical difficulties right now. Please try again in a moment.'
        },
        { status: 200 }
      )
    }

    const data = await response.json()
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response format:', data)
      return NextResponse.json(
        { 
          response: 'I apologize, but I received an unexpected response. Please try again.'
        },
        { status: 200 }
      )
    }

    const aiResponse = data.choices[0].message.content

    return NextResponse.json({
      response: aiResponse
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { 
        response: 'I apologize, but something went wrong. Please try again later.'
      },
      { status: 200 }
    )
  }
}