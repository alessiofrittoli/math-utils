import { Easings, easeOutCirc, lerp } from '@/interpolation'


describe( 'easeOutCirc', () => {

	it( 'handles full range of input values', () => {
		expect( easeOutCirc( 0 ) ).toBe( 0 )
		expect( easeOutCirc( 0.25 ) ).toBe( 0.8267972847076845 )
		expect( easeOutCirc( 0.5 ) ).toBe( 0.9682458365518543 )
		expect( easeOutCirc( 1 ) ).toBe( 1 )
	} )

	it( 'handles intermediate values', () => {
		expect( easeOutCirc( 0.75 ) ).toBe( 0.998044963916957 )
	} )

} )


describe( 'lerp', () => {

	it( 'interpolates at the ends', () => {
		expect( lerp( 0, 10, 0 ) ).toBe( 0 )
		expect( lerp( 0, 10, 1 ) ).toBe( 10 )
	} )


	it( 'interpolates at the midpoint', () => {
		expect( lerp( 0, 10, 0.5 ) ).toBe( 5 )
	} )


	it( 'interpolates at other values of `t`', () => {
		expect( lerp( 5, 15, 0.25 ) ).toBe( 7.5 )
		expect( lerp( 100, 200, 0.75 ) ).toBe( 175 )
	} )

} )


describe( 'Easings', () => {

	it( 'linear', () => {
		expect( Easings.linear( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.linear( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easings.linear( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuad', () => {
		expect( Easings.easeInQuad( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInQuad( 0.5 )).toBeCloseTo( 0.25 )
		expect( Easings.easeInQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuad', () => {
		expect( Easings.easeOutQuad( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutQuad( 0.5 ) ).toBeCloseTo( 0.75 )
		expect( Easings.easeOutQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it('easeInOutQuad', () => {
		expect( Easings.easeInOutQuad( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutQuad( 0.25 ) ).toBeCloseTo( 0.125 )
		expect( Easings.easeInOutQuad( 0.5 ) ).toBeCloseTo( 0.5)
		expect( Easings.easeInOutQuad( 0.75 ) ).toBeCloseTo( 0.875 )
		expect( Easings.easeInOutQuad( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInCubic', () => {
		expect( Easings.easeInCubic( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInCubic( 0.5 ) ).toBeCloseTo( 0.125 )
		expect( Easings.easeInCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutCubic', () => {
		expect( Easings.easeOutCubic( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutCubic( 0.5 ) ).toBeCloseTo( 0.875 )
		expect( Easings.easeOutCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutCubic', () => {
		expect( Easings.easeInOutCubic( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutCubic( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easings.easeInOutCubic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuart', () => {
		expect( Easings.easeInQuart( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInQuart( 0.5 ) ).toBeCloseTo( 0.0625 )
		expect( Easings.easeInQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuart', () => {
		expect( Easings.easeOutQuart( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutQuart( 0.5 ) ).toBeCloseTo( 0.9375 )
		expect( Easings.easeOutQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutQuart', () => {
		expect( Easings.easeInOutQuart( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutQuart( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easings.easeInOutQuart( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInQuint', () => {
		expect( Easings.easeInQuint( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInQuint( 0.5 ) ).toBeCloseTo( 0.03125 )
		expect( Easings.easeInQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutQuint', () => {
		expect( Easings.easeOutQuint( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutQuint( 0.5 ) ).toBeCloseTo( 0.96875 )
		expect( Easings.easeOutQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutQuint', () => {
		expect( Easings.easeInOutQuint( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutQuint( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easings.easeInOutQuint( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInSine', () => {
		expect( Easings.easeInSine( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInSine( 0.5 ) ).toBeCloseTo( 1 - Math.cos( Math.PI / 4 ) )
		expect( Easings.easeInSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutSine', () => {
		expect( Easings.easeOutSine( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutSine( 0.5 ) ).toBeCloseTo( Math.sin( Math.PI / 4 ) )
		expect( Easings.easeOutSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutSine', () => {
		expect( Easings.easeInOutSine( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutSine( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easings.easeInOutSine( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInExpo', () => {
		expect( Easings.easeInExpo( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInExpo( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutExpo', () => {
		expect( Easings.easeOutExpo( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutExpo( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutExpo', () => {
		expect( Easings.easeInOutExpo( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutExpo( 1 ) ).toBeCloseTo( 1 )
		expect( Easings.easeInOutExpo( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easings.easeInOutExpo( 0.3 ) ).toBeCloseTo( 0.03125 )
	} )

	it( 'easeInCirc', () => {
		expect( Easings.easeInCirc( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutCirc', () => {
		expect( Easings.easeOutCirc( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutCirc', () => {
		expect( Easings.easeInOutCirc( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutCirc( 0.5 ) ).toBeCloseTo( 0.5 )
		expect( Easings.easeInOutCirc( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInBack', () => {
		expect( Easings.easeInBack( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutBack', () => {
		expect( Easings.easeOutBack( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutBack', () => {
		expect( Easings.easeInOutBack( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutBack( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInElastic', () => {
		expect( Easings.easeInElastic( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInElastic( 0.5 ) ).toBeCloseTo( -4.403008748925139e-17 )
		expect( Easings.easeInElastic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeOutElastic', () => {
		expect( Easings.easeOutElastic( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutElastic( 0.2 ) ).toBeCloseTo( 1.25 )
		expect( Easings.easeOutElastic( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutElastic', () => {
		expect( Easings.easeInOutElastic( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutElastic( 0.2 ) ).toBeCloseTo( -0.0078125 )
		expect( Easings.easeInOutElastic( 1 ) ).toBeCloseTo( 1 )
		expect( Easings.easeInOutElastic( 2 ) ).toBeCloseTo( 1.0000000004656613 )
	} )

	it( 'easeOutBounce', () => {
		expect( Easings.easeOutBounce( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeOutBounce( 0.5 ) ).toBeCloseTo( 0.765625 )
		expect( Easings.easeOutBounce( 0.8 ) ).toBeCloseTo( 0.94 )
		expect( Easings.easeOutBounce( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInBounce', () => {
		expect( Easings.easeInBounce( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInBounce( 1 ) ).toBeCloseTo( 1 )
	} )

	it( 'easeInOutBounce', () => {
		expect( Easings.easeInOutBounce( 0 ) ).toBeCloseTo( 0 )
		expect( Easings.easeInOutBounce( 1 ) ).toBeCloseTo( 1 )
		expect( Easings.easeInOutBounce( 0.5 ) ).toBeCloseTo( 0.5 )
	} )

} )