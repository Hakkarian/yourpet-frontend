import styled from '@emotion/styled';
// import { Field } from 'formik';

export const ToolBar = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(25)}px; ////need fix!!
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

// export const RadioInput = styled(Field)`
//   opacity: 0;
//   position: fixed;
//   width: 0;

//   &:checked + label {
//     background-color: ${({ theme, name }) => {
//       if (name === 'category') {
//         return theme.colors.blue;
//       }
//       return 'transparent';
//     }};

//     color: ${({ theme, name }) => {
//       if (name === 'category') {
//         return theme.colors.white;
//       }
//       return theme.colors.green;
//     }};
//   }
// `;

// export const RadioLabel = styled.label`
//   display: inline-block;
//   background-color: ${({ theme, name }) => {
//     if (name === 'category') {
//       return theme.colors.lightblue;
//     }
//     return 'transparent';
//   }};
//   color: ${({ theme, name }) => {
//     if (name === 'category') {
//       return theme.colors.blue;
//     }
//     return '#888888';
//   }};
//   padding-top: ${({ theme }) => theme.spacing(2)}px;
//   padding-bottom: ${({ theme }) => theme.spacing(2)}px;
//   padding-left: ${({ theme }) => theme.spacing(4)}px;
//   padding-right: ${({ theme }) => theme.spacing(4)}px;
//   font-family: inherit;
//   font-size: ${({ theme, name }) => {
//     if (name === 'category') {
//       return theme.spacing(3.5);
//     }
//     return theme.spacing(4);
//   }}px;
//   font-weight: ${({ name }) => {
//     if (name === 'category') {
//       return 500;
//     }
//     return 400;
//   }};
//   border: none;
//   border-radius: 40px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;
