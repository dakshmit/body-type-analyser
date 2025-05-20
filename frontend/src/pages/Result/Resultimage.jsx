import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const Resultimage = () => {
    const location = useLocation();
    const report = location.state?.report || {};
    const navigate = useNavigate();
    const [doshaname, setDoshaname] = useState("");
    const [doshaDesc, setDoshaDesc] = useState("");

    async function GetDoshaDesc() {
        const prakriti = report.prakriti;
        try {
            const response = await fetch(`http://localhost:5000/api/dosha/${prakriti}`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setDoshaname(data[0].type);
                setDoshaDesc(data[0].description); 
            } else {
                console.log(response);
                console.error("Failed to fetch dosha description");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const generatePDF = () => {
        const doc = new jsPDF();
        const margin = 20; 
        const padding = 10; 
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;

        doc.setLineWidth(1);
        doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin); 
        const contentAreaX = margin + padding; 
        const contentAreaY = margin + padding; 
        const contentWidth = pageWidth - 2 * (margin + padding); 
        const contentHeight = pageHeight - 2 * (margin + padding); 
    
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text("PRAKRUTI PARIKSHAN", pageWidth / 2, contentAreaY + 10, { align: 'center' });
    
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.text("Report for: " + report.name, contentAreaX, contentAreaY + 30);
        doc.text("Prakriti: " + report.prakriti, contentAreaX, contentAreaY + 40);
        doc.text("Dosha: " + doshaname, contentAreaX, contentAreaY + 50);
        doc.text("Description: ", contentAreaX, contentAreaY + 60);
    
        
        doc.setFontSize(12);
        const descriptionLines = doc.splitTextToSize(doshaDesc, contentWidth); 
        doc.text(descriptionLines, contentAreaX, contentAreaY + 70);
    
     
        doc.save(`${report.name} report.pdf`);
    };
    
    

    return (
        <>
            <h2>NAME: {report.name}</h2>
            <button onClick={GetDoshaDesc}>WATCH YOUR PRAKRUTI</button>

            {doshaDesc && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Your Prakriti: {report.prakriti}</h3>
                    <p>{doshaDesc}</p>
                    <button onClick={generatePDF}>Download PDF</button>
                </div>
            )}
        </>
    );
};

export default Resultimage;
