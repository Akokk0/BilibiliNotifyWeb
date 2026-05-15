import { useHead } from '@unhead/react'
import { CtaBand } from '../components/CtaBand'
import { Deploy } from '../components/Deploy'
import { Features } from '../components/Features'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'

export function Home() {
  useHead({ title: 'Bilibili Notify — 让 UP 主动态不再错过' })
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Deploy />
      <CtaBand />
    </>
  )
}
