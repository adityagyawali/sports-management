import React from "react";

import Test from "../components/Test";

import { shallow } from "enzyme";

it("renders without crashing", () => {
	const wrapper = shallow(<Test />);
	const h1 = <h1>This is test component</h1>;
	expect(wrapper.contains(h1)).toEqual(true);
});
