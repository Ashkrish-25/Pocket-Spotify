import React from 'react'
import './PlayerPlaylist.css'

const playlist = [
  {
    id: 1,
    title:'Sugar',
    Artist: 'Maroon 5',
    Album: 'V',
    Duration: '3:45',
  },
  {
    id: 2,
    title:'Rap God',
    Artist: 'Eminem',
    Album: 'Slim Shady',
    Duration: '2:35',
  },
  {
    id: 3,
    title:'Perfect',
    Artist: 'Ed Sheeran',
    Album: 'love',
    Duration: '3:35',
  },
  {
    id: 4,
    title:'Love you Zindagi',
    Artist: 'Arijit Singh',
    Album: 'Dear Zindagi',
    Duration: '4:15',
  },
  {
    id: 5,
    title:'See you Again',
    Artist: 'Charlie Puth ft.Wiz khalifa',
    Album: 'Furious 7',
    Duration: '3:58',
  },
  {
    id: 6,
    title:'Creeping',
    Artist: 'The Weeknd',
    Album: 'Star Boy',
    Duration: '2:45',
  },
  {
    id: 7,
    title:'Dilbar',
    Artist: 'Neha Kakkar',
    Album: 'Satyameva Jayate',
    Duration: '3.30',
  },
  {
    id: 8,
    title:'Kaisa Hua',
    Artist: 'Arijit Singh',
    Album: 'Kabir Singh',
    Duration: '3.45',
  },
  {
    id: 9,
    title:'Bareshien',
    Artist: 'Anuv Jain',
    Album: 'Anuv',
    Duration: '4:20',
  },
  {
    id: 10,
    title:'Alone',
    Artist: 'Marshmelow',
    Album: 'Alone',
    Duration: '4:15',
  }
]

export default function PlayerPlaylist() {
  return (
    <div className='player-playlist-container'>
      <div className='player-playlist-header'>
        <div className='playlist-image-card'>

        </div>
        <div className='playlist-body'>
          <p>PLAYLIST</p>
          <h1>Best of Mine</h1>
        </div>
      </div>

      <div className='playlist-list'>
        <div className='playlist-list-id'>
          #
        </div>
        <div className='playlist-list-title'>
          TITLE
        </div>
        <div className='playlist-list-album'>
          ALBUM
        </div>
        <div className='playlist-list-duration'>
          DURATION
        </div>
      </div>

      <div className='playlist-list-container'>
        {
          playlist.map(item =>{
            return (
              <div className='playlist-list'>
                <div className='playlist-list-id'>
                  {item.id}
                </div>
                <div className='playlist-list-title'>
                  {item.title}
                </div>
                <div className='playlist-list-album'>
                  {item.Album}
                </div>
                <div className='playlist-list-duration'>
                  {item.Duration}
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}
