/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronRight } from 'lucide-react'
import glassOfWaterImg from '../../assets/glassOfWater.svg'
import {
  FooterButton,
  Hour,
  InputRange,
  MainArticle,
  MainContainer,
  MetaBase,
  Minute,
  ProgressBar,
  Separator,
  Timer,
} from './styles'
import { FormEvent, useEffect, useState } from 'react'
import { Modal } from '../Modal'

export function Main() {
  const [hoursTime, setHoursTime] = useState(0)
  const [minutesTime, setMinutesTime] = useState(5)
  const [countDown, setCountDown] = useState(60)
  const [amountToDrink, setAmountToDrink] = useState(0)
  const [totalWaterDrinked, setTotalWaterDrinked] = useState(0)

  function changeAmountToDrink() {
    setAmountToDrink(Math.floor(2000 / 300))
    setTotalWaterDrinked(Math.floor((2000 * 100) / 3000))
  }

  useEffect(() => {
    changeAmountToDrink()
  })

  function createCountDownMinutes() {
    if (countDown < 1) setCountDown(60)
    if (countDown < 1 && minutesTime > 0) {
      setMinutesTime((state) => state - 1)
    }
  }

  function verificationAndCreateHourCountDown() {
    if (minutesTime === 0 && hoursTime > 0) {
      setMinutesTime(59)
      setHoursTime((state) => state - 1)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((state) => state - 1)
    }, 1000)
    createCountDownMinutes()
    verificationAndCreateHourCountDown()
    handleAddMinutesAndHours()
    return () => clearInterval(interval)
  }, [countDown, createCountDownMinutes])

  function handleSubmitTimer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setCountDown(60)
  }

  function handleChangeHourTime(event: any) {
    setHoursTime(event.target.value)
  }

  function handleChangeMinuteTime(e: any) {
    setMinutesTime(e.target.value)
  }
  function handleAddMinutesAndHours() {
    setHoursTime((state) => state)
    setMinutesTime((state) => state)
  }

  return (
    <>
      <MainContainer>
        <MainArticle>
          <p>{totalWaterDrinked}%</p>
          <img src={glassOfWaterImg} alt="copo cheio com água" />
          <footer>
            <p>Beber água</p>
            <span>Meta: 3L</span>
          </footer>
        </MainArticle>
        <aside>
          <MetaBase>
            <span>Meta diária</span>
            <span>3000ml</span>
          </MetaBase>
          <ProgressBar>
            <InputRange
              type="range"
              min={0}
              max={10}
              value={amountToDrink}
              step={1}
              onChange={changeAmountToDrink}
            />
          </ProgressBar>
          <MetaBase>
            <span>Quantidade por timer</span>
            <span>300ml</span>
          </MetaBase>
          <ProgressBar>
            <InputRange
              type="range"
              min={0}
              max={10}
              value={amountToDrink}
              step={1}
              onChange={changeAmountToDrink}
            />
          </ProgressBar>
          <form onSubmit={handleSubmitTimer}>
            {minutesTime === 0 && hoursTime === 0 ? <Modal /> : ''}
            <Timer>
              <Hour>
                <input
                  type="number"
                  placeholder="00"
                  min={0}
                  max={12}
                  value={
                    hoursTime < 10
                      ? String(hoursTime).padStart(2, '0')
                      : hoursTime
                  }
                  onChange={handleChangeHourTime}
                  required
                />
                <span>h</span>
              </Hour>
              <Separator>:</Separator>
              <Minute>
                <input
                  type="number"
                  placeholder="00"
                  min={0}
                  max={59}
                  value={
                    minutesTime < 10
                      ? String(minutesTime).padStart(2, '0')
                      : minutesTime
                  }
                  onChange={handleChangeMinuteTime}
                  required
                />
                <span>m</span>
              </Minute>
            </Timer>
            <FooterButton>
              <button onClick={handleAddMinutesAndHours}>
                Começar <ChevronRight />
              </button>
            </FooterButton>
          </form>
        </aside>
      </MainContainer>
    </>
  )
}
