// import { sum, forEach } from "../../src/sum"


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         resolve('peanut butter')
//     })
// }

// describe('sum.js', () => {
//     it('求和函数正常', () => {
//         expect(sum(1, 2)).toBe(3)
//     })
//     it('求和函数异常', () => {
//         expect(sum(1, 2)).not.toBe(4)
//     })
// })
// test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
// });


// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1, 2], mockCallback);

// // The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(3);

// // The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);
// expect(mockCallback.mock.results[1].value).toBe(43);


// const myMock = jest.fn();
// console.log(myMock());
// // > undefined

// myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());

// const filterTestFn = jest.fn();

// // Make the mock return `true` for the first call,
// // and `false` for the second call
// filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

// const result = [11, 12].filter(num => filterTestFn(num));

// console.log(result);
// // > [11]
// console.log(filterTestFn.mock.calls[0][0]); // 11
// console.log(filterTestFn.mock.calls[1][0]); // 12


// import axios from 'axios';

// function user(){
//     return axios.get('/user.json').then((res)=>{
//         return res.data
//     })
// }

// jest.mock('axios');

// test('should fetch users', () => {
//   const users = [{name: 'Bob'}];
//   const resp = {data: users};
//   axios.get.mockResolvedValue(resp);

//   // or you could use the following depending on your use case:
//   // axios.get.mockImplementation(() => Promise.resolve(resp))

//   return user().then(data => expect(data).toEqual(users));
// });



// // Util.js
// class Util {
//     a(){}
//     b(){}
// }
// export default Util;

// // demoUtil.js
// import Util from "./util";
// export function demoUtil() {
//     const util = new Util();
//     util.a();
//     util.b();
// }

// // demoUtil.test.js

// // 集成测试：把单元测试中的其他东西也进行测试了
// // jest发现util导出的是一个类，会自动进行mock（或者可以手动mock）
// // Util=jest.fn(),Util.prototype.a=jest.fn(),Util.prototype.b=jest.fn()
// jest.mock('./util');
// import {demoUtil} from './fetch';
// import Util from './util'
// test('测试',()=>{
//     demoUtil();
//     // Util是单元测试中的其他东西
//     expect(Util).toHaveBeenCalled();
//     expect(Util.mock.instances[0].a).toHaveBeenCalled();
//     expect(Util.mock.instances[0].b).toHaveBeenCalled();
// });


function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
      callback(flavour);
    }
  }
  
  describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'lemon');
      let aaaa = expect(drink).toHaveBeenCalled();
      console.log(aaaa)
    });
  
    test('does not drink something octopus-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'octopus');
      expect(drink).not.toHaveBeenCalled();
    });
  });
