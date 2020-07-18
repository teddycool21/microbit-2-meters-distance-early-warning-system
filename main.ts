radio.onReceivedString(function (receivedString) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -65) {
        basic.showIcon(IconNames.No)
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
