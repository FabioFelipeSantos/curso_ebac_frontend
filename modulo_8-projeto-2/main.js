/* <input id="num1" type="tel" required placeholder="Número de Telefone" /> */

const nameIcon = document.querySelectorAll(".icon-name");
const addNumberBtn = document.getElementById("btn-add-tel");
const telNumbersContainer = document.getElementById("all-tel-numbers");
const submitButton = document.getElementById("sbm-btn");
const nameInput = document.getElementById("nome");
const emailInput = document.querySelector(".info-container > input.mail");
const errorMessage = document.getElementById("error-message");
const contactTableRow = document.getElementById("corpo-tabela-contatos");
const totalContact = document.getElementById("num-total-contatos")
const contacts = [];
let lastTimeStamp;
let telNumbers = 0;

window.onload = adjustingAddNumberAndNameIcons();

window.addEventListener("resize", () => adjustingAddNumberAndNameIcons())

addNumberBtn.addEventListener("click", () => {
    addNumberBtn.classList.add("clickedAnim");
    createTelNumberInput();
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    submitButton.classList.add("clicked");

    console.log(telNumbersContainer.childNodes)

    if (emailInput.value.length < 1 && telNumbersContainer.childElementCount === 0) {
        errorMountMessage("É necessário entrar com pelo menos um número de telefone ou endereço de e-mail.")
        return
    } else if (phoneNumberInvalid()) {
        errorMountMessage("Digite um número de telefone válido, com pelo menos 8 dígitos.")
        return
    } else {
        errorMessage.style.display = "none";
        sendContactToTable()

        telNumbers = 0;
    }
})

window.addEventListener("animationend", () => {
    addNumberBtn.classList.remove("clickedAnim");
    submitButton.classList.remove("clicked");
})

function phoneNumberInvalid() {
    for (let input of telNumbersContainer.childNodes) {
        if (input.value.length < 8) {
            return true;
        }
    }

    return false;
}

function errorMountMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = message;
}

function sendContactToTable() {
    const contact = {
        name: nameInput.value,
        numbers: [],
        email: emailInput.value || "---",
    };

    if (telNumbersContainer.childElementCount === 0) {
        contact.numbers = "---"
    } else {
        const numbersInputs = document.querySelectorAll(".tel-number");

        if (numbersInputs.length === 1) {
            contact.numbers = numbersInputs[0].value;
        } else {
            for (let input of numbersInputs) {
                contact.numbers.push(input.value);
            }
        }
    }

    creatingContactRowToTable(contact)
    contacts.push(contact);
    totalContact.innerHTML = contacts.length;
    cleaningAddedContact();
}

function creatingContactRowToTable(contact) {
    const row = document.createElement("tr")

    for (const [, value] of Object.entries(contact)) {
        const td = document.createElement("td");

        if (!Array.isArray(value)) {
            td.innerHTML = value;
        } else {
            const select = document.createElement("select");
            const styles = {
                width: '100%',
                height: '4rem',
                paddingLeft: '2rem',
                fontFamily: 'Spectral',
                fontSize: '0.9em'
            };
            Object.assign(select.style, styles);
            value.forEach(num => {
                const opt = document.createElement("option");
                opt.innerHTML = num;
                select.appendChild(opt);
            });
            td.appendChild(select);
        }

        row.appendChild(td);
    }

    contactTableRow.appendChild(row);
}

function cleaningAddedContact() {
    nameInput.value = "";
    telNumbersContainer.innerHTML = "";
    emailInput.value = "";
}

function adjustingAddNumberAndNameIcons() {
    nameIcon.forEach(icon => icon.style.width = getComputedStyle(addNumberBtn).width);
}

function createTelNumberInput() {
    telNumbers += 1;

    const input = document.createElement("input");
    input.setAttribute("type", "tel");
    input.setAttribute("maxlength", 18)
    input.setAttribute("placeholder", `${telNumbers}º número`);
    input.classList.add("tel-number");

    telNumbersContainer.appendChild(input);
}