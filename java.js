let image = document.querySelector('#image');
let answers = document.querySelector(".ans1");
let image2 = document.querySelector('#image2');
let answers2 = document.querySelector(".ans2");
let image3 = document.querySelector('#image3');
let answers3 = document.querySelector(".ans3");
let image4 = document.querySelector('#image4');
let answers4 = document.querySelector(".ans4");
let first ='assets/images/icon-minus.svg';
let second ='assets/images/icon-plus.svg';
let isImageFirst = true;

image.addEventListener("click", function(){
    answers.classList.toggle('new');
    if (isImageFirst){
        image.src= first;
    }
    else{
        image.src= second;
    }
    isImageFirst = !isImageFirst;
}   
)
image2.addEventListener("click", function(){
    answers2.classList.toggle('new');
    if (isImageFirst){
        image2.src= first;
    }
    else{
        image2.src= second;
    }
   isImageFirst = !isImageFirst;
}   
 
)
image3.addEventListener("click", function(){
    answers3.classList.toggle('new');
    if (isImageFirst){
        image3.src= first;
    }
    else{
        image3.src= second;
    }
    isImageFirst = !isImageFirst;
}   
 
)
image4.addEventListener("click", function(){
    answers4.classList.toggle('new');
    if (isImageFirst){
        image4.src= first;
    }
    else{
        image4.src= second;
    }
    isImageFirst = !isImageFirst;
}      
)


