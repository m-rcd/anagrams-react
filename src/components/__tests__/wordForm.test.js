import React from "react";
import ReactDOM from "react-dom";
import Word from "../wordForm";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Word />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("changes state when user adds word", () => {
  const wrapper = shallow(<Word />);
  wrapper.find("input").simulate("change", { target: { value: "Hello" } });
  expect(wrapper.state("word")).toBe("Hello");
});
