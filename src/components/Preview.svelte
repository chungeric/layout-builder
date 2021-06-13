<script context="module">
  let preview
  export function usePreview() {
    return preview
  }
</script>
<script lang="ts">
  import marked from "marked";
  import type { RowType } from "../types";
  import { getLightness } from "../utils/getLightness";
  export let rows: RowType[];
  export let pageColor
  $: textColor = getLightness(pageColor) > 0.5 ? '#000' : '#fff'
</script>

<div class="layout-preview-container">
  <h2>Layout Preview</h2>
  <div bind:this={preview}>
    <div id="layout" style={`background: ${pageColor}; color: ${textColor};`}>
      {#each rows as row}
        <div class="layout__row">
          <div class="layout__columns">
            {#each row.columns as column}
              <div class={row.scrollable ? 'layout__col layout__scrollable' : 'layout__col'}>
                {@html marked(column)}
              </div>
            {/each}
          </div>
        </div>
      {/each}
      <center class="credit">Built with https://clubpal.vercel.app/</center>
    </div>
    <style>
      .credit {
        opacity: 0.1;
      }
      #layout {
        background: hsl(0, 0%, 96%);
        padding: 30px;
        color: #333;
        line-height: 1.4;
        font-family: 'PT Sans', sans-serif;
      }
      .layout__scrollable {
        overflow: auto;
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
      @media (max-width: 480px) {
        .layout__columns {
          grid-auto-flow: row;
        }
      }
      img {
        max-width: 100%;
      }
      #layout a {
        color: #3665b3;
      }
      #layout a:active,
      #layout a:visited {
        color: #224987;
      }
    </style>
  </div>
</div>

<style>
  .layout-preview-container {
    margin-bottom: 50px;
  }
</style>