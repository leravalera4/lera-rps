"use client"

import { useState } from "react"
import {
  Zap,
  Users,
  Trophy,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setErrorMsg(null)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }
      
      setIsSubmitted(true)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitive Leaderboards",
      description: "Climb the ranks and compete with players worldwide"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Games",
      description: "Instant matchmaking and real-time gameplay"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Earn Rewards",
      description: "Win SOL and climb the global leaderboard"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Community",
      description: "Join thousands of players in the ultimate RPS battle"
    }
  ]

  const stats = [
    { label: "Players", value: "1k+" },
    { label: "Games Played", value: "10K+" },
    { label: "SOL Staked", value: "30+" },
    { label: "Countries", value: "12+" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
            <div className="relative">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/90 rounded-sm rotate-45 shadow-sm"></div>
            </div>
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent truncate min-w-0">
            RPS Arena
          </span>
        </div>
        

      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <span className="inline-flex items-center mb-6 px-3 py-1 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/50">
          <Sparkles className="w-3 h-3 mr-1" />
          Coming Soon
        </span>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          The Ultimate
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Rock Paper Scissors
          </span>
          <br />
          Arena
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Experience the future of competitive gaming on Solana. Stake SOL, challenge players worldwide, and climb the global leaderboard in this revolutionary Web3 game.
        </p>

        {/* Waitlist Form */}
        {!isSubmitted ? (
          <div className="max-w-md mx-auto bg-black/50 border border-purple-500/30 backdrop-blur-sm rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Join the Waitlist</h3>
              <p className="text-gray-400 mb-6">Be among the first to experience RPS Arena when it launches!</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-purple-500/50 bg-black/50 px-3 py-2 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none"
                  required
                />
                {errorMsg && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <ArrowRight className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-green-500/20 border border-green-500/30 backdrop-blur-sm rounded-lg">
            <div className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-green-400">You're on the list!</h3>
              <p className="text-gray-300">We'll notify you as soon as RPS Arena launches.</p>
            </div>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Why Choose RPS Arena?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/30 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-colors rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 RPS Arena. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
