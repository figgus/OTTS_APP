import {createStore} from 'redux';
const iniciarSesion='LOGIN';
const clickUsuario = 'ClickUsuario';
const initialState={
    usuario:null,
    usuarioClickeado : null
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
        case clickUsuario:
            return {
                ...state,
                usuarioClickeado:payload
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

export const ClickUsuarioAction = usuario =>(
    {
        type:'ClickUsuario',
        payload:usuario
    }
)

export const deleteTodoAction=todoid=>(
    {
        type:'DELETE_TODO',
        payload:todoid
    }
)

