import { cn } from '@renderer/utils'
import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable'

const defaultLayout = [365, 655]
export const Sidebar = ({
  leftPanel,
  rightPanel
}: {
  leftPanel: React.ReactNode
  rightPanel: React.ReactNode
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={4}
        collapsible={true}
        minSize={15}
        maxSize={24}
        onCollapse={() => {
          setIsCollapsed(true)
        }}
        onExpand={() => {
          setIsCollapsed(false)
        }}
        className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
      >
        <div className="w-full h-full bg-red-400">{leftPanel}</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <div className="w-full h-full bg-green-400">{rightPanel}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
