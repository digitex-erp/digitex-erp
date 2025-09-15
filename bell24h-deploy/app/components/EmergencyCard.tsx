'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

interface EmergencyCardProps {
  title: string
  number: string
  description: string
  icon: string
  color: string
  bgColor: string
  borderColor: string
}

export default function EmergencyCard({
  title,
  number,
  description,
  icon,
  color,
  bgColor,
  borderColor,
}: EmergencyCardProps) {
  const handleCall = () => {
    window.location.href = `tel:${number}`
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${bgColor} ${borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
      onClick={handleCall}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-5xl">{icon}</span>
        <div className={`bg-gradient-to-r ${color} text-white px-4 py-2 rounded-full font-bold text-lg`}>
          {number}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full bg-gradient-to-r ${color} text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md`}
      >
        <Phone size={20} />
        <span>Call Now</span>
      </motion.button>
    </motion.div>
  )
}