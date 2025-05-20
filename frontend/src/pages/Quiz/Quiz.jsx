import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const fetchQuestion = async (id, setCurrentQuestion) => {
    try {
        const response = await fetch(`http://localhost:5000/api/questions/${id}`);
        const data = await response.json();
        setCurrentQuestion(data);
    } catch (error) {
        console.error(`Error Fetching Question: ${error}`);
    }
};

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(1);
    const [report, setReport] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    
    const userName = location.state?.name || 'Guest'; 

    const handleNext = () => {
        const selected = document.querySelector('input[name="quiz-option"]:checked');

        if (selected) {
           
            const updatedReport = [
                ...report,
                {
                    
                    question_id: currentQuestion.question_id,
                    question: currentQuestion.question,
                    selected: selected.value
                }
            ];
            setReport(updatedReport);
            
            if (questionIndex < 34) {
                setQuestionIndex((prev) => prev + 1);
            } else {
                navigate('/Confirm', { state: { report: updatedReport,  name: userName} });

            }

           
            selected.checked = false;
        } else {
            alert("This Question is Mandatory!");
        }
    };

    useEffect(() => {
        fetchQuestion(questionIndex, setCurrentQuestion);
    }, [questionIndex]);

    return (
        <div>
            <h3>Welcome, {userName}!</h3>
            {currentQuestion ? (
                <div>
                    <h2>{currentQuestion.question}</h2>
                    {currentQuestion.options?.map((option, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                id={`option-${index}`}
                                name="quiz-option"
                                value={option.value}
                            />
                            <label htmlFor={`option-${index}`}>{option.text}</label>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading Question...</p>
            )}
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Quiz;
