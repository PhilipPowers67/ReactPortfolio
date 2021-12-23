import React from 'react';
import './style.css';

function Card(props) {
    return(
        <div>
            <div className="col s12 m6">
                <h2 className="header">{props.title}</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img alt="anytime" src={require(`../../utils/images/${props.image}`)} />
                    </div>
                    <div className="card-stacked center">
                        <div className="card-content">
                            <p>{props.description}</p>
                        </div>
                        <div className="card-action">
                            <a href={props.github}>Link to Github</a>
                            <a href={props.site}>Link to Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;