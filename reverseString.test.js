const reverseString = require('./reverseString');

it("Should work for strings with even lenght", () => {
    expect(reverseString('code')).toBe('edoc')
})

it("Should work for strings with odd lenght", () => {
    expect(reverseString('peace')).toBe('ecaep')
})