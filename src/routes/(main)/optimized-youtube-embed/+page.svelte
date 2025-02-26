<svelte:head>
  <title>Youtube Embed Optimization | Bhavya</title>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@bsgada" />
  <meta name="twitter:title" content="Youtube embed optimization tool" />
  <meta name="twitter:description" content="This tool provides code to optimize Youtube embeds for faster page loads." />
</svelte:head>

<script>
  import YTPlayer from '$lib/components/YTPlayer.svelte';

  let youtubeUrl = $state('');
  let showPreview = $state(false);
  let generatedCode = $state('');
  let preview = $state({ src: '', thumbnail: '' });
  let copied = $state(false);

  const extractVideoId = url => {
    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const generateEmbed = () => {
    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) return;
    preview = { 
      src: `https://www.youtube.com/embed/${videoId}`, 
      thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    };

    generatedCode = `&lt;div class="video-container" id="video-player-${videoId}"&gt;
  &lt;img src="${preview.thumbnail}" alt="Video thumbnail" class="thumbnail"&gt;
  &lt;button class="play-button"&gt;
      &lt;img src="https://www.youtube.com/yt/about/media/images/yt_play.png" alt="Play"&gt;
  &lt;/button&gt;
&lt;/div&gt;\n
&lt;style&gt;
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    background-color: black;
  }
  .video-container iframe,
  .video-container .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-container .play-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    border: 0;
    cursor: pointer;
  }
  .video-container .play-button img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
&lt;/style&gt;\n
&lt;script&gt;
  document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.querySelector("#video-player-${videoId} .play-button");
    playButton.addEventListener("click", function() {
      var container = playButton.parentElement;
      var iframe = document.createElement("iframe");
      iframe.src = "${preview.src}?autoplay=1";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      container.innerHTML = "";
      container.appendChild(iframe);
    });
  });
&lt;/script&gt;`;
    showPreview = true;
  };

  const copyToClipboard = () => {
    const decodedCode = generatedCode.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    navigator.clipboard.writeText(decodedCode);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  };
</script>

<main>
  <h2>Youtube Embed Optimization</h2>
  <p>This tool provides code to optimize Youtube embeds for faster page loads.</p>
  <p>
    The generated code is self-explanatory. It renders the Youtube video thumbnail along with a dummy play button. When the image is clicked, the contents of the video container i.e., the thumbnail, are replaced with the iframe embed, and the video is autoplayed to provide the same user experience. This significantly improves the initial page load time.
  </p>
  <p><strong>
    Enter the Youtube URL you want to embed and click Generate. It will provide you with the vanilla HTML, CSS, and JS code to make this work, along with a preview of how it looks!
  </strong></p>
  <p><strong>
    Also, download the 
    <a href="https://www.youtube.com/howyoutubeworks/resources/brand-resources/#logos-icons-and-colors">Youtube icon</a> to show the dummy play button!
  </strong></p>
  <input 
    type="text" 
    bind:value={youtubeUrl} 
    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    onkeydown={e => { if (e.key === 'Enter') generateEmbed(); }}/>
  <button onclick={generateEmbed}>Generate</button>

  {#if showPreview}
    <h3>Preview:</h3>
    <YTPlayer {...preview} />
    <h3>Generated Code:</h3>
    <button onclick={copyToClipboard}>{copied ? 'Copied' : 'Copy'}</button>
    <pre>{@html generatedCode}</pre>
  {/if}
</main>

<style>
  input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #ee0000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
  }
  pre {
    font-size: 16px;
    padding: 5px;
  }
</style>
