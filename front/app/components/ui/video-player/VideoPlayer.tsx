import { FC, useRef, useState } from 'react'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'
import { useOnClickOutside } from '@/hooks/useOutside'

import styles from './VideoPlayer.module.scss'
import cn from 'classnames'
import { useAuth } from '@/hooks/useAuth'
import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import AntIcon from '../AntIcon'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
	const [show, setIsShow] = useState(false)

	const inputRef = useRef<HTMLButtonElement>(null)

	const {
		videoRef,
		fullScreen,
		revert,
		forward,
		toggleVideo,
		isPlaying,
		currentTime,
		progress,
		videoTime,
		changeVolume,
		volume,
	} = useVideo()

	const { user } = useAuth()

	useOnClickOutside(inputRef, () => setIsShow(false))

	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user,
			})}
		>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						src={`${videoSource}#t=8`}
						preload='metadata'
						onClick={toggleVideo}
					/>
					<div className={styles.progressBarContainer}>
						<div
							style={{ width: `${progress}%` }}
							className={styles.progressBar}
						></div>
					</div>

					<div className={styles.controls}>
						<div className={styles.left}>
							<button onClick={revert}>
								<AntIcon name='AiOutlineFastBackward' />
							</button>

							<button onClick={toggleVideo} className={styles.playButton}>
								<AntIcon
									name={isPlaying ? 'AiOutlinePauseCircle' : 'AiFillPlayCircle'}
								/>
							</button>

							<button onClick={forward}>
								<AntIcon name='AiOutlineFastForward' />
							</button>

							<button onClick={() => setIsShow(!show)} ref={inputRef}>
								<AntIcon
									name={volume === 0 ? 'AiOutlineAudioMuted' : 'AiFillSound'}
								/>
								<input
									type='range'
									onChange={e => changeVolume(e)}
									className={cn(styles.input_volume, {
										[styles.input_volume_active]: show,
									})}
								></input>
							</button>

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(currentTime / 60) +
										':' +
										('0' + Math.floor(currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(videoTime / 60) +
										':' +
										('0' + Math.floor(videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>
						<div>
							<button onClick={fullScreen}>
								<AntIcon name='AiOutlineFullscreen' />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	)
}

export default VideoPlayer
