'use client'

import { useState } from 'react'
import EmergencyCard from './components/EmergencyCard'
import HelpAssistant from './components/HelpAssistant'
import { motion } from 'framer-motion'

const emergencyServices = [
  {
    title: 'Police',
    number: '100',
    description: 'For crime, theft, or law enforcement assistance',
    icon: '👮',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    title: 'Fire Department',
    number: '101',
    description: 'For fire emergencies or rescue operations',
    icon: '🚒',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    title: 'Medical Emergency',
    number: '108',
    description: 'For ambulance and medical emergencies',
    icon: '🚑',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    title: 'Women Helpline',
    number: '1091',
    description: 'Dedicated helpline for women in distress',
    icon: '👩',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    title: 'Child Helpline',
    number: '1098',
    description: 'For child protection and assistance',
    icon: '👶',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    title: 'Disaster Management',
    number: '1070',
    description: 'For natural disasters and calamities',
    icon: '🌊',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
]

export default function Home() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bell24H Emergency Services
          </h1>
          <p className="text-xl text-gray-600">
            Quick access to emergency helplines - Available 24/7
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full">
            <span className="animate-pulse mr-2">🔴</span>
            <span className="font-semibold">Emergency Services Active</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {emergencyServices.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <EmergencyCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Emergency Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                <span className="mr-2">📞</span> When Calling Emergency Services
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Stay calm and speak clearly
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Provide your exact location
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Describe the emergency briefly
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Follow the operator's instructions
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 flex items-center">
                <span className="mr-2">🚨</span> Important Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  All emergency numbers are toll-free
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Available 24 hours, 7 days a week
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Multi-lingual support available
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  GPS location tracking enabled
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setIsAssistantOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <span className="mr-2">💬</span>
            Need Help? Chat with Assistant
          </button>
        </motion.div>
      </div>

      <HelpAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </main>
  )
}