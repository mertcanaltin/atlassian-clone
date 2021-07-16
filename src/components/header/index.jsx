import React from 'react'

import Logo from '../../assets/logo.svg'

import './index.scss';

export default function Header() {
    return (
        <div>
            <div className='container mt-4' >
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={Logo} width='200' alt="" />
                    </div>
                    <div className='col-md-7 mt-2'>
                        <ul >
                            <li className=''>
                                Anasayfa
                            </li>
                            <li>
                                Jira
                            </li>
                            <li>
                                Atlassian
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <button className='try-button'>try</button>
                    </div>
                </div>

            </div>

            <div className='text-layout'>
                <div className='container'>
                    <p className='text-center'>Introducing Jira Work Management – a friendly, powerful way for business teams to manage their projects. Try it today →

                    </p>
                </div>

                <div className='container'>
                    <h1 className='hello-text'>G’day, we’re Atlassian. We make tools like and Trello that are used by thousands of teams worldwide. And we’re serious about creating amazing products, practices, and open work for all teams.</h1>
                </div>

            </div>

        </div>
    )
}
