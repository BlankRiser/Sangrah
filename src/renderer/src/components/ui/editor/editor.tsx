import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Editor } from '@renderer/components/plate-ui/editor'
import { FixedToolbar } from '@renderer/components/plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from '@renderer/components/plate-ui/fixed-toolbar-buttons'
import { Plate } from '@udecode/plate-common'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { plugins } from './plugins'

const initialValue = [
  {
    id: '1',
    type: 'p',
    children: [{ text: 'Hello, World!' }]
  }
]

export function PlateEditor() {
  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <Plate plugins={plugins} initialValue={initialValue}>
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
          <Editor />
        </Plate>
      </DndProvider>
    </TooltipProvider>
  )
}
