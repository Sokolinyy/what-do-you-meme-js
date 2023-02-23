// Get a reference to the container element where you want to add the images
const container = document.getElementById("image-container");

// Create an array of image URLs
const images = [];

for (let i = 1; i <= 200; i++) {
  images.push(`images/${i}.png`);
}

// Get a reference to the image container in the HTML
// Get a reference to the image container and add-image button in the HTML
const imageContainer = document.getElementById("image-container");
const addImageButton = document.getElementById("add-image-btn");

// Select 7 random images from the array
let selectedImages = getRandomImages(images, 7);

// Display the selected images in the image container
displayImages(selectedImages);

// Add a click event listener to the add-image button that adds a new random image to the selectedImages array and displays it
addImageButton.addEventListener("click", () => {
  // Generate a new random image and add it to the selectedImages array
  const newImage = getRandomImages(images, 1)[0];
  selectedImages.push(newImage);

  // Clear the image container
  imageContainer.innerHTML = "";

  // Display the updated set of images
  displayImages(selectedImages);
});

function getRandomImages(array, count) {
  // Shuffle the array
  const shuffled = array.sort(() => 0.5 - Math.random());

  // Select the first "count" elements of the shuffled array
  return shuffled.slice(0, count);
}

function displayImages(images) {
  images.forEach((imageSrc, index) => {
    // Create an image element
    const imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.style.width = "100%"
    imageElement.style.display = "block"
    imageElement.style.margin = "auto"

    // Create a button element
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Delete Image";

    // Add a click event listener to the button that removes the corresponding image from the array
    buttonElement.addEventListener("click", () => {
      removeImageByIndex(index);
    });

    buttonElement.style.width = "100%"
    buttonElement.style.height = "120px"
    buttonElement.style.backgroundColor = "black"
    buttonElement.style.color = "white"
    buttonElement.style.fontSize = "2rem"
    buttonElement.style.display = "block"
    buttonElement.style.margin = "auto"
    buttonElement.style.marginBottom = "70px"


    // Append the image and button elements to the container
    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(buttonElement);
  });
}

function removeImageByIndex(index) {
  // Remove the image at the given index from the selectedImages array
  selectedImages.splice(index, 1);

  // Clear the image container
  imageContainer.innerHTML = "";

  // If there are still images left in the selectedImages array, display them
  if (selectedImages.length > 0) {
    displayImages(selectedImages);
  } else {
    // If there are no more images left in the selectedImages array, remove the container from the DOM
    imageContainer.remove();
  }
}