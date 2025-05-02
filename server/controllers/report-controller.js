import Reports from '../models/patient-reports.js';
import Doshadescription from '../models/doshadesc.js';
import EvaluateReport from '../services/report-evaluation.js';

const SaveReport = async (req, res) => {
    try {
         console.log("Incoming session:", req.session);
         console.log("Received responses from frontend:", req.body.responses);
         if (!req.session?.userID || !req.session?.username) {
             return res.status(401).json({ message: "Unauthorized. Please login again." });
         }
         
         const newReport = new Reports({
             userID: req.session.userID,
             username: req.session.username,
             name:req.body.name,
             responses: req.body.responses,
             prakriti: EvaluateReport(req.body.responses)
         });

         console.log("Saving report:", newReport);
         console.log(newReport.name);
         await newReport.save(); 
         console.log('Report saved successfully');
         res.status(201).json({ message: `Report Saved Successfully` });
         
    } catch (error) {
        res.status(500).json({ message: `Failed to Save Report: ${error.message}` });
    }
};


const GetAllReports = async (req, res) => {
    try {
        const reports = await Reports.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: `Failed to Retrieve All Reports: ${error}` });
    }
};

const GetReportByID = async (req, res) => {
    try {
        const userID = req.session.userID;
        if (!userID) {
            return res.status(401).json({ message: "Unauthorized: No session found" });
        }
        
        const report = await Reports.find({ userID: userID });
        
        if (!report || report.length === 0) {
            return res.status(404).json({ message: "No reports found for this user" });
        }
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch report: ${error}` });
    }
};

const GetDosha = async(req,res)=>{
    try{
        const userID = req.session.userID;
        if (!userID) {
            return res.status(401).json({ message: "Unauthorized: No session found" });
        }
        const doshaname= req.params.prakriti;
        
        const dosha= await Doshadescription.find({type:doshaname});
        res.status(200).json(dosha);
        
    }
    catch (error) {
        res.status(500).json({ error: `Failed to fetch report: ${error}` });
    }
};
export { SaveReport, GetAllReports , GetReportByID, GetDosha};