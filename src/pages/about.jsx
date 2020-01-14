import React from 'react'
import { Link } from 'react-router-dom'
import { inject } from 'mobx-react';

@inject( 'aboutStore' )
class About extends React.Component {
    render() {
        return (
            <div>
                <p>{ this.props.aboutStore.title }</p>
                <Link to="/">goto Home</Link>
            </div>
        )
    }
}

export default About;