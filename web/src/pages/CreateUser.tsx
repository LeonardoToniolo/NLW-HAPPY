import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import brandLogo from '../images/logotipo.svg';

import '../styles/pages/create-user.css';

function CreateUser() {
    function handleSubmit() {

    }

    return (
       <div id="page-create-user">
           <aside>
               <div className="content-wrapper">
                   <img src={brandLogo} alt="Happy"/>
                   <footer>
                        <strong>Taboão da Serra</strong>
                        <span>São Paulo</span>
                   </footer>
               </div>
           </aside>
            <div className="form-wrapper">
                <Link to="/" className="go-back-button">
                    <FiArrowLeft size={24} color="#15C3D6" />
                </Link>


                <form onSubmit={handleSubmit} className="create-user-form">
                    <fieldset>
                        <legend>Fazer login</legend>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                id="email"
                                type="email"
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input 
                                id="password" 
                                type="password"
                            />
                        </div>

                        <div className="section-option">
                            
                        </div>
                    </fieldset>
                </form>
            </div>
       </div>
    );
}

export default CreateUser;