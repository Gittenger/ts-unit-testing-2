import { hello } from '../index'

test('hello string', () => {
	const actual = hello
	expect(typeof actual).toBe('string')
})
