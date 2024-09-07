<script>
	import Tile from './Tile.svelte';
	import { RangeSlider } from '@skeletonlabs/skeleton';

	let rotation = 50;
</script>

<div class="fixed">
	<h1 class="h1 text-black p-4">Jack Sims</h1>
	<RangeSlider
		name="myRangeSlider"
		min={0}
		max={100}
		step={1}
		ticked={false}
		bind:value={rotation}
	/>
	<h1 class="h1">{rotation}</h1>
</div>

<div
	draggable="false"
	class="flex flex-row gap-8 items-center overflow-x-auto md:overflow-hidden h-screen"
>
	<img
		draggable="false"
		class="select-none h-96 w-64 hover:-translate-y-8 hover:translate-x-2 transition-transform rounded-md object-cover"
		style="transform: rotate({rotation}deg);"
		src="https://picsum.photos/700/700"
		alt=""
	/>
	{#each Array(12) as _, index}
		<Tile />
	{/each}
</div>
