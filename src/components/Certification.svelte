<script>
	import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { resume } from '../store';
	function addcertification() {
		$resume.certifications.push({ name: '', year: '',id: Date.now() });
		$resume.certifications = $resume.certifications;
	}

	function removeCertification(e) {
		$resume.certifications = $resume.certifications.filter((element) => {
			return element.id != e.currentTarget.id;
		});
	}
</script>

<div class="m-6 bg-white rounded-xl border-solid border border-gray-300">
	<h2 class="border-b border-solid  border-gray-300 px-6 py-4 text-xl font-semibold">
		Certifications
	</h2>
	<div class="flex flex-col p-6  ">
		{#each $resume.certifications as certification}
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Certification Name</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Certification Name"
					bind:value={certification.name}
				/>
			</div>
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Certification year</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Certification year"
					bind:value={certification.year}
				/>
			</div>
				{#if $resume.certifications.length > 1} 
			<button
				on:click={removeCertification}
				id={certification.id}
				class=" mb-2 flex justify-center items-center gap-2 py-1 px-4 rounded-full text-red-700 border border-solid border-red-700"
			>
				<Fa icon={faTrash} class=" text-red-700 " />Remove Certification</button
			>
			{/if}
		{/each}
		<button
			class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700"
			on:click={addcertification}
		>
			<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add Certification</button
		>

	</div>
</div>
