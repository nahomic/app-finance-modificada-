import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
//const baseUrl = "http://localhost:3000"

class EditComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dataCustomer:{},
      campName: "",
      campEmail:"",
      campAmount:"",
      campRecordType:"",
      stringRole:"",
      selectRole:0
    }
  }

  componentDidMount(){
    // parametro de id del usuario
    let userId = this.props.match.params.id;
    // http://localhost:3000/customer/get/4
    const url = "http://192.168.0.5:3000/customer/get/"+userId
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        this.setState({
          dataCustomer:data,
          campName: data.name,
          campEmail:data.email,
          campAmount:data.amount,
          campRecordType:data.recordType,
          stringRole:data.role.role,
          selectRole:data.roleId
        })
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })

  }

  render(){
    return (
      <div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-6">
            <label for="inputPassword4">Name</label>
            <input type="text" class="form-control"  placeholder="Name" required="require"
              value={this.state.campName} onChange={(value)=> this.setState({campName:value.target.value})}/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control"  placeholder="Email" required="require"
              value={this.state.campEmail} onChange={(value)=> this.setState({campEmail:value.target.value})}/>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputState">Role </label>
            <select id="inputState" class="form-control" required="require" onChange={(value)=> this.setState({selectRole:value.target.value})}>
              <option selected value={this.state.dataCustomer.roleId}>{this.state.stringRole}</option>
              <option value="1">food</option>
              <option value="2">clothes</option>
              <option value="3">supermarket</option>
              
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Amount</label>
            <input type="number" class="form-control"  placeholder="Argentine pesos" required="require"
              value={this.state.campAmount} onChange={(value)=> this.setState({campAmount:value.target.value})}/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">RecordType</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Entry or Exit" required="require"
            value={this.state.campRecordType} onChange={(value)=> this.setState({campRecordType:value.target.value})}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Update</button>
      </div>
    );
  }

  sendUpdate(){
  

    // get parameter id
    let userId = this.props.match.params.id;
    // url de backend
    
    const baseUrl = "http://192.168.0.5:3000/customer/update/"+userId
    // parameter data post
    const datapost = {
      name: this.state.campName,
      email: this.state.campEmail,
      amount: this.state.campAmount,
      recordType: this.state.campRecordType,
      role: this.state.selectRole,
    }

    axios.post(baseUrl,datapost)
    .then(response => {
      if (response.data.success) {
        alert(response.data.message)
      }
      else {
        alert("Error")
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })

  }
  

}


export default EditComponent;
