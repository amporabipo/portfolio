import style from '@/app/frontendmentor/styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";


export default function Page(){
  return (
    <>
        <div className={style.container}>
            <div className={style.header}>
                  <Image
                    src={'/frontendmentor.svg'}
                    alt=''
                    height={50}
                    width={300}
                  >
                  </Image>
            </div>
            <div className={style.content}>
                  <div className={style.projects}>
                      <h1>Challengs</h1>
                      <ul>
                        <li> <Link href="/frontendmentor/qrchallenge "><HiArrowSmRight />
QR code component </Link></li>
                      </ul>
                  </div>
            </div>
        </div>
    </>
  )
}