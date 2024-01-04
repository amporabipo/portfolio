import styles from '@/app/frontendmentor/challenguno/uno.module.css'
import Image from 'next/image'

export default function Page(){
  return(
    <>
        <div className={styles.container}>
              <div className={styles.card}>
                <Image
                  className={styles.myimg}
                  src={'/image-qr-code.png'}
                  alt='asd'
                  height={250}
                  width={250}
                >
                </Image>
                <span>Improve your front-end 
                  skills by building projects</span>
                <p>
                  Scan the qr code to visit frontend Mentor 
                  and take your coding skills to the next level
                </p>
              </div>
        </div>
    </>
  )
}