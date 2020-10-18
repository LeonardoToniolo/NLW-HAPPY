import React from 'react'

import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi'

import { Link } from 'react-router-dom'

function Landing() {
	return (
		<div className="App" id="page-landing">
			<div className="content-wrapper">
				<div className="content-right">
					<img src={logoImg} alt="Happy"/>
					<div className="location">
						<strong>Taboão da serra</strong>
						<span>São Paulo</span>
					</div>
				</div>

				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças.</p>
				</main>

				<Link to="/user/create" className="restrict-area">
					Acesso Restrito
				</Link>

				<Link to="/app" className="enter-app">
					<FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
				</Link>
			</div>
		</div>
	);
}

export default Landing;