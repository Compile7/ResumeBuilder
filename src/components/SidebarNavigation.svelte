<script>
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	const sidebarNavigation = [
		{
			text: 'Personal Details',
		},
		{
			text: 'Education',
		},
		// {
		// 	text: 'Experience',
		// },
		{
			text: 'Skills',
		},
		{
			text: 'Certificates',
		},
		{
			text: 'Hobbies',
		},
		{
			text: 'Languages',
		},
		{
			text: 'Summary',
		},
	];
</script>

<div class="sidebar-navigation w-[14%]   border-solid border-r border-gray-300 pt-3 max-h-[91vh]">
	<ul>
		{#each sidebarNavigation as { text }}
			<li>
				<a
					href="#{text}"
					class="w-full flex items-center gap-4 py-3 px-4  focus:text-blue-700 focus:bg-blue-50  hover:text-blue-700 hover:bg-blue-50   font-medium text-gray-700 "
					><Fa icon={faUser} class="focus:text-blue-700  text-gray-700 " />{text}</a
				>
			</li>
		{/each}
	</ul>
</div>
