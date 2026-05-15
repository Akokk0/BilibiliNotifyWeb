import { useEffect, useState } from 'react'

type ThemeChoice = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'bn-theme'
const ORDER: ThemeChoice[] = ['light', 'dark', 'system']

function resolveSystem(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(choice: ThemeChoice) {
  const resolved = choice === 'system' ? resolveSystem() : choice
  document.documentElement.setAttribute('data-theme', resolved)
}

function readStoredChoice(): ThemeChoice {
  if (typeof window === 'undefined') return 'system'
  const raw = window.localStorage.getItem(STORAGE_KEY)
  return raw === 'light' || raw === 'dark' || raw === 'system' ? raw : 'system'
}

const LABELS: Record<ThemeChoice, string> = {
  light: '亮色',
  dark: '暗色',
  system: '跟随系统',
}

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>(() => readStoredChoice())

  useEffect(() => {
    applyTheme(choice)
    window.localStorage.setItem(STORAGE_KEY, choice)
  }, [choice])

  useEffect(() => {
    if (choice !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [choice])

  function cycle() {
    const next = ORDER[(ORDER.indexOf(choice) + 1) % ORDER.length]
    setChoice(next)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      aria-label={`当前主题:${LABELS[choice]},点击切换`}
      title={`主题:${LABELS[choice]}`}
    >
      {choice === 'light' && <SunIcon />}
      {choice === 'dark' && <MoonIcon />}
      {choice === 'system' && <MonitorIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <title>sun</title>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <title>moon</title>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <title>monitor</title>
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
