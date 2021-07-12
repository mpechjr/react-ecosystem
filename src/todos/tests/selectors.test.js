import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe('The getCompletedTodos Selector', () => {

    it ('Returns only completed todos', () => {

        const fakeTodos = [{
            text: "Hello",
            isCompleted: true,
        },{
        text:'Goodbye',
        isCompleted: false
    }
    ];

    const expected = [{
        text: "Hello",
        isCompleted: true,
    }];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);

    });
});