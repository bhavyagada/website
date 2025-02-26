<!-- https://medium.com/computerlovers/make-your-youtube-embeds-load-faster-and-display-responsively-80c775f48443 -->
<script>
  let { src, thumbnail, title } = $props();
  let loaded = $state(false);

  const loadVideo = event => {
    event.stopPropagation();
    loaded = true;
  }
</script>

{#if loaded}
  <!-- show the iframe when loaded -->
  <!-- svelte-ignore a11y_missing_attribute -->
  <div class="video__youtube">
    <iframe class="video__iframe" src="{src}?autoplay=1" title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
{:else}
  <!-- show the placeholder before loading -->
  <div class="video">
    <div class="video__youtube" data-youtube>
      <img src={thumbnail} class="video__placeholder" alt="Video thumbnail" />
      <button class="youtube__button" data-youtube-button={src} aria-label="Play video" onclick={loadVideo} ></button>
    </div>
  </div>
{/if}

<style>
  .video {
    position: relative;
    width: 100%;
  }
  .video__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video__placeholder {
    width: 100%;
    position: absolute;
  }
  .video__youtube {
    padding-bottom: 56.23%;
    width: 100%;
    height: 0;
    overflow: hidden;
    position: relative;
    object-fit: cover;
    background-color: black;
  }
  .youtube__button {
    background: none;
    border: 0;
    cursor: pointer;
    height: 100%;
    left: 0;
    position: absolute;
    text-indent: -9999px;
    top: 0;
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 100%;
  }
  .youtube__button:before {
    width:100%;
    height:100%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(https://www.youtube.com/yt/about/media/images/brand-resources/icons/YouTube-icon_dark.svg) no-repeat center center;
    background-size: 10%; 
  }
  .youtube__button:hover:before {
    background: url(https://youtube.com/yt/about/media/images/brand-resources/icons/YouTube-icon-full_color.svg) no-repeat center center;
    background-size: 10%; 
  }
</style>