import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";
import styled from "styled-components";
import Users from "./Components/Users";


const Self = styled.div`
width:25vw;
color: rgb(6,102,134);
	border: 3px solid rgb(6,102,134);
    border-radius:12px;
	background: rgb(211,139,129, .4);
	margin: 0 auto;`

const Pic = styled.img`
width: 15vw;
border-radius:50%;`

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			myData: [],
			followers: []
		};
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/afialydia")
			.then(res => {
				console.log(res.data);
				this.setState({
					myData: res.data
				});
			})
			.then(console.log(this.state.myData))
			.catch(err => console.log("error in axios", err));

		axios
			.get("https://api.github.com/users/afialydia/followers")
			.then(res => {
				console.log(res);
				this.setState({
					followers: res.data
				});
			})
			.catch(err => console.log("error in axios", err));
	}

	render() {
		return (
			<div className="App">
				<h1>GitHub User Cards</h1>

				
					<Self>
						<h3 class="name">{this.state.myData.name}</h3>
						
						<Pic className="pics" src={this.state.myData.avatar_url}/> 

						<p class="username">{this.state.myData.username}</p>
						<p>
							<strong>Location:</strong> {this.state.myData.location}
						</p>
						<p>
							<strong>Bio:</strong> {this.state.myData.bio}
						</p>
					</Self>
				
					<Users followers= {this.state.followers} />

				{console.log(this.state.myData.name)}
				{/* {this.state.myData.map(data =>(
       <h1 key={data.id}>{data.name}</h1>
     ))} */}
				{/* <UserCards 
     followers= {this.state.myData.followers}
     /> */}
				{/* <FollowerCards 
     login= {this.state.followers.login}
    
     /> */}
			</div>
		);
	}
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
