import { Route, Routes } from 'react-router'

import MainLayout from './pages/MainLayout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
