<script>
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(1995, 1, 5);
  const secondDate = new Date();

  const diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
</script>

<article class="pa3 pa5-ns" data-name="slab-stat-small">
  <div class="cf">
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Email</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="pointer hover-red link dim"
          href="mailto:forrestblade.code@gmail.com">
          lets collab
        </a>
      </dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Resume</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="link hover-green mr5-l"
          href="https://drive.google.com/file/d/1QX1-TV8vL74Ry15bDhFxKzSVZvbKuYso/view">
          here
        </a>
      </dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Days Old</dd>
      <dd class="f3 fw6 ml0">{diffDays}</dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Favorite Dog</dd>
      <dd class="f3 fw6 ml0">All of Them</dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Song</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="link hover-green "
          href="https://open.spotify.com/track/51rPRW8NjxZoWPPjnRGzHw?si=rR8ZYhUOSIiKqFEMWVsA8g">
          tadow
        </a>
      </dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title">
      <dd class="f6 fw4 ml0">Movie</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="link hover-green"
          href="https://en.wikipedia.org/wiki/Pom_Poko">
          pom poko
        </a>
      </dd>
    </dl>
  </div>
</article>
<article class="pa3 pa5-ns">
  <h1 class="f3 f2-m f1-l">about</h1>
  <p class="measure lh-copy">
    I work with a lot of modern web technologies, and I am always looking for
    new skills to learn. I am interested in how the browser can be a delivery
    module for all sorts of content. I'm currently working through some machine
    learning courses, so check back soon for updates on that. Shoot me an
    <a
      class="pointer hover-red underline dim dark-green"
      href="mailto:forrestblade.code@gmail.com">
      email
    </a>
    and we can start a conversation. If you would like to view my resume it is
    available
    <a
      href="https://drive.google.com/file/d/1QX1-TV8vL74Ry15bDhFxKzSVZvbKuYso/view"
      class="pointer hover-red underline dim dark-green">
      here
    </a>
    .
  </p>
  <!-- <p class="measure lh-copy">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
    no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p> -->
</article>
