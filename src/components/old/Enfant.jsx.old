const Enfant = (props) => {
	const btnReponseEnfant =
		props.leState.messageMaman !== null ? (
			<button
				className="rounded cursor-pointer p-1 bg-white text-black"
				onClick={props.reponseEnfant}
			>
				Réponse
			</button>
		) : (
			<button disabled>Réponse</button>
		);

	{
		return (
			<div>
				<div className="flex gap-2 items-center justify-center mt-6">
					<h2>{props.name} :</h2>
					{btnReponseEnfant}
				</div>
				<p className="text-green-600 mt-2">{props.leState.messageEnfant}</p>
			</div>
		);
	}
};

export default Enfant;
