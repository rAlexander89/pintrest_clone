import React from 'react';
import SessionGreeting from '../splash/session_greeting'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.loginInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switcharoni = this.switcharoni.bind(this);
    this.formType = this.props.formType;
    this.switchForm = this.props.switchForm;
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.formType === 'login'){
      this.props.loginUser(user).then(() => {
        this.props.history.push('/pins');
        this.props.closeModal();
      });
    } else {
      this.props.signupUser(user).then(() => {
        this.props.history.push('/pins');
        this.props.closeModal();
      })
      }
  }

  demoUserLogin() {
    let demoUser = {
      username: 'username',
      password: 'password'
    };
    this.props.loginUser(demoUser).then(() => {
        this.props.history.push("/pins")
      }
    )
  }

  switcharoni(e){
    e.preventDefault();
    let sType = this.formType;
    let fType = this.switchForm;
    this.formType = this.switchForm;
    this.switchForm= sType;
    this.forceUpdate();
  }


  renderEmail() {
    if (this.formType === 'signup') {
      return (
        <div>
          <label>
            <input type="text"
              placeholder='Email'
              id='placeholder'
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <br />
        </div>
      )
    }
  }

  renderErrors(){
    return(
      <div>
        <ul id='errors'>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  clearErrors(){
    if (this.props.errors.length > 0){
      return(
        <div id='clear-errors' onClick={this.props.clearErrors}>clear errors</div>
      )
    }
  }




  render() {
    return (
    <div>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <ul>
            <li>
              <img src='https://i.imgur.com/IaouNpW.jpg' />
            </li>
            <li>
              <h1 id='form-greeting'>Welcome to Pintrest</h1>
            </li>
            <li>
                <SessionGreeting/>
            </li>
            <li>
              <p id='sub-greeting'>Please {this.formType}</p>
            </li>
          </ul>
          <br />
          <div>
          {this.renderErrors()}
          {this.clearErrors()}
            <br />
            {this.renderEmail()}
            <label>
              <input type="text"
                placeholder='Username'
                id='placeholder'
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br />
            <label>
              <input type="password"
                placeholder='Password'
                id='placeholder'
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br />
              <p onClick={this.demoUserLogin}>Or try our Demo User.</p>
            <br />
            <input type="submit" id='button' value={this.formType} />
          </div>
        </form>
        <div className="switch-tab">
          <p onClick={this.switcharoni} id='toggle'> or {this.switchForm}</p>
        </div>
      </div>
    </div>
      
    );
  }
}

export default SessionForm;