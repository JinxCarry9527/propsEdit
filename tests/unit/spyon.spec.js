import events from '../../src/events';
import fetch from '../../src/fetch';


function fetchApple(callback, name) {
    callback(name)
}

jest.mock('../../src/fetch');

test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async () => {
    expect.assertions(2);
    await events.getPostList();
    expect(fetch.fetchPostsList).toHaveBeenCalled();
    expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1);
})

// test('callback', () => {

// })