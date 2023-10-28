import styled from 'styled-components'

export const DivModal = styled.div`
  width: 1614px;
  height: 995px;
  flex-shrink: 0;
  opacity: 0.7;
  background: #121317;
`

export const ModalContainer = styled.div`
  width: 299px;
  height: 254px;
  border-radius: 23px;
  background: ${(props) => props.theme['gray-400']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    :hover {
      opacity: 0.6;
      cursor: pointer;
    }

    svg {
      display: flex;
      margin-left: 220px;
      margin-top: 14px;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const MainModal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  position: absolute;
  right: 60px;
  bottom: 44px;

  img {
    display: flex;
    width: 50px;
    height: 70px;
    align-items: center;
    justify-content: center;
  }

  footer {
    display: flex;
    width: 196px;
    height: 58px;
    align-items: center;
    text-align: center;

    p {
      text-align: center;
      color: ${(props) => props.theme['blue-light']};
      font-size: 24px;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: 0.72px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`
