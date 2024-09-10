import React from 'react';
import './header.css';
import { Dropdown, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IoPersonCircleOutline } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const TOP2: React.FC = () => {
    const navigate = useNavigate(); 
    return (
        <div className="topbar">
            <img id="HLogo" src="/src/assets/HLogo.png" alt="HLogo" />
            <img id="Logo" src="/src/assets/Logo.png" alt="Logo" />
       
            <div className="wrapcoin">
                <div className="coin">
                <div className="login">
                
                <Button id='login' onClick={() => navigate("/login")}>
                            เข้าสู่ระบบ
                        </Button>
                        <a onClick={() => navigate("/login")}></a>
                    </div>
                </div>
            </div>
         
             <div id='profile'>
            <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="dropdown-profile" as="div">
                   <IoPersonCircleOutline id='white' />
                  
                 
                </Dropdown.Toggle>

                <Dropdown.Menu id='locks'>
                    <Dropdown.Item id='locks' href="/profile">โปรไฟล์ของฉัน</Dropdown.Item>
                    <Dropdown.Item id='locks' href="/writer">งานเขียน</Dropdown.Item>
                    <Dropdown.Item id='locks' href="/bookshelf">ชั้นหนังสือ</Dropdown.Item>
                    <Dropdown.Item id='locks' href="/Payment">เหรียญ  & ประวัติธุรกรรม</Dropdown.Item>
                    <Dropdown.Item id='locks' href="/settings">ตั้งค่า</Dropdown.Item>
                   
                </Dropdown.Menu>
            </Dropdown>  
             </div>
        </div>
    );
};

export default TOP2;