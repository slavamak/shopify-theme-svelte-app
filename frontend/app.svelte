<script lang="ts">
  import { globalState } from './state.svelte'

  function greet() {
    globalState.customer.name = 'Svelte'
  }

  function increment() {
    globalState.count += 1
  }
</script>

<button onclick={greet}>Set customer name</button>
<button onclick={increment}>Increment count</button>

<div>Customer name: {globalState.customer.name}</div>
<div>Count: {globalState.count}</div>

<style>
  button {
    font-size: 2em;
  }
</style>
