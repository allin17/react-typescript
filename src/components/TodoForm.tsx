import React, {useState} from 'react';

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    return (
        <div className="input-field mt2">
            <input type="text" id="title" placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
    }