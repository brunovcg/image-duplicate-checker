import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
        --blue: #006EB6;
        --dark-blue: #0121a3;
        --orange: #EF402D;
        --grey: #939292;
        --light-grey: #e5e5e5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button, h1, h3, h4, h5, h6, p, textarea, select{
        font-family: 'Roboto', sans-serif;
    }

    h2{
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    img{
        width: 20vw;
    }
`;
