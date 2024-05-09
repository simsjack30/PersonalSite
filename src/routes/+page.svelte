<script lang="ts">
	let showButton = true;
	let showButtonUp = false;
	let opacity = 1;

	import CustomButton from './CustomButton.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import Project from './Project.svelte';
	import Text from './Text.svelte';

	onMount(() => {
		updateVisibility();
	});

	function handleScroll(targetId: string) {
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function updateVisibility() {
		if (window.scrollY === 0) {
			showButton = true;
			showButtonUp = false;
		} else {
			showButton = false;
			showButtonUp = true;
		}

		const windowHeight = window.innerHeight / 2;
		const scrollY = window.scrollY;
		opacity = 1 - scrollY / windowHeight;
	}
</script>

<svelte:window on:scroll={updateVisibility} on:resize={updateVisibility} />

<div id="fadingDiv" style="opacity: {opacity};" class="flex items-center justify-center h-screen">
	<div class="flex flex-row justify-center">
		<div class="flex flex-col items-end m-10">
			<CustomButton on:click={() => handleScroll('about')} scrollLocation="About" />
			<CustomButton on:click={() => handleScroll('skills')} scrollLocation="Skills" />
			<CustomButton on:click={() => handleScroll('projects')} scrollLocation="Projects" />
			<CustomButton on:click={() => handleScroll('contact')} scrollLocation="Contact" />
		</div>
		<div class="flex flex-col justify-center m-10">
			<div class="mb-10">
				<h2 class="h2 md:h1 inline">Hello, I'm&nbsp</h2>
				<h1 class="h2 md:h1 inline">
					<span
						class="bg-gradient-to-br from-blue-500 to-emerald-500 bg-clip-text text-transparent box-decoration-clone"
					>
						Jack Sims</span
					>
				</h1>
			</div>
			<h2 class="h3 md:h2">I'm a creative full-stack</h2>
			<h2 class="h3 md:h2">software developer</h2>
		</div>
	</div>
</div>

<div class="">
	<Text
		id="about"
		title="About me"
		description="I'm a new developer with a passion for creating fun and interactive experiences. I graduated with honors from Auburn University, 
		with a degree in Software Engineering. I'm using my skills to pursue my interests in web development, game
		development, and UI/UX design. I've explored a variety of tools and have developed several projects, some of which are showcased below."
	/>
</div>

<Text
	id="skills"
	title="Skills"
	description="I have primarily worked in web and game development, but every project has allowed me to explore new and interesting tools. I'm constantly
	learning and expanding my skill set. These are just some of the tools I've become proficient with:"
/>
<!-- Space tailwind class -->
<!-- Add some md: -->
<div class="flex flex-row justify-center flex-wrap w-5/6 md:w-1/2 mx-auto">
	<Icon img="icons/svelte-icon.webp" title="Svelte" />
	<Icon img="icons/godot.webp" title="Godot" />
	<Icon img="icons/blender.png" title="Blender" />
	<Icon img="icons/aseprite.png" title="Aseprite" />
	<Icon img="icons/Java-logo.png" title="Java" />
	<Icon img="icons/JavaScript-logo.png" title="Javascript" />
	<Icon img="icons/Lua-Logo.svg.png" title="Lua" />
	<Icon img="icons/python.png" title="Python" />
	<Icon img="icons/pico-8.png" title="Pico-8" />
	<Icon img="icons/Xcode_14_icon.png" title="Xcode" />
	<Icon img="icons/vercel-icon.png" title="Vercel" />
	<Icon img="icons/Notion_app_logo.png" title="Notion" />
</div>

<Text id="projects" title="Projects" description="" />

<div id="projects" class="flex flex-row justify-center flex-wrap md:w-3/4 mx-auto">
	<Project
		img="pico.png"
		title="Elemental Bonds"
		description="An educational game for learning the periodic table, built with
		Lua for the Pico-8 fantasy console"
		link="https://chimefever.itch.io/chemical-bonds"
	/>
	<Project
		img="glory.png"
		title="Glory Farms"
		description="A wedding venue site currently in production, built with Svelte and Skeleton UI"
		link="https://www.glory-farms.com/"
	/>
	<Project
		img="brushup.png"
		title="Brush Up"
		description="An educational game for learning art history using the Chicago Art Institute's public API"
		link="https://webhome.auburn.edu/~jos0007/project5/home.html"
	/>
	<Project
		img="this_site.png"
		title="This Site"
		description="My personal portfolio site and an attempt at humor, built with Svelte and Skeleton UI"
		link="https://jacksims.dev/"
	/>
</div>

{#if showButton}
	<div transition:fade class="scroll-button fixed bottom-0 left-0 w-full flex justify-center mb-20">
		<button
			on:click={() => handleScroll('about')}
			class="btn-icon btn-icon-lg variant-ringed ring-[1.5px]"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40px"
				viewBox="0 -1000 960 960"
				width="40px"
				fill="#e8eaed"
				><path
					d="M480-357.67q-6.67 0-12.33-2.16-5.67-2.17-11-7.5L263.33-560.67q-9.66-9.66-9.33-23.66.33-14 10-23.67 9.67-9.67 23.67-9.67 14 0 23.66 9.67L480-438.67 649.33-608q9.67-9.67 23.34-9.33 13.66.33 23.33 10 9.67 9.66 9.67 23.66T696-560L503.33-367.33q-5.33 5.33-11 7.5-5.66 2.16-12.33 2.16Z"
				/>
			</svg>
		</button>
	</div>
{/if}

{#if showButtonUp}
	<div transition:fade class="scroll-button fixed bottom-0 left-0 w-full m-20 md:block hidden">
		<button
			on:click={() => handleScroll('fadingDiv')}
			class="btn-icon btn-icon-lg variant-ringed ring-[1.5px]"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="40px"
				viewBox="0 -1000 960 960"
				width="40px"
				fill="#e8eaed"
				style="transform: rotate(180deg);"
				><path
					d="M480-357.67q-6.67 0-12.33-2.16-5.67-2.17-11-7.5L263.33-560.67q-9.66-9.66-9.33-23.66.33-14 10-23.67 9.67-9.67 23.67-9.67 14 0 23.66 9.67L480-438.67 649.33-608q9.67-9.67 23.34-9.33 13.66.33 23.33 10 9.67 9.66 9.67 23.66T696-560L503.33-367.33q-5.33 5.33-11 7.5-5.66 2.16-12.33 2.16Z"
				/>
			</svg>
		</button>
	</div>
{/if}

<div id="contact">
	<div class="flex flex-col md:flex-row justify-center items-center mt-28 mb-10">
		<a class="mt-3 mr-4 btn variant-soft md:btn-xl btn-lg" href="mailto:simsjack30@gmail.com"
			>simsjack30@gmail.com</a
		>
		<div class="mt-3 flex flex-row">
			<a
				href="https://chimefever.itch.io"
				class="m-3 btn-icon md:btn-icon-xl btn-icon-lg variant-soft"
			>
				<img
					style="filter: brightness(0) invert(1); scale:calc(0.5);"
					src="icons/itch.png"
					alt=""
				/></a
			>
			<a
				href="https://github.com/simsjack30"
				class="m-3 btn-icon md:btn-icon-xl btn-icon-lg variant-soft"
			>
				<img
					style="filter: brightness(0) invert(1); scale:calc(0.5);"
					src="icons/hub.png"
					alt=""
				/></a
			>
		</div>
	</div>
</div>

<style>
	#fadingDiv {
		transition: opacity 0.1s ease-out;
	}
</style>
