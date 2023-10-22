const Square = require('../src/square.js').Square;

test('Square renders with value', () => {
    const wrapper = shallow(<Square value="X" />);
    expect(wrapper.text()).toBe("X");
});