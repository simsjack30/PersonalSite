<script lang="ts">
	import { X } from 'lucide-svelte';

	let modal = false;
	function showModal() {
		modal = true;
	}
</script>

<div class="flex justify-center items-center relative">
	<button on:click={showModal} class="btn variant-filled-error">test</button>
</div>

{#if modal}
	<div class="absolute bg-black opacity-35">content</div>
{/if}
