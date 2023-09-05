<script>
  export let dog;
</script>

<div class="container">
  <p><img src={dog.imageUrl} alt={dog.name} /></p>
  <p>Race Name:{dog.name}</p>
  <p>Lives:{dog.age} years</p>
  <button class="btn" onclick="window.location.href='/dog/{dog.id}'"
    >Show More</button
  >
</div>

<style>
  div.container {
    width: 300px;
    height: 300x;
    margin: 1rem;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  img {
    width: 250px;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
  }
</style>
