import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Nav } from './Nav'
import { ThemeToggle } from './ThemeToggle'

export function Layout() {
  const { pathname, hash } = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the route-change trigger; hash is read inside the effect.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <ThemeToggle />
    </>
  )
}
