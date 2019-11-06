import React from 'react';

export default class CustomMenu extends React.Component {

    sendPage = (page) => {
        this.props.callBackMenu(page);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.sendPage('planets')}>See all planets</button>
                <button onClick={() => this.sendPage('create-planet')}>Create a planet</button>
            </div>
        );
    }
}