import { render } from '@testing-library/react';
import SelectStarter from './SelectStarter';

describe(SelectStarter, () => {
	it('displays correct inital image', () => {
		const { getByTestId } = render(
			<SelectStarter initialStarterImg="professor-oak.png" />
		);
		const image = getByTestId('selection');
		expect(image.src).toContain('professor-oak.png');
	});
});
