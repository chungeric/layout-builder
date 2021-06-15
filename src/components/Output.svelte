<script context="module">
  let output
  export function useOutput() {
    return output
  }
</script>
<script lang="ts">
  function copyOutput() {
		output.select()
		document.execCommand("copy");
	}
</script>

<div class="output-container">
  <h2>Code Output:</h2>
  <p>Copy and paste the output below straight into your HTML file.</p>

  <!-- Output -->
  <textarea readonly rows="12" bind:this={output}></textarea>
  <button on:click={copyOutput}>{'Copy to clipboard'}</button>
</div>

<style>
  .output-container {
    margin-bottom: 30px;
  }
  textarea {
		width: 100%;
		resize: vertical;
	}
</style>