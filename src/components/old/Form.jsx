import { Component } from "react";
import styled from "styled-components";
import "./../myCss.css";
import "./../myCss.module.css";
import Car from "./Car.jsx";
import MyHead from "./MyHeaderOne.jsx";

const Title = styled.h1`
	color: red;
	font-size: 80px;
`;

const Button = styled.button`
	background-color: green;
	color: white;
	font-weight: bold;
	padding: 8px;
	border-radius: 8px;
`;

class Form extends Component {
	state = {
		username: "",
		color: "",
		colors: ["", "red", "blue", "green", "black", "pink"],
		comment: "",
	};

	handlePseudo = (event) => {
		this.setState({ username: event.target.value });
	};
	handleColor = (event) => {
		this.setState({ color: event.target.value });
	};
	handleComment = (event) => {
		this.setState({ comment: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log(
			`username: ${this.state.username}, color: ${this.state.color}, comment: ${this.state.comment}`
		);
	};

	render() {
		const myClass = this.props.head ? "blue" : "red";
		return (
			<div>
				<Car color={this.state.color} height="400" />

				<MyHead />
				<p className={`${myClass} bigFont`}>Je suis rouge ou blueu</p>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Pseudo</label>
						<input
							type="text"
							value={this.state.username}
							onChange={this.handlePseudo}
						/>
					</div>
					<div>
						<label>Couleur</label>
						<select value={this.state.color} onChange={this.handleColor}>
							{this.state.colors.map((color, index) => {
								return (
									<option key={index} value={color}>
										{color}
									</option>
								);
							})}
						</select>
					</div>
					<div>
						<label>Commentaire</label>
						<textarea
							value={this.state.comment}
							onChange={this.handleComment}
						></textarea>
					</div>
					<button type="submit">Envoyer</button>
				</form>
				<div>
					<h1 className="mt-5">Nouveau Commentaire</h1>
					<button className="btn btn-outline-danger">Valider</button>
				</div>
				<div>
					<Title>Encore un commentaire</Title>
					<Button>Ne pas cliquer (même si c'est tentant)</Button>
				</div>
			</div>
		);
	}
}

export default Form;
