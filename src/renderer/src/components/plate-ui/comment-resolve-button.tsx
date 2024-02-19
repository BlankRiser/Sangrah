'use client'

import { cn } from '@udecode/cn'
import {
  CommentResolveButton as CommentResolveButtonPrimitive,
  useComment
} from '@udecode/plate-comments'

import { Check, RefreshCcw } from 'lucide-react'
import { buttonVariants } from './button'

export function CommentResolveButton() {
  const comment = useComment()!

  return (
    <CommentResolveButtonPrimitive
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-6 p-1 text-neutral-500 dark:text-neutral-400'
      )}
    >
      {comment.isResolved ? <RefreshCcw className="h-4 w-4" /> : <Check className="h-4 w-4" />}
    </CommentResolveButtonPrimitive>
  )
}
