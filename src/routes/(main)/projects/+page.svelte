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
  <section id="imged">
    <h2>Imged</h2>
    <a href="/imged">Live</a>
    <p>
      [wip] Learning WebGL by building an Image Editor (Imged) similar to
      <a href="https://dingboard.com" target="_blank">dingboard</a>.
    </p>
  </section>

  <section id="watdat">
    <h2>Wat dat</h2>
    <a href="https://addons.mozilla.org/addon/watdat/">Live</a>
    <p>
      Wat dat (What's that?) is a Firefox Extension that sends any highlighted text to an LLM and provides its explanation.
    </p>
    <p>
      This eliminates the need to copy-pasting text into an LLM, helps maintain your workflow, and reduces context-switching.
    </p>
    <p>
      This project briefly reached the #13 spot on the front page of Hacker News.
     <!-- <a href="https://news.ycombinator.com/item?id=41453283" target="_blank" >Hacker News</a>.-->
    </p>
    <video controls muted>
      <source src={watdat_v} type="video/mp4" />
      <track default kind="captions" src={watdat_c}>
    </video>
    <!-- <img src={watdat_hn} alt="wat dat #13 on hacker news" /> -->
    <!-- <img src={watdat_shn} alt="wat dat #3 on show hacker news" /> -->
  </section>
</main>

