<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    margin: auto;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
