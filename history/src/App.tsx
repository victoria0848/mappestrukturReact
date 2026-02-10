import { Routes, Route, NavLink } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext'

import { Today } from './pages/today/today'
import { ByDate } from './pages/byDate/byDate'
import { Since } from './pages/since/since'

function App() {
  return (
    <ThemeProvider>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Today
              </NavLink>
            </li>
            <li>
              <NavLink to="/by-date">
                By Date
              </NavLink>
            </li>
            <li>
              <NavLink to="/since">
                Since
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/by-date" element={<ByDate />} />
          <Route path="/since" element={<Since />} />
        </Routes>
      </main>

      <footer>
        <p>© History Project</p>
      </footer>
    </ThemeProvider>
  )
}

export default App
