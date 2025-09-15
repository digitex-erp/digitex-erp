# Bell24h - AI Support Assistant

A professional AI-powered customer support system built with Next.js and Tailwind CSS.

## Features

- 🤖 AI-powered chat responses using Perplexity AI
- 💬 Real-time chat interface
- 🎨 Beautiful, modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js 14

## Quick Start

### Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Perplexity API key to `.env.local`:
   ```
   PERPLEXITY_API_KEY=your_actual_api_key_here
   ```

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add your `PERPLEXITY_API_KEY` in the Vercel environment variables
4. Deploy!

## API Configuration

The application uses the Perplexity AI API for generating responses. Make sure to:

1. Sign up at [Perplexity AI](https://www.perplexity.ai/)
2. Get your API key from the settings
3. Add it to your environment variables

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **AI Provider**: Perplexity AI
- **Icons**: Lucide React

## Security

- No hardcoded API keys
- Environment variables for sensitive data
- Proper error handling
- Input validation