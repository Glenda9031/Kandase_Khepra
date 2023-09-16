const imgEl = document.getElementById('random-image');
const btn = document.getElementById('btn');

const srcArray = ['img1.jpg', 'img2.JPG', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.JPG', 'img7.jpg', 'img8.JPG', 'img9.JPG', 'img10.JPG', 'img11.JPG', 'img12.JPG', 'img13.jpg'];

btn.addEventListener('click', () => {
  window.location.reload();
});

randomImage();
function randomImage() {
  const randomIndex = Math.floor(Math.random() * srcArray.length);

  imgEl.src = srcArray[randomIndex];


}
/*const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;

imageIndexes.forEach(i => {
  const image = document.createElement('img');
  image.src = `images/lo-${i}.jpg`;
  image.alt = `Kandase with lady with bantu braids ${i}`;
  image.classList.add('galleryImg');

  image.addEventListener('click', () => {

  })

  gallery.appendChild(image);
});*/