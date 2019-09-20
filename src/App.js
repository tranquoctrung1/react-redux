import React from 'react';
import './App.css';
import News from './news';
import { connect } from 'react-redux'

//declare in the outside of component
const mapStateToProps = (state , ownProps) => {
  return {
    // this.props.data and this.props.dispatch() to dispatch actions
    data: state.device
  }
}
class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    var {data} = this.props
    data = data.join(' ');
    return (
      <div className="App">
        <div>{data}</div>
        <hr></hr>
        <News></News>
      </div>
    )
  }

}

// use this line to connet mapStateToProps method
export default connect(mapStateToProps)(App);
