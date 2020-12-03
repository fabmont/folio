import { darken } from 'polished';

export interface ThemeInterface {
  primaryColor: string;
  bodyBackground: string;
  componentBackground: string;
  textColor: string;
  titleColor: string;
  disabledColor: string;
}

const light = {
  primaryColor: '#29c7ac',
  bodyBackground: '#FFFFFF',
  componentBackground: darken(0.07, '#FFF'),
  textColor: '#1C1C1C',
  titleColor: '#000',
  disabledColor: '#F2F2F2',
};

const dark = {
  primaryColor: '#29c7ac',
  bodyBackground: '#212529',
  componentBackground: darken(0.01, '#212529'),
  textColor: '#EAEBED',
  titleColor: '#FFFFFF',
  disabledColor: '#2b3036',
};

export default { light, dark };
