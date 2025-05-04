import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-100 to-teal-300 text-gray-800'>
            <h2 className='text-3xl font-bold mb-6'>Ready to Start ?</h2>
            <button 
                onClick={() => {navigate('/Layout/Quiz')}}
                className='bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded shadow-md transition-all'
                type='button'
            >
                Start
            </button>
        </div>
    )
}

export default StartPage;