import { Component } from "react";
import Car from "./Cars";

class MyCars extends Component {
	state = {
		cars: [
			{ name: "Aston Martin", color: "verte", year: 2024 },
			{ name: "Tesla", color: "blanche", year: 2021 },
			{ name: "Hummer", color: "rouge", year: 2019 },
		],
	};

	getAge = year => {
		const now = new Date().getFullYear();
		const age = now - year;
		const frenchYearStr = age > 1 ? "ans" : "an";
		return `${age} ${frenchYearStr}`;
	}

	 addTenYears = () => {
		const updatedState = this.state.cars.map((param) => {
			return (param.year -= 10);
	});

	this.setState({
	updatedState,
		});
 };

	 removeTenYears = () => {
	 	const updatedState = this.state.cars.map((param) => {
			return (param.year += 10);
		});

		this.setState({
	 		updatedState,
		});
 };

	render() {

		return (
			<div>
				<h1>{this.props.title}</h1>

				<button
					className="bg-gray-100 p-2 rounded text-black m-3 cursor-pointer"
					onClick={this.addTenYears}
				>
					+ 10 ans d'ancienneté
				</button>
				<button
					className="bg-gray-100 p-2 rounded text-black m-3 cursor-pointer"
					onClick={this.removeTenYears}
				>
					- 10 ans d'ancienneté
				</button>

				{this.state.cars.map(({ name, color, year }, index) => (
					<div key={index}>
						<Car name={name} year={year} color={color} age={this.getAge(year)} />
					</div>
				))}
			</div>
		);
	}
}

export default MyCars;
