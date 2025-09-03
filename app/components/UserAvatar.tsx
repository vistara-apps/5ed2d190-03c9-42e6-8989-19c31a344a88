'use client';

import { User } from 'lucide-react';

interface UserAvatarProps {
  address?: string;
  farcasterId?: string;
  variant?: 'default' | 'farcaster';
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ 
  address, 
  farcasterId, 
  variant = 'default', 
  size = 'md' 
}: UserAvatarProps) {
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-12 h-12';
      default: return 'w-10 h-10';
    }
  };

  const getDisplayText = () => {
    if (farcasterId) return farcasterId.substring(0, 2).toUpperCase();
    if (address) return address.substring(2, 4).toUpperCase();
    return '??';
  };

  return (
    <div className={`${getSizeClass()} rounded-full bg-primary text-white flex items-center justify-center font-semibold`}>
      {variant === 'farcaster' && farcasterId ? (
        <span className="text-sm">{getDisplayText()}</span>
      ) : address ? (
        <span className="text-sm">{getDisplayText()}</span>
      ) : (
        <User size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />
      )}
    </div>
  );
}
