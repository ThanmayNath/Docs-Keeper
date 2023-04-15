import React, {useState} from "react";

function Note(props){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return(
        <div className="note">
            <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{isHovering ? <h4>{props.content}</h4> : <h1>{props.title}</h1>}</h1>
        </div>
    );
}

export default Note;