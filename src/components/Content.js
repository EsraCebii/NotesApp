import { useState,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo  } from '../redux/todos/todosSlice';
import { nanoid } from '@reduxjs/toolkit';


function Content() {
    const [title, setTitle] = useState('');
    const [color, setColor ] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(addTodo({ id: nanoid(), title,color: color}));
        setTitle('');
    }
    const colors = useSelector(state => state.todos.colors);

    return (
        <div className="d-flex flex-column ">
            <textarea
                className="textarea d-flex" placeholder="Remember, be nice!" cols="75"
                rows="10"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></textarea>
            <div className="d-flex  flex-row">
            <button type="submit" className="addbtn" onClick={handleSubmit}> Add</button>
                {
                    colors.map((item,i)=> (
                        <button
                        key={i}    
                        className={`btn ${item}`} value="blue"
                        onClick={() => setColor(item)}
                        ></button>
                    ))
                }
            </div>
        </div>  
    )
}

 export default Content;
