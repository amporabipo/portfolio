import styles from '@/app/page.module.css'
import Image from 'next/image'
import { OneLayer, TwoLayer, ThreeLayer, FourLayer, FiveLayer } from '@/app/components/layers/index'
import { useEffect, useState } from 'react'
import { PowerGlitch, PowerGlitchOptions } from 'powerglitch'
import { IoIosArrowForward } from "react-icons/io";

const config: PowerGlitchOptions = {
  "playMode": "click",
  "createContainers": true,
  "hideOverflow": false,
  "timing": {
    "duration": 250,
    "iterations": 1
  },
  "glitchTimeSpan": {
    "start": 0,
    "end": 1
  },
  "shake": {
    "velocity": 15,
    "amplitudeX": 0.2,
    "amplitudeY": 0.2
  },
  "slice": {
    "count": 15,
    "velocity": 20,
    "minHeight": 0.02,
    "maxHeight": 0.15,
    "hueRotate": true
  },
  "pulse": false
}

export function Board() {

  const [state, setState] = useState<number>(0)

  const HandleChangeComponent = () => {

    setState(state + 1)
    console.log(state)
    if (state === 4) {
      setState(0)
    }
  }
  const RenderComponent = () => {
    switch (state) {
      case 0:
        return <OneLayer />
      case 1:
        return <TwoLayer />
      case 2:
        return <ThreeLayer />
      case 3:
        return <FourLayer />
      case 4:
        return <FiveLayer />

      default:
        return <OneLayer />
    }
  }

  useEffect(() => {
    PowerGlitch.glitch('.btn', config)
  }, [])

  return (
    <>
      <div className={styles.board}>
        <div className={styles.imgboard} >
          <Image
            src="./logo.svg"
            alt="logo"
            height={150}
            width={250}
          ></Image>
        </div>

        <div className={styles.contentent}>
          {RenderComponent()}
        </div>
        <div className={styles.btn}>
          <button onClick={HandleChangeComponent}><IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  )
}