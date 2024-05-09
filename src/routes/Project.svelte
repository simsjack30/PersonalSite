<script>
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';
	import { cubicIn } from 'svelte/easing';

	export let img;
	export let title;
	export let description;
	export let link;

	let grayscale = tweened(100, { duration: 1200, easing: quintOut });
	let opacity = tweened(0.5, { duration: 1200, easing: quintOut });
	let size = tweened(1, { duration: 100, easing: cubicIn });

	function handleMouseEnter() {
		grayscale.set(0);
		opacity.set(1);
		size.set(1.05);
	}

	function handleMouseLeave() {
		grayscale.set(100);
		opacity.set(0.5);
		size.set(1);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<a
	class="card variant-glass m-2 md:w-96 w-80"
	style="transform: scale({$size});"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	href={link}
	rel="noopener noreferrer"
	target="_blank"
>
	<div class="flex flex-col items-center">
		<img
			class="m-7 md:w-80 md:h-80 w-64 h-64 rounded-3xl object-cover border-solid border-2 border-black"
			style="filter: grayscale({$grayscale}%); opacity: {$opacity}"
			src={img}
			alt=""
		/>
		<h2 class="h2">{title}</h2>
		<h4 class="h5 m-5" style="align-self: flex-start;">{description}</h4>
	</div>
</a>
