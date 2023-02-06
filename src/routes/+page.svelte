<script>
	import ButtonGroup from '../components/ButtonGroup.svelte';
	import NavBar from '../components/NavBar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Preview from '../components/Preview.svelte';
	import SidebarNavigation from '../components/SidebarNavigation.svelte';
</script>

<div class="flex flex-col h-screen ">
	<div class=" w-full ">
		<NavBar />
	</div>
	<div class="main-container flex">
		<SidebarNavigation />
		<div class="content bg-gray-100 w-[86%] flex max-h-[91vh]">
			<div class="form w-[38%]  overflow-y-auto ">
				<Sidebar />
			</div>
			<div class="preview w-[62%] bg-gray-700 py-6">
				<!-- preview Section -->
				<div class=" grow overflow-y-auto max-h-[79vh] "><Preview /></div>
				<!-- ButtonGroup Section -->
				<div class="self-center mt-2"><ButtonGroup /></div>
			</div>
		</div>
	</div>
</div>
