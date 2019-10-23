<script>
  import GifSearch from "../../components/GifSearch.svelte";
  import SearchResults from "../../components/SearchResults.svelte";

  const GIFS = "Z2IU9ynLCIABokBbv8xQE3rzuwZHRWsW";

  let searchQuery = "";
  let searchTerm = null;
  let searchResults = [];
  let isLoading = false;

  function handleSubmit() {
    searchTerm = searchQuery.trim();
    searchResults = [];

    if (!searchTerm) return;

    searchGifs(searchTerm);
  }

  function searchGifs(search) {
    isLoading = true;

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIFS}&q=${search}&limit=125&offset=0&rating=G&lang=en`;

    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        if (data.total === 0) {
          alert("No gifs were found for your search query.");
          return;
        }

        searchResults = [...searchResults, ...data.data];
      })
      .catch(() => alert("An error occured!"))
      .finally(() => {
        isLoading = false;
      });
  }
</script>

<main id="app">
    <h3 class="tc">
      Search for memes here or checkout where
      <a class="pointer hover-red underline dim dark-green" href="https://giphy.com/" target="_blank" rel="noopener"> they come from</a>.
    </h3>	
    <GifSearch bind:query={searchQuery} handleSubmit={handleSubmit}/>
    <div class="cf pa4">
      <SearchResults results={searchResults} />
    </div>
</main>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
