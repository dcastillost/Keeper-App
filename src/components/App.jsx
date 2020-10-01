import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
// import notes from '../notes';

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        console.log(note);
        setNotes(prevNotes => [...prevNotes, note]);
    }

    function deleteNote(id) {
        // console.log('delete!', id);
        setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
    }

    return(
        <div> 
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, noteIndex) => (
                <Note 
                    key={noteIndex}
                    id={noteIndex}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            ))}

            <Footer />
        </div>
    );
}

export default App;