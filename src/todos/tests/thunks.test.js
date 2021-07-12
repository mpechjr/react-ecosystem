import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from "chai";
import sinon from 'sinon';
import { loadTodos } from "../thunks";

describe('The LoadTodos Thunk', () => { //needs to do 3 things
    //dispatch loadtodos, load data from server, dispatch loadtodossuccess
    it ('Dispatches the correct actions in the success scenario', async () =>{
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{ text: '1'} , {text: '2'}];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);

        const expectedFirstActioin = { type: 'LOAD_TODOS_IN_PROGRESS'};

        const expectedSecondActioin = { type:   'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos
            }
        };
        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstActioin);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondActioin);
        
        fetchMock.reset();
    }) 

});