const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const catalog = [
  {
    id: 1,
    img: "./img/cp-cod.png",
    titles: [
      "31 CP",
      "63 CP",
      "128 CP",
      "321 CP",
      "645 CP",
      "1373 CP",
      "2060 CP",
      "3564 CP",
    ],
    prices: [
      "Rp. 4.894",
      "Rp. 9.774",
      "Rp. 19.575",
      "Rp. 48.937",
      "Rp. 97.231",
      "Rp. 195.127",
      "Rp. 291.247",
      "Rp. 489.127",
    ],
  },
  {
    id: 2,
    img: "./img/uc-pubg.png",
    titles: [
      "60 UC",
      "325 UC",
      "660 UC",
      "1800 UC",
      "3850 UC",
      "8100 UC",
      "16200 UC",
      "24300 UC",
    ],
    prices: [
      "Rp. 13.559",
      "Rp. 66.259",
      "Rp. 131.757",
      "Rp. 328.931",
      "Rp. 658.926",
      "Rp. 1.317.850",
      "Rp. 2.635.700",
      "Rp. 3.953.550",
    ],
  },
  {
    id: 3,
    img: "./img/point-valorant.png",
    titles: [
      "56 Points",
      "125 Points",
      "420 Points",
      "700 Points",
      "1375 Points",
      "2400 Points",
      "4000 Points",
      "8150 Points",
    ],
    prices: [
      "Rp. 7.890",
      "Rp. 13.514",
      "Rp. 45.045",
      "Rp. 72.072",
      "Rp. 135.135",
      "Rp. 225.225",
      "Rp. 360.360",
      "Rp. 720.721",
    ],
  },
];

let choosenCatalog = catalog[0];

const currentCatalogImg = document.querySelectorAll(".catalogImg");
const currentCatalogTitle = document.querySelectorAll(".catalogTitle");
const currentCatalogPrice = document.querySelectorAll(".catalogPrice");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Slider FX
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change Catalog
    choosenCatalog = catalog[index];

    // Change each Img of selected Catalog
    currentCatalogImg.forEach((img, index) => {
      img.src = choosenCatalog.img;
    })
    // Change each title of selected Catalog
    currentCatalogTitle.forEach((title, index) => {
      title.textContent = choosenCatalog.titles[index];
    })
    // Change each price of selected Catalog
    currentCatalogPrice.forEach((price, index)=> {
      price.textContent = choosenCatalog.prices[index];
    })
  });
});
