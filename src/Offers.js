const Offers = () => {
	return (
		<div>
			<table className="border-collapse border-black border-solid border-2 m-2 p-2">
				<tr>
					<th className="border-collapse border-black border-solid border-2 m-2 p-2">
						SPECIAL OFFERS
					</th>
					<th className="border-collapse border-black border-solid border-2 m-2 p-2">
						Free
					</th>
				</tr>
				<tr>
					<td className="border-collapse border-black border-solid border-2 m-2 p-2">
						Buy a soup and two breads
					</td>
					<td className="border-collapse border-black border-solid border-2 m-2 p-2">
						One bread free
					</td>
				</tr>
				<tr>
					<td className="border-collapse border-black border-solid border-2 m-2 p-2">
						Buy three cheeses
					</td>
					<td className="border-collapse border-black border-solid border-2 m-2 p-2">
						Get one free
					</td>
				</tr>
				<tr>
					<td className="border-collapse border-black border-solid border-2 m-2 p-2">
						Buy four cheeses
					</td>
					<td className="border-collapse border-black border-solid border-2 m-2 p-2">
						Get two free
					</td>
				</tr>
			</table>
		</div>
	);
};

export default Offers;
