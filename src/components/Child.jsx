import { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
	background: #c7f8fe;
	border-radius: 12px;
	padding: 1rem;
`;

class Child extends Component {
	state = { count: 0 };

	makeHug = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		const { name } = this.props;
		const { count } = this.state;

		return (
			<Card className="text-left text-gray-700">
				<h3 className="text-xl font-semibold mb-2">{name}</h3>
				<p>
					J'ai reçu <strong>{count}</strong> câlin(s).
				</p>
				<button className="btn btn-sm btn-primary" onClick={this.makeHug}>
					Faire un câlin
				</button>
			</Card>
		);
	}
}

export default Child;
