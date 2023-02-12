class images {
    constructor(width, height){
       this.width= width;
       this.height = height;
    }}
//select pixel screen or picture
const input = document.getElementById("fileInput");
input.addEventListener("change", function() {
  const file = this.files[0];
  const url = URL.createObjectURL(file);
  const img = document.getElementById("file");
   img.src = url;
  document.getElementById('select-image').addEventListener('click',function(){
    var widthImage = img.naturalWidth;
    var heightImage = img.naturalHeight;
    const image = new images(widthImage, heightImage)
    localStorage.setItem('valueY', heightImage)
    localStorage.setItem('valueX', widthImage)
    document.getElementById('select-screen').style.opacity=0.2;
    document.getElementById('select-image').style.opacity=0.9;
    imageResolution(widthImage, heightImage)
    console.log(image)
  })
  document.getElementById('select-screen').addEventListener('click', function(){
    var widthScreen = screen.width;
    var heightScreen = screen.height;
    const screenPixel = new images(widthScreen, heightScreen)
    localStorage.setItem('valueY', heightScreen)
    localStorage.setItem('valueX', widthScreen)
    document.getElementById('select-screen').style.opacity=0.9;
    document.getElementById('select-image').style.opacity=0.2;
    screenR(widthScreen, heightScreen)
    console.log(screenPixel)
  })
 
});
///resolution of the picture screen
function screenR(a,b){ 
    var widthA = a * 0.9;
    var heightB = b * 0.9;
localStorage.setItem('width', widthA)
localStorage.setItem('height', heightB)
 document.getElementById('counter-general').style.width= `${widthA}px` ;
 document.getElementById('counter-general').style.height= `${heightB}px`;
}
///resolution of the picture 
function imageResolution(a,b){
  if(a >= 410 ){
   var widthA = a / 2;
   document.getElementById('counter-general').style.width= `${widthA}px`;
   localStorage.setItem('width', widthA)
  }if(b >= 610){
    var heightB = b / 2;
    document.getElementById('counter-general').style.height= `${heightB}px`;
    localStorage.setItem('height', heightB)
  }else{
    document.getElementById('counter-general').style.width= `${a}px`;
    document.getElementById('counter-general').style.height= `${b}px`;
    localStorage.setItem('width', a)
    localStorage.setItem('height', b)
  }
}

///alter the size of the image
let counterLess = 0;
let counterAdd = 0;
document.getElementById('alter-add').addEventListener('click', function(){
    var alterW = localStorage.getItem('width')
    var alterH = localStorage.getItem('height')
    counterAdd +=10;
      var changeWidth = parseInt(alterW) + counterAdd;
      var changeHeight = parseInt(alterH) +   counterAdd;
    console.log(changeWidth, changeHeight)
        document.getElementById('counter-general').style.width= `${changeWidth}px`;
        document.getElementById('counter-general').style.height= `${changeHeight}px`; 
  })
   
    document.getElementById('alter-rest').addEventListener('click',function(){
        var alterW = localStorage.getItem('width')
        var alterH = localStorage.getItem('height')
        counterLess +=10;
        var changeWidth = alterW - counterLess;
        var changeHeight = alterH - counterLess;
        console.log(changeWidth, changeHeight)
        document.getElementById('counter-general').style.width= `${changeWidth}px`;
        document.getElementById('counter-general').style.height= `${changeHeight}px` ;  
    })

///get width and height of image
function calY (a) {
    const valueY  = localStorage.getItem('valueY')
    const y = valueY  / 20;
    let c = y /2;
    let res = y * a - c;
    const list = document.getElementById('conten-numbers')
    const element = document.createElement('div')
    element.className='c-y';
    element.innerHTML=` <h3 class="h3-y" >Y </h3><p> ${parseInt(res)} </p> `;
    list.appendChild(element)
}

function calX (a) {
    const valueX  = localStorage.getItem('valueX')
    const x = valueX / 20;
    let b = x / 2;
    let res = x * a - b;
    const list = document.getElementById('conten-numbers')
    const element = document.createElement('div')
    element.className='c-x'
    element.innerHTML=`<h3 class="h3-x">X </h3><p> ${parseInt(res)} </p> `;
    list.appendChild(element)}

 function changeZindexY(){
    document.getElementById('value-y').style.zIndex=0;
    document.getElementById('value-x').style.zIndex= 1;
}

function changeZindexX(){
    document.getElementById('value-y').style.zIndex=1;
    document.getElementById('value-x').style.zIndex= 0;
}


////////click pixel in x
document.getElementById('x-1').addEventListener('click', function(){calX(1), changeZindexX()})
document.getElementById('x-2').addEventListener('click', function(){calX(2), changeZindexX()})
document.getElementById('x-3').addEventListener('click', function(){calX(3), changeZindexX()})
document.getElementById('x-4').addEventListener('click', function(){calX(4), changeZindexX()})
document.getElementById('x-5').addEventListener('click', function(){calX(5), changeZindexX()})
document.getElementById('x-6').addEventListener('click', function(){calX(6), changeZindexX()})
document.getElementById('x-7').addEventListener('click', function(){calX(7), changeZindexX()})
document.getElementById('x-8').addEventListener('click', function(){calX(8), changeZindexX()})
document.getElementById('x-9').addEventListener('click', function(){calX(9), changeZindexX()})
document.getElementById('x-11').addEventListener('click', function(){calX(11), changeZindexX()})
document.getElementById('x-10').addEventListener('click', function(){calX(10), changeZindexX()})
document.getElementById('x-12').addEventListener('click', function(){calX(12), changeZindexX()})
document.getElementById('x-13').addEventListener('click', function(){calX(13), changeZindexX()})
document.getElementById('x-14').addEventListener('click', function(){calX(14), changeZindexX()})
document.getElementById('x-15').addEventListener('click', function(){calX(15), changeZindexX()})
document.getElementById('x-16').addEventListener('click', function(){calX(16), changeZindexX()})
document.getElementById('x-17').addEventListener('click', function(){calX(17), changeZindexX()})
document.getElementById('x-18').addEventListener('click', function(){calX(18), changeZindexX()})
document.getElementById('x-19').addEventListener('click', function(){calX(19), changeZindexX()})
document.getElementById('x-20').addEventListener('click', function(){calX(20), changeZindexX()})

///click  pixel in y
document.getElementById('y-1').addEventListener('click', function(){calY(1), changeZindexY()})
document.getElementById('y-2').addEventListener('click', function(){calY(2), changeZindexY()})
document.getElementById('y-3').addEventListener('click', function(){calY(3), changeZindexY()})
document.getElementById('y-4').addEventListener('click', function(){calY(4), changeZindexY()})
document.getElementById('y-5').addEventListener('click', function(){calY(5), changeZindexY()})
document.getElementById('y-6').addEventListener('click', function(){calY(6), changeZindexY()})
document.getElementById('y-7').addEventListener('click', function(){calY(7), changeZindexY()})
document.getElementById('y-8').addEventListener('click', function(){calY(8), changeZindexY()})
document.getElementById('y-9').addEventListener('click', function(){calY(9), changeZindexY()})
document.getElementById('y-10').addEventListener('click', function(){calY(10), changeZindexY()})
document.getElementById('y-11').addEventListener('click', function(){calY(11), changeZindexY()})
document.getElementById('y-12').addEventListener('click', function(){calY(12), changeZindexY()})
document.getElementById('y-13').addEventListener('click', function(){calY(13), changeZindexY()})
document.getElementById('y-14').addEventListener('click', function(){calY(14), changeZindexY()})
document.getElementById('y-15').addEventListener('click', function(){calY(15), changeZindexY()})
document.getElementById('y-16').addEventListener('click', function(){calY(16), changeZindexY()})
document.getElementById('y-17').addEventListener('click', function(){calY(17), changeZindexY()})
document.getElementById('y-18').addEventListener('click', function(){calY(18), changeZindexY()})
document.getElementById('y-19').addEventListener('click', function(){calY(19), changeZindexY()})
document.getElementById('y-20').addEventListener('click', function(){calY(20), changeZindexY()})