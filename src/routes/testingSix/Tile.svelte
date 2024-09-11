<script lang="ts">
	export let project;
	export let tools;
</script>

<!-- <div
	class="opacity-80 absolute w-full h-full pointer-events-none rounded-lg bg-gradient-to-t from-black to-transparent transition-opacity duration-500"
></div> -->
<div
	class="pointer-events-none absolute top-0 flex flex-col justify-center items-center w-full h-full"
>
	<div class="rounded-lg text-white h2">
		{project}
	</div>
	<div class="h5 text-white whitespace-pre-wrap">
		{tools}
	</div>
</div>
