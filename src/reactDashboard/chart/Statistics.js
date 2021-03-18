import React from 'react';
import Activity from '../Activity';
import Chart from './Chart';

const Statistics = () => {
    return (
        <div className="statistics">
           <div className="box">
                <p>Task completion</p>
                <Chart />
            </div>
            <Activity />
        </div>
    );
};

export default Statistics;