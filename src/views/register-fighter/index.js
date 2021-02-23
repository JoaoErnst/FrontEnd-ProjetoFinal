import React, { Component } from 'react';

import api from '../../services/api';

import './style.css';



export default class RegisterFighter extends Component {
 
    //{
        //"fighter_name":"Rogerio  ",
        //"gender": "male",
        //"weight": "85.00kg",
        //"height": "1.92"
    //}

    constructor(props) {
        super(props);
   
      this.state = { 
        fighter_name: "",
        gender:"",
        weight:"",
        height:""
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
 handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
     [name]: value
     });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("state enviado ->" + this.state);
        this.registerFighter();
    }
  



 registerFighter = async () => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');

    await api.post('/fighter', this.state, headers)
    .then(response =>{
        console.log(response);
        alert("Lutador cadastrado com sucesso!");
    })
    .catch(error=> {
        console.log(error);
        alert("Erro ao cadastrar lutador")
    })
 };



 render(){
     return(
        
      <div>
          <img src="/images/fighter.jpg.png" alt="fighter" />
          <h2>Cadastrar Lutador</h2>
          <meta charset="utf-8"></meta>
          <form onSubmit={this.handleSubmit}>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
          
          
              <div>
                  <label>Digite o nome:
                      <input name="fighter_name" type="text" value={this.state.fighter_name} onChange={this.handleInputChange} />
                  </label>
              </div>


              <div>
                  <label>Digite o Sexo:
                      <input name="gender" type="text" value={this.state.gender} onChange={this.handleInputChange} />
                  </label>
              </div>

              <div>
                  <label>Digite o peso:
                      <input name="weight" type="text" value={this.state.weight} onChange={this.handleInputChange} />
                  </label>
              </div>
             
              <div>
                  <label>Digite a altura:
                      <input name="height" type="text" value={this.state.height} onChange={this.handleInputChange} />
                  </label>
                  
              </div>
              

              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
              <br/>
              <input type="submit" value="Cadastrar" class="btn btn-dark" />


          </form>

      </div>


     );
 }

}
