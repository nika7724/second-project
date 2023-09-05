<script>
  import { store } from "./store.js";
  export let id;

  // Get list of dogs from store and
  // Get the dog from that array based on id I get from the route
  // Store the dog object to a local variable
  // Dispay the variable in the template

  function showDog(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        return arr[i];
      }
    }
  }

  //need to find the correct dog based on the passed ID
  let dogInfo = showDog($store.dogs, id);
  console.log(dogInfo);
</script>

<section class="blockDetails">
  <div class="dogProfile">
    <p><img src={dogInfo.imageUrl} alt={dogInfo.name} /></p>
    <p>Name:{dogInfo.name}</p>
    <p>Live:{dogInfo.age}</p>
  </div>
</section>

<style>
  section.blockDetails {
    margin-top: 100px;
    margin-left: 400px;
    display: block;
  }

  div.dogProfile {
    width: 1000px;
    height: 705px;
    margin: 1rem;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  img {
    width: 900px;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
  }
</style>
