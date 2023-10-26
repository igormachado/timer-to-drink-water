import avatarImg from '../../assets/avatar.svg'
import handsOnImg from '../../assets/handsOn.svg'
import {
  AvatarImg,
  HeaderContainer,
  HeaderContent,
  HeaderGreeting,
} from './styles'
export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <AvatarImg src={avatarImg} alt="" />
          <HeaderGreeting>
            <span>Boa tarde,</span>
            <p>
              <span>Zé</span>
              <img src={handsOnImg} alt="" />
            </p>
          </HeaderGreeting>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
