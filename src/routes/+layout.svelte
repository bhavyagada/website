<script>
  import "../app.css";

  let is_menu_open = false;
</script>

<header class="py-4">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/"><div class="text-3xl hover:text-blue-700">Bhavya Gada</div></a>

    <!-- desktop view -->
    <nav class="hidden md:flex space-x-4">
      <a href="/blog" class="hover:text-blue-700">blog</a>
      <a href="/projects" class="hover:text-blue-700">projects</a>
    </nav>

    <!-- mobile menu button -->
    <button class="md:hidden" on:click={() => is_menu_open = !is_menu_open}>
      {#if is_menu_open}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>
  </div>

  <!-- mobile view -->
  {#if is_menu_open}
    <nav class="md:hidden mt-2">
      <a href="/blog" class="block py-2 hover:text-blue-700 text-right" on:click={() => is_menu_open = false}>blog</a>
      <a href="/projects" class="block py-2 hover:text-blue-700 text-right" on:click={() => is_menu_open = false}>projects</a>
    </nav>
  {/if}
</header>
<hr class="mb-4" />

<slot />


