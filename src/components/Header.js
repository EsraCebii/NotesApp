import React from 'react';
import { useDispatch } from 'react-redux';
import { searchArea  } from '../redux/todos/todosSlice';

function Header() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(searchArea(e.target.value));
    };

    return (
        <header className="header">
            <h1>NotesApp</h1>
                <div className="search-container">
                    <input placeholder="Search..." className="search-input" onChange={handleChange}
                    />
                    <a href="/#" className="search-btn">
                        <i className="fas fa-search"></i>
                    </a>
                </div>

	    </header>
    )
}

export default Header;
