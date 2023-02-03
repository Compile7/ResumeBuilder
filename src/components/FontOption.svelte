<script>
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { resume } from '../store';
	import Button from './Button.svelte';
	export let fontOptions = [
		{
			text: 'classic',
		},
		{
			text: 'elegant',
		},
	];

	const changeFont = (e) => {
    console.log("font", e.currentTarget.id)
		$resume.font = e.currentTarget.id;
	};
</script>

<div class="flex flex-col h-10 w-20">
	{#each fontOptions as { text }}
		<button on:click={changeFont} id={text}>
			<Button>
				<p>
					{text}
				</p>
				<p class="flex-grow" />
				{#if $resume.font == text}
					<Fa icon={faCheck} />
				{/if}
			</Button>
		</button>
	{/each}
</div>
