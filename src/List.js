import React from 'react'
import { useState } from 'react'


export default function List() {
    const [employee, setEmployee] = useState([{
        name: "Nasiroddin",
        year: 2023,
        collage: "Bvrit"

    },
    {
        name: "Naveen",
        year: 2023,
        collage: "Bvrit"

    },
    {
        name: "Arjun",
        year: 2024,
        collage: "Mallareddy"

    }
    ])

    return (
        <div>
           {/* {employee.map((emp=><div><div>{emp.name}</div>
           <div>{emp.collage}</div>
           <div>{emp.year}</div>
           </div>
        ))} */}

        </div>
    )
}
