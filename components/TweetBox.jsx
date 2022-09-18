import React from 'react'
// import {
//     CalenderIcon, 
//     EmojiHappyIcon,
//     LocationMarkerIcon,
//     SearchCircleIcon,
// } from '@heroicons/react/outline'

function Tweetbox() {
  return (
    <div>
        <img className="h-14 w-14 rounded-full object-cover mt-4" 
        src="https://links.papareact.com/gll"/>
        <div>
            <form>
                <input type="text" placeholder="What's Happening?"/>
                <div>
                    <div>
                        {/* <SearchCircleIcon className='h5 w-5'/>
                        <EmojiHappyIcon className='h5 w-5'/>
                        <CalenderIcon className='h5 w-5'/>
                        <LocationMarkerIcon className='h5 w-5'/>
                        <SearchCircleIcon className='h5 w-5'/> */}
                    </div>
                    <button>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Tweetbox;