import React from 'react'

export default function box({title,listArray}) {
    return (
        <div className="col-3">
        <div className="skils-box">
            <ul>
            <li className="skill-mention">
                   {title}
                </li>

               {

listArray.map(list => <li>{list}</li> )

               }
            </ul>
        </div>
     </div>
    )
}
