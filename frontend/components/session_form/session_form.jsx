import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderEmail(){
    if (this.props.formType === 'signup') {
      return (
        <div>
        <label> Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
          />
        </label>
        <br/>
        </div>
      )
    }
  }



  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Pintrest Clone!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          <div>
            <br/>
            {this.renderEmail()}
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <button type="submit" value={this.props.formType}> DO THE THING!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
