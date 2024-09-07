<script lang="ts">
	export let images: string[] = [];
	export let active = false;

	let activeIndex = 1;
	let translateValue = -17;

	function setActive(index: number) {
		activeIndex = index;
		translateValue = -index * 17;
	}
</script>

<div
	class="flex flex-col transition-transform duration-500 delay-200 {active ? '' : 'grayscale'}"
	style="transform:translateY({translateValue}rem)"
>
	<div class="flex flex-col gap-4 items-center">
		{#each images as image, index}
			<button
				on:click={() => setActive(index)}
				class="h-64 w-48 {activeIndex === index && active
					? 'active'
					: ''} transition-transform duration-500"
				style="transition-property: width, height"
			>
				<img class="w-full h-full object-cover rounded-lg" src={image} alt="Project" />
			</button>
		{/each}
	</div>
</div>

<style>
	.active {
		@apply w-96;
	}
</style>
