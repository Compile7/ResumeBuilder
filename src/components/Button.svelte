<script>
	export let leftRounded = false;
	export let rightRounded = false;
	export let rb = true;
	export let lb = true;
</script>

<div
	class={`${leftRounded ? 'rounded-l-lg' : ''} ${rightRounded ? 'rounded-r-lg' : ''}     
  ${!lb ? 'border-l-0' : ''}
  ${!rb ? 'border-r-0' : ''} cursor-pointer
flex  px-4 py-2 border-2 bg-slate-100 hover:text-rose-600  transition border-gray-400`}

>
	<slot />
</div>
