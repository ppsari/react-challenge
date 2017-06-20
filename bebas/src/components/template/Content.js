import React from 'react';



class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  setInputUsername(username) {
    this.setState({
      username,
    });
  }



  render() {
    return (
      <form onSubmit={((e)  => {
        e.preventDefault();
        this.props.formSubmit(this.state.username);
        this.setInputUsername('');
      })}>
        <div className="field">
          <p className="control">
            <input className="input" type="text" placeholder="Input your name"
            onChange={(e) => this.setInputUsername(e.target.value)}
            value={this.state.username}
            />
          </p>
        </div>
      </form>
    )
  }


}

export default Content