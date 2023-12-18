import React from 'react'
import './Footer.css'

import { ReactComponent as Playicon} from '../Assets/Playicon.svg'
import { ReactComponent as Pauseicon} from '../Assets/Pauseicon.svg'
import { ReactComponent as Nexticon } from '../Assets/Nexticon.svg'
import { ReactComponent as Previcon } from '../Assets/Previcon.svg'


export default function Footer() {
  const [isPlay , setIsPlay]= React.useState(false)
  return (
    <div className='footer-container'>
      <div className='player-control'>
        <Previcon width={'32px'}/>
        {
          isPlay ? <Pauseicon width={'32px'} onClick={()=> setIsPlay(false)}/> : <Playicon width={'32px'} onClick={()=> setIsPlay(true)}/>
        }
        
        <Nexticon width={'32px'}/>
      </div>
    </div>
  )
}
