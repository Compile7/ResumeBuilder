<script>
	import { resume } from '../store';
	function addhobbies(){
		 $resume.hobbies.push("");
	 	$resume.hobbies = $resume.hobbies
	}
</script>

<div class="flex flex-col ">

	{#each $resume.hobbies as hobby}
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Skill"
		bind:value={hobby}
	/>
	
{/each}
	<button on:click={addhobbies}> Add Hobbies</button>
</div>
