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

    renderEmail() {
        if (this.props.formType === 'signup') {
            return (
                <div>
                    <label> Email:
          <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                </div>
            )
        }
    }



    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 id='form-greeting'>Welcome to Pintrest Clone</h1>
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    <div>
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
                        <input type="submit" id='button' value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;