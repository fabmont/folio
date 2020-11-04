import { darken } from 'polished';

const light = {
  primaryColor: '#29c7ac',
  bodyBackground: '#FFFFFF',
  componentBackground: darken(0.07, '#FFF'),
  textColor: '#1C1C1C',
  titleColor: '#000',
  disabledColor: '#DDDDDD',
};

const dark = {
  primaryColor: '#29c7ac',
  bodyBackground: '#212529',
  componentBackground: darken(0.01, '#212529'),
  textColor: '#EAEBED',
  titleColor: '#FFFFFF',
  disabledColor: '#DDDDDD',
};

export default { light, dark };
