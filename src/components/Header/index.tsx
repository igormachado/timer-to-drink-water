/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import avatarImg from '../../assets/avatar.svg'
import handsOnImg from '../../assets/handsOn.svg'
import {
  AvatarImg,
  HeaderContainer,
  HeaderContent,
  HeaderGreeting,
} from './styles'
export function Header() {
  const [timeIs, setTimeIs] = useState('')

  function getTimeNow() {
    const whatTimeIs = new Date().getHours()

    if (whatTimeIs < 12) {
      setTimeIs((state) => (state = 'Bom dia'))
    } else if (whatTimeIs > 12 && whatTimeIs < 18) {
      setTimeIs((state) => (state = 'Boa tarde'))
    } else {
      setTimeIs((state) => (state = 'Boa noite'))
    }
  }

  useEffect(() => {
    getTimeNow()
  })

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <AvatarImg src={avatarImg} alt="" />
          <HeaderGreeting>
            <span>{timeIs},</span>
            <p>
              <span>Brow</span>
              <img src={handsOnImg} alt="" />
            </p>
          </HeaderGreeting>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
