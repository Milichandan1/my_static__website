document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".grid");

  // List of image filenames in assets/images
  const imageList = [
    "sample1.jpg",
    "sample2.jpg",
    "sample3.jpg"
  ];

  imageList.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `assets/images/${filename}`;
    img.alt = filename.split(".")[0];
    img.classList.add("gallery-img");

    // Optional hover effect
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });

    gallery.appendChild(img);
  });
});
