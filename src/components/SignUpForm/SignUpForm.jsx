import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred, like a dup email address
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="col-6 mx-auto p-2 border rounded-3 dark-background light-text">
          <form className="form-control input-group light-background mx-auto" autoComplete="off" onSubmit={this.handleSubmit}>
            <label className="input-label">Name</label>
            <input className="input-group" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label className="input-label">Email</label>
            <input className="input-group" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label className="input-label">Password</label>
            <input className="input-group" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label className="input-label">Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
  
}