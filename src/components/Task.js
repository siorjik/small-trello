import React, {Component} from 'react';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {task: [], newTask: false}
  }

  updateTask(index, text) {
    let arr = this.state.task;
    arr[index] = text;
    this.setState({task: arr, newTask: false});
  }

  delTask(index) {
    this.state.task.splice(index, 1);
    this.setState({task: this.state.task});
  }

  addNewTask() {
    this.state.task.push("New task");
    this.setState({task: this.state.task, newTask: true});
  }

  render() {
    return (
      <div id='task-wrap'>
        <input className='add-task' type="button" value='Add new task' onClick={this.addNewTask.bind(this)}/>
        {this.state.task.map((task, index)=>{
          return <BlockTask key={index} index={index} task={task} delTask={this.delTask.bind(this, index)} updateTask={this.updateTask.bind(this, index)} newTask={this.state.newTask}/>
        })}
      </div>
    )
  }
}

class BlockTask extends Component {
  constructor(props) {
    super(props);
    this.state = {edit: this.props.newTask}
  }

  delBlock() {
    this.props.delTask(this.props.index);
  }

  editBlock() {
    this.setState({edit: !this.state.edit});
  }

  saveBlock() {
    this.setState({edit: !this.state.edit});
    this.props.updateTask(this.textTask.value);
  }

  statusEdit() {
    return (
      <div className='task-content'>
        <textarea ref={(textarea)=>{this.textTask = textarea;}} defaultValue={this.props.task} cols="50" rows="3"></textarea>
        <input className='save' type='button' value='Save task' onClick={this.saveBlock.bind(this)}/>
      </div>
    )
  }

  statusNorm() {
    return (
      <div className='task-content'>
        <p className='task-name'>{this.props.task}</p>
        <input className='edit' type='button' value='Edit task' onClick={this.editBlock.bind(this)}/>
        <input className='del' type='button' value='Delete task' onClick={this.delBlock.bind(this)}/>
      </div>
    )
  }

  render() {
    let content;
    if(this.state.edit) {
      content = this.statusEdit();
    }
    else content = this.statusNorm();

    return (
      <div id='block-wrap'>
        {content}
      </div>
    )
  }
}