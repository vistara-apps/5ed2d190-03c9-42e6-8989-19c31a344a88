'use client';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function CTAButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  loading = false,
  className = '' 
}: CTAButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
          Processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
