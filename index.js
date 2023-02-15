let button = document.getElementById("btn");
let w = button.getBoundingClientRect().width;
let h = button.getBoundingClientRect().height;

button.addEventListener("click", () => {
    console.log("hi");
    button.style.left = Math.floor(Math.random()*(800-w)) + "px";
    button.style.top = Math.floor(Math.random()*(600-h)) + "px";
});
/* 
 zad 1:  v div da se dobavq text na kakvi coords e mishkata i da se updateva
 hint: innerHTML 

 zad 2: button i input(chisla) n*n divove na ekrana
 hint: 1 div predi butona i inputa tam se naslagvat novite divove
       innerHTML/innerText
       how to create element
       append child 

*/