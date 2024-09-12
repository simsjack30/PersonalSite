<script lang="ts">
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import Tile from './Tile.svelte';
	import { fade } from 'svelte/transition';

	export let data;

	// Values in rem
	let gap = 1;
	let width = 6;
	let activeWidth = 16;
	let height = 10;
	let modalHeight = 16;

	// These will end up controlling the scroll amount (These will trigger full tile scroll)
	let heightTotal = height + gap;
	let widthTotal = width + gap;

	// This initializes which tile is selected within each column
	let verticalIndexes = [0, 1, 2, 0];
	let yOffsets = verticalIndexes.map((index) => -index * heightTotal);

	// This initializes which column is selected
	let horizontalIndex = 0;
	// let xOffset = -horizontalIndex * widthTotal;

	function updateProject(colIndex: number, tileIndex: number) {
		hideModal();
		verticalIndexes[colIndex] = tileIndex;
		horizontalIndex = colIndex;

		yOffsets[colIndex] = -tileIndex * heightTotal;

		const scrollXPosition = colIndex * (widthTotal * 16);
		window.scrollTo({ left: scrollXPosition, behavior: 'smooth' });
	}

	let modal = false;

	function showModal() {
		modal = true;
	}

	function hideModal() {
		modal = false;
	}
</script>

<div class="p-20">
	<div class="flex flex-row" style="width: 300vw; gap: {gap}rem">
		{#each data.tiles as tileCol, colIndex}
			<div
				class="flex flex-col duration-300"
				style="transform: translateY({yOffsets[colIndex]}rem); gap: {gap}rem;"
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
						class="duration-300 relative"
						on:click={() => updateProject(colIndex, tileIndex)}
					>
						<img src={tile[0]} alt="" class="rounded-lg w-full h-full object-cover" />
						{#if !modal && colIndex === horizontalIndex && tileIndex === verticalIndexes[colIndex]}
							<div in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 100 }}>
								<Tile project={tile[1]} tools={tile[6]} />
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<div
									class="absolute bottom-14 flex justify-center w-full h-0"
									on:click|stopPropagation={showModal}
								>
									<ChevronDown
										class="w-10 h-10 bg-white p-2 rounded-full hover:scale-110 transition-transform active:scale-75"
									/>
								</div>
							</div>
						{/if}
					</button>
				{/each}
			</div>
		{/each}
	</div>
</div>
