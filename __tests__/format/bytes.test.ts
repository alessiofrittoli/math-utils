import { formatBytes } from '@/format/bytes'

describe( 'formatByteSize', () => {

	it( 'returns formatted bytes string', () => {

		const tests = [
			{
				input	: 999,
				output	: '999 bytes',
			},
			{
				input	: 1024,
				output	: '1.024 KB',
			},
			{
				input	: 1_000_000,
				output	: '1 MB',
			},
			{
				input	: 1_000_000_000,
				output	: '1 GB',
			},
			{
				input	: 1_000_000_000_000,
				output	: '1 TB',
			},
			{
				input	: 1_000_000_000_000_000,
				output	: '1 PB',
			},
		]

		tests.map( test => {
			expect( formatBytes( test.input ) )
				.toBe( test.output )
		} )

	} )


	it( 'returns formatted bit string', () => {

		const tests = [
			{
				input	: 124,
				output	: '992 bits',
			},
			{
				input	: 125,
				output	: '1 Kb',
			},
			{
				input	: 12.5e+4,
				output	: '1 Mb',
			},
			{
				input	: 1.25e+8,
				output	: '1 Gb',
			},
			{
				input	: 1.25e+11,
				output	: '1 Tb',
			},
			{
				input	: 1.25e+14,
				output	: '1 Pb',
			},
		]

		tests.map( test => {
			expect( formatBytes( test.input, true ) )
				.toBe( test.output )
		} )

	} )

} )