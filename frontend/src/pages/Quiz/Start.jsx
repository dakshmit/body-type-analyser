import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StartPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const redirect_to_quiz = () => {
        navigate('/Quiz', { state: { name:name } });
    };

    return (
        <div>
            <h2>Ready to Start?</h2>
            <label>Enter Your Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={redirect_to_quiz}>Start</button>
        </div>
    );
};

export default StartPage;
