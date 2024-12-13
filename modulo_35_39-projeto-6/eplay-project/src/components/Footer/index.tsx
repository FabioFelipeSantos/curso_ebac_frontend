import * as S from "./styles"

const actualYear = new Date().getFullYear()

export default function Footer() {
	return (
		<S.FooterContainer>
			<div className="container">
				<S.SectionFooter>
					<S.SectionFooterTitle>Gêneros</S.SectionFooterTitle>
					<S.Links>
						<li>
							<S.Link title="Clique aqui para acessar jogos de RPG" to="/genres#rpg">
								RPG
							</S.Link>
						</li>
						<li>
							<S.Link title="Clique aqui para acessar jogos de Ação" to="/genres#action">
								Ação
							</S.Link>
						</li>
						<li>
							<S.Link title="Clique aqui para acessar jogos de Esportes" to="/genres#sports">
								Esportes
							</S.Link>
						</li>
						<li>
							<S.Link
								title="Clique aqui para acessar jogos de Simulação"
								to="/genres#simulation">
								Simuladores
							</S.Link>
						</li>
						<li>
							<S.Link title="Clique aqui para acessar jogos de Luta" to="/genres#luta">
								Luta
							</S.Link>
						</li>
					</S.Links>
				</S.SectionFooter>
				<S.SectionFooter>
					<S.SectionFooterTitle>Acesso rápido</S.SectionFooterTitle>
					<S.Links>
						<li>
							<S.Link title="Clique aqui para acessar a seção de Promoções" to="/#on-sale">
								Promoções
							</S.Link>
						</li>
						<li>
							<S.Link title="Clique aqui para acessar a seção de Em Breve" to="/#coming-soon">
								Em breve
							</S.Link>
						</li>
					</S.Links>
				</S.SectionFooter>
				<p>{actualYear} - &copy; EPLAY; Todos os direitos protegidos.</p>
			</div>
		</S.FooterContainer>
	)
}
