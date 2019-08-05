import * as mocha from "mocha";
import * as chai from "chai";
import { Stack } from "./Stack";

const { expect } = chai;

describe("test Stack", () => {
  it("should return [Stack] node-1,node-2", () => {
    const s = new Stack<string>();
    s.push("node-1");
    s.push("node-2");
    expect(s.toString()).to.equal("[Stack] node-1,node-2");
  });

  it("should return [Stack] 1,3", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    s.push(3);
    s.pop();
    expect(s.toString()).to.equal("[Stack] 1,2");
  })
});
