<script lang="ts">
	let intro = true;
	import { blur } from 'svelte/transition';
</script>

<button class="absolute top-0 left-0 variant-filled-error btn" on:click={() => (intro = true)}>
	undo
</button>
{#if intro}
	<div
		transition:blur={{ duration: 1000 }}
		class="transition-opacity absolute w-full h-screen flex justify-center items-center bg-white"
	>
		<button on:click={() => (intro = false)} class="text-black btn"> Enter Site </button>
	</div>
{/if}

<div class="w-full h-screen bg-black z-10">content</div>
