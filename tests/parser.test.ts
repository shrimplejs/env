import { describe, it, expect } from 'vitest'
import { parseEnv } from '../src'

describe('parser', () => {
    it('should parse a simple env', () => {
        expect(parseEnv('HELLO=WORLD!')).toEqual({ 'HELLO': 'WORLD!' })
    });
    it('should parse a multiline env', () => {
        expect(parseEnv('HELLO=WORLD!\nFOO=BAR')).toEqual({ 'HELLO': 'WORLD!', 'FOO': 'BAR' })
    });
    it('should ignore comments', () => {
        expect(parseEnv('HELLO=WORLD!\n# FOO=BAR')).toEqual({ 'HELLO': 'WORLD!' })
    });
    it('should ignore empty lines', () => {
        expect(parseEnv('HELLO=WORLD!\n\nFOO=BAR')).toEqual({ 'HELLO': 'WORLD!', 'FOO': 'BAR' })
    });
})