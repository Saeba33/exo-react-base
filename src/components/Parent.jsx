import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
	state = {
		children: [
			{ name: "Sacha", count: 0 },
			{ name: "Chamallow", count: 0 },
		],
	};

	render() {
		const { children } = this.state;
		const headerStyle = {
			color: "white",
			marginBottom: "1rem",
		};

		return (
			<>
				<div className="mt-20 d-flex justify-content-between align-items-center">
					<div>
						<h2 style={headerStyle}>Je suis le parent</h2>
						<p>
							j'ai été habillé à l'aide de style(inline), styled-compnents,
							tailwind, bootstrap et css(classico-classique)
						</p>
					</div>
				</div>

				<div className="flex gap-2">
					{children.map((child) => (
						<div className="flex-1" key={child.name}>
							<Child name={child.name} />
						</div>
					))}
				</div>
			</>
		);
	}
}

export default Parent;
