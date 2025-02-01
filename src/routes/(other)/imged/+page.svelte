<script>
  import "../../../imged.css";
  import { onMount } from "svelte";
  import init from "$lib/imged/main";
  import favicon from "$lib/imged/icons/favicon.ico";
  import backIcon from '$lib/imged/icons/moveback.svg';
  import flipIcon from '$lib/imged/icons/flip.svg';
  import duplicateIcon from '$lib/imged/icons/duplicate.svg';
  import segmentIcon from '$lib/imged/icons/segment.svg';
  import downloadIcon from '$lib/imged/icons/download.svg';
  import deleteIcon from '$lib/imged/icons/delete.svg';
  import cropIcon from '$lib/imged/icons/crop.svg';
  import dptIcon from '$lib/imged/icons/dpt.svg';

  onMount(() => {
    init();
  });
</script>

<svelte:head>
  <title>Imged | Bhavya</title>
  <link rel="icon" type="image/x-icon" href={favicon}>
</svelte:head>

<div id="imged">
  <canvas id="c"></canvas>
  <div class="menu">
    <div class="item"><img src={dptIcon} alt="DPT Icon" width="15" height="15"> depthwise BG removal</div>
    <div class="item"><img src={segmentIcon} alt="Segment Icon" width="15" height="15"> segment</div>
    <div class="item"><img src={backIcon} alt="Back Icon" width="15" height="15"> move to back</div>
    <div class="item"><img src={flipIcon} alt="Flip Icon" width="15" height="15"> flip</div>
    <div class="item"><img src={duplicateIcon} alt="Duplicate Icon" width="15" height="15"> duplicate</div>
    <div class="item"><img src={cropIcon} alt="Crop Icon" width="15" height="15"> crop</div>
    <div class="item"><img src={downloadIcon} alt="Download Icon" width="15" height="15"> download</div>
    <div class="item"><img src={deleteIcon} alt="Delete Icon" width="15" height="15"> delete</div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
  }
</style>
