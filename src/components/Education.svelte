<script>
	import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { resume } from '../store';
	function addEducation() {
		$resume.educations.push({ name: '', summary: '', started: '', finished: '', id: Date.now() });
		$resume.educations = $resume.educations;
	}

	function removeEducation(e) {
		$resume.educations = $resume.educations.filter((element) => {
			return element.id != e.currentTarget.id;
		});
	}
</script>

<div class="m-6 bg-white rounded-xl border-solid border border-gray-300">
	<h2 class="border-b border-solid  border-gray-300 px-6 py-4 text-xl font-semibold">Educations</h2>
	<div class="flex flex-col p-6  ">
		{#each $resume.educations as education}
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Name</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Name"
					bind:value={education.name}
				/>
			</div>
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Start Date</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Start Date"
					bind:value={education.started}
				/>
			</div>
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">End Date</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="End Date"
					bind:value={education.finished}
				/>
			</div>
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Summary</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Summary"
					bind:value={education.summary}
				/>
			</div>
			{#if $resume.educations.length > 1}
				<button
					on:click={removeEducation}
					id={education.id}
					class=" mb-2 flex justify-center items-center gap-2 py-1 px-4 rounded-full text-red-700 border border-solid border-red-700"
				>
					<Fa icon={faTrash} class=" text-red-700 " />Remove Education</button
				>
			{/if}
		{/each}

		<button
			class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700"
			on:click={addEducation}
		>
			<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add Education</button
		>
	</div>
</div>
