import "./App.css";
import CustomBtn from "./components/CustomBtn";
import Parent from "./components/Parent";

const App = () => {
	return (
		<div className="bg-slate-900 h-screen w-full p-10 text-white">
			<h1>Exercice 7 :</h1>
			<Parent />

			<div className="flex flex-col gap-6 mt-12">
				<CustomBtn>
					Bouton par défautl
				</CustomBtn>

				<CustomBtn style={{ backgroundColor: "red", borderRadius: "50px" }}>
					Je suis un bouton rouge avec gros radius
				</CustomBtn>

				<CustomBtn style={{ backgroundColor: "blue", borderRadius: "0px" }}>
					Je suis un bouton bleu sans arrondis
				</CustomBtn>
			</div>
		</div>
	);
};

export default App;
