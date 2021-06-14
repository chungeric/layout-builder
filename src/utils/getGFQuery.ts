export const getGFQuery = (font: string) => {
  switch (font) {
    case 'PT Sans':
      return 'PT+Sans:ital,wght@0,400;0,700;1,400;1,700'
    case 'Source Sans Pro':
      return 'Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700'
    case 'Lato':
      return 'Lato:ital,wght@0,400;0,700;1,400;1,700'
    case 'Roboto Condensed':
      return 'Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700'
    default:
      return null;
  }
}