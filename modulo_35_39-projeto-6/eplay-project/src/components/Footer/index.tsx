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
							<S.Link>RPG</S.Link>
						</li>
						<li>
							<S.Link>Ação</S.Link>
						</li>
						<li>
							<S.Link>Aventura</S.Link>
						</li>
						<li>
							<S.Link>Esportes</S.Link>
						</li>
						<li>
							<S.Link>Simuladores</S.Link>
						</li>
						<li>
							<S.Link>Estratégia</S.Link>
						</li>
						<li>
							<S.Link>FPS</S.Link>
						</li>
					</S.Links>
				</S.SectionFooter>
				<S.SectionFooter>
					<S.SectionFooterTitle>Acesso rápido</S.SectionFooterTitle>
					<S.Links>
						<li>
							<S.Link>Lançamentos</S.Link>
						</li>
						<li>
							<S.Link>Promoções</S.Link>
						</li>
						<li>
							<S.Link>Em breve</S.Link>
						</li>
					</S.Links>
				</S.SectionFooter>
				<p>{actualYear} - &copy; EPLAY; Todos os direitos protegidos.</p>
			</div>
		</S.FooterContainer>
	)
}
