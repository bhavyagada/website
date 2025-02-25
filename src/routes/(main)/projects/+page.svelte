<script>
  import watdat_v from "$lib/videos/watdat.mp4";
  import watdat_c from "$lib/videos/watdat.vtt";
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
    <iframe src="https://www.youtube.com/embed/6Y_ERF6cpuo?si=Zqi_S4u9FDgFcE1v" title="AI Image Editor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>

  <section id="watdat">
    <h2>Wat dat</h2>
    <a href="https://addons.mozilla.org/addon/watdat/">Live</a>
    <p>
      Wat dat (What's that?) is a Firefox Extension that sends any highlighted text to an LLM and provides its explanation.
    </p>
    <p>
      This project had 40+ users at its peak and briefly trended on the front page of Hacker News.
    </p>
    <p><small><i>
      Note: Firefox now has a built-in feature to do this, which kind of makes this project obsolete.
    </i></small></p>
    <video controls muted>
      <source src={watdat_v} type="video/mp4" />
      <track default kind="captions" src={watdat_c}>
    </video>
  </section>

  <section id="xene">
    <h2>Xene</h2>
    <a href="https://github.com/bhavyagada/xene">Code</a>
    <p>
      A programming platform to access logical abilities featuring programming challenges, context-sensitive keyboard, analytics and leaderboard.
    </p>
    <iframe src="https://www.youtube.com/embed/EsxX6f1hYQY?si=-UqrElK9wMfaXhPm" title="Xene: A Radical Programming Platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>

  <section id="rtsudoku">
    <h2>Real Time Sudoku Solver</h2>
    <a href="https://github.com/bhavyagada/rtsudoku">Code</a>
    <p>
      Trained a CNN on digit characters in natural images and used OpenCV to detect the board and puzzle, and write the solution.
    </p>
    <iframe src="https://www.youtube.com/embed/oWHhShJrLng?si=BbEd6cbFQsVW1sdk&amp;start=50" title="Real Time Sudoku Solver" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>
</main>
