"use strict";
exports.__esModule = true;
var test_utils_1 = require("@vue/test-utils");
var HelloWorld_vue_1 = require("@/components/HelloWorld.vue");
describe('HelloWorld.vue', function () {
    it('renders props.msg when passed', function () {
        var msg = 'new message';
        var wrapper = test_utils_1.shallowMount(HelloWorld_vue_1["default"], {
            props: { msg: msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
