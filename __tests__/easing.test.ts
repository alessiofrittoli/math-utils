import { easing } from '@/easing'

describe( 'Easing', () => {

	it( 'linear', () => {
		expect( easing.linear( 0 ) ).toBeCloseTo( 0 )
		expect( easing.linear( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( easing.linear( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuad', () => {
		expect( easing.easeInQuad( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInQuad( 0.5 )).toBeCloseTo( 0.25 )
		expect( easing.easeInQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuad', () => {
		expect( easing.easeOutQuad( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutQuad( 0.5 ) ).toBeCloseTo( 0.75 )
		expect( easing.easeOutQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it('easeInOutQuad', () => {
		expect( easing.easeInOutQuad( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutQuad( 0.25 ) ).toBeCloseTo( 0.125 )
		expect( easing.easeInOutQuad( 0.5 ) ).toBeCloseTo( 0.5)
		expect( easing.easeInOutQuad( 0.75 ) ).toBeCloseTo( 0.875 )
		expect( easing.easeInOutQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInCubic', () => {
		expect( easing.easeInCubic( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInCubic( 0.5 ) ).toBeCloseTo( 0.125 )
		expect( easing.easeInCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutCubic', () => {
		expect( easing.easeOutCubic( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutCubic( 0.5 ) ).toBeCloseTo( 0.875 )
		expect( easing.easeOutCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutCubic', () => {
		expect( easing.easeInOutCubic( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutCubic( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( easing.easeInOutCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuart', () => {
		expect( easing.easeInQuart( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInQuart( 0.5 ) ).toBeCloseTo( 0.0625 )
		expect( easing.easeInQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuart', () => {
		expect( easing.easeOutQuart( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutQuart( 0.5 ) ).toBeCloseTo( 0.9375 )
		expect( easing.easeOutQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutQuart', () => {
		expect( easing.easeInOutQuart( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutQuart( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( easing.easeInOutQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuint', () => {
		expect( easing.easeInQuint( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInQuint( 0.5 ) ).toBeCloseTo( 0.03125 )
		expect( easing.easeInQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuint', () => {
		expect( easing.easeOutQuint( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutQuint( 0.5 ) ).toBeCloseTo( 0.96875 )
		expect( easing.easeOutQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutQuint', () => {
		expect( easing.easeInOutQuint( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutQuint( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( easing.easeInOutQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInSine', () => {
		expect( easing.easeInSine( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInSine( 0.5 ) ).toBeCloseTo( 1 - Math.cos( Math.PI / 4 ) )
		expect( easing.easeInSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutSine', () => {
		expect( easing.easeOutSine( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutSine( 0.5 ) ).toBeCloseTo( Math.sin( Math.PI / 4 ) )
		expect( easing.easeOutSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutSine', () => {
		expect( easing.easeInOutSine( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutSine( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( easing.easeInOutSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInExpo', () => {
		expect( easing.easeInExpo( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInExpo( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutExpo', () => {
		expect( easing.easeOutExpo( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutExpo( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutExpo', () => {
		expect( easing.easeInOutExpo( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutExpo( 1 ) ).toBeCloseTo( 1 )
		expect( easing.easeInOutExpo( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( easing.easeInOutExpo( 0.3 ) ).toBeCloseTo( 0.03125 )
	} )

	it( 'easeInCirc', () => {
		expect( easing.easeInCirc( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutCirc', () => {
		expect( easing.easeOutCirc( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutCirc', () => {
		expect( easing.easeInOutCirc( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutCirc( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( easing.easeInOutCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInBack', () => {
		expect( easing.easeInBack( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutBack', () => {
		expect( easing.easeOutBack( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutBack', () => {
		expect( easing.easeInOutBack( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInElastic', () => {
		expect( easing.easeInElastic( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInElastic( 0.5 ) ).toBeCloseTo( -4.403008748925139e-17 )
		expect( easing.easeInElastic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutElastic', () => {
		expect( easing.easeOutElastic( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutElastic( 0.2 ) ).toBeCloseTo( 1.25 )
		expect( easing.easeOutElastic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutElastic', () => {
		expect( easing.easeInOutElastic( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutElastic( 0.2 ) ).toBeCloseTo( -0.0078125 )
		expect( easing.easeInOutElastic( 1 ) ).toBeCloseTo( 1 )
		expect( easing.easeInOutElastic( 2 ) ).toBeCloseTo( 1.0000000004656613 )
	} )

	it( 'easeOutBounce', () => {
		expect( easing.easeOutBounce( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeOutBounce( 0.5 ) ).toBeCloseTo( 0.765625 )
		expect( easing.easeOutBounce( 0.8 ) ).toBeCloseTo( 0.94 )
		expect( easing.easeOutBounce( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInBounce', () => {
		expect( easing.easeInBounce( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInBounce( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutBounce', () => {
		expect( easing.easeInOutBounce( 0 ) ).toBeCloseTo( 0 )
		expect( easing.easeInOutBounce( 1 ) ).toBeCloseTo( 1 )
		expect( easing.easeInOutBounce( 0.5 ) ).toBeCloseTo( 0.5 )
	} )

} )