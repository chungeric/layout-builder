<script context="module">
  let preview
  export function usePreview() {
    return preview
  }
</script>
<script lang="ts">
  import marked from "marked";
  import type { RowType } from "../types";
  export let rows: RowType[];
</script>

<div class="layout-preview-container">
  <h2>Layout Preview</h2>
  <div bind:this={preview}>
    <div id="layout">
      {#each rows as row}
        <div class="layout__row">
          <div class="layout__columns">
            {#each row.columns as column}
              <div class={`layout__col ${row.scrollable ? 'layout__scrollable' : ''}`}>
                {@html marked(column)}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    <style>
      #layout {
        background: #eee;
        padding: 30px;
        color: #333;
        line-height: 1.3;
        font-family: 'PT Sans', sans-serif;
      }
      .layout__scrollable {
        overflow: scroll;
        max-height: 250px;
      }
      .layout__row:first-child {
        margin-top: 0;
      }
      .layout__row:last-child {
        margin-bottom: 0;
      }
      .layout__row {
        margin: 30px 0;
      }
      .layout__columns {
        display: grid;
        grid-auto-flow: column;
        gap: 20px;
        grid-auto-columns: minmax(10px, 1fr);
      }
      @media (max-width: 600px) {
        .layout__columns {
          grid-auto-flow: row;
        }
      }
      img {
        max-width: 100%;
      }
    </style>
  </div>
</div>

<style>
  .layout-preview-container {
    margin-bottom: 50px;
  }
</style>