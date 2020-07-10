import React, { useEffect, useState } from 'react';
import './index.css';
import jwt from "jwt-decode";
import $ from "jquery";
import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.png';

const Index = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const user = jwt(localStorage.getItem('access_token'))
        setUserName(user.name)
    })

    return (
        <div className="chat_master">
            <div className="chat_nav">
                <div className="d-flex border-bottom px-2 py-3">
                    <div>
                        <Link to="/home" className="btn rounded-0 shadow-none p-0">
                            <img src={backIcon} alt="...." />
                        </Link>
                    </div>
                    <div className="ml-2">
                        <p className="mb-0 text-capitalize">{userName}</p>
                    </div>
                </div>
            </div>
            <div className="break"></div>

            <div className="chat_body">

                {/* Users message */}
                <div className="d-flex p-2 message_user">
                    <div>
                        <div className="name_circle rounded-circle">
                            <h4 className="mb-0 text-uppercase">m</h4>
                        </div>
                    </div>
                    <div className="pl-2">
                        <p className="font-weight-bold mb-0 text-capitalize">{userName}</p>
                        <small className="text-muted">1 new message</small>
                    </div>
                </div>

            </div>

            {/* Message dialog */}
            <div className="message_dialog shadow-lg">
                <div className="message_header p-3 border-bottom"></div>
                <div className="message_body px-2">
                    <h1>Okkk 1</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk</h1>
                    <h1>Okkk last</h1>
                </div>
                <div className="message_footer border-top p-2">
                    <p>Footer</p>
                </div>
            </div>
        </div>
    );
};

export default Index;