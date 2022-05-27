import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */
    *{
        box-sizing: border-box;

    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: "Montserrat", sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: #f3f3f3;
        font-family: 'Montserrat', sans-serif;
        position: relative;
        height: 100vh;

        display: flex;
    }
    button{
        cursor: pointer;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 7px;
  width: 7px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #D7E1E3;
}
*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}
*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}
*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #9D9D9D;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #575757;
}
*::-webkit-scrollbar-thumb:active {
  background-color: #565656;
}

    #root{
        width: 100%;
    }

    :root{
        --white-0: #ffffff;
        --white-200: #fffbff;
        --beige-0: #f3f3f3;
        --beige-1: #f1dabf;
        --beige-dark: #92817A;
        --vine: #470024;

        --margin: 20px;

        @media (min-width: 600px) {
            --margin: 40px;
        }

        @media (min-width: 800px) {
            --margin: 80px;
        }
    }
`;

export default GlobalStyle;
