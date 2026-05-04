import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'gold' | 'dark';
  href?: string;
  as?: React.ElementType;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, as, ...props }, ref) => {
    const Component = as || (href ? 'a' : 'button');
    
    const variants = {
      primary: 'bg-primary text-white hover:scale-105',
      ghost: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
      gold: 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-white',
      dark: 'bg-text-primary text-white hover:bg-opacity-90 hover:scale-105',
    };

    return (
      // @ts-ignore
      <Component
        ref={ref}
        href={href}
        className={cn(
          'inline-flex items-center justify-center rounded-full px-7 py-3 font-body font-medium transition-all duration-300',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
