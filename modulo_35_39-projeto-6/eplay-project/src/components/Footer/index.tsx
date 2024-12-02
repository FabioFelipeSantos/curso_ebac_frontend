import * as S from "./styles";

const actualYear = new Date().getFullYear();

export default function Footer() {
	return (
		<S.FooterContainer>
			<div className="container">
				<S.SectionFooter>
					<S.SectionFooterTitle>Genres</S.SectionFooterTitle>
					<S.Links>
						<li>
							<S.Link>RPG</S.Link>
						</li>
						<li>
							<S.Link>Action</S.Link>
						</li>
						<li>
							<S.Link>Adventure</S.Link>
						</li>
						<li>
							<S.Link>Sports</S.Link>
						</li>
						<li>
							<S.Link>Simulation</S.Link>
						</li>
						<li>
							<S.Link>RTS - Real Time Strategy</S.Link>
						</li>
						<li>
							<S.Link>FPS - First Person Shooter</S.Link>
						</li>
					</S.Links>
				</S.SectionFooter>
				<S.SectionFooter>
					<S.SectionFooterTitle>Quick access</S.SectionFooterTitle>
					<S.Links>
						<li>
							<S.Link>New Releases</S.Link>
						</li>
						<li>
							<S.Link>Promotions</S.Link>
						</li>
						<li>
							<S.Link>Next Releases</S.Link>
						</li>
					</S.Links>
				</S.SectionFooter>
				<p>{actualYear} - &copy; EPLAY; All rights under protection.</p>
			</div>
		</S.FooterContainer>
	);
}
