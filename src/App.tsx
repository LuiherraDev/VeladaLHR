import { Route, Routes } from 'react-router'

import Home from './pages/MainLayout'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
