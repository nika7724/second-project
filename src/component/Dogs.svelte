<script>
  import { store } from "./store.js";
  import DogCard from "./DogCard.svelte";
</script>

<section>
  {#each $store.dogs as dogItem}
    <DogCard dog={dogItem} />
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
  }
</style>

