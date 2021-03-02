import React from 'react'
import Form from '../form/form'
import styles from './todoList.module.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            doList: [],
            completed: false
        }
    }

    addList = (val) => {
        this.setState({ doList: [...this.state.doList, val] })
    }

    deleteItem = (index) => {
        this.setState({ doList: [...this.state.doList.slice(0, index), ...this.state.doList.slice(index + 1)] })
    }

    completedTask() {
        this.setState({ completed: !this.state.completed })
    }
    render() {
        return (
            <div>
                <Form addList={this.addList} />
                <div>
                    <ul>
                        {this.state.doList.map((item, index) => {
                            return <>
                                <div className={styles.list_div}>
                                    <input className={styles.check} type="checkbox" onClick={() => this.completedTask()} />
                                    <li key={index} style={{ textDecoration: this.state.completed ? "line-through" : null }} className={styles.list}>{`${item.todo} due date is ${item.dueDate}`}
                                        <button className={styles.del} onClick={() => { this.deleteItem(index) }}><i class="fas fa-trash-alt"></i></button>
                                        {new Date(item.dueDate) < new Date() && <p className={styles.late}>Due day is passed</p>}
                                    </li>
                                </div>

                            </>






                        })}
                    </ul>
                </div>
            </div>
        )

    }
}


export default TodoList;
