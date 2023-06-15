function Forward () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 40, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 42, 67)
}
function Colours (pause2: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(pause2)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(pause2)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(pause2)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(pause2)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(pause2)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(pause2)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(pause2)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
}
function TurnLeft () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 20, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 55, 67)
}
function Back () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 35, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 35, 67)
}
function QuestionTwo () {
    CountDown()
    Forward()
    basic.pause(1500)
    Stop()
    music.playTone(494, music.beat(BeatFraction.Double))
    basic.pause(1000)
    Forward()
    basic.pause(700)
    Stop()
}
function Rainbow (pause2: number) {
    strip.showRainbow(1, 360)
    basic.pause(100)
}
function TurnRight () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 55, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 20, 67)
}
function QuestionOne () {
    CountDown()
    TurnRight()
    basic.pause(50)
    Forward()
    basic.pause(1400)
    Stop()
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.pause(1000)
    TurnLeft()
    basic.pause(900)
    Forward()
    basic.pause(200)
    Stop()
}
function CountDown () {
    count = 2
    while (count > 0) {
        basic.showNumber(count)
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(200)
        count += 0 - 1
    }
    music.playMelody("E B C5 A B G A F ", 120)
}
function Stop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 67)
}
let count = 0
let strip: neopixel.Strip = null
PCA9685.init(67, 0)
strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.clear()
Forward()
basic.pause(500)
Stop()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionOne()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionTwo()
