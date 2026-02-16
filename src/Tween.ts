import { lerp } from '@/interpolation'
import { Easing, type EasingFn } from '@/easing'


/**
 * Callback executed on each interpolation tick.
 * 
 * @param value The current interpolated value.
 */
export type TickHandler = ( value: number ) => void


interface TweenBaseOptions
{
	/**
	 * Initial value of the interpolation.
	 * 
	 */
	from: number
	/**
	 * Duration of the tween in milliseconds.
	 *
	 * @default 200
	 */
	duration?: number
	/**
	 * Callback executed on each interpolation tick.
	 * 
	 */
	onTick: TickHandler
	/**
	 * Easing function used to transform the linear time progression.
	 *
	 * @default Easing.linear
	 */
	easing?: EasingFn
	/**
	 * Callback executed when the interpolation completes.
	 * 
	 */
	onEnd?: TickHandler
}


/**
 * Defines customization options required by `Tween.to()` method.
 * 
 */
export type TweenOptions = TweenBaseOptions & (
	| {
		/**
		 * Custom tick rate in Hz.
		 *
		 * When `strategy` is set to `timer`, ticks are driven by a timer
		 * and will continue running even if the document is not visible.
		 *
		 * @default 120
		 */
		Hz?: number
		/**
		 * Disables GPU-synchronized updates.
		 *
		 * The tween falls back to a timer-based loop.
		 */
		strategy: 'timer'
	}
	| {
		/**
		 * Not available when GPU synchronization is enabled.
		 * 
		 */
		Hz?: never
		/**
		 * Enables GPU-synchronized updates using `requestAnimationFrame`.
		 *
		 * Note that browsers may pause updates when the document is not visible.
		 */
		strategy?: 'raf'
	}
)


/**
 * Provides interpolation between two numeric values over a given duration.
 * 
 * Supports customizable easing functions and configurable tick strategies
 * (GPU-synchronized or timer-based).
 *
 * @example
 * ```ts
 * const tween = new Tween()
 * 
 * tween.to( 1, {
 *   from       : 0,
 *   duration   : 500,
 *   easing     : Easing.easeInOut,
 *   onTick     : value => console.log( value ),
 *   onEnd      : value => console.log( 'Tween finished at:', value ),
 * } )
 * ```
 */
export class Tween
{
	/**
	 * Indicates whether a tween is currently running.
	 * 
	 */
	private running: boolean
	/**
	 * Internal abort handler for the active tween.
	 * 
	 */
	private setAbort?: () => void
	/**
	 * Default tween duration in milliseconds.
	 * 
	 */
	static Duration = 200


	constructor()
	{
		this.running = false
	}

	
	/**
	 * Interpolates from the specified starting value to the given target value.
	 *
	 * If another tween is already running, it will be automatically aborted.
	 *
	 * @param to      Target value.
	 * @param options Additional tween configuration options. See {@link TweenOptions} for more info.
	 */
	to( to: number, options: TweenOptions )
	{
		const {
			from, duration = Tween.Duration,
			strategy = 'raf', Hz = 120,
			easing = Easing.linear, onTick, onEnd,
		} = options

		if ( duration <= 0 ) {
			onTick( to )
			onEnd?.( to )
			return
		}

		if ( this.running ) this.setAbort?.()

		this.running	= true
		let abort		= false
		this.setAbort	= () => { abort = true }
		const useRAF	= strategy !== 'timer'
		const startTime	= performance.now()

		let frameId: number | undefined

		const tick = ( now: number = performance.now() ) => {

			if ( abort ) {
				if ( useRAF && typeof frameId !== 'undefined' ) {
					cancelAnimationFrame( frameId )
				}
				this.running = false
				return
			}

			/**
			 * Elapsed time since tween started.
			 * 
			 */
			const elapsed = now - startTime
			/**
			 * Time [0-1].
			 * 
			 */
			const time = Math.min( 1, elapsed / duration ) // 0 → 1
			/**
			 * Eased time.
			 * 
			 */
			const eased = easing( time )
			/**
			 * Interpolated value at the current time step.
			 * 
			 */
			const interpolated = lerp( from, to, eased )

			onTick( interpolated )

			if ( time < 1 ) {
				// while time is still available, loop-back.
				if ( useRAF ) {
					frameId = requestAnimationFrame( tick )
					return
				}
				return setTimeout( tick, 1000 / Hz )
			}

			this.running = false
			onEnd?.( interpolated )

		}

		if ( useRAF ) {
			frameId = requestAnimationFrame( tick )
			return
		}

		tick()

	}

}