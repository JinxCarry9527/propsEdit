import { mount } from '@vue/test-utils'
import Watch from '@/components/watch.vue'
import flushPromises from "flush-promises"
// test('renders props.msg when passed', (done) => {
//     const msg = 'msg'
//     const wrapper = shallowMount(Watch)
//     wrapper.vm.msg = '21212'
//     wrapper.vm.$nextTick(()=>{
//         expect(wrapper.text()).toEqual('21212')
//         done()
//     })
// })


// test('renders props.msg when passed', (done) => {
//     const msg = 'msg'
//     const wrapper = shallowMount(Watch)
//     wrapper.vm.msg = '21212'
//     console.warn(wrapper.vm.$route)
//     wrapper.vm.$nextTick(()=>{
//         expect(wrapper.text()).toEqual('21212')
//         done()
//     })
// })

test('renders props.msg when passed', async (done) => {
    const wrapper = mount(Watch, {
        mocks: {
            $route: {
                query: {
                    id: '123'
                }
            }
        }
    })
    wrapper.setData({ $route: { query: { id: 'def' } } });

    await flushPromises();

})