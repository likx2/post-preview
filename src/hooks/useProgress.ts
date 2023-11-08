import React from 'react'

const TIME_INCREMENT_PERCENTAGE = 5
const TIME_INCREMENT_INTERVAL = 300

const useProgress = (isVideo: boolean): [number, (time: number) => void] => {
  const [timePercentage, setTimePercentage] = React.useState(0)

  React.useEffect(() => {
    if (!isVideo) {
      const timer = setInterval(() => {
        setTimePercentage((oldProgress) => {
          if (oldProgress === 100) {
            return 0
          }
          return Math.min(oldProgress + TIME_INCREMENT_PERCENTAGE, 100)
        })
      }, TIME_INCREMENT_INTERVAL)

      return () => {
        clearInterval(timer)
      }
    }
  }, [])

  const onTimeUpdate = (time: number): void => {
    setTimePercentage(time)
  }

  return [timePercentage, onTimeUpdate]
}

export default useProgress
