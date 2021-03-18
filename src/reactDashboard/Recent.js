import React, {useState} from 'react';
import userIcon from './assets/img/userIcon.jfif';
import Data from './usersData/data.json';

const Recent = () => {

    return (
        <div className="RecentUsers">
                <div className="main">
                    <div className="usersSec">
                        <p className="title">Recent users</p>
                        {Data.map((post) => {
                            return (
                                <div className="items">
                                    <div className="usersInfo">
                                        <img src={userIcon} />
                                        <div className="texts">
                                            <p>{post.name}</p>
                                            <p>{post.description}</p>
                                        </div>
                                        <p className="date">
                                            {post.date}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>
    );
};

export default Recent;