import React from 'react';

const Pinned = () => {
    return (
        <div className="pinned">
            <h4 className="titleText">Pinned Teams</h4>
            <div className="main">
                <div className="pinnedCard">
                    <div className="cardHead">
                        <p>Com</p>
                    </div>
                    <div className="cardBody">
                        <h4>Company Team</h4>
                        <p>1 Active project</p>
                    </div>
                </div>
                <div className="pinnedCard">
                    <div className="cardHead">
                        <p>Com</p>
                    </div>
                    <div className="cardBody">
                        <h4>Company Team</h4>
                        <p>1 Active project</p>
                    </div>
                </div>
                <div className="pinnedCard">
                    <div className="cardHead">
                        <p>Com</p>
                    </div>
                    <div className="cardBody">
                        <h4>Company Team</h4>
                        <p>1 Active project</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pinned;