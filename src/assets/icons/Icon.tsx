/* *

 Example usage: 
 <Icon name="Activity" size={20} className="text-blue-500" />

*/

import * as LucideIcons from "lucide-react"
import React from "react"

interface IconProps {
  name: keyof typeof LucideIcons // the icon name as string
  size?: number
  className?: string
}

export function Icon({ name, size = 14, className = "" }: IconProps) {
  const IconComponent = (LucideIcons as any)[name] as React.ComponentType<any> // get the icon dynamically

  if (!IconComponent) return null // fallback if icon doesn't exist

  return <IconComponent size={size} className={className} />
}
