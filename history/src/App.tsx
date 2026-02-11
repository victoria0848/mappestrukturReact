import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext'
import { ThemeToggle } from './components/themeToggle/themeToggle'

import { Today } from './pages/today/today'
import { ByDate } from './pages/byDate/byDate'
import { Since } from './pages/since/since'

function App() {
  return (
    <ThemeProvider>
      <main>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/by-date" element={<ByDate />} />
          <Route path="/since" element={<Since />} />
        </Routes>
        
        <ThemeToggle />
      </main>

      <footer>
        <p>© History Project</p>
      </footer>
    </ThemeProvider>
  )
}

export default App
