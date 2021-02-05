import React from 'react'

class Hello extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome {this.props.info} World</h1>
            </div>
        )
    }
}

export default Hello