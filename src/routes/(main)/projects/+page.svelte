<script>
  import watdat_v from "$lib/videos/watdat.mp4";
  import watdat_c from "$lib/videos/watdat.vtt";
  // import watdat_hn from "$lib/images/watdat_hn.png";
  // import watdat_shn from "$lib/images/watdat_shn.png";
</script>

<svelte:head>
  <title>Projects | Bhavya</title>
</svelte:head>

<main>
  <section>
    <div class="flex w-full py-4">
      <u class="flex-1 text-xl">Imged</u>
      <span class="text-right text-md bg-gray-800 text-white px-2 py-1 mr-2"><a href="/imged">Live</a></span>
    </div>
    <p class="py-2">
      [wip] Learning WebGL by building an Image Editor (Imged) similar to
      <a href="https://dingboard.com" target="_blank" class="text-blue-700 hover:underline">dingboard</a>.
    </p>
  </section>
  <hr class="text-black">
  <section>
    <div class="flex w-full py-4">
      <u class="flex-1 text-xl">Wat dat</u>
      <span class="text-right text-md bg-gray-800 text-white px-2 py-1 mr-2">
        <a href="https://addons.mozilla.org/addon/watdat/">Live</a>
      </span>
    </div>
    <p class="py-2">
      Wat dat (What's that?) is a Firefox Extension that sends any highlighted text to an LLM and provides its explanation.
    </p>
    <p class="py-2">
      This eliminates the need to copy-pasting text into an LLM, helps maintain your workflow, and reduces context-switching.
    </p>
    <p class="py-2">
      This project briefly reached the #13 spot on the front page of Hacker News.
     <!-- <a href="https://news.ycombinator.com/item?id=41453283" target="_blank" class="text-blue-700 hover:underline">Hacker News</a>.-->
    </p>
    <video controls muted>
      <source src={watdat_v} type="video/mp4" />
      <track default kind="captions" src={watdat_c}>
    </video>
    <!-- <img src={watdat_hn} alt="wat dat #13 on hacker news" class="py-2" /> -->
    <!-- <img src={watdat_shn} alt="wat dat #3 on show hacker news" class="py-2" /> -->
  </section>
</main>

