const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg"
]

const random_images = images[Math.floor(Math.random() * (images.length))]
const bgImage = document.createElement("img")
bgImage.src = `img/${random_images}`
document.body.appendChild(bgImage)