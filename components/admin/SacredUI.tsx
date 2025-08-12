'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'
import Link from 'next/link'

// Sacred Button Component
interface SacredButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'sacred' | 'warning'
  icon?: LucideIcon
  loading?: boolean
  sacred?: boolean
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  className?: string
  href?: string
}

export const SacredButton = ({
  children,
  variant = 'primary',
  icon: Icon,
  loading = false,
  sacred = false,
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  href
}: SacredButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-rose-pink to-deep-rose text-white hover:shadow-lg hover:shadow-rose-pink/25 focus:ring-rose-pink',
    secondary: 'bg-gradient-to-r from-golden-light to-yellow-400 text-white hover:shadow-lg hover:shadow-golden-light/25 focus:ring-golden-light',
    sacred: 'bg-gradient-to-r from-rose-pink via-golden-light to-earth-copper text-white hover:shadow-lg hover:shadow-rose-pink/30 focus:ring-rose-pink',
    warning: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg hover:shadow-red-500/25 focus:ring-red-500'
  }

  const buttonContent = (
    <>
      {sacred && (
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(251, 191, 36, 0.3))',
              'linear-gradient(45deg, rgba(251, 191, 36, 0.3), rgba(194, 65, 12, 0.3))',
              'linear-gradient(45deg, rgba(194, 65, 12, 0.3), rgba(236, 72, 153, 0.3))'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      
      <span className="relative flex items-center space-x-2">
        {Icon && !loading && <Icon className="h-4 w-4" />}
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
          />
        )}
        <span>{children}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonContent}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  )
}

// Sacred Card Component
interface SacredCardProps {
  children: ReactNode
  elevation?: 'gentle' | 'elevated' | 'floating'
  glow?: boolean
  borderStyle?: 'rose' | 'gold' | 'copper'
  className?: string
  hover?: boolean
}

export const SacredCard = ({
  children,
  elevation = 'gentle',
  glow = false,
  borderStyle,
  className = '',
  hover = false
}: SacredCardProps) => {
  const elevationClasses = {
    gentle: 'shadow-sm',
    elevated: 'shadow-lg shadow-black/5',
    floating: 'shadow-2xl shadow-black/10'
  }
  
  const borderClasses = {
    rose: 'border border-rose-200/50',
    gold: 'border border-golden-light/30',
    copper: 'border border-earth-copper/30'
  }
  
  const glowClass = glow ? 'ring-1 ring-rose-pink/10 ring-inset' : ''
  const hoverClass = hover ? 'hover:shadow-xl hover:shadow-black/10 transition-all duration-300 cursor-pointer' : ''

  return (
    <motion.div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 ${elevationClasses[elevation]} ${borderStyle ? borderClasses[borderStyle] : ''} ${glowClass} ${hoverClass} ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
      layout
    >
      {children}
    </motion.div>
  )
}

// Sacred Input Component
interface SacredInputProps {
  label?: string
  type?: 'text' | 'email' | 'password' | 'url' | 'number'
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  helpText?: string
  error?: string
  required?: boolean
  icon?: LucideIcon
  className?: string
  disabled?: boolean
}

export const SacredInput = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  helpText,
  error,
  required = false,
  icon: Icon,
  className = '',
  disabled = false
}: SacredInputProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-rose-pink">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-4 w-4 text-gray-400" />
          </div>
        )}
        
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className={`block w-full rounded-xl border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm focus:border-rose-pink focus:ring-rose-pink transition-colors duration-200 ${
            Icon ? 'pl-10' : 'pl-4'
          } pr-4 py-3 ${error ? 'border-red-300' : ''} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        />
      </div>
      
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

// Sacred Textarea Component
interface SacredTextareaProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  helpText?: string
  error?: string
  required?: boolean
  rows?: number
  className?: string
}

export const SacredTextarea = ({
  label,
  placeholder,
  value,
  onChange,
  helpText,
  error,
  required = false,
  rows = 4,
  className = ''
}: SacredTextareaProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-rose-pink">*</span>}
        </label>
      )}
      
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
        className={`block w-full rounded-xl border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm focus:border-rose-pink focus:ring-rose-pink transition-colors duration-200 px-4 py-3 resize-none ${
          error ? 'border-red-300' : ''
        }`}
      />
      
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

// Sacred Select Component
interface SacredSelectProps {
  label?: string
  value?: string
  onChange?: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  helpText?: string
  error?: string
  required?: boolean
  className?: string
}

export const SacredSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  helpText,
  error,
  required = false,
  className = ''
}: SacredSelectProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-rose-pink">*</span>}
        </label>
      )}
      
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`block w-full rounded-xl border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm focus:border-rose-pink focus:ring-rose-pink transition-colors duration-200 px-4 py-3 ${
          error ? 'border-red-300' : ''
        }`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

// Sacred Stats Component
interface SacredStatProps {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon?: LucideIcon
  color?: 'rose' | 'golden' | 'copper'
}

export const SacredStat = ({
  title,
  value,
  change,
  trend = 'neutral',
  icon: Icon,
  color = 'rose'
}: SacredStatProps) => {
  const colorClasses = {
    rose: 'from-rose-pink to-deep-rose',
    golden: 'from-golden-light to-yellow-400',
    copper: 'from-earth-copper to-orange-600'
  }
  
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-500'
  }

  return (
    <SacredCard hover className="group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </p>
          {change && (
            <p className={`text-sm mt-1 ${trendColors[trend]}`}>
              {change}
            </p>
          )}
        </div>
        
        {Icon && (
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} text-white group-hover:scale-110 transition-transform`}>
            <Icon className="h-6 w-6" />
          </div>
        )}
      </div>
    </SacredCard>
  )
}
