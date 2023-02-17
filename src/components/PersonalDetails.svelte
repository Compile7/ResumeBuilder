<script>
	import { resume } from '../store';
	let avatar, fileinput;
	let src = './default-pp.svg';
	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target.result;
			$resume.personalDetails.avatar = avatar;
		};
	};

	let email = '';
	let emailError = '';
	let phoneError = '';
	let phoneNumber = '';

	function validateEmail(e) {
		let re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		email = e.target.value;
		if (email !== '' && !re.test(email)) {
			emailError = 'Please enter a valid Email.';
		} else {
			emailError = '';
		}
	}

	function validatePhoneNumber(e) {
		const pattern = /^\+?\d{1,3}[\s-]?\d{9,15}$/;
		phoneNumber = e.target.value;
		if (phoneNumber !== '' && !pattern.test(phoneNumber)) {
			phoneError = 'Please enter a valid PhoneNumber.';
		} else {
			phoneError = '';
		}
	}
</script>

<div class="m-6 bg-white rounded-xl border-solid border border-gray-300" id="Personal Details">
	<h2 class="border-b border-solid  border-gray-300 px-6 py-4 text-xl font-semibold">
		Personal Details
	</h2>
	<div class="flex flex-col p-6  p-6">
		<div class="flex gap-5">
			<div class="form-group flex flex-col gap-1 mb-4 w-5/12">
				<label for="" class="text-sm text-gray-700">Profile Picture</label>
				<div
					class=" flex items-center justify-center p-5 rounded-lg border border-solid border-gray-400  h-full w-full cursor-pointer"
					on:click={() => {
						fileinput.click();
					}}
				>
					<img class="upload w-16" {src} alt="Profile Picture" />
				</div>
				<input
					style="display:none"
					type="file"
					accept=".jpg, .jpeg, .png"
					on:change={(e) => onFileSelected(e)}
					bind:this={fileinput}
				/>
			</div>
			<div class="w-7/12">
				<div class="form-group flex flex-col gap-1 mb-4">
					<label for="" class="text-sm text-gray-700">Name</label>
					<input
						type="text"
						class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm "
						placeholder="Name"
						bind:value={$resume.personalDetails.yourName}
					/>
				</div>
				<div class="form-group flex flex-col gap-1 mb-4">
					<label for="" class="text-sm text-gray-700">Email</label>
					<input
						type="text"
						class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
						placeholder="Email"
						bind:value={$resume.personalDetails.email}
						on:blur={validateEmail}
					/>
					{#if emailError && email !== ''}
						<p class="text-sm text-red-500">{emailError}</p>
					{/if}
				</div>
			</div>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Company Name</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Company Name"
				bind:value={$resume.personalDetails.companyName}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Position</label>
			<input
				type="Email"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Position"
				bind:value={$resume.personalDetails.position}
			/>
		</div>

		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Website</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Website"
				bind:value={$resume.personalDetails.website}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Location</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Location"
				bind:value={$resume.personalDetails.location}
			/>
		</div>
		<div class="form-group flex flex-col gap-1 mb-4">
			<label for="" class="text-sm text-gray-700">Phone</label>
			<input
				type="text"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Phone"
				bind:value={$resume.personalDetails.phone}
				on:blur={validatePhoneNumber}
			/>
			{#if phoneError && phoneNumber !== ''}
				<p class="text-sm text-red-500">{phoneError}</p>
			{/if}
		</div>
		<!-- {#if avatar}
        <img class="avatar" src="{avatar}" alt="d" />
        {/if}-->

		<div class="form-group flex flex-col gap-1">
			<label for="professionalsummary" class="text-sm text-gray-700">Professional Summary</label>
			<textarea
				name="professionalsummary"
				id=""
				cols="15"
				rows="4"
				class="py-2 px-4 rounded-md border border-solid border-gray-400 text-sm"
				placeholder="Professional Summary"
				bind:value={$resume.personalDetails.professionalSummary}
			/>
		</div>
	</div>
</div>

<style>
	#app {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
	}

	.upload {
		display: flex;
	}
	.avatar {
		display: flex;
		height: 200px;
		width: 200px;
	}
</style>
