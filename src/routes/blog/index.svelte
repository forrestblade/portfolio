<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<section class="cf pa3 mw9 center">
  <header class="code w-100 pa3-m pa4-l mb3">
    <h2 class="lh-title f3 b mt0">λ recent posts</h2>
  </header>
  {#if posts.length > 0}
    <!-- content here -->
    {#each posts as post}
      <section class="mw7 cf center">
        <article class="pv4 bt bb b--black-10 ph3 ph0-l">
          <div class="flex flex-column flex-row-ns">
            <a rel="prefetch" class="link" href="blog/{post.slug}">
              <div class="w-100 pr3-ns order-2 ">
                <h1 class="f3 code underline mt0 lh-title">{post.title}</h1>
                <p class="f5 f4-l link code">
                  Lorem ipsum dolor amet shabby chic franzen irony occupy twee
                  meditation semiotics. Dreamcatcher asymmetrical prism
                  meditation. Green juice bitters vice prism beard meggings
                  fixie.
                </p>
              </div>
            </a>
          </div>
          <p class="f6 lh-copy gray mv0">
            By
            <span class="ttu">Forrest Blade</span>
          </p>
          <time class="f6 db gray">{post.date}</time>
        </article>
      </section>
    {/each}
  {:else}
    <!-- else content here -->
    <section class="vh-100 mt5-ns code">
      <header class="tc ph5 lh-copy">
        <h2 class="tc f1-l fw1">Why don't you fucking write something?</h2>
      </header>
    </section>
  {/if}
</section>
