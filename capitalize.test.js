
const capitalize = require('./capitalize');

it("capitalize works for all on Uppercase", () => {
 expect(capitalize('MARILENA')).toBe('Marilena')
})

it("capitalize works for all on Lowercase", () => {
    expect(capitalize('brasil')).toBe('Brasil')
})

it("capitalize works for mixed cases, first character in Low", () => {
    expect(capitalize('cOdE')).toBe('Code')
})

it("capitalize works for mixed cases, first character in Up", () => {
    expect(capitalize('PractICe')).toBe('Practice')
})

it("Return Error when receives a Number", () => {
    expect(capitalize()).toBe('Argument must be a String!');
})

