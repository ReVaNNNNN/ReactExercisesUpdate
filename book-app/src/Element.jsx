import React, { useState } from 'react';
import Form from './Form';

const Element = ({ author, comment, rate, id}) => {
const [isVisibleForm, setIsVisibleForm] = useState(false);

const toggleElement = () => setIsVisibleForm(prev => !prev);

const formOrButtomelement = isVisibleForm ? (
        <Form
            author={author}
            comment={comment}
            id={id}
            rate={rate}
            callback={toggleElement}
        />
    )   : (
        <button onClick={toggleElement}>
            Edytuj
        </button>
    )
    return (
        <li>
            <p>Author oceny: {author}</p>
            <p>Komentarz: {comment}</p>
            <p>Ocena: {rate}</p>
            {formOrButtomelement}
        </li>
    );
};

export default Element;