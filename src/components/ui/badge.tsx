import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-none border px-2 py-0.5 font-[var(--font-mono)] text-[0.72rem] tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-[#a58eff] focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        default: 'border-[#a58eff]/45 bg-[#3f00ff]/20 text-[#d7cbff]',
        secondary: 'border-white/15 bg-white/[0.04] text-[#cbd0df]',
        outline: 'border-white/20 bg-transparent text-[#8e94ad]',
        accent: 'border-[#3f00ff] bg-[#3f00ff]/30 text-[#f4f5f9]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
