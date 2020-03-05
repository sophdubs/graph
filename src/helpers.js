const MAX = 99;
export const getRandomInt = function(){
    return Math.floor(Math.random() * Math.floor(MAX)) + 1;
};

export const swap = function (arr) {
   for (let i = 0; i < arr.length; i++) {
       setTimeout (() => {
           let a = arr[i][0];
           let b = arr[i][1];
           
           let barA = document.querySelector(`.index${a}`);
           let barB = document.querySelector(`.index${b}`);

           let tempArea = barA.style.gridArea;
           barA.style.gridArea = barB.style.gridArea;
           barB.style.gridArea = tempArea;


       }, i * 800);
   }
}