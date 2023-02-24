<script>
	import { faUserNinja, faSignIn, faLink, faHome } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	let src = './logo.svg';
	const navButtons = [
		{
			text: 'Resume Detials',
		},
    
		{
			text: 'Theme & Layout',
		},
	];
</script>

<div class=" h-16 bg-white shadow px-6 flex text-base text-gray-700 items-center font-medium">
	<!-- <Fa icon={faUserNinja} class=" pl-8 pr-1 text-rose-600 " />
	<div class="text-2xl pl-2 ">
		<div>Resume<span class="text-rose-600">Fu</span></div>
	</div> -->
	<div class="logo flex items-center gap-2 border-r border-gray-500 border-solid pr-6">
		<!-- <img {src} alt="Logo" /> -->
		<a href="/myresumes">
			<Fa icon={faHome} class="pr-2" />
		</a>
		<div>Hitesh Kumawat</div>
	</div>

	{#each navButtons as { text }}
		<div class="h-full flex items-center">
			<a class=" hover:text-blue-700 px-5 py-2 h-full flex items-center" href="#">{text}</a>
		</div>
	{/each}
	<div class="grow" />
	<div
		class="flex items-center transition bg-blue-700 text-slate-100 hover:bg-blue-600 h-full px-5 cursor-pointer"
	>
		<Fa icon={faSignIn} class="pr-2" />
		<div class="pr-2">Sign in</div>
	</div>
</div>
