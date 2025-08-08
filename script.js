//console.clear();

     gsap.registerPlugin(MotionPathPlugin);
       gsap.registerPlugin(SplitText);
       gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray(".slide");
const images = gsap.utils.toArray(".image").reverse();
const slideImages = gsap.utils.toArray(".slide__img");
const outerWrappers = gsap.utils.toArray(".slide__outer");
const innerWrappers = gsap.utils.toArray(".slide__inner");
const count = document.querySelector(".count");
const wrap = gsap.utils.wrap(0, sections.length);
let animating;
let currentIndex = 0;

gsap.set(outerWrappers, { xPercent: 100 });
gsap.set(innerWrappers, { xPercent: -100 });
gsap.set(".slide:nth-of-type(1) .slide__outer", { xPercent: 0 });
gsap.set(".slide:nth-of-type(1) .slide__inner", { xPercent: 0 });

function gotoSection(index, direction) {
 animating = true;
 index = wrap(index);

 let tl = gsap.timeline({
  defaults: { duration: 1, ease: "expo.inOut" },
  onComplete: () => {
   animating = false;
  }
 });

 let currentSection = sections[currentIndex];
 let heading = currentSection.querySelector(".slide__heading");
 let nextSection = sections[index];
 let nextHeading = nextSection.querySelector(".slide__heading");

 gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
 gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
 gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

 tl
  .set(count, { text: index + 1 }, 0.32)
  .fromTo(
   outerWrappers[index],
   {
    xPercent: 100 * direction
   },
   { xPercent: 0 },
   0
  )
  .fromTo(
   innerWrappers[index],
   {
    xPercent: -100 * direction
   },
   { xPercent: 0 },
   0
  )
  .to(
   heading,
   {
    "--width": 800,
    xPercent: 30 * direction
   },
   0
  )
  .fromTo(
   nextHeading,
   {
    "--width": 800,
    xPercent: -30 * direction
   },
   {
    "--width": 200,
    xPercent: 0
   },
   0
  )
  .fromTo(
   images[index],
   {
    xPercent: 125 * direction,
    scaleX: 1.5,
    scaleY: 1.3
   },
   { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
   0
  )
  .fromTo(
   images[currentIndex],
   { xPercent: 0, scaleX: 1, scaleY: 1 },
   {
    xPercent: -125 * direction,
    scaleX: 1.5,
    scaleY: 1.3
   },
   0
  )
  .fromTo(
   slideImages[index],
   {
    scale: 2
   },
   { scale: 1 },
   0
  )
  .timeScale(0.8);

 currentIndex = index;
}



setInterval(() => {
  gotoSection(currentIndex + 1, +1);
}, 5000);
let element_loader=document.querySelector(".loader p");

let loader__content=document.querySelector(".loader__content");
let text_element=element_loader.textContent.split("");
let index=0;
element_loader.textContent="";

const interval = () => {
  textInterval = setInterval(() => {
    if(index < text_element.length) {
      if(text_element[index] == " ") {
        element_loader.innerHTML+="<br>";  
        index++; 
        return;
      }
      element_loader.innerHTML+=text_element[index];
      index++;
    } else {
      clearInterval(textInterval);
    }
  }, 100);
  
  return textInterval; 
}
let cursor_svg=document.getElementById("cursor");

    let altura=window.innerHeight;
    let ancho=window.innerWidth;
function move_element(path, accion, element){
  // Verificar que el path es válido
  if (!path) {
    console.error("Path no definido");
    return;
  }
  
  gsap.to(element, {
    duration: 2,
    motionPath: {
      path: path,
      curviness: 1
    },
    ease: "power1.inOut",
    onComplete: accion ? accion : null,
  });
}
let loader=document.querySelector(".loader");
let path = [
      {x: 0, y: 0},
      {x: ancho-50, y: -altura+80}
    ];
let sun=document.getElementById("sun");
document.addEventListener("DOMContentLoaded", () => {
    
let proyects=gsap.utils.toArray(".proyects");
 gsap.to(proyects, {
    xPercent: -100 * (proyects .length - 1),
    ease: "none", 
    scrollTrigger: {
      trigger: ".container_proyects",
      pin: true,
      scrub: 0.1,
      end: "+=3000"
    }
  });
     interval();
     
    cursor_svg.style.display="block";
    
    
    
    move_element(path, () => {
      loader.style.backgroundColor = "transparent";
      element_loader.style.color = "black";
      loader__content.style.border = "black 2px solid";
      animate_text_words(".animate_text_word", ".active_animate_word");
      if (sun) sun.remove();
       path = [
      {x: ancho/2, y:-altura/2},
    ];
        move_element(path, () => {
             path = [
      {x: ancho/1.2, y:-altura/1.3},
    ];
               move_element(path, () => {
            
        }, "#cursor");
        path = [
      {x: ancho/2.5, y:-altura/6},
    ];
             move_element(path, () => {
            loader.remove();
            document.getElementById("title_carrucel").style.display = "block";
//             gsap.to("#title_carrucel", {
//   scrollTrigger: {
//     trigger: "#title_carrucel",
//     endTrigger:".end_animate_active",
//     start: "top center",  
//     end: "+=1000",         
//     scrub: true
//   },
//   ease: "power1.inOut",
//   onComplete: ()=>{

//   },
//   motionPath: {
//     path: [
//       { x: 0, y: 0 },
//       { x: -ancho, y: altura},
//     ],
//     curviness: 1.5
//   }
// });

        }, ".loader__content");
        }, "#cursor");
    }, "#cursor");
    ScrollTrigger.create({
      trigger: ".section_2",
      start: "top 70%",
      once:true,
      onEnter: ()=>{
        write_split("search_input_yofi", "Yofi Studio");
      }

    });
    gsap.to(".proyect_element img, .proyects, #text_scroll",{
      
      marginTop:200, 
      ease: "bounce.out",
       scrollTrigger: {
          trigger: ".proyects",
          start: "top 30%",
          end: "bottom 30%",
          scrub: 1
        }

    });const words = [
  { text: "En Yofi Studio, creamos más que una simple página web <br>Creamos:", font: "Quicksand, sans-serif" },
  { text: "Esencia", font: "Pacifico, cursive" },
  { text: "Arte", font: "Bungee Shade, cursive" },
  { text: "Diseño", font: "Monoton, cursive" },
  { text: "Emociones", font: "Amatic SC, cursive" },
  { text: "Pasión", font: "Dancing Script, cursive" },
  { text: "Estilo", font: "Lobster, cursive" },
  { text: "Innovación", font: "Monoton, cursive" },
  { text: "Magia", font: "Bungee Shade, cursive" }
];


const textElement = document.getElementById("text_scroll");
textElement.innerHTML = words[0].text;
textElement.style.fontFamily = words[0].font;

words.forEach((word, i) => {
  ScrollTrigger.create({
    trigger: ".section_2",
    start: `${i * 100}vh top`,
    end: `${(i + 1) * 100}vh top`,
    onEnter: () => {
      textElement.innerHTML = word.text;
      textElement.style.fontFamily = word.font;
    },
    onEnterBack: () => {
      textElement.innerHTML = word.text;
      textElement.style.fontFamily = word.font;
    }
  });
});


});
//animate text words
function animate_text_words(element, element_active){
  
let split=SplitText.create(element, {type:'words'});
    gsap.from(split.words,
  {
rotationX: window.innerWidth < 768 ? -120 : -150,
transformOrigin: window.innerWidth < 768 ? "50% 50% -120px" : "50% 50% -160px",
opacity:0,
duration: window.innerWidth < 768 ? 0.7 : 0.9,
ease: "power2",
stagger: window.innerWidth < 768 ? 0.08 : 0.1,
scrollTrigger:{
  trigger:element_active,
  start: window.innerWidth < 768 ? "top 90%" : "top 80%",
  toggleActions: "play reverse play reverse"
}

  }
);
}
async function write_split(elemento, texto_write){
  let elemento_split=document.getElementById(elemento);
  let split=texto_write.split("");
  for(let i=0; i<split.length; i++){
   
      elemento_split.textContent+=split[i];
await new Promise(resolve => setTimeout(resolve, 300));
  }
}