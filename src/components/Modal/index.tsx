import { X } from 'lucide-react'
import glassOfWaterImg from '../../assets/glassOfWater.svg'
import { MainModal, ModalContainer } from './styles'
import { useState } from 'react'

export function Modal() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleIsOpenModal() {
    setIsOpenModal(!isOpenModal)
  }
  return (
    <>
      {!isOpenModal ? (
        <button onClick={handleIsOpenModal}>
          <ModalContainer>
            <header>
              <X />
            </header>
            <MainModal>
              <img src={glassOfWaterImg} alt="copo cheio com água" />
              <footer>
                <p>Lembrete para beber água!</p>
              </footer>
            </MainModal>
          </ModalContainer>
        </button>
      ) : (
        ''
      )}
    </>
  )
}
