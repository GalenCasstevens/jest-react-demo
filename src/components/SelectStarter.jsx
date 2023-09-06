import { useState } from 'react';
import Container from 'react-bootstrap/Container';

function SelectStarter({ initialStarterImg }) {
	const [starterImg, setStarterImg] = useState(initialStarterImg);

	const chooseBulbasaur = () => {
		setStarterImg('bulbasaur.png');
	};

	const chooseCharmander = () => {
		setStarterImg('charmander.png');
	};

	const chooseSquirtle = () => {
		setStarterImg('squirtle.png');
	};

	return (
		<>
			<Container>
				<h1 id="title">Choose your starter</h1>
				<img
					id="selection"
					data-testid={'selection'}
					src={require(`../assets/${starterImg}`)}
				/>
				<div id="pokeballs">
					<img
						id="bulbasaur"
						className="pokeball"
						src={require('../assets/pokeball.png')}
						onClick={() => chooseBulbasaur()}
					/>
					<img
						id="charmander"
						className="pokeball"
						src={require('../assets/pokeball.png')}
						onClick={() => chooseCharmander()}
					/>
					<img
						id="squirtle"
						className="pokeball"
						src={require('../assets/pokeball.png')}
						onClick={() => chooseSquirtle()}
					/>
				</div>
			</Container>
		</>
	);
}

export default SelectStarter;
