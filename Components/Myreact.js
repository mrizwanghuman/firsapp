import React, {Component} from 'react';
import MySecond from './MySecond';


class Myreact extends Component {

	
	render(){
		let userdetails;
		
		if(this.props.users){
			userdetails = this.props.users.map(userdata=> {return <MySecond key={userdata.id} userdata ={userdata}/>})
		};
		return(

<div className="Great">

<ul className="nav">
{userdetails}
</ul>
</div>
			)
	}
}
export default Myreact;