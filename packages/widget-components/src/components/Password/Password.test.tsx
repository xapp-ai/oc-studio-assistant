import { shallow } from "enzyme";
import React from 'react';
import { Password } from "./Password";

describe("Password", () => {
    it("should render", () => {
        const mockOnChange = jest.fn();
        const comp = shallow(<Password
            value="pwd"
            onChange={mockOnChange}
        />);
        const btn = comp.find("input").at(0);
        expect(btn.prop("value")).toBe("pwd");
    });
});