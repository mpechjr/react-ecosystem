import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
 
    box-shadow: rgba(71, 71, 71, 0.3) 1px 2px 4px 0px;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
  
`;
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now()-8640000 * 5 ) ? 'none': '2px solid #ff0000')}
`;

const Button = styled.button`
border: none;
border-radius: 2px;  
cursor: pointer;
font-family: inherit; 

overflow: hidden;
vertical-align: middle;
 
padding: .2rem .8rem;
line-height: 2rem;
background-color: #1f769e;
color: #fff;
margin-left:1rem;
`;

const SecondaryButton = styled(Button)`
background-color: #b62823;
`;

const ButtonContainer = styled.div``;

const TodoListItem = ({ todo, onRemovedPressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
    return (
    <Container createdAt={todo.createdAt}>
        <h3>{todo.text}</h3>
        <p> Created at &nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
        </p>
        <ButtonContainer>
        {todo.isCompleted 
        ? null
        :<Button 
        onClick={() => onCompletedPressed(todo.id)}
        >Complete</Button>
        }
        <SecondaryButton 
        onClick={() => onRemovedPressed(todo.id)}
       >Delete</SecondaryButton>
        </ButtonContainer>
    </Container>
);
}

export default TodoListItem;