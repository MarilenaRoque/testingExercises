const calculator = require('./calculator');

it("Works to add two positive numbers", () => {
    expect(calculator.add(20,30)).toBe(50)
})

it("Works to add multiple positive numbers", () => {
    expect(calculator.add(20,30,50, 50)).toBe(150)
})

it("Works to add when negative number are included numbers", () => {
    expect(calculator.add(20,-30)).toBe(-10)
})

it("Works to add when negative number are included numbers", () => {
    expect(calculator.add(20,-30)).toBe(-10)
})

it("works to subtract from positive numbers", () => {
    expect(calculator.subtract(50,30)).toBe(20)
})

it("works to subtract from negative numbers", () => {
    expect(calculator.subtract(-50,30)).toBe(-80)
})

it("works to multiply two positive number", () => {
    expect(calculator.multiply(10,50)).toBe(500)
})

it("works to multiply multiple positive number", () => {
    expect(calculator.multiply(10,50,1,10)).toBe(5000)
})

it("returns 0 when receive arugument 0", () => {
    expect(calculator.multiply(10,50,1,0)).toBe(0)
})

it("works when receives positive numbers", () => {
    expect(calculator.divide(50, 10)).toBe(5)
})

it("works for floats results", () => {
    expect(calculator.divide(10,50)).toBeCloseTo(0.2)
})

it("return a message when try to divide by zero", () => {
    expect(calculator.divide(10,0)).toBe("Error: No division by zero")
})
