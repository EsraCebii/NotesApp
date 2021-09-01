import React from 'react'

function Content() {
    return (
        <>
            <textarea className="textarea" placeholder="Remember, be nice!" cols="75" rows="10" >
            </textarea>
            <button type="checkbox" className="btn btn-primary"></button>
            <button className="btn btn-secondary"></button>
            <button className="btn btn-danger"></button>
            <button className="btn btn-warning"></button>
            <button className="btn btn-light"></button>
            <button className="btn btn-dark"></button>
            <button className="addbtn"> Add</button>
        </>
    )
}

export default Content
