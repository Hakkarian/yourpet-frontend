export const theme = {
  //styles from the UI Kit Palette
  colors: {
    yellow: '#FFC107',
    white: '#FDF7F2',
    black: '#111111',
    blue: '#54ADFF',
    lightblue: '#CCE4FB',
    green: '#00C3AD',
    red: '#F43F5E',
  },
  background: {
    azure: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);',
  },
  shadow: {
    default: '3px 8px 14px rgba(136, 198, 253, 0.19);',
    hover: '7px 13px 14px rgba(116, 177, 232, 0.24);',
  },
  utils: {
    cubicBezier: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  spacing: value => 4 * value,
};