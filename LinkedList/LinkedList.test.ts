import * as mocha from 'mocha';
import * as chai from 'chai';
import { LinkedList } from "./LinkedList"; 

const expect = chai.expect;

describe('test LinkedList', () => {
  // append
  it('should return [LinkedList] node-1,', () => {
    let ll = new LinkedList<string>();
    ll.append("node-1");
    expect(ll.toString()).to.equal("[LinkedList] node-1,");
  });

  it('should return 1', () => {
    let ll = new LinkedList<string>();
    ll.append("node-1");
    ll.append("node-2");
    expect(ll.size()).to.equal(2);
  })

  // insert
  it('should return [LinkedList] inode,node-1,', () => {
    let ll = new LinkedList<string>();
    ll.append("node-1");
    ll.insert("inode", 0);
    expect(ll.toString()).to.equal("[LinkedList] inode,node-1,");
  });

  // removeAt
  it('should return [LinkedList] node-1,node-3,', () => {
    let ll = new LinkedList<string>();
    ll.append("node-1");
    ll.append("node-2");
    ll.append("node-3");
    ll.removeAt(1);
    expect(ll.toString()).to.equal("[LinkedList] node-1,node-3,");
  });
});
