import React from 'react';


function Tile(props) {

    return <section>
        <img src={props.image}/>
        {props.children}
    </section>

}

export default Tile