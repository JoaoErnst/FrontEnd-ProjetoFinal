import React, { Component } from 'react';
import api from '../../services/api.js';

import './style.css';

//import { link } from 'react-router-dom';

export default class DetailFighter extends Component {


    state = {
        id:"",
        fighter_name: "",
        gender: "",
        weight: "",
        height: "",
    };
    constructor(props) {
        super(props);

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
           this.updateFighter();
       }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/fighter/${id}`);
        console.log(`id: ${id}`);
        this.setState({
             id: id,
              fighter_name: response.data.fighter_name,
              gender: response.data.gender, 
              weight: response.data.weight, 
              height: response.data.height});
    }

    //arrow function

    deleteFighter = async () => {
       const { id } = this.state;
       const response = await api.delete(`/fighter/${id}`);
       console.log(response); 
       if(response.status === 200) {
           alert("Lutador deletado");
           this.props.history.push('/list-fighter');
       }

    }

    updateFighter = async () => {
        await api.put('/fighter', this.state)
        .then(response => {
            alert("Lutador alterado com sucesso");
            this.props.history.push('/list-fighter');
        })
        .catch(error=> {
         alert("Erro ao alterar o lutador");
        })
    }

 
 render(){
  const {id, fighter_name, gender, weight, height} = this.state

    return(
      <div className="detail-fighter">
          <h2>Detalhes do Lutador</h2>
          <h2>{fighter_name}</h2>
          <meta charset="utf-8"></meta>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
          <p>
              Código: {id} <br/>
              Sexo:  {gender} <br/>
              Peso: {weight} <br/>
              Altura: {height} <br/>
          </p>


          <h2>Alterar dados do lutador</h2>
          <form onSubmit={this.handleSubmit}>
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

              <input type="submit" value="Alterar" class="btn btn-dark" />

          
          </form>
          
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
          <button onClick={() => this.deleteFighter()} class="btn btn-dark" >Excluir Lutador</button>

      </div>


     );
 }

}