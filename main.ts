radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (next == 0) {
        if (receivedString == "1") {
            led.plotBarGraph(
            Math.map(signal, -128, -42, 0, 9),
            9
            )
            if (Math.round(Math.map(signal, -128, -42, 0, 9)) >= 8) {
                basic.showString("SPECIMEN FOUND")
                basic.showIcon(IconNames.Yes)
                basic.pause(1000)
                next = 1
            }
        }
    } else if (next == 1) {
        if (receivedString == "2") {
            led.plotBarGraph(
            Math.map(signal, -95, -42, 0, 9),
            9
            )
            if (Math.round(Math.map(signal, -128, -42, 0, 9)) >= 8) {
                radio.sendNumber(5)
                basic.showString("FUEL FOUND")
                basic.showIcon(IconNames.Yes)
                basic.pause(1000)
                next = 3
            }
        }
    } else if (next == 3) {
        basic.showIcon(IconNames.Heart)
    }
})
let signal = 0
let next = 0
radio.setGroup(1)
basic.showString("BEACON TRACKER")
next = 0
