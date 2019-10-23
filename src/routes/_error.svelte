<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<section class="vh-100 mt5-ns baskerville">
  <header class="tc ph5 lh-copy">
      <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">{status}</h1>
      <h2 class="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
	  {#if dev && error.stack}
		<pre>{error.stack}</pre>
	  {/if}
  </header>

</section>


