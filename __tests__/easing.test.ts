import { Easing } from '@/easing'

describe( 'Easing', () => {

	it( 'linear', () => {
		expect( Easing.linear( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.linear( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easing.linear( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuad', () => {
		expect( Easing.easeInQuad( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInQuad( 0.5 )).toBeCloseTo( 0.25 )
		expect( Easing.easeInQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuad', () => {
		expect( Easing.easeOutQuad( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutQuad( 0.5 ) ).toBeCloseTo( 0.75 )
		expect( Easing.easeOutQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it('easeInOutQuad', () => {
		expect( Easing.easeInOutQuad( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutQuad( 0.25 ) ).toBeCloseTo( 0.125 )
		expect( Easing.easeInOutQuad( 0.5 ) ).toBeCloseTo( 0.5)
		expect( Easing.easeInOutQuad( 0.75 ) ).toBeCloseTo( 0.875 )
		expect( Easing.easeInOutQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInCubic', () => {
		expect( Easing.easeInCubic( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInCubic( 0.5 ) ).toBeCloseTo( 0.125 )
		expect( Easing.easeInCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutCubic', () => {
		expect( Easing.easeOutCubic( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutCubic( 0.5 ) ).toBeCloseTo( 0.875 )
		expect( Easing.easeOutCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutCubic', () => {
		expect( Easing.easeInOutCubic( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutCubic( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easing.easeInOutCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuart', () => {
		expect( Easing.easeInQuart( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInQuart( 0.5 ) ).toBeCloseTo( 0.0625 )
		expect( Easing.easeInQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuart', () => {
		expect( Easing.easeOutQuart( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutQuart( 0.5 ) ).toBeCloseTo( 0.9375 )
		expect( Easing.easeOutQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutQuart', () => {
		expect( Easing.easeInOutQuart( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutQuart( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easing.easeInOutQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuint', () => {
		expect( Easing.easeInQuint( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInQuint( 0.5 ) ).toBeCloseTo( 0.03125 )
		expect( Easing.easeInQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuint', () => {
		expect( Easing.easeOutQuint( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutQuint( 0.5 ) ).toBeCloseTo( 0.96875 )
		expect( Easing.easeOutQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutQuint', () => {
		expect( Easing.easeInOutQuint( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutQuint( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easing.easeInOutQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInSine', () => {
		expect( Easing.easeInSine( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInSine( 0.5 ) ).toBeCloseTo( 1 - Math.cos( Math.PI / 4 ) )
		expect( Easing.easeInSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutSine', () => {
		expect( Easing.easeOutSine( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutSine( 0.5 ) ).toBeCloseTo( Math.sin( Math.PI / 4 ) )
		expect( Easing.easeOutSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutSine', () => {
		expect( Easing.easeInOutSine( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutSine( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easing.easeInOutSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInExpo', () => {
		expect( Easing.easeInExpo( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInExpo( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutExpo', () => {
		expect( Easing.easeOutExpo( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutExpo( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutExpo', () => {
		expect( Easing.easeInOutExpo( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutExpo( 1 ) ).toBeCloseTo( 1 )
		expect( Easing.easeInOutExpo( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easing.easeInOutExpo( 0.3 ) ).toBeCloseTo( 0.03125 )
	} )

	it( 'easeInCirc', () => {
		expect( Easing.easeInCirc( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutCirc', () => {
		expect( Easing.easeOutCirc( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutCirc', () => {
		expect( Easing.easeInOutCirc( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutCirc( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easing.easeInOutCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInBack', () => {
		expect( Easing.easeInBack( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutBack', () => {
		expect( Easing.easeOutBack( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutBack', () => {
		expect( Easing.easeInOutBack( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInElastic', () => {
		expect( Easing.easeInElastic( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInElastic( 0.5 ) ).toBeCloseTo( -4.403008748925139e-17 )
		expect( Easing.easeInElastic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutElastic', () => {
		expect( Easing.easeOutElastic( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutElastic( 0.2 ) ).toBeCloseTo( 1.25 )
		expect( Easing.easeOutElastic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutElastic', () => {
		expect( Easing.easeInOutElastic( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutElastic( 0.2 ) ).toBeCloseTo( -0.0078125 )
		expect( Easing.easeInOutElastic( 1 ) ).toBeCloseTo( 1 )
		expect( Easing.easeInOutElastic( 2 ) ).toBeCloseTo( 1.0000000004656613 )
	} )

	it( 'easeOutBounce', () => {
		expect( Easing.easeOutBounce( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeOutBounce( 0.5 ) ).toBeCloseTo( 0.765625 )
		expect( Easing.easeOutBounce( 0.8 ) ).toBeCloseTo( 0.94 )
		expect( Easing.easeOutBounce( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInBounce', () => {
		expect( Easing.easeInBounce( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInBounce( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutBounce', () => {
		expect( Easing.easeInOutBounce( 0 ) ).toBeCloseTo( 0 )
		expect( Easing.easeInOutBounce( 1 ) ).toBeCloseTo( 1 )
		expect( Easing.easeInOutBounce( 0.5 ) ).toBeCloseTo( 0.5 )
	} )

} )