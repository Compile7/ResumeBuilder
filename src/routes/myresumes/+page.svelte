<script>
	import NavBar from '../../components/NavBar.svelte';
	import { faAdd, faEdit, faCopy, faTrashAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<div class="flex flex-col h-screen ">
	<div class=" w-full ">
		<NavBar />
	</div>
	<div class="main-container flex bg-gray-100 w-full h-full">
		<div class="content p-12 w-full ">
			<div class="flex items-center justify-between w-full mb-6">
				<h1 class="text-2xl font-semibold text-gray-900">My Resumes</h1>
				<a
					href="/"
					class="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
				>
					<Fa icon={faAdd} class="text-white " />
					Add New
				</a>
			</div>
			<div class="grid grid-cols-3">
				<div class="grid grid-cols-2 gap-6 items-center">
					<div class="bg-white h-80" />
					<div>
						<div class="text-gray-700 text-lg font-semibold">Hitesh</div>
						<div class="text-gray-400 text-sm mb-8">
							<span>Feb 17, 2023</span>
							<span>2:27:06 PM</span>
						</div>
						<div class="flex flex-col gap-4 mb-8 text-base">
							<div class="flex items-center gap-2">
								<Fa icon={faEdit} class="text-gray-700" />
								<a href="/" class="hover:text-blue-700 hover:transition ">Edit</a>
							</div>
							<div class="flex items-center gap-2">
								<Fa icon={faCopy} class="text-gray-700 " />
								<a href="/" class="hover:text-blue-700 hover:transition ">Duplicate</a>
							</div>
							<div class="flex items-center gap-2">
								<Fa icon={faTrashAlt} class="text-gray-700 " />
								<a href="/" class="hover:text-blue-700 hover:transition ">Delete</a>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<Fa icon={faDownload} class="text-blue-700 " />
							<a href="/" class=" text-blue-700 hover:text-blue-700 hover:transition ">Download</a>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-6 items-center">
					<div class="bg-white h-80" />
					<div>
						<div class="text-gray-700 text-lg font-semibold">Ankit</div>
						<div class="text-gray-400 text-sm mb-8">
							<span>Feb 17, 2023</span>
							<span>2:27:06 PM</span>
						</div>
						<div class="flex flex-col gap-4 mb-8 text-base">
							<div class="flex items-center gap-2">
								<Fa icon={faEdit} class="text-gray-700" />
								<a href="/" class="hover:text-blue-700 hover:transition ">Edit</a>
							</div>
							<div class="flex items-center gap-2">
								<Fa icon={faCopy} class="text-gray-700 " />
								<a href="/" class="hover:text-blue-700 hover:transition ">Duplicate</a>
							</div>
							<div class="flex items-center gap-2">
								<Fa icon={faTrashAlt} class="text-gray-700 " />
								<a href="/" class="hover:text-blue-700 hover:transition ">Delete</a>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<Fa icon={faDownload} class="text-blue-700 " />
							<a href="/" class=" text-blue-700 hover:text-blue-700 hover:transition ">Download</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
