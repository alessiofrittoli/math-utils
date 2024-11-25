export type IntEnumerate<
	N extends number,
	Acc extends number[] = []
> = (
	Acc[ 'length' ] extends N ?
	Acc[ number ] :
	IntEnumerate<N, [ ...Acc, Acc[ 'length' ] ]>
)

/**
 * @link [StackOverflow Topic #39494689](https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range#39495173)
 * 
 */
export type IntRange<F extends number, T extends number> = Exclude<IntEnumerate<T>, IntEnumerate<F>>


export interface Vector2<X = number, Y = X>
{
	x: X
	y: Y
}


export interface Vector3<X = number, Y = X, Z = X> extends Vector2<X, Y>
{
	z: Z
}