<script lang="ts">
  import { globalState } from './state.svelte.ts'

  function greet() {
    alert('Welcome to Svelte!')
    globalState.customer.name = 'svelte'
  }
</script>

<button onclick={greet}>click me</button>
<div>customer name is: {globalState.customer.name}</div>

<style>
  button {
    font-size: 2em;
  }
</style>
