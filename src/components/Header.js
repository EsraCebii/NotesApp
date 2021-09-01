import React from 'react'

function Header() {
    return (
        <header className="header">
            <h1>NotesApp</h1>

                <div className="search-container">
                    <input placeholder="Search..." className="search-input" />
                    <a href="/#" className="search-btn">
                        <i className="fas fa-search"></i>
                    </a>
                </div>

	    </header>
    )
}

export default Header;
