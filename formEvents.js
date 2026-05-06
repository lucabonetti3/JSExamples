const form = document.getElementById("loginForm");
const resultDiv = document.getElementById("result");
const directAccessBtn = document.getElementById("directAccess"); // solo se uso il bottone con accesso

// event listener se uso il bottone con submit del form, utilizza i name dell input
form.addEventListener('submit', (e) =>{
    e.preventDefault();   // previene il default, ossia il ricaricamento della pagina

    let formData = new FormData(form);      // devo passargli il form dentro formdata
    let email = formData.get("email");      //posso fare get("email") / ("password" solo perche nell'input ho messo name ="email")
    let password = formData.get("password");

    console.log("email: ", email);
    console.log("password: ", password);
    validateData(email,password);
});

// event listener per il bottone senza submit, con accesso diretto, utilizza gli id dell input
directAccessBtn.addEventListener("click", (e) =>{
    let email = form.email.value;
    let password = form.password.value;

    console.log("email: ", email);
    console.log("password: ", password);

    validateData(email,password);
});

function validateData(email, password){
    if(!email){
        showError("email", "email richiesta");
        return { valid: false, message: "email mancante"};
    }
    else{
        removeError("email","")
    }

    if(!password){
        showError("password", "password richiesta");
        return { valid: false, message: "password mancante"};
    }
    else{
        removeError("password","")
    }
}

function showError(field, message){
    let formField = form[field];
    formField.classList.add("error")   //va a cercare nello style tutti gli input.error
    resultDiv.textContent = message
}

function removeError(field, message){
    let formField = form[field]
    formField.classList.remove("error")
    resultDiv.textContent = message;
}