import React from 'react'
import { cn, withRef } from '@udecode/cn'
import { PlateLeaf } from '@udecode/plate-common'

export const HighlightLeaf = withRef<typeof PlateLeaf>(({ className, children, ...props }, ref) => (
  <PlateLeaf
    ref={ref}
    asChild
    className={cn(
      'bg-neutral-900/20 text-inherit dark:bg-neutral-900/40 dark:bg-neutral-50/20 dark:dark:bg-neutral-50/40',
      className
    )}
    {...props}
  >
    <mark>{children}</mark>
  </PlateLeaf>
))
