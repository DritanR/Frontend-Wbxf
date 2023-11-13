import "./styling/MiniDashboard.css";

const MiniDashboard = ({subjectName}) => {
    return (
        <div className="mini-dashboard">
            <h2 className="mini-dashboard-name">{subjectName}</h2>
        </div>
    );
}

export default MiniDashboard;