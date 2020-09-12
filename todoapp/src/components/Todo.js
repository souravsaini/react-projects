import React from "react";
import "./Todo.css";
import {List, ListItem, ListItemText, Button} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import db from "../firebase";

function Todo(props) {
  console.log(props)
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary="Todo" secondary={props.todo.todo} />
        </ListItem>
        <DeleteIcon variant="contained" color="secondary"
         onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
      </List>
    </div>
  )
}

export default Todo;
