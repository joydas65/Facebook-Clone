import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://scontent.fccu16-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/119091711_3319642611594912_2074095737847610583_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_ohc=WlIpqs1jfG4AX9auHGi&_nc_ht=scontent.fccu16-1.fna&tp=27&oh=9df63a6b0aa81a54e222112436b5d7d0&oe=5FEC81C4"
                title="Joy Das"
            
            />
            <Story
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                title="Sonny Sangha"
             />
            <Story 
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                profileSrc="https://scontent.fccu16-1.fna.fbcdn.net/v/t1.0-1/c25.0.111.111a/p111x111/72299067_2502045603362555_1561974404626251776_o.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=urXbwnPZwxgAX8vxcmx&_nc_ht=scontent.fccu16-1.fna&tp=27&oh=3abe36765b30b0962e0f51920cfe7ba8&oe=5FEEE19B"
                title="Kunal Dey"
            />
            <Story 
                image="https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg"
                profileSrc="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
                title="Aaron Bernath"
            />
            <Story 
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
                profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
                title="Naz"
            />
        </div>
    )
}

export default StoryReel