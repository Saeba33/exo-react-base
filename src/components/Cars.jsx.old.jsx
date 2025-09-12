import Wrapper from "./Wrapper";

const Cars = (carsData) => {
	const hasData = Object.values(carsData).some(
		(value) => value != null && value !== ""
	);

	if (!hasData) return null;

	return (
		<Wrapper>
			{carsData.name && <p>Marque : {carsData.name}</p>}
			{carsData.color && <p>Couleur : {carsData.color}</p>}
			{carsData.year && <p>Année de sortie : {carsData.year}</p>}
		</Wrapper>
	);
};

export default Cars;
