interface RPSLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function RPSLogo({ size = 'md', showText = true, className = '' }: RPSLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-16 sm:h-16'
  }

  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  }

  return (
    <div className={`flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
        <div className="relative">
          <div className={`${size === 'sm' ? 'w-3 h-3 sm:w-4 sm:h-4' : size === 'md' ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-6 h-6 sm:w-8 sm:h-8'} bg-white/90 rounded-sm rotate-45 shadow-sm`}></div>
        </div>
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent truncate min-w-0`}>
          RPS Arena
        </span>
      )}
    </div>
  )
}
