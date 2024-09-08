<script lang="ts">
	import { fade, blur } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { X, ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-svelte';

	import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Tile from './Tile.svelte';

	let imageArray1 = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg'];
	let imageArray2 = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg'];
	let imageArray3 = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg'];
	let totalImageArray = [
		imageArray1,
		imageArray2,
		imageArray3,
		imageArray1,
		imageArray2,
		imageArray3
	];

	let activeProjectIndex = 3;
	let translateXValue = 4 * -activeProjectIndex;

	let verticalIndexes = [2, 0, 4, 2, 1, 4];
	let translateYValues = verticalIndexes.map((index) => -index * 17);

	function setActiveProject(index: number, event: MouseEvent) {
		event.stopPropagation();
		activeProjectIndex = index;
		const projectWidth = 4;
		translateXValue = -index * projectWidth;
		console.log(activeProjectIndex);
	}

	function setActiveImage(projectIndex: number, imageIndex: number, event?: MouseEvent) {
		if (event) event.stopPropagation();
		verticalIndexes[projectIndex] = imageIndex;
		const imageHeight = 17;
		translateYValues[projectIndex] = -imageIndex * imageHeight;
	}

	let intro = true;
</script>

{#if intro}
	<div
		transition:blur={{ duration: 1000 }}
		class="transition-opacity absolute w-full h-screen flex justify-center items-center bg-white"
	>
		<button on:click={() => (intro = false)} class="text-black btn"> Enter Site </button>
	</div>
{/if}

<div class="absolute bottom-0 left-0 w-full pointer-events-none z-10">
	<div class="h-40" style="background: linear-gradient(to top, white, transparent);"></div>
	<div class="h-8 bg-white"></div>
</div>

<div class="absolute top-0 left-0 w-full z-20 flex flex-col">
	<div class="flex flex-row justify-between items-center p-4">
		<h1 class="h1 text-black">Jack Sims</h1>
		<div class="flex flex-row gap-4 items-center">
			<a href="mailto:simsjack30@gmail.com" title="simsjack30@gmail.com">
				<button
					class="btn btn-icon hover:scale-125 active:scale-90 hover:-rotate-12 hover:-translate-y-2"
				>
					<FontAwesomeIcon icon={faEnvelope} class="w-8 h-8 text-black" />
				</button>
			</a>
			<a href="https://github.com/simsjack30" target="_blank" title="GitHub">
				<button
					class="btn btn-icon hover:scale-125 active:scale-90 hover:-rotate-6 hover:-translate-y-3"
				>
					<FontAwesomeIcon icon={faGithub} class="w-8 h-8 text-black" />
				</button>
			</a>
			<a href="https://www.linkedin.com/in/1jacksims/" target="_blank" title="LinkedIn">
				<button
					class="btn btn-icon hover:scale-125 active:scale-90 hover:rotate-6 hover:-translate-y-3"
				>
					<FontAwesomeIcon icon={faLinkedin} class="w-8 h-8 text-black" />
				</button>
			</a>
			<a href="https://chimefever.itch.io/" target="_blank" title="itch.io">
				<button
					class="btn btn-icon hover:scale-125 active:scale-90 hover:rotate-12 hover:-translate-y-2"
				>
					<FontAwesomeIcon icon={faItchIo} class="w-8 h-8 text-black" />
				</button>
			</a>
		</div>
	</div>
</div>

<div class="absolute top-0 left-0 w-full pointer-events-none z-10">
	<div class="h-20 bg-white"></div>
	<div class="h-40" style="background: linear-gradient(to bottom, white, transparent);"></div>
</div>

<div class="fixed inset-0 overflow-hidden h-screen w-screen flex flex-col">
	<div
		class="absolute top-1/2 left-1/4 z-40"
		style="transform: translateX({16 + translateXValue + activeProjectIndex * 13}rem);"
	></div>

	<div
		class="relative h-full w-full transition-transform duration-500 delay-200 flex md:scale-0"
		style="transform: translateX({translateXValue}rem);"
	>
		<div class="absolute top-1/2 left-1/4">
			<div class="flex flex-row gap-4 -translate-x-32 -translate-y-32">
				{#each totalImageArray as imageArray, projectIndex}
					<button
						class="{activeProjectIndex === projectIndex
							? 'w-96'
							: 'w-48'} transition-all duration-500 block cursor-default"
						on:click={(event) => setActiveProject(projectIndex, event)}
					>
						<div
							class="flex flex-col transition-transform duration-500 gap-4 delay-200"
							style="transform:translateY({translateYValues[projectIndex]}rem)"
						>
							{#each imageArray as image, imageIndex}
								<button
									on:click={() => setActiveImage(projectIndex, imageIndex)}
									class="h-64 w-48 relative {verticalIndexes[projectIndex] === imageIndex &&
									activeProjectIndex === projectIndex
										? 'active'
										: 'grayscale inactive'} transition-all duration-500"
								>
									<img class="w-full h-full object-cover rounded-lg" src={image} alt="Project" />
									{#if verticalIndexes[projectIndex] === imageIndex && activeProjectIndex === projectIndex}
										<div
											in:fade={{ duration: 300, delay: 100 }}
											out:fade={{ duration: 200 }}
											class="absolute inset-0 flex flex-col justify-center items-center bg-opacity-10 bg-black text-white rounded-lg"
										>
											<Tile />
											{#if activeProjectIndex > 0}
												<svg class="w-16 -rotate-90 left-[-25px] absolute" viewBox="0 0 50 12.5">
													<path
														d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0"
														fill="#ffffff"
													/>
												</svg>
												<button
													on:click={(event) => setActiveProject(activeProjectIndex - 1, event)}
													class="z-10 rounded-full p-1 absolute -left-5 m-2 transition-transform hover:scale-150 hover:-translate-x-1"
												>
													<ChevronLeft size="20" color="black" />
												</button>
											{/if}
											{#if activeProjectIndex < totalImageArray.length - 1}
												<svg class="w-16 rotate-90 right-[-25px] absolute" viewBox="0 0 50 12.5">
													<path
														d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0"
														fill="#ffffff"
													/>
												</svg>
												<button
													on:click={(event) => setActiveProject(activeProjectIndex + 1, event)}
													class="z-10 rounded-full p-1 absolute -right-5 m-2 transition-transform hover:scale-150 hover:translate-x-1"
												>
													<ChevronRight size="20" color="black" />
												</button>
											{/if}
											{#if verticalIndexes[projectIndex] < imageArray.length - 1}
												<svg
													class="w-16 rotate-180 bottom-0 absolute left-[70px]"
													viewBox="0 0 50 12.5"
												>
													<path
														d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0"
														fill="#ffffff"
													/>
												</svg>
												<button
													on:click={(event) =>
														setActiveImage(projectIndex, verticalIndexes[projectIndex] + 1, event)}
													class="z-10 rounded-full p-1 absolute -bottom-5 left-20 m-2 transition-transform hover:scale-150 hover:translate-y-1"
												>
													<ChevronDown size="20" color="black" />
												</button>
											{/if}
											{#if verticalIndexes[projectIndex] > 0}
												<svg class="w-16 top-0 absolute left-[70px]" viewBox="0 0 50 12.5">
													<path
														d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0"
														fill="#ffffff"
													/>
												</svg>
												<button
													on:click={(event) =>
														setActiveImage(projectIndex, verticalIndexes[projectIndex] - 1, event)}
													class="z-10 rounded-full p-1 absolute -top-5 left-20 m-2 transition-transform hover:scale-150 hover:-translate-y-1"
												>
													<ChevronUp size="20" color="black" />
												</button>
											{/if}
										</div>
									{/if}
								</button>
							{/each}
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.active {
		@apply w-96 cursor-default;
	}
	.inactive {
		@apply hover:scale-95 hover:grayscale-0;
	}
</style>
