import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    list-style: none;
    text-decoration: none;
}

:root{

--brand-1: #27AE60;
--brand-2: #93D7AF;

--white: #FFFFFF;
--grey-0: #F5F5F5;
--grey-1: #E0E0E0;
--grey-2: #828282;
--grey-3: #333333;

--alert: #E60000;
--success: #168821;
--warning: #FFCD07;
--info: #155BCB;

--title-1: 1.625rem; /* 26px */
--title-2: 1.375rem; /* 22px */
--title-3: 1.125rem; /* 18px */

--text-1: 1rem; /* 16px */
--text-2: 0.875rem; /* 14px */
--text-3: 0.75rem; /* 12px */

--font-w-1: 700;
--font-w-2: 600;
--font-w-3: 500;
--font-w-4: 400;

}

`

export default GlobalStyles