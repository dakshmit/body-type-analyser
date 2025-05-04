import { useLocation } from 'react-router-dom';
import sendReport from '../../services/report-service';

const ConfirmPage = () => {
    const location = useLocation();
    const report = location.state?.report || [];

    // Moved sendReport function to services/ so and simply called it in button onClick
    // with report passed as argument. If it doesn't work, maybe add a wrapper function to
    // call sendReport within and then call wrapper in button onClick
    
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 to-rose-300 text-gray-800'>
            <h2 className='text-3xl font-bold mb-6'>Reay to Submit ?</h2>
            <button 
                onClick={sendReport(report)}
                className='bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded shadow-md transition-all'
            >Save & Submit</button>
        </div>
    );
}

export default ConfirmPage;