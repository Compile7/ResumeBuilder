<script>
	import { faAdd,faTrash } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { resume } from '../store';
	function addhobbies() {
		$resume.hobbies.push({id: Date.now(), value:''});
		$resume.hobbies = $resume.hobbies;
	}

	function removeHobbies(e) {
		$resume.hobbies = $resume.hobbies.filter((element) => {
			return element.id != e.currentTarget.id;
		});
	}
</script>

<div class="m-6 bg-white rounded-xl border-solid border border-gray-300" id="Hobbies">
	<h2 class="border-b border-solid  border-gray-300 px-6 py-4 text-xl font-semibold">Hobbies</h2>
	<div class="flex flex-col p-6  ">
		{#each $resume.hobbies as hobby}
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Hobbies</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Hobbies"
					bind:value={hobby}
				/>
			</div>

			{#if $resume.hobbies.length > 1} 
			<button
				on:click={removeHobbies}
				id={hobby.id}
				class=" mb-2 flex justify-center items-center gap-2 py-1 px-4 rounded-full text-red-700 border border-solid border-red-700"
			>
				<Fa icon={faTrash} class=" text-red-700 " />Remove Hobbies</button
			>
			{/if}
		{/each}
		<button
			class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700 rb-button hover:text-white hover:bg-blue-700 transition"
			on:click={addhobbies}
		>
			<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add Hobbies</button
		>
	</div>
</div>
