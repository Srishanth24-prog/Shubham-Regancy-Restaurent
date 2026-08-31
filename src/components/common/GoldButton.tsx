import React from 'react';

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3 text-xs md:text-sm font-bold tracking-widest',
    lg: 'px-8 py-4 text-sm md:text-base font-bold tracking-widest',
  };

  const variantClasses = {
    primary:
      'bg-gold-gradient text-burgundy-950 shadow-gold-subtle hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] border border-gold-300',
    secondary:
      'bg-burgundy-900 text-ivory border border-gold-500/40 hover:border-gold-400 hover:bg-burgundy-800 hover:scale-[1.02] active:scale-[0.98]',
    outline:
      'bg-transparent text-gold-400 border border-gold-500/60 hover:bg-gold-500/10 hover:text-gold-300 hover:border-gold-400',
    ghost:
      'bg-transparent text-ivory hover:text-gold-400 hover:bg-burgundy-950/40',
  };

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full uppercase transition-all duration-300 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase font-sans';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
