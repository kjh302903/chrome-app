const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const todayImg = images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");

image.src = `/img/${todayImg}`;

document.body.appendChild(image);