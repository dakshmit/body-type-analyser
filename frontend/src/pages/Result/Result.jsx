import {useState} from 'react';
import{useLocation, useNavigate} from 'react-router-dom';
const Result = () => {
    const [report, setReport] = useState([]);
    const navigate = useNavigate();

    const fetchReport = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/reports`, {
                method: 'GET',
                credentials: 'include',
            });
            const data = await response.json();
            setReport(data);
        } catch (error) {
            console.error(`Error Fetching Reports: ${error}`);
        }
    };

    return (
        <>
            <h1>RESPONSE STORED SUCCESSFULLY</h1>
            <button onClick={fetchReport}>GET YOUR REPORTS</button>

            <div>
                {report.length === 0 ? (
                    <p>No reports found.</p>
                ) : (
                    report.map((rep, index) => (
                        <div key={index}>
                            <p>NAME: {rep.name}</p>
                            <button onClick={() => navigate('/Resultimage', { state: { report: rep } })}>
                                SEE YOUR PRAKRUTI
                            </button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Result;