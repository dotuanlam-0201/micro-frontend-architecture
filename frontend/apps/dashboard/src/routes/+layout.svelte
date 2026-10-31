<script lang="ts">
	import type { LayoutProps } from './$types';
	import typographyStyles from '@repo/ui/styles/typography.module.css';

	let { children }: LayoutProps = $props();
</script>

<div class={typographyStyles.Typography}>
	<main>
		{@render children()}
	</main>
</div>
