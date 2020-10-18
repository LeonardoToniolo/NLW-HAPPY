import React from "react";
import { Link } from "react-router-dom";

import '../styles/pages/create-orphanage-complete.css';

export default function CreateOrphanageComplete () {
  return (
    <div className="App" id="page-create-ophanage-complete">
			<div className="content-wrapper">
				<main>
					<h1>Ebaaa!</h1>
					<p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. <br/> Agora é só esperar :)</p>
					<Link to="/app" className="back-to-map-button">
							Voltar para o mapa
					</Link>
				</main>
                
			</div>
		</div>
  );
}
