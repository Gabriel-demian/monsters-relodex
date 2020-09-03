import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div class="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=160x160`} />
        <h2> { props.monster.name } </h2>
        <h2> { props.monster.email } </h2>
    </div>
)