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
        <div className="col-6 my-3 mx-auto ">
          <form className="form-control dark-background light-text mx-auto lifted border border-primary border-1" autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="input-group my-2 text-light px-2">

            <label className="input-label">Name</label>
            <input className="input-group rounded-2 bg-primary lighter-text text-light text-secondary" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label className="input-label">Email</label>
            <input className="input-group rounded-2 bg-primary text-light text-secondary" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label className="input-label">Password</label>
            <input className="input-group rounded-2 bg-primary text-light text-secondary" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label className="input-label">Confirm</label>
            <input className="input-group rounded-2 bg-primary text-light text-secondary" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <button className=" col-3 btn dark-backgroundg my-2  light-text border border-1 border-info lifted fw-bold" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
    );
  }
  
}