import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        background: ${(props) => props.theme['gray-500']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 1rem, Roboto, sans-serif;
        font-weight: 400;
        
    }


`
