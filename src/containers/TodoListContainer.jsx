import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login, logout } from "../api/auth";
import TodoList from "../components/TodoList";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoList,
  toggleTodo,
} from "../modules/todos";

const TodoListContainer = (props) => {
  const history = useHistory();
  const { todoList, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreateTodo = (content) => {
    dispatch(createTodo(content));
  };

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onEditTodo = ({ id, content }) => {
    dispatch(editTodo({ id, content }));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const onLogout = () => {
    logout();
    history.push("/");
  };

  useEffect(() => {
    if (loading === false) {
      dispatch(getTodoList());
    }
  }, [dispatch, loading]);

  if (!todoList) return <div>로딩중...</div>;
  return (
    <TodoList
      todoList={todoList}
      onCreateTodo={onCreateTodo}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
      onToggleTodo={onToggleTodo}
      onLogout={onLogout}
    />
  );
};

export default TodoListContainer;
