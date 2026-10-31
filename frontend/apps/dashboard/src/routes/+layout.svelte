<script lang="ts">
	import type { LayoutProps } from './$types';
	import typographyStyles from '@repo/ui/styles/typography.module.css';

	let { children }: LayoutProps = $props();

	const apps = [
		{ name: 'web', url: `http://localhost:${import.meta.env.PORT_WEB}` },
		{ name: 'docs', url: `http://localhost:${import.meta.env.PORT_DOCS}` },
		{ name: 'order', url: `http://localhost:${import.meta.env.PORT_ORDER}` },
		{ name: 'dashboard', url: `http://localhost:${import.meta.env.PORT_DASHBOARD}` }
	];
</script>

<div class={typographyStyles.Typography}>
	<nav>
		{#each apps as app (app.name)}
			<a href={app.url} class:active={app.name === 'dashboard'}>{app.name}</a>
		{/each}
	</nav>

	<main>
		{@render children()}
	</main>
</div>

<style>
	nav {
		display: flex;
		gap: 1.25rem;
		max-width: 42rem;
		margin: 0 auto;
		padding: 1.25rem 1.5rem 0;
		font-weight: 600;
	}

	nav a {
		color: var(--color-text-muted);
		text-decoration: none;
	}

	nav a.active {
		color: var(--color-link);
	}
</style>
