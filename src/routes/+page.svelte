<script>
	export const prerender = true;
	export const ssr = true;
	import ButtonGroup from '../components/ButtonGroup.svelte';
	import NavBar from '../components/NavBar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Preview from '../components/Preview.svelte';
  
</script>

<div class="flex flex-col h-screen overflow-hidden" >
	<div class=" w-full">
		<NavBar />
	</div>
	<div class="flex bg-blue-50 max-h-full">
		<!-- Left Side Bar Section -->
		<div class="p-2  w-2/5 border-2  border-blue-400 overflow-y-auto">
			<Sidebar />
		</div>
		<!-- Right section -->
		<div class="flex flex-col border-red-200 border-2">
      <!-- preview Section -->
			<div class=" grow overflow-y-auto max-h-[85%] border-2 border-green-800"><Preview /></div>
      <!-- ButtonGroup Section -->
			<div class="self-center mt-2"><ButtonGroup /></div>
		</div>
	</div>
</div>
