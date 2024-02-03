import './style.css'

import React from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
interface SoundButtonProps {
  soundFile: string
  title: string
  icon: string
}

const SoundButton: React.FC<SoundButtonProps> = ({
  soundFile,
  title,
  icon,
}) => {
  const { play, stop, playing, load } = useAudioPlayer()

  const handleClick = () => {
    load(soundFile)
    if (playing) {
      stop()
    } else {
      play() // передаем файл для воспроизведения
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <button
      className="button-83"
      role="button"
      onClick={handleClick}
      disabled={playing}>
      <img src={icon} alt="" />
      {title}
    </button>
  )
}

export default SoundButton
