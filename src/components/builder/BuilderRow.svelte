<script lang="ts">
  import Radio from '../../inputs/Radio.svelte'
  import type { RowType } from '../../types';
  export let rowIndex;
  export let row: RowType;
  export let rows: RowType[];
  function selectNumCols(e) {
    const newNumColumns = parseInt(e.target.value)
    row.numColumns = newNumColumns
    if (newNumColumns > row.columns.length) {
      const diff = newNumColumns - row.columns.length
      row.columns = [...row.columns, ...Array(diff).fill('')]
    } else {
      row.columns = row.columns.slice(0, newNumColumns)
    }
  }
  function toggleScrollable() {
    row.scrollable = !row.scrollable
  }
  function addRow(i) {
    const rowsCopy = rows.slice(0)
    rowsCopy.splice(i, 0, {
      numColumns: 1,
      scrollable: false,
      columns: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
    })
    return rowsCopy
  }
  function addRowAfter() {
    rows = addRow(rowIndex + 1)
  }
  function addRowBefore() {
    rows = addRow(rowIndex)
  }
  function deleteRow() {
    const rowsCopy = rows.slice(0)
    rowsCopy.splice(rowIndex, 1)
    rows = rowsCopy
  }
</script>


<div class="builder-row-container">
  <div class="builder-row-header">
    <h3 class="">Row {rowIndex + 1}</h3>
    <div>
      <button on:click={addRowAfter}>Add Row After +</button>
      <button on:click={addRowBefore}>Add Row Before +</button>
      <button on:click={deleteRow}>Delete Row -</button>
    </div>
  </div>
  <div class="options">
    <div>
      <h4>Number of Columns</h4>
      <div>
        <Radio value={1} name={`row-${rowIndex}-cols`} onChange={selectNumCols} checked />
        <Radio value={2} name={`row-${rowIndex}-cols`} onChange={selectNumCols} />
        <Radio value={3} name={`row-${rowIndex}-cols`} onChange={selectNumCols} />
      </div>
    </div>
    <div>
      <h4 style="margin-bottom: 0;">Scrollable Columns?</h4>
      <p><em>Columns become scrollable once they reach a set height.</em></p>
      <div>
        <input
          type="checkbox"
          name={`row-overflow-${rowIndex}`}
          on:change={toggleScrollable}
        />
      </div>
    </div>
  </div>
  <div class="columns">
    {#each row.columns as _, i}
      <div class="column">
        <h4>Column {i+1}</h4>
        <textarea rows="10" bind:value={row.columns[i]}></textarea>
      </div>
    {/each}
  </div>

</div>

<style>
  .builder-row-container {
    background: hsl(0, 0%, 96%);
    padding: 0 20px 20px;
    margin-bottom: 30px;
  }
  .builder-row-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-left: -20px;
    margin-right: -20px;
    padding: 15px 20px;
    background: hsl(0, 0%, 92%);
  }
  .builder-row-header button:last-of-type {
    margin-right: 0;
  }
  .builder-row-header button {
    margin: 4px 4px 4px 0;
  }
  .builder-row-header > h3 {
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 20px;
  }
  .options {
    margin-bottom: 30px;
    display: flex;
  }
  @media (max-width: 480px) {
    .options {
      flex-direction: column;
    }
  }
  .options > div {
    flex: 1;
  }
  .columns {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    grid-auto-columns: minmax(10px, 1fr);
  }
  @media (max-width: 480px) {
    .columns {
      grid-auto-flow: row;
    }
  }
  .column h4 {
    margin-top: 0;
  }
  .column textarea {
    display: block;
    width: 100%;
    resize: none;
    margin-bottom: 0;
  }
</style>