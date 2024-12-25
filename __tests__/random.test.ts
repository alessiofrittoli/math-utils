import { mtRand, randomNumUUID, randomUUID } from '@/random'

describe( 'mtRand', () => {

	it( 'returns a random number', () => {
		const result = mtRand()
		expect( result ).toBeGreaterThanOrEqual( 0 )
		expect( result ).toBeLessThanOrEqual( 0x7FFFFFFF )
	} )


	it( 'returns a random number in the given range', () => {
		const result = mtRand( 100, 200 )
		expect( result ).toBeGreaterThanOrEqual( 100 )
		expect( result ).toBeLessThanOrEqual( 200 )
	} )


	it( 'handles negative numbers', () => {
		const result = mtRand( -5, -20 )		
		expect( result ).toBeLessThanOrEqual( -5 )
		expect( result ).toBeGreaterThanOrEqual( -20 )
	} )

} )


describe( 'randomNumUUID', () => {

	it( 'generates a properly formatted UUID string', () => {
		const result = randomNumUUID()
		expect( result.split( '-' ).length ).toBe( 5 )
	} )

} )


describe( 'randomUUID', () => {

	afterAll( () => {
		jest.clearAllMocks()
	} )

	if ( typeof crypto !== 'undefined' ) {
		it( 'generates a properly formatted UUID with crypto.randomUUID', () => {
			const cryptoRandomMock = jest.spyOn( crypto, 'randomUUID' )
			const result = randomUUID()
			expect( result.split( '-' ).length ).toBe( 5 )
			expect ( cryptoRandomMock ).toHaveBeenCalledTimes( 1 )
		} )
	}

	it( 'generates a properly formatted UUID string without crypto.randomUUID', () => {
		if ( typeof crypto !== 'undefined' ) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			;( crypto as any ).randomUUID = undefined
		}		

		const result = randomUUID()
		expect( result.split( '-' ).length ).toBe( 5 )
	} )

} )