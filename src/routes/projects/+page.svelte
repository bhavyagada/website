<script>
  import watdat from "$lib/images/watdat.png";
</script>

<svelte:head>
  <title>Projects | Bhavya Gada</title>
</svelte:head>

<main>
  <section>
    <h2 class="text-xl">Wat dat</h2>
    <a href="https://addons.mozilla.org/addon/watdat/" class="text-blue-700 hover:underline">live</a> |
    <a href="https://github.com/bhavyagada/watdat" class="text-blue-700 hover:underline">code</a>
    <p class="py-2">
      Wat dat (What's that?) is a Firefox/Chrome extension that sends your highlighted text to an LLM and provides its explanation.
    </p>
    <p class="py-2">
      This eliminates the need to copy-pasting text into an LLM, helps maintain your workflow, and reduces context-switching.
    </p>
    <img src={watdat} alt="wat dat screenshot" class="py-2" />
  </section>
</main>
