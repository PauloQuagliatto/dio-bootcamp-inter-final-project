import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    --white-200: #F1F1F1;
    --white-300: #CBCBCB;
    --white-500: #929292;

    --red-700: #761919;
    --red-500: #B10909;
    --red-300: #CB2E2E;
    --red-100: #EB6D6D;
    
    --green-500: #3F841F;
    --green-300: #4DBA1A;
    --green-100: #66B142;

    --orange-500: #E38E0E;
    }

 * {
     margin: 0%;
     padding: 0;
     box-sizing: 0;
     overflow: hidden;
 }

 html{
     @media (max-width: 1080px) {
        font-size: 93.75%;
     }

     @media (max-width: 720px) {
         font-size: 67.5%;
     }
 }

 body {
    -webkit-font-smoothing: antialiased;
 }

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
 }

 .react-modal-content {
    overflow-y: auto;
    width: 100%;
    max-width: 70%;
    height: 70%;
    padding: 3rem;
    position: relative;
    background: white;
    border-radius: 0.25rem;
 }

 .react-modal-content-spinner {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }

 .react-modal-close {
     position: absolute;
     right: 1.5rem;
     top: 1.5rem;
     border: 0;
     background: transparent;

     transition: filter 0.2s;
     &:hover {
         filter: brightness(0.8);
     }
 }
`;

export default GlobalStyle;
