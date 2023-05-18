import styled from '@emotion/styled';

// export const Backdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(43, 43, 43, 0.6);
//   backdrop-filter: blur(10px);
// `;

// export const Wrapper = styled.div`
// position: absolute;
// display: flex;
// align-items: center;
// text-align: center;
// flex-direction: column;
// top: 50%;
// left: 50%;
// background-color: ${({theme}) => theme.colors.white};
// transform: translate(-50%, -50%);
// min-height: 354px;
// max-width: 608px;
// width: 100%;
// box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
// border-radius: 40px;
// `;

// export const CloseModalBtn = styled.button`
// padding: 0;
// width: 20px;
// height: 20px;

// position: absolute;
// top: 29px;
// right: 29px;
// background: none;
// border: none;
// `

export const Container = styled.div`
  position: fixed;
  top: 25%;
  left: 35%;
  width: 500px;
  height: 400px;

  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-bottom: 60px;

  background-color: white;
  border-radius: 30px;

  box-shadow: ${({ theme }) => theme.shadow.default};
`;
// перевірити чи додали стилі для ховеру на кнопки

export const Text = styled.p`
  margin-bottom: 60px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.04em;
`;

export const Title = styled.h2`
  margin-top: 60px;
  margin-bottom: 52px;
  font-weight: 500;
  font-size: 36px;
  letter-spacing: 0.04em;
  color: #111111;
`;

// export const GoToBtn = styled.div`
// margin-bottom: 60px;
// display: flex;
// align-items: center;
// justify-content: center;
// font-weight: 700;
// font-size: 16px;
// width: 248px;
// height: 40px;
// letter-spacing: 0.04em;
// background: ${({ theme }) => theme.colors.blue};
// color: ${({ theme }) => theme.colors.white};
// border-radius: 40px;
// border: none;

// &:focus,
//   &:hover {
//     background: ${({ theme }) => theme.background.azure};
// `
