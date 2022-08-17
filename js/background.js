const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const todayImg = images[Math.floor(Math.random()*images.length)];

const Url = `/img/${todayImg}`;

document.body.style.backgroundImage = `url(${Url})`;