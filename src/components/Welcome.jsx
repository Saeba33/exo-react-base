export const Welcome = () => {
	const bonjour = () => {
		return console.log("Bonjour");
	};
	const bonsoir = (message) => {
		return console.log(message);
	};

	return (
		<div className="flex gap-2">
			<button
				className="bg-green-600 rounded p-1 cursor-pointer"
				onClick={bonjour}
			>
				Invoquer une fonction
			</button>
			<button
				className="bg-green-600 rounded p-1 cursor-pointer"
				onClick={() => bonsoir("Bonsoir")}
			>
				Invouer une fonction avec arg "Bonsoir"
			</button>
			<button
				className="bg-green-600 rounded p-1 cursor-pointer"
				onClick={() => console.log("Bonne nuit")}
			>
				Clg sur le bouton
			</button>
		</div>
	);
};
