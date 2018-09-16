import * as React from 'react';
import App from './App';
import * as ShallowRenderer from 'react-test-renderer/shallow';

it('should render App component', () => {
    const shallowRenderer = ShallowRenderer.createRenderer();
    shallowRenderer.render(<App />);
    const result = shallowRenderer.getRenderOutput();

    expect(result).toMatchSnapshot();
});
