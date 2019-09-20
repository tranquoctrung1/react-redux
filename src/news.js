import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ChangeEditStatus, Add_New} from './action';

//cách 1 để lấy thằng dispatch() thằng này cũng dùng để lấy thằng state là chính
const mapStateToProps = (state , ownProps) => {
    return {
      // this.props.editstatus and this.props.dispatch() to dispatch actions
      editStatus: state.editStatus,
      device: state.device
    }
}

//cách thứ 2 để lấy các dispatch() để thực hiện các action thằng này chuyên dùng để lấy các dispatch() hơn
const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        // this.props.handleClick
        hanhdleClick: () => {
            dispatch(ChangeEditStatus);
            dispatch(Add_New);
        }
    }
} 

class News extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     var {dispatch} = this.props;
    //     dispatch(ChangeEditStatus);
    //     dispatch(Add_New);
    // }

    render() {
        return (
            <div>
                <h2>This is News component</h2>
                <button onClick={
                    // this.handleClick
                   () => this.props.hanhdleClick()
                }>Click to dispatch action</button>
            </div>
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(News);