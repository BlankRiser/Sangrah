import { cn } from '@renderer/utils'

export const RightPanel = ({ className }: React.ComponentProps<'main'>) => {
  return <main className={cn(['h-full', className])}>right panel for markdown files</main>
}
