import React, { Component } from 'react';
import styles from './search.module.css'
class InputFiled extends Component {
    inputRef = React.createRef();


    handleSubmit = (e) => {
        e.preventDefault();
        const text = this.inputRef.current.value;
        text && this.props.query(text);
    }
    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src="/images/youtube_logo.jpg"></img>
                    <h1 className={styles.youtube}>Youtube</h1>
                </div>
                <input className={styles.input}
                    type="text"
                    ref={this.inputRef}
                />
                <img className={styles.search} src="/images/search_logo.png"></img>

            </form>
        );
    }
}

export default InputFiled;