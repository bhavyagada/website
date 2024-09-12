<svelte:head>
  <title>Notes | Bhavya Gada</title>
</svelte:head>

<main>
  <section class="text-center"><em>documenting raw notes, which might or might not be useful to you.</em></section>
  <section id="webgl">
    <p class="text-xl py-4">
      <u>webgl</u>
    </p>
    <p class="py-1">
      <a href="https://webgl2fundamentals.org/" target="_blank" class="text-blue-700 underline">Webgl2 fundamentals</a>
    </p>
    <p class="py-1">
      Rasterization engine not a 3D library, it draws points, lines, and polygons based on GPU code you supply in the form of two functions:
      'Vextex Shader' and 'Fragment Shader' functions strictly typed in GLSL
    </p>
    <p class="py-1">
      Vertex Shader computes vertex positions for Webgl to rasterize; Fragment Shader computes a color for each pixel during rasterization
    </p>
    <p class="py-1">
      <b>WebGL is all about setting up state for these functions to run</b>
    </p>
    <ul class="py-1 list-disc list-inside">
      4 ways shaders can receive data:
      <li>attributes specify how to pull data out of buffers and provide them to vertex shader and buffers are non random access arrays of binary data for positions, normals, texture coordinates, vertex colors, etc.</li>
      <li>uniforms are global variables you set before executing shader program</li>
      <li>textures are arrays of data that can be randomly accessed (common to put image data)</li>
      <li>varyings are a way for vertex shaders to pass data to a fragment shader</li>
    </ul>
    <p class="py-1">
      WebGL only cares about 2 things: clip space (provided by vertex shader) and colors (provided by fragment shader)
      <b>Clip space coordinates go from -1 to +1 no matter what.</b> left -> right on x-axis and bottom -> top on y-axis
    </p>
    <p class="py-1">
      <a href="https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/" target="_blank" class="text-blue-700 underline">Homogeneous coordinates and projective geometry</a>
    </p>
  </section>
  <section id="extensions">
    <p class="text-xl py-4">
      <u>browser extensions</u>
    </p>
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