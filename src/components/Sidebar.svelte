<script>
	import Skills from './Skills.svelte';
	import PersonalDetails from './PersonalDetails.svelte';
	import Employment from './Employment.svelte';
	import Education from './Education.svelte';
	import Certification from './Certification.svelte';
	import Hobbies from './Hobbies.svelte';
	import Summary from './Summary.svelte';
	import Languages from './Languages.svelte';
	//$: console.log({ $resume });
</script>

<PersonalDetails />
<Education />
<Employment />
<Skills />
<Certification />
<Hobbies />
<Languages />
<Summary />
