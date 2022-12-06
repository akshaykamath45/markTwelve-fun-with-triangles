const sides=document.querySelectorAll(".side-input");
const areaBtn=document.querySelector("#area-button");
const outputEl=document.querySelector("#output");

function calculateArea(b,h){
    const areaOfTriangle=(b*h)/2;
    
    return areaOfTriangle;
}
function calculateAreaOfTriangle(){
   const areaOfTriangle =calculateArea(Number(sides[0].value),Number(sides[1].value));
   outputEl.innerText="Area of triangle  is : "+areaOfTriangle;
}

areaBtn.addEventListener("click",calculateAreaOfTriangle);