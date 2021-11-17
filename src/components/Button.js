import React from 'react';

function Button({text, disabled}) {


    return <button disabled={disabled} onClick={() => console.log(text) }>
        {text}
    </button>
}

export default Button