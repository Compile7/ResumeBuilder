<!-- header -->
<div class="flex border-b border-solid border-gray-300 pb-6 gap-6">
	<div class="aspect-square w-36 h-36 bg-gray-200 flex items-center justify-center rounded-lg">
		<img class="avatar" src={e.fileinput} alt="d" />
	</div>
	<div class="profile-details w-full">
		<h1 class="text-2xl font-bold ">{e.firstName} {e.lastName}</h1>
		<div class=" mb-4"><span>{e.position} </span>, <span>{e.companyName}</span></div>
		<div class="flex gap-3 flex-col">
			<div class="flex  gap-6">
				<p class="w-1/2">
					<a href="/" class="text-gray-500"><span class="text-gray-900">Email:</span> {e.email}</a>
				</p>
				<p class="w-1/2">
					<a href="/" class="text-gray-500"><span class="text-gray-900">Phone:</span> {e.phone}</a>
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
<div class="flex flex-col p-6 ">
	<!-- profile -->
	<div class="profile border-b border-solid border-gray-300 py-6">
		<h2 class="text-xl font-bold mb-3">Profile</h2>
		<p class="text-gray-500">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat tempore ducimus accusantium
			aut numquam maxime. Similique blanditiis ullam, laudantium debitis nostrum dolore dolores
			deleniti nobis. Odio veniam obcaecati ipsa eos.
		</p>
	</div>
	<!-- inner container -->
	<div class="flex pt-6">
		<!-- container -->
		<div class="w-8/12 border-r border-solid border-gray-300 pr-4">
			<h2 class="text-xl font-bold mb-3">Education</h2>
			<div class="mb-8">
				<div class="mb-1 flex justify-start items-center gap-6">
					<div class="text-sm">
						<span class="text-gray-500">2009</span>
						-
						<span class="text-gray-500">2014</span>
					</div>
					<div class="font-semibold ">JEC Jaipur</div>
				</div>
				<p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div>
				<div class="mb-1 flex justify-start items-center gap-6">
					<div class="text-sm">
						<span class="text-gray-500">2009</span>
						-
						<span class="text-gray-500">2014</span>
					</div>
					<div class="font-semibold">Arya Jaipur</div>
				</div>
				<p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>

			<h2 class="text-xl font-bold mb-3 mt-12">Employment</h2>
			<div class="mb-8">
				<div class="mb-1 flex justify-start items-center gap-6">
					<div class="text-sm">
						<span class="text-gray-500">2011</span>
						-
						<span class="text-gray-500">2018</span>
					</div>
					<div class="font-semibold">Google</div>
				</div>
				<p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div class="mb-8">
				<div class="mb-1 flex justify-start items-center gap-6">
					<div class="text-sm">
						<span class="text-gray-500">2018</span>
						-
						<span class="text-gray-500">2022</span>
					</div>
					<div class="font-semibold">Amazon</div>
				</div>
				<p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div>
				<div class="mb-1 flex justify-start items-center gap-6">
					<div class="text-sm">
						<span class="text-gray-500">2022</span>
						-
						<span class="text-gray-500">2023</span>
					</div>
					<div class="font-semibold">Flipkart</div>
				</div>
				<p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
		</div>
		<!-- sidebar -->
		<div class="w-4/12 pl-4">
			<h2 class="text-xl font-bold mb-3">Skills</h2>
			<div class="flex flex-wrap gap-1 ">
				{#each $resume.skills as skill}
					<div class="badge badge-pill bg-dark">{skill.name}</div>
					,
				{/each}
			</div>
			<h2 class="text-xl font-bold mb-3 mt-12">Certification</h2>
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-between">
					<div class="font-medium">Design School</div>
					<div class="text-gray-500">2015</div>
				</div>
				<div class="flex items-center justify-between">
					<div class="font-medium">Design School</div>
					<div class="text-gray-500">2017</div>
				</div>
				<div class="flex items-center justify-between">
					<div class="font-medium">Design School</div>
					<div class="text-gray-500">2019</div>
				</div>
				<div class="flex items-center justify-between">
					<div class="font-medium">Design School</div>
					<div class="text-gray-500">2021</div>
				</div>
			</div>
			<h2 class="text-xl font-bold mb-3 mt-12">Hobbies</h2>
			<div class="flex flex-col gap-2">
				<div class="flex gap-1 text-gray-500">
					<div>Writing</div>
					,
					<div>Blogging</div>
				</div>
			</div>
		</div>
	</div>
</div>
