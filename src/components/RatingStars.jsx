import React from "react"
import { FaStar } from "react-icons/fa"

export default function RatingStars({ value = 0 }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const filled = i < full || (i === full && half)
    return (
      <FaStar
        key={i}
        className={filled ? "text-yellow-400" : "text-gray-600"}
      />
    )
  })
  return <div className="flex items-center gap-1">{stars}</div>
}
