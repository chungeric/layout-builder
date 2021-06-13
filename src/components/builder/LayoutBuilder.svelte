<script lang="ts">
  import type { RowType } from '../../types';
  import BuilderRow from './BuilderRow.svelte'
  export let rows: RowType[];
  export let pageColor
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
  <div class="layout-settings">
    <div class="layout-settings__item">
      <h4 class="layout-settings__item--label">Page Color</h4>
      <div class="layout-settings__item--input">
        <input type="color" bind:value={pageColor} />
      </div>
    </div>
  </div>
  <div>
    {#each rows as row, i}
      <BuilderRow rowIndex={i} bind:row={row} />
    {/each}
  </div>
  <button on:click={addRow}>Add Row</button>
</div>

<style>
  .layout-settings {
    margin-bottom: 30px;
  }
  .layout-builder-container {
    margin-bottom: 30vh;
  }
  .layout-settings__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 250px;
    margin-bottom: 15px;
  }
  .layout-settings__item > * {
    /* flex: 1 1 auto; */
  }
  .layout-settings__item--label {
    margin-right: 10px;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>