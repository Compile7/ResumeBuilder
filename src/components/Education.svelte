<script>
	import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { resume } from '../store';
	function addEducation() {
		$resume.education.push({ name: '', summary: '', started: '', finished: '', id: Date.now() });
		$resume.education = $resume.education;
	}

	function removeEducation(e) {
		$resume.education = $resume.education.filter((element) => {
			return element.id != e.currentTarget.id;
		});
	}

	let date = '';
	let startDateError = '';
	let endDateError = '';

	function validateStartDate(e) {
		let re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
		date = e.target.value;
		if (date !== '' && !re.test(date)) {
			startDateError = 'Please enter date in DD/MM/YYYY format.';
		} else {
			startDateError = '';
		}
	}

	function validateEndDate(e) {
		let re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
		date = e.target.value;
		if (date !== '' && !re.test(date)) {
			endDateError = 'Please enter date in DD/MM/YYYY format.';
		} else {
			endDateError = '';
		}
	}
</script>

<div class="m-6 bg-white rounded-xl border-solid border border-gray-300" id="Education">
	<h2 class="border-b border-solid  border-gray-300 px-6 py-4 text-xl font-semibold">Education</h2>
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
					on:blur={validateStartDate}
				/>
				{#if startDateError && date !== ''}
					<p class="text-sm text-red-500">{startDateError}</p>
				{/if}
			</div>
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">End Date</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="End Date"
					bind:value={education.finished}
					on:blur={validateEndDate}
				/>
				{#if endDateError && date !== ''}
					<p class="text-sm text-red-500">{endDateError}</p>
				{/if}
			</div>
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Summary</label>
				<textarea
					id=""
					cols="15"
					rows="4"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Summary"
					bind:value={education.summary}
				/>
			</div>
			<!-- {#if $resume.educations.length > 0}  -->
				<button
					on:click={removeEducation}
					id={education.id}
					class=" mb-2 flex justify-center items-center gap-2 py-1 px-4 rounded-full text-red-700 border border-solid border-red-700 rb-button hover:text-white hover:bg-red-700 transition"
				>
					<Fa icon={faTrash} class=" text-red-700 " />Remove Education</button
				>
			<!-- {/if} -->
		{/each}

		<button
			class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700 rb-button hover:text-white hover:bg-blue-700 transition"
			on:click={addEducation}
		>
			<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add Education</button
		>
	</div>
</div>
