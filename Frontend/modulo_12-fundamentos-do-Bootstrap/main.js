$("#nameHelpId").hide();
$("#emailHelpId").hide();
$("#phoneHelpId").hide();

$("#phone").mask("(00) 0 0000 - 0000");

const date = new Date();

$("#footer-date-time").attr(
	"datetime",
	[date.getUTCFullYear(), date.getUTCMonth()+1 < 10 ? `0${date.getUTCMonth()+1}` : date.getUTCMonth() + 1, date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate()].join("-")
);

$("#footer-date-time").html(date.getUTCFullYear());

$("#main-form").validate({
	errorClass: "invalid-labels",
	rules: {
		Nome: {
			required: true,
			minlength: 2,
		},
		"E-Mail": {
			email: true,
			required: true,
		},
		Telefone: "required",
	},
	messages: {
		Nome: {
			required: "Por favor, entre com seu nome.",
			minlength: "Seu nome deve ter pelo menos duas letras...",
		},
		"E-Mail": {
			email: "Digite um e-mail válido da forma abc@mail.com.",
			required: "Digite seu melhor e-mail.",
		},
		Telefone: "Digite um telefone para contato",
	},
	submitHandler: function (form) {
		showAnAlert("Dados enviados com sucesso.", "success");

		const data = {};
		$(form)
			.find("input")
			.each(function (ind, el) {
				if (ind < 3) {
					data[$(el).attr("name")] = $(el).val();
				}
			});

		showSendedData(data);

		form.reset();
	},
	invalidHandler: function (form, validator) {
		showAnAlert("Formulário não enviado. Confira seus dados", "danger");
	},
});

function showSendedData(data) {
	$("#liveAlertPlaceholder").removeClass("mt-2");
	$("#liveAlertPlaceholder").addClass("mt-4");

	const newElement = [];
	newElement.push(`<div class="alert alert-primary" role="alert">`);
	newElement.push(`<div class="container">`);

	for (const [key, value] of Object.entries(data)) {
		newElement.push(`<div class="row">`);
		newElement.push(`<div class="col-4 text-end">${key}:</div>`);
		newElement.push(`<div class="col-8 text-start">${value}</div>`);
		newElement.push(`</div>`);
	}

	newElement.push(`</div>`);
	newElement.push(`</div>`);

	console.log(newElement);

	setTimeout(function () {
		$("#liveAlertPlaceholder").html("");
		$("#liveAlertPlaceholder").append(newElement.join(""));
		$("#liveAlertPlaceholder").fadeIn(800);
	}, 3000);
}

function showAnAlert(message, type) {
	$("#form-submit-btn").attr("disabled", true);

	$("#liveAlertPlaceholder").html("");

	$("#liveAlertPlaceholder").append(
		[`<div class="alert alert-${type}" role="alert">`, `<div>${message}</div>`, "</div>"].join("")
	);

	shake($("#form-container"), 300, 3, 5);

	$("#liveAlertPlaceholder").slideDown(800);

	setTimeout(function () {
		$("#form-submit-btn").attr("disabled", false);
		$("#liveAlertPlaceholder").slideUp(800);
	}, 2000);
}

function shake(element, dur, times, slide) {
	const eachAnimationDur = dur / (2 * times);

	for (let i = 0; i < times; i++) {
		element.animate(
			{
				left: `${slide}px`,
			},
			eachAnimationDur * 0.5
		);

		element.animate(
			{
				left: `${-slide}px`,
			},
			eachAnimationDur
		);

		element.animate(
			{
				left: 0,
			},
			eachAnimationDur * 0.5
		);
	}
}
