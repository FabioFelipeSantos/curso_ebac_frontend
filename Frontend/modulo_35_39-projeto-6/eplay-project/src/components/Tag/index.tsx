import { TagContainer } from "./styles";

export type TagProps = {
	size?: "small" | "big";
	children: string;
};

export default function Tag({ children, size = "small" }: TagProps) {
	return <TagContainer size={size}>{children}</TagContainer>;
}
