import {createStore} from 'redux';
const iniciarSesion='LOGIN';
const initialState={
    usuario:null
}

export const store=createStore(
    reducer,
    initialState
);



function reducer(state,{type,payload}){
    switch(type){
        case iniciarSesion:return {
            ...state,
            usuario:payload
        }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos:state.todos.map(todo=>(todo.id===payload)?{...todo,complete:!todo.complete}:todo)
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo=>todo.id!==payload)
            }
        default:
            return state; 
    }
}

export const LoginAction=(usuario)=>(
    {
        type:iniciarSesion,
        payload:usuario
    }
)

export const toggleTodoAction = todoid =>(
    {
        type:'TOGGLE_TODO',
        payload:todoid
    }
)

export const deleteTodoAction=todoid=>(
    {
        type:'DELETE_TODO',
        payload:todoid
    }
)

