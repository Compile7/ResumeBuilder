<script>
	import { resume } from '../store';
	function addEmployment(){
		 $resume.employments.push({name:'', summary:'', started:'',finished:'',id:Date.now()});
	 	$resume.employments = $resume.employments
	}

	function removeEmployment(e){
		 $resume.employments=$resume.employments.filter(element =>{
			return element.id!=e.currentTarget.id
		 });
	}
</script>

<div class="flex flex-col ">
	{#each $resume.employments as employment}
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Name"
		bind:value={employment.name}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Start Date"
		bind:value={employment.started}
	/><input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="End Date"
		bind:value={employment.finished}
	/><input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Summary"
		bind:value={employment.summary}
	/>
	<button on:click={removeEmployment} id={employment.id} class = 'my-2 bg-slate-100 border-2 text-indigo-900 hover:text-rose-600'> Remove Employment</button>
{/each}
	<button on:click={addEmployment}> Add Employment</button>
</div>
