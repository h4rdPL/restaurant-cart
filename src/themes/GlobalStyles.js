import { createGlobalStyle } from "styled-components";
import RedHatTextRegular from "../assets/fonts/RedHatText-VariableFont_wghtRedHatText-VariableFont_wght.ttf";
import RedHatTextItalic from "../assets/fonts/RedHatText-Italic-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'RedHatText';
        src: url(${RedHatTextRegular}) format('truetype');
        font-weight: 100 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'RedHatText';
        src: url(${RedHatTextItalic}) format('truetype');
        font-weight: 100 900;
        font-style: italic;
    }

    body {
        font-family: "RedHatText";
        background-color: ${({ theme }) => theme.colors.rose100};
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
