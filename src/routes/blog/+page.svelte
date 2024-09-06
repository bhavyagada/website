<svelte:head>
  <title>Blog | Bhavya Gada</title>
</svelte:head>

<main>
  <section>
    <div class="flex justify-between w-full py-4">
      <u class="text-xl">browser extensions</u>
      <span class="text-right text-md bg-gray-800 text-white px-2 py-1">Learning</span>
    </div>
    <p class="py-1">
      Content scripts: interact with web pages
    </p>
    <p class="py-1">
      Popup scripts: interact with the extension's popup window
    </p>
    <p class="py-1">
      Background scripts: run in the background and communicate with content and popup scripts via messaging
    </p>
    <p class="py-1">
      Each browser has a different API for implementation, while the core concepts of content, popup, and background scripts remain the same
    </p>
    <p class="py-1">
      Browsers have a separate console for global JS activity, while the developer tools console only focuses on the active webpage.
    </p>
    <p>
      Firefox - Tools > Browser Tools > Browser Console
    </p>
  </section>
</main>
