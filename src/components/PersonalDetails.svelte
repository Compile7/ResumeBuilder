<script>
	import { resume } from '../store';
		let  avatar, fileinput;
	
	const onFileSelected =(e)=>{
  let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result;
				 $resume.personalDetails.avatar = avatar;
            };
}
</script>

<div class="flex flex-col ">
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="First Name"
		bind:value={$resume.personalDetails.firstName}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Last Name"
		bind:value={$resume.personalDetails.lastName}
	/>
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Position"
		bind:value={$resume.personalDetails.position}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Company Name"
		bind:value={$resume.personalDetails.companyName}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Email"
		bind:value={$resume.personalDetails.email}
	/>
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Website"
		bind:value={$resume.personalDetails.website}
	/>
		<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Location"
		bind:value={$resume.personalDetails.location}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Phone"
		bind:value={$resume.personalDetails.phone}
	/>
<!-- {#if avatar}
        <img class="avatar" src="{avatar}" alt="d" />
        {/if}-->
				<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Professional Summary"
		bind:value={$resume.personalDetails.professionalSummary}
	/>
</div>


<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
}
 
	.upload{
		display:flex;
	height:50px;
		width:50px;
		cursor:pointer;
	}
	.avatar{
		display:flex;
		height:200px;
		width:200px;
	}
</style>