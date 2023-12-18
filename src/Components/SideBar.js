import React from 'react'
import './SideBar.css'

import { ReactComponent as Homeicon} from '../Assets/Homeicon.svg';
import { ReactComponent as Searchicon} from '../Assets/Searchicon.svg';
import { ReactComponent as Libraryicon} from '../Assets/Libraryicon.svg';

const myPlaylist= [
    {
        id: 1,
        name: 'The Weeknd'
    },
    {
        id: 2,
        name: 'Eminem'
    },
    {
        id: 3,
        name: 'Ed-Sheeran'
    },
    {
        id: 4,
        name: 'Justin Bieber'
    },
    {
        id: 5,
        name: 'Chris Brown'
    },
    {
        id: 6,
        name: 'Maroon 5'
    },
    {
        id: 7,
        name: 'Khalid'
    },
    {
        id: 8,
        name: 'Charlie Puth'
    },
    {
        id: 9,
        name: 'Shawn Mendes'
    }
]

export default function SideBar() {
  return (
    <div className='side-bar-container'>
        <div className='side-bar-items'>
            <Homeicon width={'18px'} strokeWidth={'2px'} /> Home
        </div>
        <div className='side-bar-items'>
            <Searchicon width={'18px'} strokeWidth={'2px'} /> Searcch
        </div>
        <div className='side-bar-items'>
            <Libraryicon width={'18px'} strokeWidth={'2px'} /> Library
        </div>

        <div className='side-options'>
            {
                myPlaylist.map((item)=>{
                    return(
                        <div className='side-bar-items' key={item.id}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}



