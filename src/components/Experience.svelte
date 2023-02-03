<script>
	import { resume } from '../store';
</script>

<div class="flex flex-col ">
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Name"
		bind:value={$resume.experience.name}
	/>

	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Email"
		bind:value={$resume.experience.email}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="phone"
		bind:value={$resume.experience.phone}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Website"
		bind:value={$resume.experience.website}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="Location"
		bind:value={$resume.experience.location}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="from"
		bind:value={$resume.experience.from}
	/>
	<input
		type="text"
		class="py-2 px-4 my-2 rounded-md"
		placeholder="to"
		bind:value={$resume.experience.to}
	/>
	<textarea
		bind:value={$resume.experience.summary}
		class="px-4 rounded-md py-2 my-2"
		rows="5"
		cols="100"
		placeholder="summary"
	/>
</div>
