import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import Habit from './habit';
import ItemField from './itemField';

class Habits extends Component {

    handleUp = (habit) => {
       this.props.handleIncrement(habit);
    };

    handleDown = (habit) => {
        this.props.handleDecrement(habit);
    };
    
    handleDelete = (habit) => {
        this.props.handleOnDelete(habit);
    };
    
    handleAdd = (text) => {
        this.props.textData(text);
    };
    render() {
        return (
            <>
            <ItemField textData = {this.handleAdd}/>
            <ul>
                {this.props.habits.map(habit => (
                    <Habit key={habit.id} habit={habit}
                        handleUp={this.handleUp}
                        handleDown={this.handleDown}
                        handleDelete={this.handleDelete} />
                ))}
            </ul>
            </>
        );
    }
}

export default Habits;
