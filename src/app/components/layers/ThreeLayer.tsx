import styles from '@/app/page.module.css'

import { IoLogoReact,IoLogoHtml5, IoLogoCss3, IoLogoJavascript,IoLogoWebComponent } from "react-icons/io5";
import { SiTypescript,SiNestjs,SiThreedotjs,SiNextdotjs, SiKubernetes ,SiMysql,SiMongodb, SiAframe } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker,FaNode,FaGitAlt, FaCpanel, FaWhmcs  } from "react-icons/fa";
import { PiFileJsx } from "react-icons/pi";


export function ThreeLayer(){
  return(
    <>
    <div className={styles.ThreeLayer}>
        <h1>#Tecnologias</h1>
         <ul>
          <li><IoLogoReact/></li>
          <li><IoLogoHtml5/></li>
          <li><IoLogoCss3/></li>
          <li><IoLogoJavascript/></li>
          <li><IoLogoWebComponent/></li>
          <li><PiFileJsx/></li>
        </ul>
        <ul>
          <li><SiTypescript/></li>
          <li><SiNestjs/></li>  
          <li><SiThreedotjs/></li>
          <li><SiNextdotjs/></li>
          <li><FaNode/></li>
        </ul>
        <ul>
          <li><SiMysql/></li>
          <li><SiMongodb/></li>
          <li><BiLogoPostgresql/></li>
        </ul>
        <ul>
          <li><FaDocker/></li>
          <li><SiKubernetes/></li>
          <li><FaGitAlt/></li>
          <li><FaCpanel/></li>
          <li><FaWhmcs/></li>
          <li><FaLinux/></li>
        </ul>

    </div>
               
    </>
  )
}