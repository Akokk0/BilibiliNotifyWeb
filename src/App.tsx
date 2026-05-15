import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AI } from './pages/AI'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Koishi } from './pages/Koishi'
import { Standalone } from './pages/Standalone'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/standalone" element={<Standalone />} />
        <Route path="/koishi" element={<Koishi />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai" element={<AI />} />
      </Route>
    </Routes>
  )
}
