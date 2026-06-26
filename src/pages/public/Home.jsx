import React from 'react'
import Transition from '../../components/animations/Transition'
import Marquee from '../../components/animations/Marquee'
import TypeText from '../../components/animations/TypeText'

function Home() {
  return (
    <Transition>
<div className='relative h-[90vh] w-full'>

        <div className='flex'>
          <h1 className='text-9xl font-semibold'>D</h1>
          <TypeText 
          className='text-9xl'
          text={["eveloper", "esigner"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            />
        </div>

      <div className='mt-[55vh]'>
        <Marquee
          texts={['Design Design', 'Developer Developer']} 
          velocity={50}
          className="custom-scroll-text"
          numCopies={6}
          damping={50}
          stiffness={400}
          />
        </div>

</div>
    </Transition>
  )
}

export default Home