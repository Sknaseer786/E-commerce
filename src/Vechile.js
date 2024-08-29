import React, { useState } from 'react'
import './Vechile.css'


export default function Vechile() {
    const [vechile, setVechile] = useState([{
        name: "Suzuki",
        price: "1,20000",
        description: "image description",
        pic: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/49463/gixxer-sf-right-side-view-3.png?isig=0&q=80&wm=3"

    },
    {
        name: "Yamaha",
        price: "1,30,000",
        description: "image description",
        pic: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/49463/gixxer-sf-right-side-view-3.png?isig=0&q=80&wm=3"

    },
    {
        name: "Bullet",
        price: "1,40,000",
        description: "image description",
        pic: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/49463/gixxer-sf-right-side-view-3.png?isig=0&q=80&wm=3"

    }
    ])
    return (
        <div className='vechile-parent'>
            {
                vechile.map((vec) => (
                    <div className='vechile' >
                        <p><b>Name:</b>{vec.name}</p>
                        <p><b>Cost:</b>{vec.price}</p>
                        <p><b>Description:</b>{vec.description}</p>
                        <img src={vec.pic} width="65%" />

                    </div>))
            }


        </div>
    )
}
