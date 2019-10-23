<script>
	export let segment;
</script>

<nav class="dt w-100 border-box pa3 ph5-ns code">
  <a class="dtc v-mid dark-green hover-purple link dim w-25 {segment === undefined ? "selected" : ""}"  href='.' title="Home">
    Forrest Blade
	<br/>
	<small>brutalist web application developer</small>
  </a>
  <div class="dtc v-mid w-75 tr">
    <a class="link dim hover-light-green dark-gray f6 f5-ns dib mr3 mr4-ns {segment === "blog" ? "selected" : ""}" rel=prefetch href='blog' title="Blog">λ blog</a>
  </div>
</nav>
  <section class="pa3 tr w-100 ph5-ns">
    <a class="f3 link hover-dark-blue b no-underline black dib ph2 pv1" href="./#portfolio">portfolio</a>
    <a class="f3 link b hover-light-green no-underline black dib ph2 pv1" href="/about">about</a>
    <a class="f3 link b hover-orange no-underline black dib ph2 pv1" href="/gifs">gifs</a>
    <a class="f3 link b hover-red no-underline black dib ph2 pv1" href="https://open.spotify.com/playlist/37i9dQZEVXcKkDdmEwVelx?si=zIgC29xTRHymIJdFFV0x9w">music</a>
    <a class="f3 link b hover-light-green no-underline black dib ph2 pv1" href="https://github.com/forrestblade">github</a>
    <a class="f3 link b hover-pink no-underline black dib ph2 pv1" href="https://instagram.com/forrest.blade">instagram</a>
    <a class="f3 link b hover-purple no-underline black dib ph2 pv1" href="https://twitter.com/codecoffeedoggo">twitter</a>
  </section>
