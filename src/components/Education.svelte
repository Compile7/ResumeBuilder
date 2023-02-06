<script>
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

<div class="flex flex-col ">
	{#each $resume.educations as education}
		<input
			type="text"
			class="py-2 px-4 my-2 rounded-md"
			placeholder="Name"
			bind:value={education.name}
		/>
		<input
			type="text"
			class="py-2 px-4 my-2 rounded-md"
			placeholder="Start Date"
			bind:value={education.started}
		/><input
			type="text"
			class="py-2 px-4 my-2 rounded-md"
			placeholder="End Date"
			bind:value={education.finished}
		/><input
			type="text"
			class="py-2 px-4 my-2 rounded-md"
			placeholder="Summary"
			bind:value={education.summary}
		/>
		{#if $resume.educations.length > 1}
			<button
				on:click={removeEducation}
				id={education.id}
				class="my-2 bg-slate-100 border-2 text-indigo-900 hover:text-rose-600"
			>
				Remove Education</button
			>
		{/if}
	{/each}
	<button on:click={addEducation}> Add Education</button>
</div>
