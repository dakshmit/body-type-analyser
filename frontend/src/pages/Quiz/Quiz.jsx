import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchQuestion from '../../services/question-service';

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null); // Initialising Empty Object for Current Question
    const [questionIndex, setQuestionIndex] = useState(1); // Initialising question_id to be 1
    const [report, setReport] = useState([]); // Initialising report to empty array

    const navigate = useNavigate();

    const handleNextQuestion = () => {
        const selected = document.querySelector(`input[name='quiz-option']:checked`);

        if(selected) {
            console.log('Saving response for Question ID:', currentQuestion.question_id);
            const updatedReport = [
                ...report,
                {
                    question_id: currentQuestion.question_id,
                    question: currentQuestion.question,
                    selected: selected.value
                }
            ];
            setReport(updatedReport);

            if(questionIndex < 34) {
                setQuestionIndex((prev) => (prev + 1));
            }
            else {
                navigate('/Layout/Confirm', { state: { report: updatedReport}})
            }

            selected.checked = false;
        }
        else {
            alert('This Question is Mandatory!');
        }
    }

    // Adding this comment to see if moving fetchQuestion definition to services/ and leaving its call
    // as is will work. If it doesn't work, have to change useEffect hook below to put fetchQ in a wrapper-loader
    useEffect(() => {
        fetchQuestion(questionIndex, setCurrentQuestion);
    }, [questionIndex]);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8 text-gray-800'>
            {currentQuestion 
                ?
                    <div className='w-full max-w-xl bg-gray-100 p-6 rounded shadow-md'>
                        <h2 className='text-2xl font-semibold mb-6 text-center'>
                            {currentQuestion.question}
                        </h2>
                        {
                            currentQuestion.options?.map((option, index) => (
                                <div key={index} className='flex items-center gap-2 mb-4'>
                                    <input
                                        type='radio'
                                        id={`option-${index}`}
                                        name='quiz-option'
                                        value={option.value}
                                        className='accent-teal-600'
                                    />
                                    <label htmlFor={`option-${index}`} className='text-lg cursor-pointer'>
                                        {option.text}
                                    </label>
                                </div>
                            ))
                        }
                    </div> 
                :
                    <p className='text-xl text-gray-500'>Loading Question...</p>
            }
            <button 
                onClick={handleNextQuestion}
                className='mt-8 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded shadow transition-all'
                type='button'
            >
                Next
            </button>
        </div>
    );
};

export default QuizPage;