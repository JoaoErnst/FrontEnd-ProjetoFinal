import React, { Component } from 'react';
import api from '../../services/api.js';
import './style.css';

import { Link } from 'react-router-dom';

export default class ListFighter extends Component {


    state = {
        fighters: [],
    }
   

    componentDidMount() {
        this.loadFighters();
    }

    //arrow function
    loadFighters = async () => {
        const response = await api.get("/fighter");
        console.log(response);
        this.setState({fighters: response.data['fighters'] });
    
    }





 render(){

    const { fighters } = this.state;

     return(
      <div>
          <img src="/images/fighter.jpg.png" alt="fighter" />
          <h2>Lista de Lutadores</h2>
          <p>Quantidade De Lutadores {fighters.length}</p>
          <div className="fighter-list">
              {fighters.map(fighter => (
                  <article key={fighter.id} id="fighter-article">
                  <p>
                      <strong>Lutador: {fighter.id}</strong>  <br/>
                      <strong>Nome: {fighter.fighter_name} </strong> <br/>
                      Sexo: {fighter.gender} <br/>
                  </p>
                  <Link to={`/detail-fighter/${fighter.id}`}>Detalhes do Lutador</Link>
                  </article>
              ) )}
          </div>
      </div>


     );
 }

}