<script lang="ts">
  export let name;
  export let value;
  export let checked = false
  export let onChange
</script>

<label>
  <input
    type="radio"
    name={name}
    value={value}
    on:change={onChange}
    checked={checked}
  />
  {value}
</label>

<style>
  label {
		display: inline-block;
		margin-right: 15px;
	}
</style>