<script>
  export let segment;
</script>

<nav class="dt w-100 border-box pa3 mw9 center code">
  <a
    class="dtc v-mid dark-green hover-purple link dim w-25 {segment === undefined ? 'selected' : ''}"
    href="."
    title="home">
    Forrest Blade
    <br />
    <small class="dark-gray">brutalist web application developer</small>
  </a>
  <div class="dtc v-mid w-75 tr">
    <a
      class="link dim hover-light-green dark-gray f6 f5-ns ph2 dib {segment === 'blog' ? 'selected' : ''}"
      rel="prefetch"
      href="blog"
      title="blog">
      λ blog
    </a>
  </div>
</nav>
<section class="pa3 tr mw9 center w-100">
  <a
    class="f3 link hover-dark-blue b no-underline black dib ph2 pv1"
    href="./#portfolio">
    portfolio
  </a>
  <a
    class="f3 link b hover-light-green no-underline black dib ph2 pv1"
    href="/about">
    about
  </a>
  <a class="f3 link b hover-orange no-underline black dib ph2 pv1" href="/gifs">
    gifs
  </a>
</section>
