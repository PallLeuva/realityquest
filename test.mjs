import {test} from 'node:test';
import assert from 'node:assert/strict';
import {missions} from './dist/missions.js';
test('six complete unique missions and all 54 decision paths',()=>{
 assert.equal(missions.length,6);assert.equal(new Set(missions.map(m=>m.id)).size,6);
 let paths=0;
 for(const m of missions){
  assert.equal(m.options.length,3);assert.equal(m.next.length,3);assert.equal(m.clues.length,3);
  for(const key of ['title','category','message','question','follow','takeaway'])assert.ok(m[key]?.length,key);
  for(const a of m.options){assert.ok(a.branch);assert.ok(a.feedback);for(const b of m.next){assert.ok(b.feedback);assert.ok([0,25,50].includes(a.points));assert.ok([0,25,50].includes(b.points));assert.ok(a.points+b.points>=0&&a.points+b.points<=100);paths++;}}
  assert.equal(Math.max(...m.options.map(o=>o.points))+Math.max(...m.next.map(o=>o.points)),100);
 }
 assert.equal(paths,54);
});
