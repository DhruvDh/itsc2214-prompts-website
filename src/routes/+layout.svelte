<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkeletonPlaceholder,
		SkeletonText,
		SkipToContent
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;

	export let data;
</script>

<Header company="ITSC 2214" platformName="Prep Work Prompts" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/" text="Assignments" />
		<HeaderNavItem href="/instructions" text="Instructions" />
	</HeaderNav>
</Header>

{#if data.prompts.length > 0}
	<SideNav bind:isOpen={isSideNavOpen}>
		<SideNavItems>
			{#each data.prompts as prompt (prompt.id)}
				<SideNavLink href="/prompts/{prompt.id}" text={prompt.assignment_name} />
			{/each}
		</SideNavItems>
	</SideNav>
{:else}
	<SideNav bind:isOpen={isSideNavOpen}>
		<SideNavItems>
			<SkeletonText paragraph lines={15} />
		</SideNavItems>
	</SideNav>
{/if}
<slot />

<style>
	@import 'carbon-components-svelte/css/white.css';
</style>
