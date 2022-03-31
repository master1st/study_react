import React, { Component, Fragment } from 'react';

class Habit extends Component {
    handleUp = () => {
        this.props.handleUp(this.props.habit);
    }

    handleDown = () => {
        this.props.handleDown(this.props.habit);
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.habit);
    }
// 생각해보면 사실 간단하다, 내가 버튼을 increase버튼을 눌렀는데 즉 무슨말이냐면
// (event) => {this.handleIncrement(this.props.habit) 버튼클릭이벤트랑 habit컴포넌트 전달 프로퍼티랑 같은가? 다르기때문에 축약이 안된다.}
    render() {
        const {name,count} = this.props.habit
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                       
                <button className="habit-button habit-increase" onClick={this.handleUp}>                
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDown}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete"  onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>

        );
    }
}

export default Habit;