import { fireEvent, render } from '@testing-library/react';
import SelectStarter from './SelectStarter';

describe(SelectStarter, () => {
	it('displays correct inital image', () => {
		const { getByTestId } = render(
			<SelectStarter initialStarterImg="professor-oak.png" />
		);
		const selectionImg = getByTestId('selection');
		expect(selectionImg.src).toContain('professor-oak.png');
	});

	it('displays Bulbasaur when first ball is clicked', () => {
		const { getByTestId } = render(
			<SelectStarter initialStarterImg="professor-oak.png" />
		);
		const selectionImg = getByTestId('selection');
		const firstBall = getByTestId('bulbasaur');
		expect(selectionImg.src).toContain('professor-oak.png');
		fireEvent.click(firstBall);
		expect(selectionImg.src).toContain('bulbasaur.png');
	});

	it('displays Charmander when second ball is clicked', () => {
		const { getByTestId } = render(
			<SelectStarter initialStarterImg="professor-oak.png" />
		);
		const selectionImg = getByTestId('selection');
		const secondBall = getByTestId('charmander');
		expect(selectionImg.src).toContain('professor-oak.png');
		fireEvent.click(secondBall);
		expect(selectionImg.src).toContain('charmander.png');
	});

	it('displays Squirtle when third ball is clicked', () => {
		const { getByTestId } = render(
			<SelectStarter initialStarterImg="professor-oak.png" />
		);
		const selectionImg = getByTestId('selection');
		const thirdBall = getByTestId('squirtle');
		expect(selectionImg.src).toContain('professor-oak.png');
		fireEvent.click(thirdBall);
		expect(selectionImg.src).toContain('squirtle.png');
	});
});
