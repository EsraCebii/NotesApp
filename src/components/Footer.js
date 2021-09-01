import React from 'react';

import { useSelector } from 'react-redux';

function Footer() {
    const items = useSelector(state => state.todos.items);
    
    return (
        <ul className="row row-cols-1 row-cols-md-3 g-4">
            {
                items.map((item)=> (
                    <li className={`card mr-3 my-3 col ${item.color}`} key={item.id}>
                        <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}

export default Footer
