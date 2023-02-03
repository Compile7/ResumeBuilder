<script>
	import { resume } from '../store';
	import Experience from './Experience.svelte';
	import Skills from './Skills.svelte';
	import PersonalDetails from './PersonalDetails.svelte';
	import Employment from './Employment.svelte';
	import Education from './Education.svelte';
	import Certification from './Certification.svelte';
	import Hobbies from './Hobbies.svelte';
	//$: console.log({ $resume });
</script>

<PersonalDetails />
<Education />
<Employment />
<Certification />
<Skills />
<Hobbies />
