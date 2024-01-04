import styles from '@/app/page.module.css'
import { PowerGlitchOptions, PowerGlitch } from 'powerglitch'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const config: PowerGlitchOptions = {

  "playMode": "always",
  "createContainers": true,
  "hideOverflow": false,
  "timing": {
    "duration": 2000,
    "iterations": 1,
    "easing": "ease-in-out"
  },
  "glitchTimeSpan": {
    "start": 0.5,
    "end": 0.7
  },
  "shake": {
    "velocity": 15,
    "amplitudeX": 0.2,
    "amplitudeY": 0.2
  },
  "slice": {
    "count": 6,
    "velocity": 15,
    "minHeight": 0.02,
    "maxHeight": 0.15,
    "hueRotate": true
  },
  "pulse": false
}

interface ChildProps{
  sendData: (data: number) => void
}

export function OneLayer({ sendData }: any) {

  const [childState, setChildState] = useState<number>(1)

  useEffect(() => {
    PowerGlitch.glitch('.profile-img', config)
  }, [])

  const handleClick = (num:number) =>{
    const newState = num
    setChildState(newState)
    sendData(newState)
  }

  return (
    <>
      <div className={styles.OneLayer}>
        <div className={styles.OneLayerLeft}>
          <ul>
            <li onClick={() => handleClick(0)}>#Inicio</li>
            <li onClick={() => handleClick(1)}>#Sobre_mi</li>
            <li onClick={() => handleClick(2)}>#Tecnologias</li>
            <li onClick={() => handleClick(3)}>#Ejemplos</li>
            <li onClick={() => handleClick(4)}>#Contacto</li>
          </ul>
        </div>
        <div className={styles.OneLayerRight}>
          <div className={`${styles.imgBorder} profile-img`}>
            <Image
              src="/profile_2.jpg"
              alt="profile"
              height={250}
              width={250}
            ></Image>
          </div>
        </div>
      </div>
    </>
  )
}