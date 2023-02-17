<script>
	import { faAdd } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { resume } from '../store';
	function addlanguages() {
		$resume.languages.push({ myLanguage: '' });
		$resume.languages = $resume.languages;
	}
</script>

<div class="m-6 bg-white rounded-xl border-solid border border-gray-300" id="Languages">
	<h2 class="border-b border-solid  border-gray-300 px-6 py-4 text-xl font-semibold">Languages</h2>
	<div class="flex flex-col p-6  ">
		{#each $resume.languages as languages}
			<div class="form-group flex flex-col gap-1 mb-4">
				<label for="" class="text-sm text-gray-700">Languages</label>
				<input
					type="text"
					class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
					placeholder="Hobbies"
					bind:value={languages.myLanguage}
				/>
			</div>
		{/each}
		<button
			class=" flex justify-center items-center gap-2 py-1 px-4 rounded-full text-blue-700 border border-solid border-blue-700 rb-button hover:text-white hover:bg-blue-700 transition"
			on:click={addlanguages}
		>
			<Fa icon={faAdd} class="focus:text-blue-700  text-blue-700 " />Add Language</button
		>
	</div>
</div>
