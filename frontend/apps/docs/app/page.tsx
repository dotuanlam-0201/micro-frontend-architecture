import Link from "next/link"
import buttonStyles from "@repo/ui/styles/button.module.css"

export default function Home() {
  return (
    <main>
      <h1>docs</h1>
      <p>
        Documentation site for the <code>@repo/ui</code> component library —
        usage guides, API references, and examples for every framework we
        support.
      </p>
      <h2>Available frameworks</h2>
      <ul>
        <li>React, via Base UI primitives</li>
        <li>Vue, via Base UI Vue</li>
        <li>Svelte, via Bits UI</li>
      </ul>
      <blockquote>
        Every component ships unstyled by default — bring your own CSS, or
        reuse the modules in <code>packages/ui/styles</code>.
      </blockquote>
      <Link href="/components" className={buttonStyles.Button}>
        Browse components
      </Link>
    </main>
  )
}
