<script lang="ts">
	import { fade } from 'svelte/transition';
	import { X, ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-svelte';

	let text = 'hello';
	function changeText() {
		if (text === 'hello') {
			text = 'there';
		} else {
			text = 'hello';
		}
	}
</script>

<!-- <div
	on:pointerenter={changeText}
	on:pointerleave={changeText}
	class="w-16 h-16 bg-black p-4 flex justify-center items-center rounded-full hover:rotate-180 active:scale-90 text-white hover:bg-white hover:text-black transition-all duration-1000 relative"
>
	<h5 class="h5 relative">
		{#if text === 'hello'}
			<span
				class="absolute inset-0 flex justify-center items-center"
				in:fade={{ duration: 300 }}
				out:fade={{ duration: 300 }}>Hello</span
			>
		{:else}
			<span
				class="absolute inset-0 flex justify-center items-center"
				in:fade={{ duration: 300 }}
				out:fade={{ duration: 300 }}>There</span
			>
		{/if}
	</h5>
</div> -->
<!-- <button class="btn variant-filled bg-black">HELLO</button> -->

<button
	class="z-10 rounded-full p-1 absolute -top-5 left-20 m-2 hover:scale-150 hover:-translate-y-1 transition-transform"
>
	<ChevronUp size="20" color="black" />
</button>
<button
	class="z-10 rounded-full p-1 absolute -bottom-5 left-20 m-2 hover:scale-150 hover:translate-y-1 transition-transform"
>
	<ChevronDown size="20" color="black" />
</button>
<button
	class="z-10 rounded-full p-1 absolute -left-5 m-2 hover:scale-150 hover:-translate-x-1 transition-transform"
>
	<ChevronLeft size="20" color="black" />
</button>
<button
	class="z-10 rounded-full p-1 absolute -right-5 m-2 hover:scale-150 hover:translate-x-1 transition-transform"
>
	<ChevronRight size="20" color="black" />
</button>

<svg class="w-16 top-0 absolute left-[70px]" viewBox="0 0 50 12.5">
	<path d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0" fill="#ffffff" />
</svg>
<svg class="w-16 rotate-180 bottom-0 absolute left-[70px]" viewBox="0 0 50 12.5">
	<path d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0" fill="#ffffff" />
</svg>
<svg class="w-16 rotate-90 right-[-25px] absolute" viewBox="0 0 50 12.5">
	<path d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0" fill="#ffffff" />
</svg>
<svg class="w-16 -rotate-90 left-[-25px] absolute" viewBox="0 0 50 12.5">
	<path d="M 0 0 C 4 0 12 0 16 8 C 19 14 31 14 34 8 C 38 0 46 0 50 0" fill="#ffffff" />
</svg>
