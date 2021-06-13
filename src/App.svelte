<script lang="ts"> 
	import { onMount, afterUpdate } from 'svelte'
	import Intro from './components/Intro.svelte'
	import LayoutBuilder from './components/builder/LayoutBuilder.svelte'
	import Output, { useOutput } from './components/Output.svelte';
	import Preview, { usePreview } from './components/Preview.svelte'
	let rows = []
	onMount(() => {
		generateCode()
	})
	afterUpdate(() => {
		generateCode()
	})
	function generateCode() {
		const layoutWrapper = usePreview()
		const outputContainer = useOutput()
		if (layoutWrapper) {
			const layoutHtml = layoutWrapper.innerHTML
			// "minify" code
			const output = layoutHtml.replace(/\n\s*/g,"")
			// Append content to output textarea
			outputContainer.value = output
		} else {
			outputContainer.value = ""
		}
	}
</script>

<main>
	<Intro />
	<Output />
	{#if (rows.length)}
		<Preview bind:rows={rows} />
	{/if}
	<LayoutBuilder bind:rows={rows} />
</main>

<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

<style>
	main {
    max-width: 728px;
    margin: 0 auto;
    padding: 50px 20px;
	}

</style>