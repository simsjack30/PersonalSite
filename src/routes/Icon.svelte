<script>
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';

	export let img;
	export let title;

	let grayscale = tweened(100, { duration: 1200, easing: quintOut });
	let opacity = tweened(0.5, { duration: 1200, easing: quintOut });

	function handleMouseEnter() {
		grayscale.set(0);
		opacity.set(1);
	}

	function handleMouseLeave() {
		grayscale.set(100);
		opacity.set(0.5);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex justify-center items-center card variant-glass m-2 w-20 aspect-square"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	{title}
>
	<img class="p-4" style="filter: grayscale({$grayscale}%); opacity: {$opacity}" src={img} alt="" />
</div>
