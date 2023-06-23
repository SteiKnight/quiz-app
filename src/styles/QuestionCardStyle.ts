import styled from 'styled-components';

export const Wrapper = styled.div`
   max-width: 1100px;
   background: #472c2c;
   border-radius: 10px;
   border: 2px solid #0085a3;
   padding: 20px;
   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
   text-align: center;

   p{
      font-size: 1rem;
      color: #e1a590;
   }
`

interface LiWrapperProps {
   correct: boolean;
   userClicked: boolean;
}
export const LiWrapper = styled.div<LiWrapperProps>`
   transition: all 0.3s ease;

   :hover {
      opacity: 0.8;
   }

   li {
      cursor: pointer;
      user-select: none;
      font-size: 0.8rem;
      width: 100%;
      height: 40px;
      margin: 5px 0;
      background: ${({ correct, userClicked }) =>
      correct ? 'linear-gradient(90deg, #56ffa4, #59bc86)' : !correct && userClicked ?
         'linear-gradient(90deg, #ff5656, #c16868)' : 'linear-gradient(90deg, #ac6b68, #e1a590)'};
      border: 3px solid #fff;
      box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
      border-radius: 10px;
      color: #fff;
      text-shadow: 0px 1px 0px rgba(0,0,0,0.25);
};
`
//pointer-events: ${({ userClicked }) => userClicked && 'none'};
