import React from 'react';

class LoginForm extends React.Component {

  state = {
    loggingInUser: ''
  }

  handleOnChange = (e) => {
    this.setState ({ loggingInUser: e.target.value})
  }

  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.props.handleOnSubmit}  >
          <input placeholder="Enter a username..." 
                 value={this.state.loggingInUser}
                 onChange={this.handleOnChange}
          />
          <input type="submit" 
                 value="submit" />
        </form>
      </div>
    ); 
  }
}

export default LoginForm;