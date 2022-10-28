import React from 'react';


const TextArea = () => {
    return(
        <div className="textArea">

            <label htmlFor="story">ADD TEXT HERE: </label>

            <textarea id="textBox" name="story">
                It was a dark and stormy night...
            </textarea>

        </div>

    )
}


export default TextArea;