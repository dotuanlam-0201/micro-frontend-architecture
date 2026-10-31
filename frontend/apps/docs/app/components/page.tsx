import Button from "@repo/ui/react/Button";
import Checkbox from "@repo/ui/react/Checkbox";
import Switch from "@repo/ui/react/Switch";
import Accordion from "@repo/ui/react/Accordion";
import Tabs from "@repo/ui/react/Tabs";
import Tooltip from "@repo/ui/react/Tooltip";
import Progress from "@repo/ui/react/Progress";
import Separator from "@repo/ui/react/Separator";

import buttonStyles from "@repo/ui/styles/button.module.css";
import checkboxStyles from "@repo/ui/styles/checkbox.module.css";
import switchStyles from "@repo/ui/styles/switch.module.css";
import accordionStyles from "@repo/ui/styles/accordion.module.css";
import tabsStyles from "@repo/ui/styles/tabs.module.css";
import tooltipStyles from "@repo/ui/styles/tooltip.module.css";
import progressStyles from "@repo/ui/styles/progress.module.css";
import separatorStyles from "@repo/ui/styles/separator.module.css";

export default function ComponentsPage() {
  return (
    <main>
      <h1>Components</h1>
      <p>
        A live gallery of <code>@repo/ui</code> — headless Base UI primitives
        styled through the CSS modules in <code>packages/ui/styles</code>.
      </p>

      <h2>Button</h2>
      <Button className={buttonStyles.Button}>Click me</Button>

      <Separator className={separatorStyles.Separator} />

      <h2>Checkbox</h2>
      <label style={{ display: "flex", alignItems: "center", gap: "0.6em" }}>
        <Checkbox.Root defaultChecked className={checkboxStyles.Root}>
          <Checkbox.Indicator className={checkboxStyles.Indicator}>
            ✓
          </Checkbox.Indicator>
        </Checkbox.Root>
        Subscribe to updates
      </label>

      <Separator className={separatorStyles.Separator} />

      <h2>Switch</h2>
      <label style={{ display: "flex", alignItems: "center", gap: "0.6em" }}>
        <Switch.Root defaultChecked className={switchStyles.Root}>
          <Switch.Thumb className={switchStyles.Thumb} />
        </Switch.Root>
        Enable notifications
      </label>

      <Separator className={separatorStyles.Separator} />

      <h2>Accordion</h2>
      <Accordion.Root className={accordionStyles.Root}>
        <Accordion.Item className={accordionStyles.Item}>
          <Accordion.Header className={accordionStyles.Header}>
            <Accordion.Trigger className={accordionStyles.Trigger}>
              What is @repo/ui?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className={accordionStyles.Panel}>
            <p>
              A shared, headless component library re-exporting Base UI
              (React), Base UI Vue, and Bits UI (Svelte) — one CSS module per
              component, shared across every app in this monorepo.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={accordionStyles.Item}>
          <Accordion.Header className={accordionStyles.Header}>
            <Accordion.Trigger className={accordionStyles.Trigger}>
              Why headless?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className={accordionStyles.Panel}>
            <p>
              Accessibility and behavior (keyboard nav, ARIA, focus
              management) come from the primitive. Styling is opted into
              separately, so it stays consistent across React, Vue, and
              Svelte.
            </p>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>

      <Separator className={separatorStyles.Separator} />

      <h2>Tabs</h2>
      <Tabs.Root defaultValue="react" className={tabsStyles.Root}>
        <Tabs.List className={tabsStyles.List}>
          <Tabs.Tab value="react" className={tabsStyles.Tab}>
            React
          </Tabs.Tab>
          <Tabs.Tab value="vue" className={tabsStyles.Tab}>
            Vue
          </Tabs.Tab>
          <Tabs.Tab value="svelte" className={tabsStyles.Tab}>
            Svelte
          </Tabs.Tab>
          <Tabs.Indicator className={tabsStyles.Indicator} />
        </Tabs.List>
        <Tabs.Panel value="react" className={tabsStyles.Panel}>
          Used by <code>web</code> and <code>docs</code> via Base UI.
        </Tabs.Panel>
        <Tabs.Panel value="vue" className={tabsStyles.Panel}>
          Used by <code>order</code> via Base UI Vue.
        </Tabs.Panel>
        <Tabs.Panel value="svelte" className={tabsStyles.Panel}>
          Used by <code>dashboard</code> via Bits UI.
        </Tabs.Panel>
      </Tabs.Root>

      <Separator className={separatorStyles.Separator} />

      <h2>Tooltip</h2>
      <Tooltip.Root>
        <Tooltip.Trigger className={buttonStyles.Button}>
          Hover me
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={8}>
            <Tooltip.Popup className={tooltipStyles.Popup}>
              Rendered through a portal, positioned with Floating UI.
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Separator className={separatorStyles.Separator} />

      <h2>Progress</h2>
      <Progress.Root value={65} className={progressStyles.Root}>
        <Progress.Label className={progressStyles.Label}>
          <span>Uploading</span>
          <Progress.Value className={progressStyles.Value} />
        </Progress.Label>
        <Progress.Track className={progressStyles.Track}>
          <Progress.Indicator className={progressStyles.Indicator} />
        </Progress.Track>
      </Progress.Root>
    </main>
  );
}
