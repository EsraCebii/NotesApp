import { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { addTodo } from '../redux/todos/todosSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Formik, Form, Field } from 'formik';

function Content() {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(addTodo({ id: nanoid(), title: title, color: color}));
        setTitle('');
    }
    const onSubmit = {

    }
    return (
        <>
            <Formik
                initialValues={{
                    selected: '',
                }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}

            >
                {({ values }) => (

                <Form className="d-flex flex-column ">
                    <textarea
                    className="textarea d-flex" placeholder="Remember, be nice!" cols="75"
                    rows="10"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                    </textarea>
                    <div className="d-flex ">
                        <label>
                        <button type="submit" className="addbtn" onClick={handleSubmit}> Add</button>
                        </label>
                        <label >
                            <Field type="radio" className="btn bg-primary" value="blue" name="selected"></Field>
                        </label>
                        <label>
                            <Field type="radio" className="btn bg-secondary" value="gray" name="selected"></Field>
                        </label>
                        <label>
                            <Field type="radio" className="btn bg-danger" value="red" name="selected"></Field>
                        </label>
                        <label>
                            <Field type="radio" value="yellow" className="btn bg-warning" name="selected"></Field>
                        </label>
                        <label>
                            <Field type="radio" value="green" className="btn btn-success" name="selected"></Field>
                        </label>
                        <label>
                            <Field type="radio" value="black" className="btn btn-dark" name="selected"></Field>
                        </label>
                    </div>  
                    <h5> Seçilen renk : {values.selected}</h5>  
                     
                </Form>
                )}
            </Formik>
        </>
    )
}

 export default Content;
