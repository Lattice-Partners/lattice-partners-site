interface SimpleIconProps {
  name: string
  size?: number
  className?: string
}

const iconMap: Record<string, string> = {
  // Navigation
  'menu': '☰',
  'close': '✕',
  'arrow-right': '→',
  'arrow-left': '←',
  
  // Social
  'mail': '✉',
  'phone': '☎',
  'map-pin': '📍',
  'linkedin': 'in',
  'twitter': '𝕏',
  'github': 'gh',
  
  // Actions
  'send': '→',
  'search': '🔍',
  
  // Features
  'brain': '🧠',
  'users': '👥',
  'zap': '⚡',
  'settings': '⚙',
  'lightbulb': '💡',
  'cog': '⚙',
  'rocket': '🚀',
  'sparkles': '✨',
  
  // Content
  'calendar': '📅',
  'clock': '⏰',
  'tag': '🏷'
}

export default function SimpleIcon({ name, size = 20, className = '' }: SimpleIconProps) {
  const icon = iconMap[name] || '•'
  
  return (
    <span 
      className={`inline-block ${className}`}
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    >
      {icon}
    </span>
  )
} 