<script lang="ts"> 
	import { onMount, afterUpdate } from 'svelte'
	import Row from './components/Row.svelte'
	import Preview from './components/Preview.svelte'
	let rows = []
	onMount(() => {
		generateCode()
	})
	afterUpdate(() => {
		generateCode()
	})
	function copyOutput() {
		const outputContainer = document.getElementById('output')
		// @ts-ignore
		outputContainer.select()
		document.execCommand("copy");
	}
	function addRow() {
		rows = [...rows, {
			numColumns: 1,
			scrollable: false,
			columns: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
		}]
	}
	function generateCode() {
		const layoutWrapper = document.getElementById('preview')
		const outputContainer = document.getElementById('output')
		const html = layoutWrapper.innerHTML

		// "minify" code
		const output = html.replace(/\n\s*/g,"")

		// Append content to output textarea
		//@ts-ignore
		outputContainer.value = output
	}
</script>

<main>
	<h2>Club Layout Page Customizer</h2>
	<p>With the addition of individual pages to club layouts, and the recent rule changes making it harder to find people willing to build layouts, I decided to build a club page customizer, which includes a bunch of preset layout options for you to choose from. Have a play and if you have any feedback or suggestions feel free to send me a message <a href="https://www.marapets.com/maramail.php?do=send&id=Eric" target="_blank" rel="noreferrer noopener">here</a>.</p>
	<p>You can use <a href="https://www.markdownguide.org/getting-started/" target="_blank" rel="noopener noreferrer">Markdown</a> to format your content however you like.</p>
	<ul>
		<li>
			Check out <a href="https://markdownlivepreview.com/" target="_blank" rel="noopener noreferrer">https://markdownlivepreview.com/</a> to see examples of how you can format your content.
		</li>
		<li>
			Or visit <a href="https://www.markdownguide.org/basic-syntax/">https://www.markdownguide.org/basic-syntax/</a> for a more extensive guide on available Markdown options.
		</li>
	</ul>
	<br>
	<h2>Output:</h2>
	<span>Copy and paste the output below into your club page editor.</span>
	<br><br>

	<!-- Output -->
	<textarea rows="12" readonly id="output"></textarea>
	<button on:click={copyOutput}>{'Copy to clipboard'}</button>

	<!-- Preview -->
	<h2>Layout Preview</h2>
	<Preview bind:rows={rows} />
	
	<!-- Builder -->
	<div>
		<h2>Layout Options</h2>
		<div>
			{#each rows as row, i}
				<Row rowIndex={i} bind:row={row} />
			{/each}
		</div>
		<button on:click={addRow}>Add Row</button>
	</div>
</main>

<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

<style>
	main {
    max-width: 728px;
    margin: 0 auto;
    padding: 50px 30px;
	}
	textarea {
		width: 100%;
		resize: vertical;
	}
</style>