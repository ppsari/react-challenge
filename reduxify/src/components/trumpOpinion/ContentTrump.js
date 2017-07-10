import React from 'react'
import { connect } from 'react-redux';

class ContentTrump extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { trump } = this.props;
    return (
      <div className="columns">
        <div className="column is-3">
          <img src={trump.face}/>
        </div>
        <div className="column is-6">
          <p>{trump.opinion}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trump: state.trump
  }
}


export default connect(mapStateToProps,null)(ContentTrump);