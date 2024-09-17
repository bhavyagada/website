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
  <div class="absolute bg-white text-sm text-black font-mono p-2 left-2.5 top-2.5 leading-4">
    <div><b>Images</b></div>
    <div>- paste</div>
    <div>- pan & drag</div>
    <div>- resize</div>
    <div>- delete selected</div>
    <div>- undo (incomplete)</div>
    <div><b>Toolbar</b></div>
    <div>- move to back</div>
    <div>- flip</div>
    <div>- duplicate</div>
    <div>- segmentation</div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
  }
</style>

