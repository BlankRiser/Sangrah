import { cn } from '@renderer/utils'

export const LeftPanel = ({ className }: React.ComponentProps<'aside'>) => {
  return <aside className={cn(['h-full', className])}>left panel</aside>
}
