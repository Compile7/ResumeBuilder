<script>
	import { resume } from '../store';
	$: e = $resume.personalDetails;
	$: hobbies = $resume.hobbies.filter((t) => t);
	$: certifications = $resume.certifications.filter((t) => t);
	$: employments = $resume.employments.filter((t) => t);
	$: educations = $resume.educations.filter((t) => t);
	$: skills = $resume.skills.filter((t) => t);
	//$: console.log({ $resume });
	let fontStyle = 'font-family:serif';
	$: {
		console.log('inside reactive statement',$resume.font);
		switch ($resume.font) {
			case 'classic': {
				fontStyle = 'font-family:serif';
				break;
			}
			case 'elegant': {
				fontStyle = 'font-family:"Poppins"';
				break;
			}
		}
	}
</script>

<div class="page " style={fontStyle}>
	<div id="preview" class="bg-white flex flex-col max-w-3xl mx-auto px-4 py-6">
		<!-- header -->
		<div class="flex border-b border-solid border-gray-300 pb-6 gap-6">
			<div class="aspect-square w-36 h-36 bg-gray-200 flex items-center justify-center rounded-lg">
				<img class="avatar" src={e.avatar} alt="d" />
			</div>
			<div class="profile-details w-full">
				<h1 class="text-2xl font-bold ">{e.firstName} {e.lastName}</h1>
				<div class=" mb-4"><span>{e.position} </span>, <span>{e.companyName}</span></div>
				<div class="flex gap-3 flex-col">
					<div class="flex  gap-6">
						<p class="w-1/2">
							<a href="/" class="text-gray-500"
								><span class="text-gray-900">Email:</span> {e.email}</a
							>
						</p>
						<p class="w-1/2">
							<a href="/" class="text-gray-500"
								><span class="text-gray-900">Phone:</span> {e.phone}</a
							>
						</p>
					</div>
					<div class="flex  gap-6">
						<p class="w-1/2">
							<a href="/" class="text-gray-500"
								><span class="text-gray-900">Website:</span> {e.website}</a
							>
						</p>
						<p class="w-1/2">
							<span class="text-gray-900">Location:</span>
							<span class="text-gray-500">{e.location}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- container -->
		<div class="flex flex-col">
			<!-- profile -->
			<div class="profile border-b border-solid border-gray-300 py-6">
				<h2 class="text-xl font-bold mb-3">Profile</h2>
				<p class="text-gray-500">
					{e.professionalSummary}
				</p>
			</div>
			<!-- inner container -->
			<div class="flex pt-6">
				<!-- container -->
				<div class="w-8/12 border-r border-solid border-gray-300 pr-4">
					<h2 class="text-xl font-bold mb-3">Education</h2>
					<div class="mb-8">
						{#each educations as education, educationsIndex}
							<div class="mb-1 flex justify-start items-center gap-6">
								<div class="text-sm">
									<span class="text-gray-500">{education.started}</span>
									-
									<span class="text-gray-500">{education.finished}</span>
								</div>
								<div class="font-semibold ">{education.name}</div>
							</div>
							<p class="text-gray-500">{education.summary}</p>
						{/each}
					</div>

					<h2 class="text-xl font-bold mb-3 mt-12">Employment</h2>
					{#each employments as employment, employmentIndex}
						<div class="mb-8">
							<div class="mb-1 flex justify-start items-center gap-6">
								<div class="text-sm">
									<span class="text-gray-500">{employment.started}</span>
									-
									<span class="text-gray-500">{employment.finished}</span>
								</div>
								<div class="font-semibold">{employment.name}</div>
							</div>
							<p class="text-gray-500">{employment.summary}</p>
						</div>
					{/each}
				</div>
				<!-- sidebar -->

				<div class="w-4/12 pl-4">
					{#if skills.length > 0}
						<h2 class="text-xl font-bold mb-3">Skills</h2>
						<div class="flex flex-wrap gap-1 ">
							{#each skills as skill, skillIndex}
								<div class="badge badge-pill bg-dark">{skill}</div>
								{#if skills.length - 1 !== skillIndex}, {/if}
							{/each}
						</div>
					{/if}
					<h2 class="text-xl font-bold mb-3 mt-12">Certification</h2>
					<div class="flex flex-col gap-2">
						{#each certifications as certification, certificationIndex}
							<div class="flex items-center justify-between">
								<div class="font-medium">{certification.name}</div>
								<div class="text-gray-500">{certification.year}</div>
							</div>
						{/each}
					</div>
					<h2 class="text-xl font-bold mb-3 mt-12">Hobbies</h2>
					<div class="flex flex-col gap-2">
						<div class="flex gap-1 text-gray-500">
							{#each hobbies as hobby, hobbyIndex}
								<div>{hobby}</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <button on:click={download}> Download</button> -->
<style>
	.page {
		width: 210mm;
		height: 297mm;
	}
</style>
