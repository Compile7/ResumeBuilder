<script>
	import { resume } from '../store';
	function addcertification(){
		 $resume.certificcertificationsation.push({name:'', year:''});
	 	$resume.certifications = $resume.certifications
	}
</script>

<div class="flex flex-col ">

	{#each $resume.certifications as certification}
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Certification Name"
		bind:value={certification.name}
	/>
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Certification year"
		bind:value={certification.year}
	/>
{/each}
	<button on:click={addcertification}> Add Certification</button>
</div>
