<script>
	import Button from './Button.svelte';
	import { fly } from 'svelte/transition';
	import {
		faSave,
		faDownload,
		faFont,
		faDragon,
		faSquareParking,
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import FontOption from './FontOption.svelte';
	// @ts-ignore

	import { clickOutside } from '$lib/outclick';

	function download() {
		console.log('inside download button');
		let element = document.getElementById('preview');
		//@ts-ignore
		html2pdf(element, { html2canvas: { scale: 2 } });
	}
	let buttons = [
		{
			text: 'Template',
			icon: faDragon,
			show: false,
		},
		{
			text: 'Font',
			icon: faFont,
			options: FontOption,
			show: false,
			onClick: selectOption,
		},
		{
			text: 'Layout',
			icon: faSquareParking,
			show: false,
		},
		{
			text: 'Save',
			icon: faSave,
			show: false,
		},
		{
			text: 'Download',
			icon: faDownload,
			show: false,
			onClick: download,
		},
	];

	function selectOption(e) {
		console.log('this one inside select option');
		switch (e.currentTarget.id) {
			case 'Font': {
				console.log('inside select font ');
				let button = buttons.find((button) => button.text === 'Font');
				button.show = true;
				buttons = buttons;
				console.log(JSON.stringify(buttons));
				break;
			}
		}
	}
</script>

<div class="flex justify-center ">
	{#each buttons as { text, icon, show, options, onClick }, i}
		<button class="relative">
			<Button
				leftRounded={i == 0 ? true : false}
				rightRounded={i == buttons.length - 1 ? true : false}
				rb={i == buttons.length - 1 ? true : false}
			>
				{#if show}
					<button
						class="absolute bottom-24 w-full"
						use:clickOutside
						on:outclick={() => (show = false)}
						on:click={() => {
							show = false;
						}}
						transition:fly
					>
						<svelte:component this={options} />
					</button>
				{/if}
				<button on:click={onClick} id={text} class="flex items-center hover:text-rose-600  z-10">
					<Fa {icon} class="px-1" />
					<div class="text-lg">{text}</div>
				</button>
			</Button>
		</button>
	{/each}
</div>
