import { Route, Routes, Navigate } from 'react-router'
import { MainLayout } from './layouts/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default App
