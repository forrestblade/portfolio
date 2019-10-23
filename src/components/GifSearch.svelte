<script>
	export let query = "";
	export let handleSubmit;
</script>

<div class="search bg-light-red mw7 center pa4 br2-ns ba b--black-10">
  <form class="search-form cf bn ma0 pa0" on:submit|preventDefault={handleSubmit}>
    <input bind:value={query} class="search-input f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" type="search" />
		<input class="f5 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type='submit' value="search">
  </form>
</div>
