import styled from '@emotion/styled';
import responsiveMixin from 'shared/utils/responsiveDesign';

export const TitleSearch = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 28px;
  color: ${({ theme }) => theme.colors.black};
  ${responsiveMixin('font-size', { xl: '48px' })}
  ${responsiveMixin('margin-bottom', { xl: '40px' })}
}
  `;

export const FormSearch = styled.form`
  position: relative;
  margin-top: 42px;
  margin-right: auto;
  margin-left: auto;
 ${responsiveMixin('width', { sm: '280px', md: '492px', xl: '608px' })}
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.default};
  &: focus:  box-shadow: ${({ theme }) => theme.shadow.hover};
  border-radius: 40px;
  border: 1px solid transparent;
  padding:8px 20px;
  box-sizing: border-box;
  outline:none;

  ${responsiveMixin('width', { md: '492px', xl: '608px' })}
  ${responsiveMixin('height', { sm: '40px', md: '44px', xl: '44px' })}
    }
`;

export const ButtonIcon = styled.button`
  position: absolute;
  padding: 12px 14px;
  top: 84px;
  right: 12px;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;

  ${responsiveMixin('top', { md: '57px', xl: '105px' })}
  ${responsiveMixin('right', { md: '15px' })}
`;

export const IconSearch = styled.img`
  fill: ${({ theme }) => theme.colors.blue};
`;
