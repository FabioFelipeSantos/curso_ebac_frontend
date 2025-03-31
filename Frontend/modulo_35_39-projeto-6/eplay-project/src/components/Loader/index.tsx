import { PacmanLoader } from "react-spinners"
import { colors } from "../../style"
import { ContainerLoader } from "./styles"

export default function Loader() {
	return (
		<ContainerLoader className="container">
			<PacmanLoader color={colors.white} />
		</ContainerLoader>
	)
}
