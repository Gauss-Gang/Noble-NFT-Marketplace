import { Theme } from '@mui/material/styles';

import defaultTheme from './themes/index';
import kittygotchiTheme from './themes/kittygotchi';
import nobleTheme from './themes/noble';

const themes: { [key: string]: Theme } = {
  'default-theme': defaultTheme,
  kittygotchi: kittygotchiTheme,
  noble: nobleTheme,
};

export function getTheme(name: string) {
  return themes[name];
}
