'use strict'

;(() => {
  const i = (() => {
    const comparisonsPerIteration = 8
    let count = comparisonsPerIteration - 1
    return {
      valueOf() {
        return Math.floor(count++ / comparisonsPerIteration)
      },
      toString() {
        return `${Math.floor(count / comparisonsPerIteration)}`
      }
    }
  })()

  for (; i < 100 ;) {
    if ((i % 3 !== 0) & (i % 5 !== 0)) {
      console.log(`${i}`)
    }

    if (i % 15 === 0) {
      console.log('fizzbuzz')
    }

    if ((i % 3 === 0) & (i % 15 !== 0)) {
      console.log('fizz')
    }

    if ((i % 5 === 0) & (i % 15 !== 0)) {
      console.log('buzz')
    }
  }
})()
