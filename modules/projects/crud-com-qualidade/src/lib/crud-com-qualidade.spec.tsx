import { render } from '@testing-library/react';

import CrudComQualidade from './crud-com-qualidade';

describe('CrudComQualidade', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrudComQualidade />);
    expect(baseElement).toBeTruthy();
  });
});
