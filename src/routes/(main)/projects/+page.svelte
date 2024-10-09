<script>
  import watdat_v from "$lib/videos/watdat.mp4";
  import watdat_c from "$lib/videos/watdat.vtt";
  import watdat_hn from "$lib/images/watdat_hn.png";
  import watdat_shn from "$lib/images/watdat_shn.png";
</script>

<svelte:head>
  <title>Projects | Bhavya Gada</title>
</svelte:head>

<main>
  <section>
    <div class="flex w-full py-4">
      <u class="flex-1 text-xl">Imged</u>
      <span class="text-right text-md bg-gray-800 text-white px-2 py-1 mr-2">WebGL</span>
    </div>
    <a href="/imged" target="_blank" class="text-blue-700 hover:underline">live</a> |
    <a href="https://github.com/bhavyagada/webgl" target="_blank" class="text-blue-700 hover:underline">code</a>
    <p class="py-2 text-xl">
      [work in progress] so, expect a lot of bugs!
    </p>
    <p class="py-2">
      I'm trying to learn WebGL by building an Image Editor (Imged) similar to
      <a href="https://dingboard.com" target="_blank" class="text-blue-700 hover:underline">dingboard</a>.
    </p>
    <p class="py-2">
      Everything rendered on the canvas is done purely using WebGL2.
    </p>
    <p class="py-2">
      So far, users can paste multiple images, select and drag them around, delete selected images, segment images, crop them, perform depthwise background removal, and undo their actions (incomplete).
    </p>
    <p class="py-2">
      It ain't much, but it's honest work.
    </p>
  </section>
  
  <section>
    <div class="flex w-full py-4">
      <u class="flex-1 text-xl">Wat dat</u>
      <span class="text-right text-md bg-gray-800 text-white px-2 py-1 mr-2">LLM</span>
      <span class="text-right text-md bg-gray-800 text-white px-2 py-1">Extension</span>
    </div>
    <a href="https://addons.mozilla.org/addon/watdat/" target="_blank" class="text-blue-700 hover:underline">live</a> |
    <a href="https://github.com/bhavyagada/watdat" target="_blank" class="text-blue-700 hover:underline">code</a>
    <p class="py-2">
      Wat dat (What's that?) is a Firefox/Chrome extension that sends your highlighted text to an LLM and provides its explanation.
    </p>
    <p class="py-2">
      This eliminates the need to copy-pasting text into an LLM, helps maintain your workflow, and reduces context-switching.
    </p>
    <video controls>
      <source src={watdat_v} type="video/mp4" />
      <track default kind="captions" src={watdat_c}>
    </video>
    <p class="py-2">
      This project briefly reached the #13 spot on the front page of 
      <a href="https://news.ycombinator.com/item?id=41453283" target="_blank" class="text-blue-700 hover:underline">Hacker News</a>.
    </p>
    <img src={watdat_hn} alt="wat dat #13 on hacker news" class="py-2" />
    <p class="py-2">And, briefly reached the #3 spot on the Show HN page of Hacker News.</p>
    <img src={watdat_shn} alt="wat dat #3 on show hacker news" class="py-2" />
  </section>
</main>

