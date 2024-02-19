import { PlateEditor } from '@renderer/components/ui/editor/editor'
import { cn } from '@renderer/utils'

export const RightPanel = ({ className }: React.ComponentProps<'main'>) => {
  return (
    <main className={cn(['h-full', className])}>
      <PlateEditor />
    </main>
  )
}
