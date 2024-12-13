import { useState } from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"
import { InputGroup, Row, TabButton } from "./styles"

import boleto from "../../assets/boleto.png"
import cartao from "../../assets/cartao.png"
import { useFormik } from "formik"
import * as Yup from "yup"
import { usePurchaseMutation } from "../../services/api"

export default function Checkout() {
	const [payWithCard, setPayWithCard] = useState(false)
	// const [purchase, { isLoading, isError, isSuccess, data }] = usePurchaseMutation()
	const [purchase, { isSuccess, data }] = usePurchaseMutation()
	console.clear()
	console.table(data)
	const form = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			cpf: "",
			deliveryEmail: "",
			confirmDeliveryEmail: "",
			cardOwner: "",
			cpfCardOwner: "",
			cardDisplayName: "",
			cardNumber: "",
			expiresMonth: "",
			expiresYear: "",
			cardCode: "",
			installments: 1,
		},
		validationSchema: Yup.object({
			fullName: Yup.string()
				.min(5, "O nome precisa ter pelo menos 5 caracteres.")
				.required("O campo é obrigatório"),
			email: Yup.string().email("E-mail inválido").required("O campo é obrigatório"),
			cpf: Yup.string()
				.min(14, "O campo precisa ter 14 caracteres")
				.max(14, "O campo precisa ter 14 caracteres")
				.required("O campo é obrigatório"),
			deliveryEmail: Yup.string().email("E-mail inválido").required("O campo é obrigatório"),
			confirmDeliveryEmail: Yup.string()
				.oneOf([Yup.ref("deliveryEmail")], "Os e-mails são diferentes")
				.required("O campo é obrigatório"),

			cardOwner: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
			cpfCardOwner: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
			cardDisplayName: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
			cardNumber: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
			expiresMonth: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
			expiresYear: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
			cardCode: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
			installments: Yup.string().when((_, schema) =>
				payWithCard ? schema.required("O campo é obrigatório") : schema
			),
		}),
		onSubmit: values => {
			purchase({
				billing: {
					document: values.cpf,
					email: values.email,
					name: values.fullName,
				},
				delivery: {
					email: values.deliveryEmail,
				},
				payment: {
					installments: 1,
					card: {
						active: payWithCard,
						code: Number(values.cardCode),
						name: values.cardDisplayName,
						number: values.cardNumber,
						owner: {
							document: values.cpfCardOwner,
							name: values.cardOwner,
						},
						expires: {
							month: Number(values.expiresMonth),
							year: Number(values.expiresYear),
						},
					},
				},
				products: [
					{
						id: 1,
						price: 10,
					},
				],
			})
		},
	})

	function getErrorMessage(fieldName: string, message?: string) {
		const isChanged = fieldName in form.touched
		const isInvalid = fieldName in form.errors

		if (isChanged && isInvalid) return message

		return ""
	}
	return (
		<div className="container">
			{isSuccess ? (
				<Card title="Muito obrigado">
					<>
						<p>
							E com satisfação que informamos que recebemos seu pedido com sucesso!
							<br />
							Abaixo estão os detalhes da sua compra:
							<br />
							Número do pedido: {data.orderId}
							<br />
							Foma de pagamento: {payWithCard ? "Cartão de crédito" : "Boleto bancário"}
						</p>

						<p className="margin-top">
							Caso tenha optado pelo pagamento via boleto bancário, lembre-se de que a
							confirmação pode lever ané 3 dias úteis. Após a aprovação da pagamento, enviaremos
							um e-mail contendo o código de ativação do jogo.
						</p>

						<p className="margin-top">
							Se você optou pelo pagamento com cartão de crédito, a liberação do código de
							ativação ocorrerá após a aprovação da transação pela operadora do cartão. Você
							receberá o código no e-mail cadastrado em nossa loja
						</p>

						<p className="margin-top">
							Pedimos que verifique sua caixa de entrada e a pasta de spam pare garantir que
							receba nossa comunicação. Caso tenha alguma dúvida ou necessite de mais
							informações, por favor, entre em contato conosco através dos nossos canais de
							atendimento ao cliente
						</p>

						<p className="margin-top">
							Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
						</p>
					</>
				</Card>
			) : (
				<form>
					<Card title="Dados de cobrança">
						<>
							<Row>
								<InputGroup>
									<label htmlFor="fullName">Nome completo</label>
									<input
										id="fullName"
										type="text"
										name="fullName"
										value={form.values.fullName}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
									/>
									<small>{getErrorMessage("fullName", form.errors.fullName)}</small>
								</InputGroup>
								<InputGroup>
									<label htmlFor="email">E-mail</label>
									<input
										id="email"
										type="text"
										name="email"
										value={form.values.email}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
									/>
									<small>{getErrorMessage("email", form.errors.email)}</small>
								</InputGroup>
								<InputGroup>
									<label htmlFor="cpf">CPF</label>
									<input
										id="cpf"
										type="text"
										name="cpf"
										value={form.values.cpf}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
									/>
									<small>{getErrorMessage("cpf", form.errors.cpf)}</small>
								</InputGroup>
							</Row>
							<h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
							<Row>
								<InputGroup>
									<label htmlFor="deliveryEmail">E-mail</label>
									<input
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										id="deliveryEmail"
										type="text"
										name="deliveryEmail"
										value={form.values.deliveryEmail}
									/>
									<small>
										{getErrorMessage("deliveryEmail", form.errors.deliveryEmail)}
									</small>
								</InputGroup>
								<InputGroup>
									<label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
									<input
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										id="confirmDeliveryEmail"
										type="text"
										name="confirmDeliveryEmail"
										value={form.values.confirmDeliveryEmail}
									/>
									<small>
										{getErrorMessage(
											"confirmDeliveryEmail",
											form.errors.confirmDeliveryEmail
										)}
									</small>
								</InputGroup>
							</Row>
						</>
					</Card>

					<Card title="Pagamento">
						<div>
							<TabButton
								type="button"
								isActive={!payWithCard}
								onClick={() => setPayWithCard(false)}>
								<img src={boleto} alt="Boleto" />
								Boleto Bancário
							</TabButton>
							<TabButton
								type="button"
								isActive={payWithCard}
								onClick={() => setPayWithCard(true)}>
								<img src={cartao} alt="Cartão de crédito" />
								Cartão de Crédito
							</TabButton>
							<div className="margin-top">
								{payWithCard ? (
									<>
										<Row>
											<InputGroup>
												<label htmlFor="cardOwner">Nome do titular do cartão</label>
												<input
													onChange={form.handleChange}
													onBlur={form.handleBlur}
													type="text"
													id="cardOwner"
													name="cardOwner"
													value={form.values.cardOwner}
												/>
												<small>
													{getErrorMessage("cardOwner", form.errors.cardOwner)}
												</small>
											</InputGroup>
											<InputGroup>
												<label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
												<input
													onChange={form.handleChange}
													onBlur={form.handleBlur}
													type="text"
													id="cpfCardOwner"
													name="cpfCardOwner"
													value={form.values.cpfCardOwner}
												/>
												<small>
													{getErrorMessage(
														"cpfCardOwner",
														form.errors.cpfCardOwner
													)}
												</small>
											</InputGroup>
										</Row>
										<Row marginTop="24px">
											<InputGroup>
												<label htmlFor="cardDisplayName">Nome no cartão</label>
												<input
													onChange={form.handleChange}
													onBlur={form.handleBlur}
													type="text"
													id="cardDisplayName"
													name="cardDisplayName"
													value={form.values.cardDisplayName}
												/>
												<small>
													{getErrorMessage(
														"cardDisplayName",
														form.errors.cardDisplayName
													)}
												</small>
											</InputGroup>
											<InputGroup>
												<label htmlFor="cardNumber">Número do cartão</label>
												<input
													onChange={form.handleChange}
													onBlur={form.handleBlur}
													type="text"
													id="cardNumber"
													name="cardNumber"
													value={form.values.cardNumber}
												/>
												<small>
													{getErrorMessage("cardNumber", form.errors.cardNumber)}
												</small>
											</InputGroup>
											<InputGroup maxWidth="123px">
												<label htmlFor="expiresMonth">Mês de vencimento</label>
												<input
													onChange={form.handleChange}
													onBlur={form.handleBlur}
													type="text"
													id="expiresMonth"
													name="expiresMonth"
													value={form.values.expiresMonth}
												/>
												<small>
													{getErrorMessage(
														"expiresMonth",
														form.errors.expiresMonth
													)}
												</small>
											</InputGroup>
											<InputGroup maxWidth="123px">
												<label htmlFor="expiresYear">Ano de vencimento</label>
												<input
													onChange={form.handleChange}
													onBlur={form.handleBlur}
													type="text"
													id="expiresYear"
													name="expiresYear"
													value={form.values.expiresYear}
												/>
												<small>
													{getErrorMessage("expiresYear", form.errors.expiresYear)}
												</small>
											</InputGroup>
											<InputGroup maxWidth="48px">
												<label htmlFor="cardCode">CVV</label>
												<input
													onChange={form.handleChange}
													onBlur={form.handleBlur}
													type="text"
													id="cardCode"
													name="cardCode"
													value={form.values.cardCode}
												/>
												<small>
													{getErrorMessage("cardCode", form.errors.cardCode)}
												</small>
											</InputGroup>
										</Row>
										<Row marginTop="24px">
											<InputGroup maxWidth="150px">
												<label htmlFor="installments">Parcelamento</label>
												<select
													name="installments"
													id="installments"
													defaultValue={form.values.installments}
													onChange={form.handleChange}
													onBlur={form.handleBlur}>
													<option value="1">1x de R$ 200,00</option>
													<option value="2">2x de R$ 200,00</option>
													<option value="3">3x de R$ 200,00</option>
												</select>
												<small>
													{getErrorMessage(
														"installments",
														form.errors.installments
													)}
												</small>
											</InputGroup>
										</Row>
									</>
								) : (
									<p>
										Ao optar por essa forma de pagamento, é importante lembrar que a
										confirmação pode levar até 3 dias úteis, devido aos prazos
										estabelecidos pelas instituições financeiras. Portanto, a liberaçao do
										código de ativacao do jogo adquirido ocorrera somente após a aprovaçao
										do pagamento do boleto.
									</p>
								)}
							</div>
						</div>
					</Card>

					<Button
						onClick={form.handleSubmit}
						type="button"
						title="Clique aqui para finalizar a compra">
						Finalizar compra
					</Button>
				</form>
			)}
		</div>
	)
}
