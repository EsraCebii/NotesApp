import React from 'react';

import { useSelector } from 'react-redux';

function Footer() {
    const items = useSelector(state => state.todos.items);
    const search = useSelector(state => state.todos.search);
    
    const filteredList = items.filter((item) => {
        return Object.keys(item).some(
          (prop) =>
            prop === "title" &&
            item[prop] !== undefined &&
            item[prop].toString().toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <ul className="row row-cols-1 row-cols-md-3 g-4">
            {
                filteredList.map((item)=> (
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
