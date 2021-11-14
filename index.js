const imagesObject = [
  {
    imageUrl: "https://picsum.photos/id/237/600/600",
    alt: "computer",
  },
  {
    imageUrl: "https://picsum.photos/id/201/600/600",
    alt: "computer",
  },
  {
    imageUrl: "https://picsum.photos/id/203/600/600",
    alt: "computer",
  },
  {
    imageUrl: "https://picsum.photos/id/100/600/600",
    alt: "computer",
  },
  {
    imageUrl: "https://picsum.photos/id/101/600/600",
    alt: "computer",
  },
];

let imageCounter = 0;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const image = document.querySelector(".image");
let isPrevDisabled = false;
let isNextDisabled = false;

prev.addEventListener("click", () => {
  if (isNextDisabled === true) {
    next.removeAttribute("disabled");
  }
  imageCounter--;
  displayImage();
  if (imageCounter === 0) {
    isPrevDisabled = true;
    prev.setAttribute("disabled", true);
  }
});

next.addEventListener("click", () => {
  if (isPrevDisabled === true) {
    isPrevDisabled = true;
    prev.removeAttribute("disabled");
  }
  imageCounter++;
  displayImage();
  if (imageCounter === imagesObject.length - 1) {
    isNextDisabled = true;
    next.setAttribute("disabled", true);
  }
});

const displayImage = () => {
  image.setAttribute("src", imagesObject[imageCounter].imageUrl);
  image.setAttribute("alt", imagesObject[imageCounter].alt);
};
