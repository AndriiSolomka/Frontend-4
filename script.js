let counter = 0;
const photoPath = "https://vgorode.ua/img/article/3872/6_main-v1577255306.jpg";
const parent = document.querySelector(".city-photo");

function getCurrentImage() {
  return (
    document.getElementById(`cityPhoto_${counter}`) ||
    document.getElementById("cityPhoto")
  );
}

function addImg() {
  counter++;
  const newImage = Object.assign(document.createElement("img"), {
    id: `cityPhoto_${counter}`,
    src: photoPath,
    width: 300,
    style: "display: block;",
  });

  parent.appendChild(newImage);
}

function deleteImg() {
  const image = getCurrentImage();
  if (!image) return;

  parent.removeChild(image);
  counter = Math.max(0, counter - 1);
}

function resizeImg(action) {
  const image = getCurrentImage();
  if (!image) return;

  const delta = action === "increase" ? 100 : -100;
  const newWidth = Math.max(150, image.width + delta);

  image.width = newWidth;
}

const clickedElements = new Set();
const elementId = "hobby2";

function toggleColor(element) {
  const isActive = element.style.backgroundColor === "yellow";
  element.style.backgroundColor = isActive ? "rgb(237, 227, 215)" : "yellow";
  element.style.color = "black";
  clickedElements.add(element);
}

function handleColorById() {
  toggleColor(document.getElementById(elementId));
}

function handleColorByQuery() {
  toggleColor(document.querySelector(".hobbies li:nth-child(3)"));
}

document.getElementById(elementId)?.addEventListener("click", handleColorById);
document
  .querySelector(".hobbies li:nth-child(3)")
  ?.addEventListener("click", handleColorByQuery);
