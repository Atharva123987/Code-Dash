import React from 'react';

function TeamMember(props) {
  return (
    <div className="team-member">
      <img src={props.photo} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.title}</p>
    </div>
  );
}

export default TeamMember;
