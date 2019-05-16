// Your code goes here
//1.
const tight = document.querySelector(".logo-heading")
tight.addEventListener("mouseover", () =>
   console.log ("it worked")
);
//2.
const pic = document.querySelector(".intro img")
pic.addEventListener("click", () =>
   alert("I can't move!")
);
//3.
tight.addEventListener("dblclick", () =>
alert("I can't move either!")
);
//4.
const welk = document.querySelector(".intro h2")
welk.addEventListener("mouseenter", (colour) => 
colour.target.style.color = "red")
//5.
welk.addEventListener("mouseleave", () => 
console.log("Now look what you did, I'll be red forever now..."));
//6.
const container = document.querySelector("body")
container.addEventListener("keydown", () => 
console.log("Keydown TouchDown"));
//7.
container.addEventListener("keyup", () => 
alert("Key Up actually represents when your finger lifts off of the key, kewl right?"))
//8.
window.addEventListener("load", () => 
alert("Welcome to DOM-inated FunBus!"));
//9.
window.addEventListener("scroll", () =>
console.log("Scrolling down the river!!!")
)
//10.
window.addEventListener("resize", () => 
alert("This site is responsive, change the window size as you please"));
//*Prevent Nav*
const navie = document.querySelector('a')
navie.addEventListener("click", function(x){
    x.preventDefault();
});



