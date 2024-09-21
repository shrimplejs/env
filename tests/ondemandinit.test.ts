import { describe, it, expect } from 'vitest'
import { init } from '../src/index'

describe('ondemandinit', () => {
    it('should return the envs', () => {
        init({ envFiles: ['.env'] }).then(env => {
            expect(env).toEqual({ 'HELLO': 'WORLD!' })
        });
    })
})