import { cn } from '@renderer/utils'
import React, { ComponentProps } from 'react'
import { DraggableTopBar } from './draggable-topbar'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <React.Fragment>
      <DraggableTopBar />
      <main className={cn('flex flex-row h-full mt-8', className)} {...props}>
        {children}
      </main>
    </React.Fragment>
  )
}
