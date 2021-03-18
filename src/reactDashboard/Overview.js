import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GroupIcon from '@material-ui/icons/Group';
import ReportIcon from '@material-ui/icons/Report';
import CalendarComp from './CalendarComp';
import 'react-calendar/dist/Calendar.css';


const Overview = () => {
    return (
        <>
            <div className="mainCards">
                <div className="Cards">
                    <GroupIcon />
                    <div className="texts">
                        <p>Clients</p>
                        <h4>105</h4>
                    </div>
                </div>
                <div className="Cards">
                        <AssignmentTurnedInIcon />
                        <div className="texts">
                            <p>Completed tasks</p>
                            <h4>20</h4>
                        </div>
                </div>
                <div className="Cards">
                        <NotificationsIcon />
                        <div className="texts">
                            <p>Notification</p>
                            <h4>2</h4>
                        </div>
                </div>
                <div className="Cards">
                        <ReportIcon />
                        <div className="texts">
                            <p>Reports</p>
                            <h4>4</h4>
                        </div>
                </div>
            </div>
            <CalendarComp />
        </>
    );
};

export default Overview;