import React from 'react'
import { connect } from 'react-redux';
import { getOpinion } from '../../actions';

// dispatch(getOpinion(this.state.username));

class FrmTrump extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
    this.changeUsername = this.changeUsername.bind(this);
  }

  componentDidMount() {
    console.log('mount')
  }

  changeUsername(username) {
    this.setState({username: username})
  }
  // <form onSubmit={((e)  => {
  //   e.preventDefault();
  //   this.props.formSubmit(this.state.username);
  //   this.setInputUsername('');
  // })}>

  render () {
    return (
      <form onSubmit={((e)  => {
        e.preventDefault();
        this.props.getOpinion(this.state.username)
        // dispatch(getOpinion(this.state.username));
        this.changeUsername('');
      })}>
        <div className="field">
          <p className="control">
            <input className="input" type="text" placeholder="Input your name"
            onChange={(e) => this.changeUsername(e.target.value)}
            value={this.state.username}
            />
            <button type="submit"> Get Opinion </button>
          </p>
        </div>
      </form>
    )
  }
}



// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     trump: state.trump
//   }
// }

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch')
  return {
    getOpinion: (username) => dispatch(getOpinion(username))
  }
}


export default connect(null,mapDispatchToProps)(FrmTrump);