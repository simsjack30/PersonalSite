<script lang="ts">
	import { fade, blur } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		X,
		ChevronDown,
		ChevronLeft,
		ChevronRight,
		ChevronUp,
		Globe,
		GithubIcon,
		Eye,
		EyeOff
	} from 'lucide-svelte';

	import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faGlobe, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
	import Tile from './Tile.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let katapult = [
		'katapult5.png',
		'Katapult',
		'client',
		'Katapult is a commercial real estate site currently in production, built by myself and my partner at Sandpiper Studio. The site leverages Directus CMS and a custom block architecture.',
		'https://www.katapultproperties.com/',
		'',
		'Svelte  |  Directus  |  Skeleton UI'
	];

	let glory_farms = [
		'farm2.png',
		'Glory Farms',
		'client',
		'Glory Farms is my first commercial production, designed for a wedding venue. The site will soon undergo an overhaul to enhance functionality and design.',
		'https://www.glory-farms.com/',
		'',
		'Svelte  |  PocketBase  |  Skeleton UI'
	];

	let jack_sims = [
		'jack4.png',
		'jacksims.dev',
		'project',
		'My personal website, now in its second rendition, features a sleek and smooth interface. It showcases my projects in an artistic and visually creative way.',
		'',
		'https://github.com/simsjack30/PersonalSite',
		'Svelte  |  Skeleton UI'
	];

	let ultimate_alphabet = [
		'alphabet2.png',
		'Ultimate Alphabet',
		'game',
		"A web version of Mike Wilks' book Ultimate Alphabet, where players compete on a global leaderboard to find as many items as possible in the images.",
		'https://ultimate-alphabet.vercel.app/',
		'https://github.com/simsjack30/UltimateAlphabet',
		'Svelte  |  PocketBase  |  shadcn-svelte'
	];

	let chemical_bonds = [
		'bonds.png',
		'chemical bonds',
		'game',
		'An educational Pico-8 game about chemistry, designed to teach the periodic table in a fun and interactive way.',
		'https://chimefever.itch.io/chemical-bonds',
		'https://github.com/simsjack30/ChemicalBonds',
		'Lua  |  Pico-8'
	];

	let wyr = [
		'wyr3.png',
		'WYR',
		'game',
		'My first game jam submission, created with a partner for Mini Jam 98. This roguelike shooter focuses on choosing between two options at the end of each level and ranked 2nd in enjoyment and 5th overall.',
		'https://seltzerfish.itch.io/wyr',
		'',
		'Godot  |  GDScript  |  Aseprite'
	];

	let shotgolf = [
		'golf3.png',
		'Shotgolf',
		'game',
		"Created for Mini Jam 117, Shotgolf won #1 for best concept. It's a fun twist on golf where you play as a shotgun.",
		'https://seltzerfish.itch.io/shotgolf',
		'',
		'Defold  |  Aseprite'
	];

	let punchline_crunchtime = [
		'joke2.png',
		'Punchline Crunchtime',
		'game',
		'Made with Godot and submitted to Ludum Dare 53, this game challenges players to navigate increasingly difficult levels as a comedian, all while telling jokes.',
		'https://chimefever.itch.io/punchline-crunchtime',
		'',
		'Godot  |  GDScript  | Procreate'
	];

	let boring_mazes = [
		'maze2.png',
		'Boring Mazes',
		'game',
		"Submitted to Trijam 200 with the theme 'Expect the unexpected,' this game won #1 for closest adherence to the theme and offers anything but boring mazes.",
		'https://chimefever.itch.io/very-boring-mazes',
		'',
		'Lua  |  Pico-8'
	];

	let sandy_booty = [
		'booty.png',
		'Sandy Booty',
		'game',
		'A Score Jam 18 submission that swept 1st place in all categories, including sound, aesthetic, and overall. I composed the original soundtrack.',
		'https://seltzerfish.itch.io/sandy-booty',
		'',
		'Logic Pro X  |  OP-1  |  Nord Stage 3'
	];

	let d3_portfolio = [
		'd3.png',
		'D3 Portfolio',
		'project',
		'I built this site to learn more about D3.js and to demonstrate my expertise in visual storytelling. The site features three advanced visualizations, built using the Mapbox, US Census, and Marketstack APIs.',
		'https://data-portfolio-two.vercel.app/',
		'https://github.com/simsjack30/D3_Portfolio',
		'Svelte  |  D3  |  LayerChart  |  Svelte UX'
	];

	let brush_up = [
		'art2.png',
		'Brush Up',
		'game',
		'An educational game that uses the Chicago Art Institute public API to quiz players on art history trivia.',
		'https://webhome.auburn.edu/~jos0007/project5/quiz.html',
		'https://github.com/simsjack30/BrushUp',
		'PHP  |  MySQL'
	];

	let ocean_breeze = [
		'beach.png',
		'Ocean Breeze',
		'client',
		'A commercial website built by myself and my partner at Sandpiper Studio for a Maryland beach rental property.',
		'https://oceanbreezemd.com/',
		'',
		'Svelte  |  Directus  |  Skeleton UI'
	];

	let imageArray1 = [boring_mazes, shotgolf, glory_farms];
	let imageArray2 = [wyr, ultimate_alphabet, d3_portfolio, ocean_breeze];
	let imageArray3 = [chemical_bonds, katapult, sandy_booty];
	let imageArray4 = [jack_sims, brush_up, punchline_crunchtime];

	let totalImageArray = [imageArray1, imageArray2, imageArray3, imageArray4];

	let activeProjectIndex = 1;
	let translateXValue = 4 * -activeProjectIndex;

	let verticalIndexes = [2, 2, 1, 0];
	let translateYValues = verticalIndexes.map((index) => -index * 17);

	let lastProjectIndex = activeProjectIndex;
	let lastVerticalIndexes = [...verticalIndexes];

	function setActiveProject(index: number, event?: MouseEvent) {
		lastProjectIndex = activeProjectIndex;
		if (event) event.stopPropagation();
		activeProjectIndex = index;
		const projectWidth = 4;
		translateXValue = -index * projectWidth;
	}

	function setActiveImage(projectIndex: number, imageIndex: number, event?: MouseEvent) {
		lastVerticalIndexes[projectIndex] = verticalIndexes[projectIndex]; // Save the previous vertical index for this project

		if (event) event.stopPropagation();
		verticalIndexes[projectIndex] = imageIndex;
		const imageHeight = 17;
		translateYValues[projectIndex] = -imageIndex * imageHeight;
	}

	let loading = true;

	// setTimeout(() => {
	// 	loading = false;
	// }, 3000);

	let modal = false;

	function hideModal() {
		modal = false;
		eye = false;
	}

	function showModal() {
		modal = !modal;
		if (!modal) {
			eye = false;
		}
	}

	$: if (modal && lastProjectIndex !== activeProjectIndex) {
		hideModal();
		lastProjectIndex = activeProjectIndex;
	}

	$: if (!modal && lastProjectIndex !== activeProjectIndex) {
		lastProjectIndex = activeProjectIndex;
	}

	$: if (modal && lastVerticalIndexes[activeProjectIndex] !== verticalIndexes[activeProjectIndex]) {
		hideModal();
		lastVerticalIndexes[activeProjectIndex] = verticalIndexes[activeProjectIndex];
	}

	$: if (
		!modal &&
		lastVerticalIndexes[activeProjectIndex] !== verticalIndexes[activeProjectIndex]
	) {
		lastVerticalIndexes[activeProjectIndex] = verticalIndexes[activeProjectIndex];
	}

	let eye = false;
</script>

<!-- {#if loading}
	<div
		transition:blur={{ duration: 1000 }}
		class="absolute w-full h-screen flex flex-col gap-4 justify-center items-center bg-white z-50"
	>
		<h1 class="text-black h1">jacksims.dev</h1>
		<ProgressRadial meter="stroke-black" track="stroke-white" width="w-14" stroke={100} />
	</div>
{/if} -->

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
			<div class="flex flex-row gap-4 -translate-x-32 -translate-y-32 items-start">
				{#each totalImageArray as imageArray, projectIndex}
					<button
						class="{activeProjectIndex === projectIndex
							? 'w-96'
							: 'w-48'} transition-all duration-500 block cursor-default"
						on:click={(event) => {
							setActiveProject(projectIndex, event);
						}}
					>
						<div
							class="flex flex-col transition-transform duration-500 gap-4 delay-200"
							style="transform:translateY({translateYValues[projectIndex]}rem)"
						>
							{#each imageArray as image, imageIndex}
								<button
									on:click={() => {
										setActiveImage(projectIndex, imageIndex);
									}}
									class="h-64 w-48 relative {verticalIndexes[projectIndex] === imageIndex &&
									activeProjectIndex === projectIndex
										? 'active'
										: 'grayscale inactive'} transition-all duration-500 {modal &&
									verticalIndexes[projectIndex] === imageIndex &&
									activeProjectIndex === projectIndex
										? 'modalClass'
										: 'h-64'}"
								>
									<img class="w-full h-full object-cover rounded-lg" src={image[0]} alt="Project" />
									<!-- <div class="w-full h-full rounded-lg bg-black">
										<div class="absolute bottom-0 right-0 text-white h3 text-right m-2">
											{image[1]}
										</div>
									</div> -->
									{#if verticalIndexes[projectIndex] === imageIndex && activeProjectIndex === projectIndex}
										<div
											in:fade={{ duration: 400, delay: 200 }}
											out:fade={{ duration: 100 }}
											class="absolute inset-0 flex flex-col justify-center items-center text-white rounded-lg"
										>
											<div
												class="bg-black w-full h-full inset-0 bg-opacity-30 transition-opacity absolute rounded-lg {eye
													? 'opacity-0'
													: 'opacity-80'}"
											></div>
											<!-- <Tile /> -->

											{#if modal}
												<div
													in:fade={{ duration: 300 }}
													out:fade={{ duration: 200 }}
													class="{eye
														? 'opacity-0'
														: 'opacity-80'} absolute w-full h-full top-0 pointer-events-none rounded-lg bg-gradient-to-b from-black to-transparent transition-opacity duration-500"
												></div>
												<div class="z-50" in:fade={{ duration: 300 }} out:fade={{ duration: 200 }}>
													<div
														class="absolute bottom-full right-0 max-w-44 pb-2 rounded-lg text-black"
													>
														<div class="flex flex-col items-end text-right break-words">
															<span class="h3">
																{image[1]}
															</span>
														</div>
													</div>

													{#if !eye}
														<div
															transition:fade={{ duration: 300 }}
															class="text-white z-50 pointer-events-none"
														>
															<h4 class="absolute top-0 left-0 h5 text-start m-6">
																{image[3]}
															</h4>
														</div>
													{/if}
													<div class="flex flex-row absolute bottom-0 right-0 m-3 gap-3">
														{#if !eye && image[4]}
															<button transition:fade={{ duration: 300 }}>
																<a href={image[4]} target="_blank">
																	<Globe
																		class="w-10 h-10 text-black bg-white p-2 rounded-full hover:scale-110 transition-transform active:scale-75"
																	/>
																</a>
															</button>
														{/if}
														{#if !eye && image[5]}
															<button transition:fade={{ duration: 300 }}>
																<a href={image[5]} target="_blank">
																	<GithubIcon
																		class="w-10 h-10 text-black bg-white p-2 rounded-full hover:scale-110 transition-transform active:scale-75"
																	/>
																</a>
															</button>
														{/if}

														<button
															on:click={() => {
																eye = !eye;
															}}
														>
															{#if eye}
																<EyeOff
																	class=" w-10 h-10 text-black bg-white p-2 rounded-full hover:scale-110 transition-transform active:scale-75"
																/>
															{:else}
																<Eye
																	class=" w-10 h-10 text-black bg-white p-2 rounded-full hover:scale-110 transition-transform active:scale-75"
																/>
															{/if}
														</button>
														<button on:click={showModal}>
															<ChevronUp
																class="w-10 h-10 text-black bg-white p-2 rounded-full hover:scale-110 transition-transform active:scale-75"
															/>
														</button>
													</div>
												</div>
											{:else}
												<div
													in:fade={{ duration: 300, delay: 100 }}
													out:fade={{ duration: 200 }}
													class="opacity-80 absolute w-full h-full pointer-events-none rounded-lg bg-gradient-to-t from-black to-transparent transition-opacity duration-500"
												></div>
												<div
													in:fade={{ duration: 300, delay: 100 }}
													out:fade={{ duration: 200 }}
													class="z-50 absolute mt-16"
												>
													<div class="rounded-lg text-white h3 m-1">
														{image[1]}
													</div>
													<div class="h5 whitespace-pre-wrap">{image[6]}</div>
													<button
														on:click={showModal}
														class="rounded-full bg-white p-2 mt-6 hover:scale-110 transition-transform active:scale-75"
													>
														<ChevronDown size="25" color="black" />
													</button>
												</div>
											{/if}

											{#if activeProjectIndex > 0}
												<svg class="w-16 -rotate-90 left-[-25px] absolute" viewBox="0 0 50 12.5">
													<path
														d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0"
														fill="#ffffff"
													/>
												</svg>
												<button
													on:click={(event) => {
														setActiveProject(activeProjectIndex - 1, event);
													}}
													class="z-10 rounded-full p-1 absolute -left-5 m-2 transition-transform hover:scale-150 hover:-translate-x-1 active:scale-90"
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
													on:click={(event) => {
														setActiveProject(activeProjectIndex + 1, event);
													}}
													class="z-10 rounded-full p-1 absolute -right-5 m-2 transition-transform hover:scale-150 hover:translate-x-1 active:scale-90"
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
													on:click={(event) => {
														setActiveImage(projectIndex, verticalIndexes[projectIndex] + 1, event);
													}}
													class="z-10 rounded-full p-1 absolute -bottom-5 left-20 m-2 transition-transform hover:scale-150 hover:translate-y-1 active:scale-90"
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
													on:click={(event) => {
														setActiveImage(projectIndex, verticalIndexes[projectIndex] - 1, event);
													}}
													class="z-10 rounded-full p-1 absolute -top-5 left-20 m-2 transition-transform hover:scale-150 hover:-translate-y-1 active:scale-90"
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

<!-- {#if modal}
	<div
		class="absolute bg-black opacity-40 z-40 w-full h-screen flex justify-center items-center"
	></div>
	<div>

	</div>
	<div class="absolute flex h-1/3 w-1/3 justify-center items-center bg-white z-50">CONTENT</div>
{/if} -->

<style>
	.active {
		@apply w-96 cursor-default;
	}
	.inactive {
		@apply hover:scale-95 hover:grayscale-0;
	}
	.modalClass {
		@apply h-96;
	}
</style>
