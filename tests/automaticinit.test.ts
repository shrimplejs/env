import { describe, it, expect } from 'vitest'
import '../src/init'

describe('automaticinit', () => {
    it('should return the envs', () => {
        expect(process.env.HELLO).toBe('WORLD!')
    })
})