import './App.css'

import React from 'react'

import SoundButton from './components/SoundButton'

function App() {
  return (
    <>
      <h1> Похуинатор</h1>
      <div className="container">
        <SoundButton
          soundFile="/src/sound/first.ogg"
          title={'Пошел'}
          icon={''}
        />
        <SoundButton
          soundFile="/src/sound/two.ogg"
          title={'Пошел-v2'}
          icon={''}
        />
        <SoundButton soundFile="/src/sound/tree.ogg" title={'Бобр'} icon={''} />
      </div>
    </>
  )
}
export default App
