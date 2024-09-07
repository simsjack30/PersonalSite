<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ChevronRight, ChevronLeft } from 'lucide-svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let activeIndex = 0;
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const itemWidth = 8; // Width of each item in rem
	const gap = 2; // Gap between items in rem
	const containerWidth = 32; // Approximate visible area in rem

	// Calculate translateX to center the active item
	function getTranslateX(index: number) {
		const totalItemWidth = itemWidth + gap;
		const offset = (containerWidth - itemWidth) / 2;
		return -(index * totalItemWidth - offset); // Adjust to center
	}

	function nextRight() {
		if (activeIndex < items.length - 1) {
			activeIndex += 1;
		}
	}

	function nextLeft() {
		if (activeIndex > 0) {
			activeIndex -= 1;
		}
	}

	function setActive(index: number) {
		activeIndex = index;
	}
</script>

<div class="fixed w-full p-4 flex flex-col gap-4">
	<h1 class="h1 text-black">Jack Sims</h1>
	<h3 class="h3 text-black">Software Developer</h3>
</div>
<div class="flex flex-col h-screen justify-center gap-8">
	<div
		class="flex flex-row h-96 gap-8 justify-center items-center transition-transform duration-500"
		style="transform: translateX({getTranslateX(activeIndex)}rem)"
	>
		{#each items as item, index}
			<button
				style="transition-duration: 0.5s; transition-property: width height relative"
				class="relative h-64 w-32 cursor-pointer grayscale {activeIndex === index
					? 'active'
					: ''} flex-shrink-0"
				on:click={() => setActive(index)}
			>
				<img
					class="object-cover rounded-lg w-full h-full"
					src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fHww"
					alt=""
				/>

				{#if activeIndex === index}
					<div
						in:fade={{ duration: 300, delay: 100 }}
						out:fade={{ duration: 200 }}
						class="absolute inset-0 flex flex-col justify-center items-center bg-opacity-10 bg-black text-white rounded-lg"
					>
						<h2 class="text-lg font-bold bg-black rounded-full p-3">Project {item}</h2>
						<div class="mt-4">
							<button class="btn variant-filled-secondary">more</button>
							<button class="btn variant-filled-primary">See More</button>
						</div>
					</div>
				{/if}
			</button>
		{/each}
	</div>

	<div class="flex flex-row gap-8 justify-center">
		<button
			on:click={nextLeft}
			class="rounded-full w-16 h-16 flex items-center justify-center hover:scale-125 transition-transform"
			><ChevronLeft color="black" size="30" /></button
		>

		<button
			on:click={nextRight}
			class="rounded-full w-16 h-16 flex items-center justify-center hover:scale-125 transition-transform"
			><ChevronRight color="black" size="30" /></button
		>
	</div>
</div>

<style>
	.active {
		@apply w-96 h-96 grayscale-0; /* Tailwind classes */
	}

	/* Optional: You can add some more hover effects for non-active items */
	button:not(.active):hover {
		@apply opacity-75;
	}
</style>
