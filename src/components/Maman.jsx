import { Component } from "react";
import Enfant from "./Enfant";

class Maman extends Component {
	state = {
		messageMaman: null,
		messageEnfant: null,
	};

	ordreMaman = () => {
		this.setState({ messageMaman: "Mange des brocolis !" });
	};

	reponseEnfant = () => {
		this.setState({ messageEnfant: "T'es plus ma copine !" });
	};

	render() {
		return (
			<div>
				<div className="flex gap-2 items-center justify-center mb-2">
					<h1>Maman : </h1>
					<button
						className="rounded cursor-pointer p-1 bg-white text-black"
						onClick={this.ordreMaman}
					>
						Ordre de la maman
					</button>
				</div>
				<p className="mb-6 text-red-600">{this.state.messageMaman}</p>

				<hr />
				<Enfant
					name="Sacha"
					leState={this.state}
					reponseEnfant={this.reponseEnfant}
				/>
			</div>
		);
	}
}

export default Maman;
