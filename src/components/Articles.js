import React from "react";

function Article({label, picture, name, price}) {

    return <article>
        <span>{label}</span>
        <img src={picture}/>
        <p>{name}</p>
        <h4>{price}</h4>
    </article>

}

export default Article