<script>
  const data = {
    dogs: [
      {
        id: 1,
        name: "Akita",
        Age: 14,
        imageUrl:
          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg",
      },
      {
        id: 2,
        name: "Beagle",
        Age: 15,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Beagles-standing-in-a-frosty-field-on-a-cold-morning.jpg",
      },
      {
        id: 3,
        name: "Chow Chow",
        Age: 12,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Chow-Chow-On-White-03.jpg",
      },
      {
        id: 4,
        name: "Yorkshire Terrier",
        Age: 15,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Yorkshire-Terrier-bowing-indoors.jpg",
      },
      {
        id: 5,
        name: "Shiba",
        Age: 16,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-standing-in-profile-outdoors.jpg",
      },
      {
        id: 6,
        name: "Shih Tzu",
        Age: 18,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-On-White-01.jpg",
      },
      {
        id: 7,
        name: "Scottish Terrier",
        Age: 12,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Scottish-Terrier-On-White-02.jpg",
      },
      {
        id: 8,
        name: "Siberian Husky",
        Age: 14,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg",
      },
      {
        id: 9,
        name: "Small Munsterlander",
        Age: 15,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Munsterlander.5.jpg",
      },
      {
        id: 10,
        name: "Spanish Water Dog",
        Age: 14,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Spanish-Water-Dog.jpg",
      },
      {
        id: 11,
        name: "Hokkaido",
        Age: 15,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Hokkaido.1.jpg",
      },
      {
        id: 12,
        name: "Russell Terrier",
        Age: 14,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Russell-Terrier-On-White-03.jpg",
      },
      {
        id: 13,
        name: "Norfolk Terrier",
        Age: 16,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Norfolk-Terriers-running-together.jpg",
      },
      {
        id: 14,
        name: "Dalmatian",
        Age: 13,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Dalmatian-On-White-01.jpg",
      },
      {
        id: 15,
        name: "Danish-Swedish Farmdog",
        Age: 13,
        imageUrl:
          "https://www.akc.org/wp-content/uploads/2017/11/Danish-Swedish-Farmdog-standing-outdoors-at-dusk.jpg",
      },
    ],
  };
</script>

<section>
  {#each data.dogs as { name, Age, imageUrl }, index}
    <div class="container">
      <p><img src={imageUrl} alt={name} /></p>
      <p>Race Name:{name}</p>
      <p>Lives:{Age} years</p>
    </div>
  {/each}
</section>

<style>
  div.container {
    width: 300px;
    height: 265px;
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
  section {
    display: flex;
    flex-wrap: wrap;
  }
</style>
