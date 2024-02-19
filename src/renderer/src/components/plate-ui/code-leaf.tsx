'use client'

import React from 'react'
import { cn, withRef } from '@udecode/cn'
import { PlateLeaf } from '@udecode/plate-common'

export const CodeLeaf = withRef<typeof PlateLeaf>(({ className, children, ...props }, ref) => {
  return (
    <PlateLeaf
      ref={ref}
      asChild
      className={cn(
        'whitespace-pre-wrap rounded-md bg-neutral-100 px-[0.3em] py-[0.2em] font-mono text-sm dark:bg-neutral-800',
        className
      )}
      {...props}
    >
      <code>{children}</code>
    </PlateLeaf>
  )
})
