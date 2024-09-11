<script lang="ts">
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import Tile from './Tile.svelte';
	import { fade } from 'svelte/transition';
	import { hide } from '@floating-ui/dom';

	export let data;

	// Values in rem
	let gap = 1;
	let width = 12;
	let activeWidth = 24;
	let height = 16;
	let modalHeight = 24;

	// These will end up controlling the scroll amount (These will trigger full tile scroll)
	let heightTotal = height + gap;
	let widthTotal = width + gap;

	// This initializes which tile is selected within each column
	let verticalIndexes = [0, 1, 2, 0];
	let yOffsets = verticalIndexes.map((index) => -index * heightTotal);

	// This initializes which column is selected
	let horizontalIndex = 1;
	let xOffset = -horizontalIndex * widthTotal;

	function updateProject(colIndex: number, tileIndex: number) {
		verticalIndexes[colIndex] = tileIndex;
		horizontalIndex = colIndex;

		xOffset = -colIndex * widthTotal;
		yOffsets[colIndex] = -tileIndex * heightTotal;
	}

	let modal = false;

	function showModal() {
		modal = true;
	}

	function hideModal() {
		modal = false;
	}
</script>

<div class="p-20 overflow-hidden">
	<div
		class="flex flex-row duration-500"
		style="transform: translateX({xOffset}rem); gap: {gap}rem"
	>
		{#each data.tiles as tileCol, colIndex}
			<div
				class="flex flex-col duration-500"
				style="transform: translateY({yOffsets[colIndex]}rem); gap: {gap}rem; width: {colIndex ===
				horizontalIndex
					? activeWidth
					: width}rem;"
			>
				{#each tileCol as tile, tileIndex}
					<button
						style="width: {colIndex === horizontalIndex && tileIndex === verticalIndexes[colIndex]
							? activeWidth
							: width}rem; height: {modal &&
						colIndex === horizontalIndex &&
						tileIndex === verticalIndexes[colIndex]
							? modalHeight
							: height}rem;"
						class="duration-500 relative"
						on:click={() => updateProject(colIndex, tileIndex)}
					>
						<img src={tile[0]} alt="" class="rounded-lg w-full h-full object-cover" />
						{#if !modal && colIndex === horizontalIndex && tileIndex === verticalIndexes[colIndex]}
							<div in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 300 }}>
								<Tile project={tile[1]} tools={tile[6]} />
								<button class="absolute flex justify-center bottom-4 w-full" on:click={showModal}>
									<ChevronDown
										class="w-10 h-10 bg-white p-2 rounded-full hover:scale-110 transition-transform active:scale-75"
									/>
								</button>
							</div>
						{/if}
					</button>
				{/each}
			</div>
		{/each}
	</div>
</div>
