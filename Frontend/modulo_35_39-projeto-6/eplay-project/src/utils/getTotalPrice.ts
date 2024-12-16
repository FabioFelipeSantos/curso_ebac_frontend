export default function getTotalPrice(items: Game[]) {
	return items.reduce((acc, cur) => {
		if (cur.prices.current) return (acc += cur.prices.current)
		return 0
	}, 0)
}
