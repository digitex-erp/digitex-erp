import { NextResponse } from 'next/server'

// Pre-defined responses for common emergency queries
const emergencyResponses: { [key: string]: string } = {
  police: "For police assistance, call 100. This is for crimes, theft, or law enforcement needs. Stay calm, provide your location, and describe the situation clearly.",
  fire: "For fire emergencies, call 101. Evacuate the area immediately if safe to do so. Do not use elevators. Alert others nearby.",
  medical: "For medical emergencies, call 108. This service provides ambulance and emergency medical care. Keep the patient comfortable and follow dispatcher instructions.",
  accident: "For accidents: Call 108 for medical help and 100 for police. Do not move injured persons unless in immediate danger. Note vehicle details and take photos if safe.",
  "what to do": "In any emergency: 1) Stay calm, 2) Call the appropriate service, 3) Provide clear location details, 4) Follow instructions from the operator, 5) Stay on the line until help arrives.",
  location: "When calling emergency services, provide: 1) Street address or landmark, 2) City/area name, 3) Nearby buildings or intersections, 4) Any special directions to reach you.",
  women: "Women's helpline is 1091. Available 24/7 for women in distress or facing harassment. Counselors provide support and can coordinate with police if needed.",
  child: "Child helpline is 1098. For child protection, abuse reporting, or children in need of care. Trained counselors available 24/7.",
  disaster: "For natural disasters, call 1070. This includes floods, earthquakes, storms. Follow evacuation orders and move to designated safe areas.",
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json()
    
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 })
    }

    const lowerMessage = message.toLowerCase()
    
    // Find the best matching response
    let response = "I can help you with emergency information. You can ask about:\n• Police (100)\n• Fire (101)\n• Medical (108)\n• Women's helpline (1091)\n• Child helpline (1098)\n• Disaster management (1070)\n\nWhat would you like to know?"
    
    for (const [key, value] of Object.entries(emergencyResponses)) {
      if (lowerMessage.includes(key)) {
        response = value
        break
      }
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}