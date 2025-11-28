import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { Home } from '../../Pages/Home'
import { AboutPomodoro } from '../../Pages/AboutPomodoro'
import { NotFound } from '../../Pages/NotFound'
import { useEffect } from 'react'
import { History } from '../../Pages/History'
import { Settings } from '../../Pages/Settings'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname]);

  return null;
}


export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/History/' element={<History />} />
        <Route path='/Settings/' element={<Settings />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}