import React, { useState } from 'react';

const Form = ({author = '', comment = '', id, rate = 5, callback}) => {
    const [authorInput, setAuthorInput] = useState(author);
    const [commentInput, setCommentInput] = useState(comment);
    const [rateInput, setRateInput] = useState(rate);

    const handleAuthor = (e) => {
        setAuthorInput(e.target.value);
    };

    const handleComment = (e) => {
        setCommentInput(e.target.value);
    };

    const handleRate = (e) => {
        setRateInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //basic validation
        if (!authorInput.length) {
            return;
        }

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            rate: Number(rateInput),
            id
        }
        
        if (id) {
            callback();
        }
    };

    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label>
                    Autor:
                    <input 
                        type="text"
                        onChange={handleAuthor}
                        value={authorInput}
                    />
                </label>
            </div>
            <div>
                <label>
                    ocena:
                    <input 
                        type="number"
                        min="1"
                        max="10"
                        onChange={handleRate}
                        value={rateInput}
                    />
                </label>
            </div>
            <div>
                <label>
                    Komentarz:
                    <input 
                        type="text"
                        onChange={handleComment}
                        value={commentInput}
                    />
                </label>
            </div>
            <button type="submit">
                { id ? 'Edytuj' : 'Dodaj ocenę'}
            </button>
        </form>
    );
}

export default Form;