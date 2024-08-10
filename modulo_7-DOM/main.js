const numberA = document.getElementById("number-A");
const numberB = document.getElementById("number-B");
const button = document.getElementById("submit-btn");
const message = document.getElementById("form-validity");
const main = document.getElementsByTagName("main")[0];
let formValidity = false;

window.addEventListener("load", () => {
    main.classList.add("main-open");
})

window.addEventListener("animationend", () => {
    main.classList.remove("main-open");
})

numberA.addEventListener("keyup", (e) => {
    message.innerHTML = "";
    message.style.display = "none";
    main.classList.remove("invalid");
    if (e.target.validity.badInput) {
        console.log("Inválido")
        e.target.style.borderColor = "red";
        message.style.display = "block";
        message.innerHTML = "Sem números válidos";
        button.disabled = true;
        return
    } else {
        e.target.style.borderColor = "";
        message.innerHTML = "";
        message.style.display = "none";
        button.disabled = true;
    }

    if (numberB.value) {
        button.disabled = false;
    }
})

numberB.addEventListener("keyup", (e) => {
    message.innerHTML = "";
    message.style.display = "none";
    main.classList.remove("invalid");
    if (e.target.validity.badInput) {
        console.log("Inválido")
        e.target.style.borderColor = "red";
        message.style.display = "block";
        message.innerHTML = "Sem números válidos";
        button.disabled = true;
        return
    } else {
        e.target.style.borderColor = "";
        message.innerHTML = "";
        message.style.display = "none";
        button.disabled = true;
    }

    if (numberA.value) {
        button.disabled = false;
    }
})

numberA.addEventListener("focusin", () => message.style.display = "none")
numberB.addEventListener("focusin", () => message.style.display = "none")

button.addEventListener("click", e => handleButtonClick(e));

function formValidate() {
    return numberB.valueAsNumber > numberA.valueAsNumber;
}

function handleButtonClick(e) {
    console.log(numberA.value, numberB.value)
    console.log(formValidate())
    e.preventDefault();
    if (formValidate()) {
        message.classList.add("valid");
        message.style.display = "block";
        message.innerHTML = "O formulário é válido e foi enviado com sucesso!";
        main.classList.add("main-valid");
        numberA.value = "";
        numberB.value = "";
        main.classList.remove("invalid");
        button.disabled = true;
    } else {
        message.classList.remove("valid");
        message.style.display = "block";
        message.innerHTML = "O formulário é invalido! O valor em A deve ser menor que o valor em B.";
        button.disabled = true;
        main.classList.add("invalid");
    }
}