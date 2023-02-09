import 'styled-components';
import theme from 'ui-theme/theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
