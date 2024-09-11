<script>
  import { onMount } from "svelte";
  import init from "$lib/tbd/main";

  onMount(() => {
    init();
  });
</script>

<svelte:head>
  <title>TBD | Bhavya Gada</title>
</svelte:head>

<div class="relative">
  <canvas id="c" class="w-screen h-screen block"></canvas>
  <div class="absolute bg-white text-black font-mono p-3 left-2.5 top-2.5">
    <div><b>Images</b></div>
    <div>- paste</div>
    <div>- drag selected</div>
    <div>- delete selected</div>
    <div>- undo</div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
  }
</style>

