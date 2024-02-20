window.addEventListener("load", function () {
  console.log("page has been loaded");

  let buttonvar = this.document.getElementById("buttonpress");
  let para = this.document.getElementById("para");

  buttonvar.addEventListener("click", function () {
    para.innerText = "the button has been clicked";
  });
  setTimeout(() => {
    buttonvar.style.width = "500px";
    buttonvar.style.backgroundColor = "yellow";
  }, 5000);

  console.log(buttonvar);
});
