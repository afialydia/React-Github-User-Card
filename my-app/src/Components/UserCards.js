import React from "react";
import Users from "./Users";

const UserCards = props => {
	return (
		<div class="card" key={this.myData.id}>
			<h3 class="name">{this.myData.name}</h3>
			<p class="username">{this.myData.username}</p>
			<p>Location: {this.myData.location}</p>

			<p>Bio: {this.myData.bio}</p>
		</div>
	);
};

export default UserCards;
