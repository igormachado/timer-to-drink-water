import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 195px;
  height: 63px;
  margin-bottom: 76px;
`

export const HeaderContent = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const AvatarImg = styled.img`
  width: 63px;
  height: 63px;
  justify-content: center;
  align-items: center;
  /* border-radius: 6px; */
`

export const HeaderGreeting = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  :first-child {
    color: ${(props) => props.theme['gray-100']};
    font-size: 24px;
    font-weight: 300;
    line-height: 1.2;
  }

  :last-child span {
    color: ${(props) => props.theme['gray-100']};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
  }

  :last-child img {
    width: 25px;
    height: 25px;
    margin-left: 4px;
  }
`
