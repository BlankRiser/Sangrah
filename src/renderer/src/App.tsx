import { RootLayout } from './components/layout/root-layout'
import { Sidebar } from './components/layout/sidebar'
import { LeftPanel } from './features/left-panel'
import { RightPanel } from './features/right-panel'

const App = () => {
  return (
    <RootLayout>
      <Sidebar leftPanel={<LeftPanel />} rightPanel={<RightPanel />} />
    </RootLayout>
  )
}

export default App
