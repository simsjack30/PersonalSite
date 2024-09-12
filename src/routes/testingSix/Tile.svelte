<script lang="ts">
	export let project;
	export let tools;
</script>

<div class="cursor-default absolute top-0 flex flex-col justify-center items-center w-full h-full">
	<div class="rounded-lg text-white text-5xl font-medium lg:h2 z-10">
		{project}
	</div>
	<div class="hidden lg:flex h5 text-white whitespace-pre-wrap z-10 m-2">
		{tools}
	</div>
	<div
		class="opacity-80 absolute w-full h-full rounded-lg bg-gradient-to-t from-black to-transparent"
	></div>
</div>
