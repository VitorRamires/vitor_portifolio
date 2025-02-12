import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryBg: string;
    secundaryBg: string;
    btnBg: string;

    primaryColor: string;
    secundaryColor: string;
    terciaryColor: string;
  }
}
