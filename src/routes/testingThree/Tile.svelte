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

<div
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
</div>
<!-- <button class="btn variant-filled bg-black">HELLO</button> -->
