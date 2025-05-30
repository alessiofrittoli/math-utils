import { isNumeric, padStart, round, paginate } from '@/helpers'
import { englishOrdinalSuffix, getClosestNumber, getNumbersFromString } from '@/helpers'


describe( 'round', () => {

	it( 'rounds to no decimal places', () => {
		expect( round( 4.20 ) ).toBe( 4 )
		expect( round( 4.56 ) ).toBe( 5 )
	} )

	it( 'rounds to specific decimal places', () => {
		expect( round( 4.19789, 2 ) ).toBe( 4.20 )
	} )

	it( 'rounds negative numbers', () => {
		expect( round( -3.14159, 3 ) ).toBe( -3.142 )
	} )

	it( 'rounds large numbers', () => {
		expect( round( 123456.789, 1 ) ).toBe( 123456.8 )
	} )

} )


describe( 'getClosestNumber', () => {

	it( 'returns the right number', () => {
		expect( getClosestNumber( [ 1, 5, 10, 20 ], 7 ) ).toBe( 5 )
	} )

	it( 'returns the exact match', () => {
		expect( getClosestNumber( [ 1, 5, 10, 20 ], 5 ) ).toBe( 5 )
	} )

	it( 'returns `0` with empty haystack provided', () => {
		expect( getClosestNumber( [], 10 ) ).toBe( 0 )
	} )

	it( 'handles negative numbers', () => {
		expect( getClosestNumber( [ -10, -5, 0, 5 ], -7 ) ).toBe( -5 )
	} )

	it( 'handles paradox where 2 numbers are equidistant', () => {
		expect( getClosestNumber( [ -1, 1 ], 0 ) ).toBe( -1 )
		expect( getClosestNumber( [ 1, 5 ], 3 ) ).toBe( 1 )
		expect( getClosestNumber( [ 5, 1 ], 3 ) ).toBe( 5 )
	} )

} )


describe( 'getNumbersFromString', () => {

	it( 'performs basic extraction', () => {
		const [ number ] = getNumbersFromString( 'abc123xyz456' )

		expect( number ).not.toBeNaN()
		expect( number ).toBe( 123456 )
	} )


	it( 'handles strings with no numbers', () => {
		const [ number, numbers ] = getNumbersFromString( 'Hello World!' )

		expect( number ).toBeNull()
		expect( numbers ).toBeNull()
	} )


	it( 'handles empty strings', () => {
		const [ number, numbers ] = getNumbersFromString( '' )

		expect( number ).toBeNull()
		expect( numbers ).toBeNull()
	} )


	it( 'extracts grouped numbers as found in the string', () => {
		const [, numbers ] = getNumbersFromString( 'abc123xyz456' )

		expect( numbers?.length ).toBe( 2 )
		expect( numbers?.at( 0 ) ).toBe( 123 )
		expect( numbers?.at( 1 ) ).toBe( 456 )
	} )


	it( 'extracts single number in string', () => {
		const [ number, numbers ] = getNumbersFromString( 'Price: 99€' )

		expect( number ).toBe( 99 )
		expect( numbers?.length ).toBe( 1 )
		expect( numbers?.at( 0 ) ).toBe( 99 )
	} )

	it( 'handles complex strings with symbols', () => {
		const [ number , numbers ] = getNumbersFromString( 'Order #123-456. Delivery in 7 days.' )

		expect( number ).toBe( 1234567 )
		expect( numbers?.length ).toBe( 3 )
		expect( numbers?.at( 0 ) ).toBe( 123 )
		expect( numbers?.at( 1 ) ).toBe( 456 )
		expect( numbers?.at( 2 ) ).toBe( 7 )
	} )

} )


describe( 'englishOrdinalSuffix', () => {

	it( 'performs basic calculations', () => {
		expect( englishOrdinalSuffix( 1 ) ).toBe( 'st' )
		expect( englishOrdinalSuffix( 2 ) ).toBe( 'nd' )
		expect( englishOrdinalSuffix( 3 ) ).toBe( 'rd' )
		expect( englishOrdinalSuffix( 4 ) ).toBe( 'th' )
	} )


	it( 'handles special cases', () => {
		expect( englishOrdinalSuffix( 11 ) ).toBe( 'th' )
		expect( englishOrdinalSuffix( 12 ) ).toBe( 'th' )
		expect( englishOrdinalSuffix( 13 ) ).toBe( 'th' )
	} )


	it( 'handles large numbers', () => {		
		expect( englishOrdinalSuffix( 101 ) ).toBe( 'st' )
		expect( englishOrdinalSuffix( 111 ) ).toBe( 'th' )
		expect( englishOrdinalSuffix( 112 ) ).toBe( 'th' )
		expect( englishOrdinalSuffix( 122 ) ).toBe( 'nd' )
		expect( englishOrdinalSuffix( 113 ) ).toBe( 'th' )
		expect( englishOrdinalSuffix( 123 ) ).toBe( 'rd' )
	} )

} )


describe( 'padStart', () => {

	it( 'pads number correctly', () => {
		expect( padStart( 7, 3 ) ).toBe( '007' )
	} )


	it( 'skips un-necessary padding', () => {
		expect( padStart( 123, 3 ) ).toBe( '123' )
	} )


	it( 'pads large numbers', () => {
		expect( padStart( 123456, 5 ) ).toBe( '123456' )
	} )


	it( 'handles custom characters', () => {
		expect( padStart( 7, 3, '+' ) ).toBe( '++7' )
	} )

} )


describe( 'isNumeric', () => {

	it( 'correctly checks strings', () => {

		expect( isNumeric( '12345' ) )
			.toBe( true )
		
		expect( isNumeric( 'invalid numeric string 12345' ) )
			.toBe( false )
		
	} )


	it( 'correctly checks numbers', () => {

		expect( isNumeric( 12345 ) )
			.toBe( true )
		
		expect( isNumeric( Number( 'NaN' ) ) )
			.toBe( false )
		
	} )

} )


describe( 'paginate', () => {

	it( 'calculates pagination with default values', () => {

		expect( paginate() ).toEqual( {
			pages		: 0,
			currentPage	: 0,
			previousPage: false,
			nextPage	: false,
		} )
		
	} )


	it( 'currentPage starts from `1`', () => {

		const result = paginate( { perPage: 10, offset: 0, total: 100 } )
		
		expect( result ).toEqual( {
			pages		: 10,
			currentPage	: 1,
			previousPage: false,
			nextPage	: 2,
		} )

	} )


	it( 'handles offset greater than total', () => {

		const result = paginate( { perPage: 10, offset: 150, total: 100 } )
		
		expect( result ).toEqual( {
			pages		: 10,
			currentPage	: 10,
			previousPage: 9,
			nextPage	: false,
		} )

	} )


	it( 'handles total less than perPage', () => {

		const result = paginate( { perPage: 20, offset: 0, total: 15 } )
		
		expect( result ).toEqual( {
			pages		: 1,
			currentPage	: 1,
			previousPage: false,
			nextPage	: false,
		} )

	} )


	it( 'handles zero total', () => {

		const result = paginate( { perPage: 10, offset: 0, total: 0 } )
		
		expect( result ).toEqual( {
			pages		: 0,
			currentPage	: 0,
			previousPage: false,
			nextPage	: false,
		} )

	} )


	it( 'calculates pagination with non-zero offset', () => {

		const result = paginate( { perPage: 10, offset: 25, total: 100 } )
		
		expect( result ).toEqual( {
			pages		: 10,
			currentPage	: 3,
			previousPage: 2,
			nextPage	: 4,
		} )

	} )


	it( '`pages` is rounded up when a floating value is retrieved by dividing `total` by `perPage`', () => {

		const result = paginate( { perPage: 12, total: 30 } ) // 30 / 12 === 2.5
		
		expect( result ).toEqual( {
			pages		: 3,
			currentPage	: 1,
			previousPage: false,
			nextPage	: 2,
		} )

	} )

} )