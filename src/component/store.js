import { writable } from "svelte/store";

export const store = writable({
  dogs: [
    {
      id: 1,
      name: "Akita",
      age: 14,
      imageUrl:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg",
    },
    {
      id: 2,
      name: "Beagle",
      age: 15,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Beagles-standing-in-a-frosty-field-on-a-cold-morning.jpg",
    },
    {
      id: 3,
      name: "Chow Chow",
      age: 12,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Chow-Chow-On-White-03.jpg",
    },
    {
      id: 4,
      name: "Yorkshire Terrier",
      age: 15,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Yorkshire-Terrier-bowing-indoors.jpg",
    },
    {
      id: 5,
      name: "Shiba",
      age: 16,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-standing-in-profile-outdoors.jpg",
    },
    {
      id: 6,
      name: "Shih Tzu",
      age: 18,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-On-White-01.jpg",
    },
    {
      id: 7,
      name: "Scottish Terrier",
      age: 12,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Scottish-Terrier-On-White-02.jpg",
    },
    {
      id: 8,
      name: "Siberian Husky",
      age: 14,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg",
    },
    {
      id: 9,
      name: "Small Munsterlander",
      age: 15,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Munsterlander.5.jpg",
    },
    {
      id: 10,
      name: "Spanish Water Dog",
      age: 14,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Spanish-Water-Dog.jpg",
    },
    {
      id: 11,
      name: "Hokkaido",
      age: 15,
      imageUrl: "https://www.akc.org/wp-content/uploads/2017/11/Hokkaido.1.jpg",
    },
    {
      id: 12,
      name: "Russell Terrier",
      age: 14,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Russell-Terrier-On-White-03.jpg",
    },
    {
      id: 13,
      name: "Norfolk Terrier",
      age: 16,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Norfolk-Terriers-running-together.jpg",
    },
    {
      id: 14,
      name: "Dalmatian",
      age: 13,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Dalmatian-On-White-01.jpg",
    },
    {
      id: 15,
      name: "Danish-Swedish Farmdog",
      age: 13,
      imageUrl:
        "https://www.akc.org/wp-content/uploads/2017/11/Danish-Swedish-Farmdog-standing-outdoors-at-dusk.jpg",
    },
  ],
});
