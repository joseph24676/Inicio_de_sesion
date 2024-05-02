document.getElementById("toggle-form").addEventListener("click", () => {
    const formTitle = document.getElementById("form-title");
    const submitButton = document.getElementById("submit-button");
    const toggleLink = document.getElementById("toggle-form");
    const background = document.getElementById("background"); 
    
    const nombresGroup = document.getElementById("nombres-group");
    const apellidosGroup = document.getElementById("apellidos-group");
    const cedulaGroup = document.getElementById("cedula-group");
    const telefonoGroup = document.getElementById("telefono-group");

    if (formTitle.textContent === "Login") {
        formTitle.textContent = "Registro";
        submitButton.textContent = "Registrar";
        toggleLink.textContent = "¿Ya tienes una cuenta? Inicia Sesión";

        
        background.classList.remove("login-background");
        background.classList.add("register-background");

        
        nombresGroup.style.display = "block";
        apellidosGroup.style.display = "block";
        cedulaGroup.style.display = "block";
        telefonoGroup.style.display = "block";
    } else {
        formTitle.textContent = "Login";
        submitButton.textContent = "Iniciar Sesión";
        toggleLink.textContent = "¿No tienes una cuenta? Regístrate aquí";

        
        background.classList.remove("register-background");
        background.classList.add("login-background");

       
        nombresGroup.style.display = "none";
        apellidosGroup.style.display = "none";
        cedulaGroup.style.display = "none";
        telefonoGroup.style.display = "none";
    }
});