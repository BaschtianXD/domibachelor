import moment from 'moment'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import Card from './components/Card'

function App(): ReactElement {
  const [atTop, setAtTop] = useState(true)
  const [now, setNow] = useState(moment())

  useEffect(() => {
    var timer = setInterval(() => {
      setNow(moment())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })

  const start = moment([2013, 10, 1])

  const yearDiff = now.diff(start, "year")
  const monthDiff = now.diff(start, "month") % 12
  const dayDiff = now.date() - start.date()
  const hourDiff = now.diff(start, "hour") % 24
  const minuteDiff = now.diff(start, "minute") % 60
  const secondDiff = now.diff(start, "second") % 60

  const getDiff = () => {
    var res = ""
    if (yearDiff > 1) {
      res += yearDiff + " Jahre"
    } else if (yearDiff > 0) {
      res += yearDiff + " Jahr"
    }

    if (monthDiff > 0) {
      if (res !== "") {
        res += ", "
      }
      if (monthDiff > 1) {
        res += monthDiff + " Monate"
      } else {
        res += monthDiff + " Monat"
      }

    }

    if (dayDiff > 0) {
      if (res !== "") {
        res += ", "
      }
      if (dayDiff > 1) {
        res += dayDiff + " Tage"
      } else {
        res += dayDiff + " Tag"
      }
    }

    if (hourDiff > 0) {
      if (res !== "") {
        res += ", "
      }
      if (hourDiff > 1) {
        res += hourDiff + " Stunden"
      } else {
        res += hourDiff + " Stunde"
      }
    }

    if (minuteDiff > 0) {
      if (res !== "") {
        res += ", "
      }
      if (minuteDiff > 1) {
        res += minuteDiff + " Minuten"
      } else {
        res += minuteDiff + " Minute"
      }
    }

    if (secondDiff > 0) {
      if (res !== "") {
        res += ", "
      }
      if (secondDiff > 1) {
        res += secondDiff + " Sekunden"
      } else {
        res += secondDiff + " Sekunde"
      }
    }



    return res
  }


  return (
    <div className='h-full w-full snap-y snap-mandatory overflow-x-hidden select-none' onScroll={event => {
      setAtTop((event.target as any).scrollTop === 0) // TODO remove knaup
    }}>
      <div className='h-screen w-screen flex flex-col p-4 gap-10 overflow-auto justify-center snap-start items-center'>
        <Card>
          <h1 className='text-2xl'>Hat Domi seinen Bachelor?</h1>
          <p className='text-3xl font-extrabold mt-4'>Nein</p>
        </Card>
        <Card>
          <h1 className='text-xl'>Immatrikuliert seit</h1>
          <p className='mt-4'>{getDiff()}</p>
        </Card>
        {atTop ?
          <div className='fixed bottom-4 left-0 flex flex-row justify-center w-full max-h-10 animate-bounce opacity-100 transition-all duration-200'>
            <svg viewBox="0 0 32 32" className='fill-gray-500 h-full w-12'><path d="M14.496 5.975l-.001 14.287-6.366-6.367L6 16.021l10.003 10.004L26 16.029 23.871 13.9l-6.366 6.368V5.977z" /></svg>
          </div>
          :
          <div className='fixed bottom-4 left-0 flex flex-row justify-center w-full max-h-10 animate-bounce opacity-0 transition-all duration-200'>
            <svg viewBox="0 0 32 32" className='fill-gray-500 h-full w-12'><path d="M14.496 5.975l-.001 14.287-6.366-6.367L6 16.021l10.003 10.004L26 16.029 23.871 13.9l-6.366 6.368V5.977z" /></svg>
          </div>
        }

      </div>
      <div className='h-screen w-screen flex flex-col p-4 justify-center gap-10 snap-start items-center'>
        <Card>
          <h1 className='text-2xl'>Dafür hat er aber schon folgendes erreicht...</h1>
        </Card>
      </div>
      <div className='h-screen w-screen flex flex-col p-4 justify-center gap-10 snap-start items-center'>
        <Card>
          <h1 className='text-2xl'>World of Warcraft</h1>
          <p className='text-3xl font-extrabold mt-4'>2x Cutting Edge</p>
        </Card>
      </div>
      <div className='h-screen w-screen flex flex-col p-4 justify-center gap-10 snap-start items-center'>
        <Card>
          <h1 className='text-2xl'>League of Legends</h1>
          <p className='text-3xl font-extrabold mt-4'>6x Gold Solo Queue</p>
        </Card>
      </div>
      <div className='h-screen w-screen flex flex-col p-4 justify-center gap-10 snap-start items-center'>
        <Card>
          <h1 className='text-2xl'>Das war's</h1>
        </Card>
      </div>
    </div>

  )
}

export default App
