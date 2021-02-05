import React from 'react'

class UserGreeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: false
        }
    }
    render() {
    //   if(this.state.isLoggedin) {
    //       return <div><h4>Welcome User</h4></div>
    //     } else {
    //         return <div><h3>Please Login</h3></div>
    //   } 

    let sms;
    if (this.state.isLoggedin) {
        sms = <div><h4>Welcome User</h4></div>
    } else {
        sms = <div><h3>Please Login</h3></div>
    }

    return <div> {sms}</div>

    // return(
    //     // this.state.isLoggedin ? <div><h4>Welcome User</h4></div> : <div><h3>Please Login</h3></div>
    //     // this.state.isLoggedin && <div><h4>Welcome User</h4></div>
    // )
    }
}

export default UserGreeting