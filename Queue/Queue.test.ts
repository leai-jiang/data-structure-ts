import * as mocha from "mocha";
import * as chai from "chai";
import Queue from "./Queue";

const { expect } = chai;

describe("Test Queue", () => {
  it("should return [Queue] node-1,node-2", () => {
    const q = new Queue<string>();
    q.enqueue("node-1");
    q.enqueue("node-2");

    expect(q.toString()).to.equal("[Queue] node-1,node-2");
  })

  it("should return [Queue] node-2", () => {
    const q = new Queue<string>();
    q.enqueue("node-1");
    q.enqueue("node-2");
    q.dequeue();

    expect(q.toString()).to.equal("[Queue] node-2");
  })

  it("should return 2", () => {
    const q = new Queue<string>();
    q.enqueue("node-1");
    q.enqueue("node-2");

    expect(q.size()).to.equal(2);
  })
})