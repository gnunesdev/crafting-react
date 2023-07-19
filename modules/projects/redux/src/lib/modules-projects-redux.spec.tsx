import { render } from '@testing-library/react';

import ModulesProjectsRedux from './modules-projects-redux';

describe('ModulesProjectsRedux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesProjectsRedux />);
    expect(baseElement).toBeTruthy();
  });
});
