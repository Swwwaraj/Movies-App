import { useEffect, useState } from "react";
import './Note.css'
export default function Note() {
    const [notes, setNotes] = useState('');
    useEffect(() => {
        if (localStorage.getItem('notes')) {
            setNotes(localStorage.getItem('notes'));
        }
    }, [])
    return (
        <div>
            <textarea className="Note-sty" value={notes} onChange={(e) => { setNotes(e.target.value); localStorage.setItem('notes', e.target.value) }}>
            </textarea>
        </div>
    );
}