<script>
	import { resume } from '../store';
</script>

<div class="m-6 bg-white rounded-xl border-solid border border-gray-300">
	<h2 class="border-b border-solid  border-gray-300 px-6 py-4 text-xl font-semibold">Experience</h2>
	<div class="flex flex-col p-6  ">
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Name</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Name"
				bind:value={$resume.experience.name}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Email</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Email"
				bind:value={$resume.experience.email}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">phone</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="phone"
				bind:value={$resume.experience.phone}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Website</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Website"
				bind:value={$resume.experience.website}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Location</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Location"
				bind:value={$resume.experience.location}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">from</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="from"
				bind:value={$resume.experience.from}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">to</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="to"
				bind:value={$resume.experience.to}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">summary</label>
			<textarea
				bind:value={$resume.experience.summary}
				class="px-4 rounded-md py-2 my-2"
				rows="5"
				cols="100"
				placeholder="summary"
			/>
		</div>
	</div>
</div>
