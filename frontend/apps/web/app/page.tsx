import Button from "@repo/ui/react/Button"
import buttonStyles from "@repo/ui/styles/button.module.css"

export default function Home() {
  return (
    <main>
      <h1>web</h1>
      <p>
        The customer-facing storefront in this monorepo, built with Next.js
        and rendered with headless components from <code>@repo/ui</code>.
      </p>
      <ul>
        <li>Native, unstyled primitives from Base UI (React)</li>
        <li>
          Shared styling through CSS modules in{" "}
          <code>packages/ui/styles</code>
        </li>
        <li>
          Ships alongside <code>docs</code> and <code>dashboard</code> in the
          same Turborepo workspace
        </li>
      </ul>
      <Button className={buttonStyles.Button}>Get started</Button>
    </main>
  )
}
