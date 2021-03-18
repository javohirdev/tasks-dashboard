import React, {useState} from 'react';
import { 
    Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Dropdown, DropdownToggle, 
    DropdownMenu, DropdownItem } 
from 'reactstrap';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import userIcon from '../reactDashboard/assets/img/userIcon.jfif';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import TodoForm from './TodoForm';

const DashboardHead = (props) => {
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const settings = () => setDropdownOpen(prevState => !prevState);

    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const notification2 = () => setDropdownOpen2(prevState => !prevState);

    return (
        <>
            <div className="headerMain">
                <Button color="danger" onClick={toggle}>Create Task</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>

                    </ModalHeader>
                    <ModalBody>
                        {/* <TodoForm /> */}
                    </ModalBody>
                </Modal>

                <Dropdown isOpen={dropdownOpen} toggle={settings}>
                    <DropdownToggle caret>
                        <NotificationsIcon />
                    </DropdownToggle>
                    <DropdownMenu>
                        <div className="menuHead">
                            <p>Notification</p>
                            <div className="functions">
                                <a href="#">Mark as read</a>
                                <a href="#">Clear all</a>
                            </div>
                        </div>
                        <div className="menuBody">
                            <div className="cards">
                                <img src={userIcon} alt="User icon"/>
                                <span>
                                    <p>Jack Hudson</p>
                                    <p>Lorem ipsum dolor</p>
                                </span>
                            </div>
                            <div className="cards">
                                <img src={userIcon} alt="User icon"/>
                                <span>
                                    <p>Jack Hudson</p>
                                    <p>Lorem ipsum dolor</p>
                                </span>
                            </div>
                            <div className="cards">
                                <img src={userIcon} alt="User icon"/>
                                <span>
                                    <p>Jack Hudson</p>
                                    <p>Lorem ipsum dolor</p>
                                </span>
                            </div>
                        </div>
                    </DropdownMenu>
                </Dropdown>
                
                <Dropdown isOpen={dropdownOpen2} toggle={notification2}>
                    <DropdownToggle caret>
                        <SettingsIcon />
                    </DropdownToggle>
                    <DropdownMenu>
                        <div className="profile">
                            <p>Javokhir Khakimov</p>
                            <ExitToAppIcon />
                        </div>
                        <div className="profileBody">
                            <ul className="menu">
                                <li>
                                    <a href="#!">
                                        <SettingsIcon />
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <SettingsIcon />
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <SettingsIcon />
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>
    );
};

export default DashboardHead;