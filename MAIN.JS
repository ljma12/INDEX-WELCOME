document.getElementById("button").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    localStorage.setItem("userName", name);
    window.location.href = "./WELCOME.HTML";  // Redirigir a la página WELCOME
});