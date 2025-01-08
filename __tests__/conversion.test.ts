import { convertTo } from '@/conversion'

describe( 'convertTo', () => {

	it( 'supports any object with string index signature and number values as input', () => {
		const InMeters = {
			mile	: 1609.34,
			yard	: 0.9144,
			foot	: 0.3048,
		}
		// converts 100 meters to...
		const result = convertTo( 100, InMeters )
		expect( result.get( 'mile' ).value ).toBe( 0.06213727366498068 )
		expect( result.get( 'yard' ).value ).toBe( 109.36132983377078 )
		expect( result.get( 'foot' ).value ).toBe( 328.0839895013123 )
	} )

} )