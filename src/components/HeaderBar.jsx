import React from 'react'
import { Link } from "react-router-dom";
import ComunateeLink from './ComunateeLink';
import "./styles/header.scss"
import comunatees from "../data_models/comunatees.json";

const HeaderBar = () => {
    const getComunateesDropdown = () => {
        return comunatees.map((x) => {
            return (
                <div>
                    <li>
                        <ComunateeLink comunatee={x} />
                    </li>
                </div>

            );
        });
    };


    return (
        <div className='header-bar'>
            <div>
                <Link className='header-title' to={"/"}>
                    Comunatee
                </Link>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li>Popular</li>
                        <li className='dropdown'>
                            Communatees
                            <div className='dropdown-content'>
                                {getComunateesDropdown()}
                            </div>
                        </li>
                        <li>Create Post</li>
                        <li className='last-header-entry' >Account</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default HeaderBar