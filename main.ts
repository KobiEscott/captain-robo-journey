function QuestionSix () {
    CountDown()
    TurnRight()
    basic.pause(250)
    Forward()
    basic.pause(1000)
    Stop()
    music.playTone(440, music.beat(BeatFraction.Double))
    basic.pause(1000)
    TurnLeft()
    basic.pause(250)
    Forward()
    basic.pause(500)
    Stop()
    for (let index = 0; index < 4; index++) {
        TopLights(100)
        FrontLights(100)
    }
}
function FrontLights (pause2: number) {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 0, 67)
    basic.pause(pause2)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 67)
    basic.pause(pause2)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 67)
    basic.pause(pause2)
}
function QuestionThree () {
    CountDown()
    TurnLeft()
    basic.pause(150)
    Forward()
    basic.pause(1400)
    Stop()
    music.playTone(440, music.beat(BeatFraction.Double))
    basic.pause(1000)
    TurnRight()
    basic.pause(500)
    Forward()
    basic.pause(1000)
    Stop()
    for (let index = 0; index < 4; index++) {
        TopLights(100)
        FrontLights(100)
    }
}
function QuestionFive () {
    CountDown()
    TurnRight()
    basic.pause(350)
    Forward()
    basic.pause(500)
    Stop()
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.pause(1000)
    TurnLeft()
    basic.pause(800)
    Forward()
    basic.pause(400)
    Stop()
    for (let index = 0; index < 4; index++) {
        TopLights(100)
        FrontLights(100)
    }
}
function QuestionFour () {
    CountDown()
    Forward()
    basic.pause(1200)
    Stop()
    music.playTone(494, music.beat(BeatFraction.Double))
    basic.pause(1000)
    TurnLeft()
    basic.pause(250)
    Forward()
    basic.pause(1200)
    Stop()
    for (let index = 0; index < 4; index++) {
        TopLights(100)
        FrontLights(100)
    }
}
function Forward () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 40, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 42, 67)
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
    for (let index = 0; index < 4; index++) {
        TopLights(100)
        FrontLights(100)
    }
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
    basic.pause(150)
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
    for (let index = 0; index < 4; index++) {
        TopLights(100)
        FrontLights(100)
    }
}
function FinalQuestion () {
    CountDown()
    music.playTone(440, music.beat(BeatFraction.Double))
    for (let index = 0; index < 4; index++) {
        TopLights(100)
        FrontLights(100)
    }
    music.playMelody("E D G F B A C5 B ", 120)
    music.playMelody("F G A G B A B C5 ", 120)
}
function CountDown () {
    count = 9
    while (count > 0) {
        basic.showNumber(count)
        music.playTone(349, music.beat(BeatFraction.Half))
        basic.pause(200)
        count += 0 - 1
    }
    music.playMelody("E B C5 A B G A F ", 120)
    basic.showIcon(IconNames.Heart)
}
function TopLights (pause23: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(pause23)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(pause23)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(pause23)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(pause23)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(pause23)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(pause23)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(pause23)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
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
for (let index = 0; index < 4; index++) {
    TopLights(100)
    FrontLights(100)
}
Forward()
basic.pause(500)
Stop()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionOne()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionTwo()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionThree()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionFour()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionFive()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
QuestionSix()
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
FinalQuestion()
