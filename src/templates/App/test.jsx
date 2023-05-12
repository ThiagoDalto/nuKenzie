import { screen } from '@testing-library/react';
import { App } from '.';
import { renderTheme } from '../../styles/render-theme';

it('Should test', () => {
  renderTheme(<App />);
  screen.debug();
});
