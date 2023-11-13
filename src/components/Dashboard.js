import "./styling/Dashboard.css";
import img from "./images/as.jpeg";
import {HiMenu} from "react-icons/hi";
import {AiOutlineArrowRight} from "react-icons/ai";
import MiniDashboard from "./MiniDashboard";

const Dashboard = ({subjectName}) => {
    
    return (
        <div className="dashboard">

            <div className="dashboard-left">
                <div className="username">
                    <img className="user-img" />
                    <h2 className="user-name">Username</h2>
                </div>
                <div className="subject-container">
                    <h2 className="subject-title">Math</h2>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="subject-container">
                    <h2 className="subject-title">English</h2>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="subject-container">
                    <h2 className="subject-title">Biology</h2>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="subject-container">
                    <h2 className="subject-title">CS</h2>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="subject-container">
                    <h2 className="subject-title">Subject 5</h2>
                    <AiOutlineArrowRight className="arrow" />
                </div>
                <div className="subject-container">
                    <h2 className="subject-title">Subject 6</h2>
                    <AiOutlineArrowRight className="arrow" />
                </div>
            </div>
            <div className="dashboard-right">
                
            </div>

            <div className="dashboard-right">

                <div className="main-dashboard-border">
                    <button className="menu"><HiMenu className="hi-menu" /></button>
                    <h1 className="main-dashboard-title">Your Dashboard</h1>
                </div>

                <div className="dashboard-container">
                    <MiniDashboard className="minidashboard" subjectName="Math" />
                    <MiniDashboard className="minidashboard" subjectName="English" />
                    <MiniDashboard className="minidashboard" subjectName="Biology" />
                    <MiniDashboard className="minidashboard" subjectName="Biology" />
                    <MiniDashboard className="minidashboard" subjectName="Biology" />
                    <MiniDashboard className="minidashboard" subjectName="Biology" />
                    <MiniDashboard className="minidashboard" subjectName="Biology" />
                </div>

            </div>
        </div>
    );
}
 
export default Dashboard;