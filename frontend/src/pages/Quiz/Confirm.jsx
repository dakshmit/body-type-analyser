import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const report = location.state?.report || [];
    const userName = location.state?.name || 'Guest';
    

    async function sendReport() {
        try {
            console.log("Received responses:", report);
           
            const response = await fetch(`http://localhost:5000/api/save-report`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userName,
                    responses: report
                })
                
            });

            if (response.ok) {
                console.log("Report Saved Successfully!");
                navigate('/Result', { state: { report: report , name: userName } });
            } else {
                console.error("Error Saving Report!");
            }
        } catch (error) {
            console.error(`Error Sending Report: ${error}`);
        }
    }

    return (
        <div>
            <h2>Ready to Submit?</h2>
            <button onClick={sendReport}>Save & Submit</button>
        </div>
    );
};

export default ConfirmPage;
