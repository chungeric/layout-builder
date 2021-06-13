<script lang="ts">
  import type { RowType } from '../../types';
  import BuilderRow from './BuilderRow.svelte'
  export let rows: RowType[];
  function addRow() {
		rows = [...rows, {
			numColumns: 1,
			scrollable: false,
			columns: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
		}]
	}
</script>

<div class="layout-builder-container">
  <h2>Layout Builder</h2>
  <div>
    {#each rows as row, i}
      <BuilderRow rowIndex={i} bind:row={row} />
    {/each}
  </div>
  <button on:click={addRow}>Add Row</button>
</div>

<style>
  .layout-builder-container {
    margin-bottom: 30vh;
  }
</style>