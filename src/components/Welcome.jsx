export const Welcome = () => {
	const bonjour = () => {
		return console.log("Bonjour");
	};
	const bonsoir = (message) => {
		return console.log(message);
	};

	return (
		<div className="flex items-center justify-center gap-2 my-4">
			<button
				className="bg-green-600 rounded p-1 cursor-pointer"
				onClick={bonjour}
			>
				Dirre Bonjour
			</button>
			<button
				className="bg-green-600 rounded p-1 cursor-pointer"
				onClick={() => bonsoir("Bonsoir")}
			>
				Dire Bonsoir
			</button>
			<button
				className="bg-green-600 rounded p-1 cursor-pointer"
				onClick={() => console.log("Bonne nuit")}
			>
				Dire Bonne Nuit
			</button>
		</div>
	);
};
