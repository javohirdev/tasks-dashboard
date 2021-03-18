import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

export const SideBar = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'My Tasks',
        path: '/tasks',
        icon: <AssignmentTurnedInIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Clients',
        path: '/clients',
        icon: <PeopleIcon />,
        cName: 'nav-text'
    },

    {
        title: 'Settings',
        path: '/',
        icon: <SettingsIcon />,
        cName: 'nav-text'
    }
]