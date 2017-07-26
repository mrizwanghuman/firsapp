import React, {Component} from 'react';

class AddUsers extends Component{
	constructor(){
		super();
		this.state ={
			newUSer:{}
		}
	}
	static defaultProps ={ 
		gender: ["male", "female"]};
		addingUser(e){
			
			if(this.refs.firstName.value==="" && this.refs.lastName.value==="" && this.refs.email.value===""){
				alert("All fields are required")
			}else{
				this.setState({
					newUSer:{
						id: this.refs.id.value,
						first_name: this.refs.firstName.value,
						last_name: this.refs.lastName.value,
						email: this.refs.email.value,
						gender: this.refs.gender.value
					}
				}, function(){
					//console.log(this.state);
					this.props.AddUser(this.state.newUSer);
				})

			}
			e.preventDefault();
		}

	render(){
		let genderOptions = this.props.gender.map(gender=> {return <option key={gender} value={gender}>{gender}</option>});

		return(

			<form onSubmit={this.addingUser.bind(this)}>
				<div className="form-group">
    <label>Id</label>
    <input type="number" className="form-control"  placeholder="User Id" ref="id"/>
  </div>
			<div className="form-group">
    <label>First Name</label>
    <input type="text" className="form-control"  placeholder="First Name" ref="firstName"/>
  </div>
  <div className="form-group">
    <label >Last Name</label>
    <input type="text" className="form-control" ref="lastName"  placeholder="Last Name"/>
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" ref="email" placeholder="Email"/>
  </div>
  
<select className="form-control" ref="gender">
{genderOptions}
</select>
 
  <input type="submit" className="btn btn-default" value="Submit"/>
</form>

			);
	}
}

export default AddUsers;