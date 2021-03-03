import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';

class EditComponent extends React.Component{

  constructor(props){
   super(props);
   this.state = {
     campName: "",
     campEmail:"",
     campAmount:"",
     campRecordType:"",
     selectRole:0
   }
 }

  render(){
   
    return (
      <form>
         <div>
       <div class="form-row justify-content-center">
         <div class="form-group col-md-6">
           <label for="inputPassword4">Name </label>
           <input type="text" class="form-control"  placeholder="Name" required="require" value={this.state.campName} onChange={(value)=> this.setState({campName:value.target.value})}/>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Email</label>
           <input type="email" class="form-control"  placeholder="Email" required="require" value={this.state.campEmail} onChange={(value)=> this.setState({campEmail:value.target.value})}/>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputState">Type</label>
           <select id="inputState" class="form-control" required="require" onChange={(value)=> this.setState({selectRole:value.target.value})}>
             <option selected>Choose...</option>
             <option value="1">food</option>
             <option value="2">clothes</option>
             <option value="3">supermarket</option>
           </select>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Amount</label>
           <input type="number" class="form-control"  placeholder="Argentine pesos" required="require" value={this.state.campAmount} onChange={(value)=> this.setState({campAmount:value.target.value})}/>
         </div>
       </div>
       <div class="form-group">
         <label for="inputRecordType">Record Type</label>
         <input type="text" class="form-control" id="inputRecord" placeholder="Entry or Exit" required="require" value={this.state.campRecordType} onChange={(value)=> this.setState({campRecordType:value.target.value})}/>
       </div>
       <button type="submit" class="btn btn-primary" required="require" onClick={()=>this.sendSave()}>Save</button>
     </div>
      </form>
    );
  }
  sendSave(){
    //por si no se selecciona un rol
    if (this.state.selectRole==0) {
      alert("Seleccione el tipo de Role")
    }
    else if (this.state.campAmount=="") {
       alert("Digite el campo de telefono")
    }
    else if (this.state.campName=="") {
       alert("Digite el campo de Nombre")
    }
    else if (this.state.campEmail=="") {
       alert("Digite el campo de email")
    }
    else if (this.state.campRecordType=="") {
       alert("Digite el campo de Direccion")
    }
    else {
 
      //url de back
      const baseUrl = "http://localhost:3000/customer/create"
 
      const datapost = {
        name : this.state.campName,
        email : this.state.campEmail,
        phone : this.state.campAmount,
        address : this.state.campRecordType,
        role  : this.state.selectRole
      }
 
      axios.post(baseUrl,datapost)
      .then(response=>{
        if (response.data.success===true) {
          alert(response.data.message)
        }
        else {
          alert(response.data.message)
        }
      }).catch(error=>{
        alert("Error 34 "+error)
      })
 
    }
 
  }

 }
 
 
 export default EditComponent;