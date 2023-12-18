import styles from '@/app/page.module.css'
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


export function FiveLayer(){
  return(
    <>
      <div className={styles.FiveLayer}>
          <h1>#Contacto</h1>
            <ul>
              <li><a href='https://www.linkedin.com/in/andresrw/' target='_blank'><FaLinkedin/></a></li>
              <li><a href='mailto:contact@andres'><MdAlternateEmail/></a></li>
            </ul>
      </div>
    </>
  )
}