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
    if (e.key === "Enter") return;

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
    if (e.key === "Enter") return;

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

numberA.addEventListener("focus", () => message.style.display = "none")
numberB.addEventListener("focus", () => message.style.display = "none")

button.addEventListener("click", e => handleButtonClick(e));

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && numberA.valueAsNumber && numberB.valueAsNumber) {
        button.click();
    }
})

function formValidate() {
    return numberB.valueAsNumber > numberA.valueAsNumber;
}

function handleButtonClick(e) {
    e.preventDefault();
    if (formValidate()) {
        message.classList.add("valid");
        message.style.display = "block";
        message.innerHTML = `O formulário é válido e foi enviado com sucesso! O valor A: ${numberA.value} é menor que B: ${numberB.value}`;
        main.classList.add("main-valid");
        main.classList.remove("invalid");
        numberA.value = "";
        numberB.value = "";
        button.disabled = true;
    } else {
        message.classList.remove("valid");
        message.style.display = "block";
        message.innerHTML = "O formulário é invalido! O valor em A deve ser menor que o valor em B.";
        button.disabled = true;
        main.classList.add("invalid");
    }
}