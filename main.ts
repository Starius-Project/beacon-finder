radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (next == 0) {
        led.plotBarGraph(
        Math.map(signal, -95, -42, 0, 9),
        9
        )
        if (receivedString == "1") {
            if (signal >= 8) {
                basic.showString("SPECIMEN FOUND")
                next = 1
                basic.showIcon(IconNames.Yes)
            }
        }
    } else if (next == 1) {
        if (receivedString == "2") {
            led.plotBarGraph(
            Math.map(signal, -95, -42, 0, 9),
            9
            )
            if (signal >= 8) {
                radio.sendString("UP")
                basic.showString("FUEL FOUND")
                basic.showIcon(IconNames.Yes)
            }
        }
    }
})
let signal = 0
let next = 0
radio.setGroup(1)
basic.showString("BEACON TRACKER")
next = 0
