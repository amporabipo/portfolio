import styles from '@/app/page.module.css'
import { LuSprout } from "react-icons/lu";

export function FourLayer(){
  return(
    <>
      <div className={styles.FourLayer}>
            <h1>#Trabajos</h1> 
            <ul>
              <li><LuSprout/></li>
              <li><LuSprout/></li>
              <li><LuSprout/></li>
              <li><LuSprout/></li>
              <li><LuSprout/></li>
              <li><LuSprout/></li>
            </ul>
      </div>
    </>
  )
}