import React from 'react';
import PropTypes from 'prop-types';
import { usersType, todosType } from '../../types';

export const ListItem = ({ users, todo }) => (
  <>
    <p className="todo__user">
      {users.find(user => user.id === todo.userId).name}
    </p>
    <p>{todo.title}</p>
    <p>
      Progress:
      {todo.completed ? ' Completed' : ' In progress'}
    </p>
  </>
);

ListItem.propTypes = {
  todo: PropTypes.arrayOf(todosType).isRequired,
  users: PropTypes.arrayOf(usersType).isRequired,
};