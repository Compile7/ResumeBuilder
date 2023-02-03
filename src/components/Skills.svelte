<script>
	import { resume } from '../store';
	function addskills(){
		 $resume.skills.push("");
	 	$resume.skills = $resume.skills
	}
</script>

<div class="flex flex-col ">

	{#each $resume.skills as skill}
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Skill"
		bind:value={skill}
	/>
	
{/each}
	<button on:click={addskills}> Add Skills</button>
</div>
