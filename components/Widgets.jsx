import { SearchIcon } from '@heroicons/react/outline';
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='col-span-2 mt-2 hidden lg:inline px-2'>
        <div className='flex item-center space-x-2 bg-gray-100 p-3 mt-2'>
            <SearchIcon className='h-5 w-5 text-gray-400'/>
            <input type="text" placeholder="Search Twitter" className='flex-1 outline-none bg-transparent rounded-full'/>
        </div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="DanielMcIntyree"
            options={{height: 400}}
        />
    </div>
  )
}

export default Widgets;