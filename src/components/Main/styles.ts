import { styled } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 102px;
`

export const MainArticle = styled.article`
  display: flex;
  width: 208px;
  height: 350px;
  min-width: 208px;
  max-width: 208px;
  min-height: 350px;
  max-height: 350px;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  border-radius: 20px;
  background: ${(props) => props.theme['blue-light']};

  p {
    color: ${(props) => props.theme['gray-500']};
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0cap.36px;
  }

  img {
    width: 97px;
    height: 151px;
  }

  span {
    display: flex;
    justify-content: center;
    margin-top: 9px;
  }
`

export const MetaBase = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: stretch;
  width: 320px;
  height: 16px;
  margin-bottom: 20px;

  :first-child {
    margin-bottom: 10px;
    color: ${(props) => props.theme['blue-light']};
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.48px;
  }

  :last-child {
    color: ${(props) => props.theme['gray-100']};
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.36px;
    /* margin-bottom: 10px; */
  }
`

export const ProgressBar = styled.p`
  width: 320px;
  height: 32px;
  /* margin-top: 10px; */
`

export const InputRange = styled.input`
  width: 320px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${(props) => props.theme['gray-200']};
  margin-bottom: 20px;
`

export const Timer = styled.p`
  margin-top: 38px;
  display: flex;
  height: 64px;
  align-items: center;
  gap: 13px;
  flex-shrink: 0;
  justify-content: center;
`

export const Hour = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  input {
    display: flex;
    width: 64px;
    height: 64px;
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 8px;
    color: ${(props) => props.theme['gray-100']};

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['gray-200']};
    background: ${(props) => props.theme['gray-400']};
    font-size: 20px;
    font-weight: bold;
  }

  :last-child {
    color: ${(props) => props.theme['gray-100']};
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
  }
`

export const Separator = styled.span`
  color: ${(props) => props.theme['gray-100']};
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 1px;
`

export const Minute = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  :first-child {
    display: flex;
    width: 64px;
    height: 64px;
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
    text-align: center;

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['gray-200']};
    background: ${(props) => props.theme['gray-400']};
  }

  :last-child {
    color: ${(props) => props.theme['gray-100']};
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
  }
`
export const FooterButton = styled.footer`
  button {
    display: flex;
    width: 320px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: ${(props) => props.theme['blue-light']};
    margin-top: 50px;

    border: none;
    color: ${(props) => props.theme['gray-500']};
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.48px;
    background: ${(props) => props.theme['blue-light']};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['blue-dark']};
      opacity: 0.8;
      transition: 1s;
    }
  }
`
