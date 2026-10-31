<script lang="ts">
	import Button from '@repo/ui/svelte/Button';
	import buttonStyles from '@repo/ui/styles/button.module.css';
</script>

<svelte:head>
	<title>dashboard</title>
</svelte:head>

<h1>dashboard</h1>
<p>
	The internal admin dashboard for this monorepo, built with SvelteKit and rendered with headless
	components from <code>@repo/ui</code>.
</p>
<ul>
	<li>Native, unstyled primitives from Bits UI (Svelte)</li>
	<li>
		Shared styling through CSS modules in <code>packages/ui/styles</code>
	</li>
	<li>
		Ships alongside <code>web</code> and <code>docs</code> in the same Turborepo workspace
	</li>
</ul>
<Button.Root class={buttonStyles.Button}>View reports</Button.Root>
