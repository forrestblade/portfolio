<script>
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(1995, 1, 5);
  const secondDate = new Date();

  const diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
</script>

<article class="pa3 ph3 pa5-ns" data-name="slab-stat-small">
  <div class="cf">
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Email</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="pointer hover-light-red link dim"
          href="mailto:forrestblade.code@gmail.com">
          lets collab
        </a>
      </dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Resume</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="link hover-green"
          href="https://docs.google.com/document/d/1Rr7gn03E5Rnp3wUfPElH0LHtBvTNsXTzKs9HKg-2l6g/edit#heading=h.rfgvkg2ifhfd">
          here
        </a>
      </dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Github</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="link hover-blue"
          href="https://github.com/forrestblade">
          overview
        </a>
      </dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Days Old</dd>
      <dd class="f3 fw6 ml0 hover-yellow">{diffDays}</dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">Favorite Dog</dd>
      <dd class="f3 fw6 ml0 hover-red">All of Them</dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title">
      <dd class="f6 fw4 ml0">Movie</dd>
      <dd class="f3 fw6 ml0">
        <a
          class="link hover-light-green"
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
    module for all sorts of content. I'm focused on applying simple, minimal
    machine learning solutions. Shoot me an
    <a
      class="pointer hover-red underline dim dark-green"
      href="mailto:forrestblade.code@gmail.com">
      email
    </a>
    and we can start a conversation. If you would like to view my resume it is
    available
    <a
      href="https://docs.google.com/document/d/1Rr7gn03E5Rnp3wUfPElH0LHtBvTNsXTzKs9HKg-2l6g/edit?usp=sharing"
      class="pointer hover-red underline dim dark-green">
      here
    </a>
    .
  </p>
</article>
