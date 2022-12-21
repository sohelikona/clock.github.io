// setInterval(setClock, 1000)

// const hourhand = document.querySelector('[data-hour-hand]')
// const minutehand = document.querySelector('[data-minute-hand]')
// const secondhand = document.querySelector('[data-second-hand]')

// function setClock() {
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secondsRatio + currentDate.getminutes()) / 60
//     const hoursRatio = (minutesRatio + currentDate.gethours()) / 12
//     setRotation(secondhand, secondsRatio)
//     setRotation(minutehand, minutesRatio)
//     setRotation(hourhand, hoursRatio)
// }

// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()





setInterval(setClock, 1000)


const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')



function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}


setClock()