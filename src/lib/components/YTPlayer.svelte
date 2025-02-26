<!-- https://medium.com/computerlovers/make-your-youtube-embeds-load-faster-and-display-responsively-80c775f48443 -->
<script>
  import icon from "$lib/images/youtube_icon.png";
  let { src, thumbnail, title } = $props();
  let loaded = $state(false);
</script>

<div>
  {#if loaded}
    <iframe src="{src}?autoplay=1" title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  {:else}
    <img src={thumbnail} alt="Video thumbnail" class="thumbnail" />
    <button aria-label="Play video" onclick={() => loaded = true} >
      <img src={icon} alt="Youtube Play Icon" />
    </button>
  {/if}
</div>

<style>
  div {
    position: relative;
    width: 100%;
    padding-bottom: 56.23%;
    height: 0;
    overflow: hidden;
    background-color: black;
  }
  iframe, .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    border: 0;
    cursor: pointer;
  }
  button img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>