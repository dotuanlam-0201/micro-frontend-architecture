<script lang="ts">
	import type { LayoutProps } from './$types';
	import '@repo/ui/styles/typography.module.css';

	let { children }: LayoutProps = $props();
</script>

<main>
	{@render children()}
</main>
