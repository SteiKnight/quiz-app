
import styled, {createGlobalStyle} from 'styled-components';

import BG from '../images/chinh-le-duc.jpg';

export const GlobalStyle = createGlobalStyle`
   html {
      height: 100%;
   }

   body{
      background-image: url(${BG});
      background-size: cover;
      margin:0;
      padding: 0 20px;
      display:flex;
      justify-content: center;
   }

   * {
      box-sizing: border-box;
      font-family: Outfit;
   }

`;

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;


   > p {
      color: #472c2c;
   }

   .score {
      color: #472c2c;
      font-size: 2rem;
      margin: 0;
   }


   h1 {
      font-family: Fascinate Inline, Haettenshweiler, 'Arial Narrow Bold', sans-sans-serif;
      background-image: linear-gradient(180deg, #e1a590, #472c2c);
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      filter: drop-shadow(2px 2px #0085a3);
      font-size: 70px;
      font-weight:400;
      text-align: center;
      margin:20px;
   }

   .start, .next {
      color: #e1a590;
      cursor:pointer;
      background: linear-gradient(180deg, #e1a590, #472c2c);
      border: 2px solid #ac6b68;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      height: 40px;
      margin: 20px 0;
      padding: 0 40px;
   }

   .start{
      max-width: 200px;
   }
`
