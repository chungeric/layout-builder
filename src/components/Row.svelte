<script>
  import Radio from '../inputs/Radio.svelte'
  export let rowIndex;
  export let row;
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
</script>



<div class="options-wrap">

  <h3 class="underline">Row {rowIndex + 1}</h3>

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
      <textarea rows="10" bind:value={row.columns[i]}></textarea>
    {/each}
  </div>

</div>



<style>
  .options {
    margin-bottom: 30px;
    display: flex;
  }
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    .columns {
      grid-auto-flow: row;
    }
  }
  .columns textarea {
    resize: none;
  }
</style>