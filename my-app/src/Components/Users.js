import React from "react";
import styled from "styled-components";

const Pic = styled.img`
width: 15vw;
border-radius:50%;`

const Div = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 95%;
	height: 80%;
	margin: 0 auto;
	/* justify-content: space-around; */
`;

const Div2 = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5% auto;
	text-align: center;
	width: 30%;
    color: rgb(6,102,134);
	border: 3px solid rgb(6,102,134);
    border-radius:12px;
    background: rgb(211,139,129, .4);
`;

const Users = props => {
	console.log(props);

	return (
		<Div>
			{props.followers.map(follower => (
				<Div2 key={follower.id}>
					<p>
						<Pic className="pics" src={follower.avatar_url}/> 
					</p>
                    <a href={follower.html_url} target="_blank"><h3>{follower.login}</h3></a>
					
					
				</Div2>
			))}
		</Div>
	);
};

export default Users;
