import './App.css'

import React from 'react'

import SoundButton from './components/SoundButton'

function App() {
  return (
    <>
      <h1> Похуинатор</h1>
      <div className="container">
        <SoundButton soundFile="/sound/first.wav" title={'Пошел'} icon={''} />
        <SoundButton soundFile="/sound/two.wav" title={'Пошел-v2'} icon={''} />
        <SoundButton soundFile="/sound/tree.wav" title={'Бобр'} icon={''} />
      </div>
    </>
  )
}
export default App
