<script>
	import { faUserNinja, faSignIn, faLink } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	const navButtons = [
		{
			text: 'Home',
		},
		{
			text: 'New',
		},
		{
			text: 'Duplicate',
		},
		{
			text: 'Documents',
		},
	];
</script>

<div class=" h-11 bg-slate-100 flex text-xl text-gray-700 items-center font-medium">
	<Fa icon={faUserNinja} class=" pl-8 pr-1 text-rose-600 " />
	<div class="text-2xl pl-2 ">
		<div>Resume<span class="text-rose-600">Fu</span></div>
	</div>
	<div class="grow" />
	{#each navButtons as { text }}
		<div class="h-full flex items-center">
			<a class=" hover:text-rose-500 h-full px-5 py-2 " href="#">{text}</a>
		</div>
	{/each}

	<div
		class="flex items-center transition bg-rose-500 text-slate-100 hover:bg-rose-600 h-full px-5 cursor-pointer"
	>
		<Fa icon={faSignIn} class="pr-2" />
		<div class="pr-2">Sign in</div>
	</div>
</div>
