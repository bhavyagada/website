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
      <u class="flex-1 text-xl">Wat dat</u>
        <span class="text-right text-md bg-gray-800 text-white px-2 py-1 mr-2">LLM</span>
        <span class="text-right text-md bg-gray-800 text-white px-2 py-1">Extension</span>
    </div>
    <a href="https://addons.mozilla.org/addon/watdat/" class="text-blue-700 hover:underline">live</a> |
    <a href="https://github.com/bhavyagada/watdat" class="text-blue-700 hover:underline">code</a>
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
      This project briefly reached the #13 spot on the front page of <a href="https://news.ycombinator.com/item?id=41453283" class="text-blue-700 hover:underline">Hacker News</a>.
    </p>
    <img src={watdat_hn} alt="wat dat #13 on hacker news" class="py-2" />
    <p class="py-2">And, briefly reached the #3 spot on the Show HN page of Hacker News.</p>
    <img src={watdat_shn} alt="wat dat #3 on show hacker news" class="py-2" />
  </section>
</main>
