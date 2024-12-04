import { useState } from "react"

import { Action, Item, ItemsContainer, Modal, ModalContent } from "./styles"
import Section from "../Section"

import { GalleryItem } from "../../Pages/Home"

import play from "../../assets/play.png"
import zoom from "../../assets/zoom.png"
import close from "../../assets/fechar.png"

type Props = {
	defaultCover: string
	name: string
	items: GalleryItem[]
}

interface ModalState extends GalleryItem {
	isVisible: boolean
}

export default function Gallery({ defaultCover, name, items }: Props) {
	const [modal, setModal] = useState<ModalState>({
		isVisible: false,
		url: "",
		type: "image",
	})

	const getMediaCover = (item: GalleryItem) => {
		if (item.type === "image") return item.url

		return defaultCover
	}

	const getMediaIcon = (item: GalleryItem) => {
		if (item.type === "image") return zoom

		return play
	}

	const handleCloseModal = () => {
		setModal({
			isVisible: false,
			type: "image",
			url: "",
		})
	}
	return (
		<>
			<Section title="Galeria de imagens" background="black">
				<ItemsContainer>
					{items.map((media, index) => (
						<Item
							key={media.url}
							onClick={() =>
								setModal({
									isVisible: true,
									type: media.type,
									url: media.url,
								})
							}>
							<img src={getMediaCover(media)} alt={`Media ${index + 1} from ${name}`} />
							<Action>
								<img
									src={getMediaIcon(media)}
									alt="Click to open the media in its full size"
								/>
							</Action>
						</Item>
					))}
				</ItemsContainer>
			</Section>

			<Modal className={modal.isVisible ? "visible" : ""}>
				<ModalContent className="container">
					<header>
						<h4>{name}</h4>
						<img src={close} alt="Close icon" onClick={() => handleCloseModal()} />
					</header>
					{modal.type === "image" ? <img src={modal.url} /> : <iframe src={modal.url} />}
				</ModalContent>
				<div className="overlay" onClick={() => handleCloseModal()}></div>
			</Modal>
		</>
	)
}
