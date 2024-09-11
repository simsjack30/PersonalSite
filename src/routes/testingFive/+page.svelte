<script lang="ts">
	export let data: any;

	let activeProjectIndex = 0; // Tracks the active project for horizontal scrolling
	let translateXValue = 0; // X-axis transformation for horizontal scrolling

	let verticalIndexes = Array(data.totalImageArray.length).fill(0); // Tracks the active image index for each column
	let translateYValues = verticalIndexes.map((index) => -index * 17); // Y-axis transforms for each column

	let gridContainer: HTMLElement; // Reference to the grid container

	// References to each column
	let columnRefs: Array<HTMLElement | null> = [];

	// Handles updating position using Svelte bindings and refs
	function setActiveProjectAndImage(projectIndex: number, imageIndex: number) {
		activeProjectIndex = projectIndex;
		translateXValue = -projectIndex * 13;

		verticalIndexes[projectIndex] = imageIndex;
		// the 18 is 17 + 1 for the margin
		translateYValues[projectIndex] = -imageIndex * 18;

		// Apply transforms dynamically using refs
		updateTransforms();
	}

	function updateTransforms() {
		if (gridContainer) {
			gridContainer.style.transform = `translateX(${translateXValue}rem)`; // Update X transform for grid

			columnRefs.forEach((col, index) => {
				if (col) {
					col.style.transform = `translateY(${translateYValues[index]}rem)`; // Update Y transform for each column
				}
			});
		}
	}
</script>

<!-- Main Container for the Grid -->
<div class="p-20 relative overflow-hidden">
	<div bind:this={gridContainer} class="w-screen h-screen duration-500 transition-transform">
		<div class="">
			{#each data.totalImageArray as imageArray, projectIndex}
				<!-- Each Column -->
				<!-- The 14 is 13 + 1 for margin -->
				<div
					bind:this={columnRefs[projectIndex]}
					class="absolute top-0 w-96 transition-transform duration-500 delay-200"
					style="left: calc({projectIndex} * 14rem);"
				>
					{#each imageArray as image, imageIndex}
						<!-- Each Tile -->
						<button
							class="{projectIndex == activeProjectIndex &&
							imageIndex == verticalIndexes[projectIndex]
								? 'active'
								: 'w-[13rem]'} h-[17rem] mb-4 relative"
							on:click={() => setActiveProjectAndImage(projectIndex, imageIndex)}
						>
							<img src={image[0]} alt={image[1]} class="w-full h-full object-cover rounded-lg" />
						</button>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.active {
		@apply w-[25rem];
	}
</style>
