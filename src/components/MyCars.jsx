import { Component } from "react";
import Cars from "./Cars";
import MyHeader from "./MyHeader";

class MyCars extends Component {
	noCopy = () => {
		alert("Vous ne pouvez pas copier ce texte");
	};

	addHoverEffect = (event) => {
		event.target.classList.add("styled");
	};
	removeHoverEffect = (event) => {
		event.target.classList.remove("styled");
	};

	state = {
		cars: [
			{ color: "green", name: "Lambo", year: "2020" },
			{ color: "white", name: "Tesla", year: "2021" },
			{ color: "red", name: "Hummer", year: "20" },
			{ color: "blue", year: "2020" },
			{ color: "", name: "", year: "" },
			{ color: "amber", name: "Porsche" },
		],
	};

	render() {
		
		const {
			headerStyle,
			title,
			changeTitle,
			changeTitleByParam,
			changeTitleByBind,
			changeTitleByInput,
		} = this.props;

		return (
			<div className="flex flex-col items-center justify-center">
				<MyHeader headerStyle={headerStyle}>{title}</MyHeader>
				<button
					onClick={changeTitle}
					className="bg-gray-100 p-2 rounded text-black mb-3"
				>
					Changer le titre
				</button>
				<button
					onClick={() => changeTitleByParam("Nouveau titre via param")}
					className="bg-gray-100 p-2 rounded text-black mb-3"
				>
					Changer le nom par parametre
				</button>
				<button
					onClick={changeTitleByBind.bind(this, "Nouveau titre via bind")}
					className="bg-gray-100 p-2 rounded text-black mb-3"
				>
					Changer le nom par bind
				</button>
				<input type="text" onChange={changeTitleByInput} value={title} className="p-2 rounded border border-gray-100 "/>
				<p
					className="my-4"
					onCopy={this.noCopy}
					onMouseOver={this.addHoverEffect}
					onMouseOut={this.removeHoverEffect}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
					incidunt dolore. Id, sunt velit officia accusamus fugiat perferendis
					aperiam quisquam nulla? Dolorum iste possimus quam accusantium sunt
					iusto, aliquid accusamus?
				</p>

				{this.state.cars.map((car, index) => (
					<Cars key={index} {...car} />
				))}
			</div>
		);
	}
}

export default MyCars;
