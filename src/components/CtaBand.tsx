import { GitHub } from './icons'

export function CtaBand() {
  return (
    <section className="cta-band">
      <h2>让女仆替你盯 B 站。</h2>
      <p>一次配置，全年无休。开播、动态、SC、大航海，一条不漏。</p>
      <a
        href="https://github.com/Akokk0/bilibili-notify"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        <GitHub width={16} height={16} />在 GitHub 上 Star
      </a>
    </section>
  )
}
