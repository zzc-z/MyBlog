import React from 'react';
import '../styles/components/background.css'

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='bgc'>
                <div className='text'>
                    <span>今天你努力了吗？</span>
                    <p>The harder, the more fortunate</p>
                </div>
            </div>
        );
    }
}


export default Background;
