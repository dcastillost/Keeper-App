import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event) {
        const {value, name} = event.target;
        // console.log(value);
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function handleClick() {
        setExpanded(true);
    }

    function submitNote(event) {
        event.preventDefault();
        setExpanded(false);
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
    }

    return(
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
                )}
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." 
                    rows={isExpanded ? "3" : "1"} 
                    value={note.content}
                    onClick={handleClick}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
            </div>
    );
}

export default CreateArea;