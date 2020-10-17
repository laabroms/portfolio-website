import React, { Component } from 'react';
import '../css/footer.css';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { RiCopyrightLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
            <IconContext.Provider value={{ className: "icons", size: '40px' }}>
                <div>
                    <Link to='/facebook'>
                        <AiOutlineFacebook />
                    </Link>
                    <Link to='/instagram'>
                        <AiOutlineInstagram/>
                    </Link>
                    <Link to='/linkedin'>
                        <AiOutlineLinkedin />
                    </Link>
                    <Link to='/github'>
                    <AiFillGithub />
                    </Link>
                    
                    
                    
                    
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'copyright', size: '18px' }}>
                <div className='row' style={{justifyContent:'center'}}>
                <RiCopyrightLine />

            <div style={{fontSize: '15px', color: 'rgb(190, 190, 190)', marginTop:'41px', marginLeft: '3px'}}> Lucas Abroms. All rights reserved.</div>
            </div>
            </IconContext.Provider>

            


            </div>
        );
    }
}

export default Footer;