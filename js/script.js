const imgs = [
  { img: 'img_lights_wide.jpeg', caption: 'Luces de mi alma' },
  { img: 'img_mountains_wide.jpeg', caption: 'El recorrido de mis sensaciones' },
  { img: 'img_nature_wide.jpeg', caption: 'Pachamama la mas linda' },
  { img: 'img_snow_wide.jpeg', caption: 'Blanca como noche de cocaína' }
]

const crearDivs = (imgs) => {
  let divs = ''
  imgs.forEach((value, i) => {
      divs += `
      <div class = "mySlides fade">
        <div class="numbertext">${i + 1} / ${imgs.length}</div>
        <img src="./img/${value.img}" style="width:100%">
        <div class="text">${value.caption}</div>
      </div>
    `;
  }
  )
  return divs;
}
const crearDots = (cantImgs) => {
  let dots = ''
  for (let i = 0; i < cantImgs; i++) {
    dots += `<span class="dot" onclick="currentSlide(${i+1})"></span>`
  }
  return dots;
}

const crearSlider = (imgs) => {
  let slider = document.getElementById('slider')
  slider.innerHTML = crearDivs(imgs)
}

const divDots = (imgs) => {
  let dotsContent = document.getElementById('dots')
  dotsContent.innerHTML = crearDots(imgs.length)
}

crearSlider(imgs)
divDots(imgs)

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
