import { expect } from "chai";
import { getBorderSytleforDate } from "../TodoListItem";

describe('getBorderStyleforDate', () => {
    it ('returns none if the date is less than 5 days ago',() => {
        const today = Date.now();
        const recentDate = new Date(Date.now()  - 86400000 * 3);
        const expected = 'none';
        const actual = getBorderSytleforDate(recentDate,today);

        expect(actual).to.equal(expected);

    });

    it ('returns a border if the date is greaterr than 5 days ago',() => {
        const today = Date.now();
        const recentDate = new Date(Date.now()  - 86400000 * 7);
        const expected = '2px solid red';
        const actual = getBorderSytleforDate(recentDate,today);

        expect(actual).to.equal(expected);
    });
});
