import styled from '@emotion/styled';

export const ModalText = styled.p`
  margin-bottom: 48px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.01em;
`;

export const ModalTitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
`;

export const ColorSpan = styled.span`
  font-weight: 700;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 275px;

  .svg {
    fill: none;
    stroke: v '#FFFFFF';
  }

  // прибрати ці стилі якщо вони зєявиться в блакитній та жовтій кнопках
  .btn {
    padding: 0;
    height: 40px;
    font-weight: 700;
    font-size: 16px;

    //  прибрати цей ховер якщо він зєявиться в блакитній та жовтій кнопках
    :hover {
      background: ${({ theme }) => theme.background.azure};
      border: none;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-bottom: 60px;
`;

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

// export const CancelBtn = styled.button`
// margin-right: 17px;
// font-weight: 700;
// font-size: 16px;
// width: 129px;
// height: 40px;
// background: none;
// color: #54ADFF;
// border-radius: 40px;
// border: 2px solid #54ADFF;

// &:focus,
//   &:hover {
//     background: #CCE4FB;
//   }
// `

// export const YesBtn = styled.button`
// font-weight: 700;
// font-size: 16px;
// width: 129px;
// height: 40px;
// background: #54ADFF;
// color: #FFFFFF;
// border-radius: 40px;
// border: none;

// &:focus,
//   &:hover {
//     background: #CCE4FB;
//     border: 2px solid #54ADFF;
//     color: #54ADFF;
// `
