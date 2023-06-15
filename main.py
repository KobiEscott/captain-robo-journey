def Forward():
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED2, 40, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED4, 42, 67)
def Colours(pause2: number):
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(pause2)
    strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    basic.pause(pause2)
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    basic.pause(pause2)
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(pause2)
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    basic.pause(pause2)
    strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))
    basic.pause(pause2)
    strip.show_color(neopixel.colors(NeoPixelColors.VIOLET))
    basic.pause(pause2)
    strip.show_color(neopixel.colors(NeoPixelColors.PURPLE))
def TurnLeft():
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED2, 20, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED4, 55, 67)

def on_button_pressed_a():
    QuestionTwo()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Back():
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED1, 100, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED2, 35, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED3, 100, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED4, 35, 67)
def QuestionTwo():
    CountDown()
    Forward()
    basic.pause(1500)
    Stop()
    music.play_tone(494, music.beat(BeatFraction.DOUBLE))
    basic.pause(1000)
    Forward()
    basic.pause(700)
    Stop()
def Rainbow(pause22: number):
    strip.show_rainbow(1, 360)
    basic.pause(100)
def TurnRight():
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED2, 55, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED4, 20, 67)
def QuestionOne():
    CountDown()
    TurnRight()
    basic.pause(50)
    Forward()
    basic.pause(1400)
    Stop()
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    basic.pause(1000)
    TurnLeft()
    basic.pause(900)
    Forward()
    basic.pause(200)
    Stop()
def CountDown():
    global count
    count = 2
    while count > 0:
        basic.show_number(count)
        music.play_tone(349, music.beat(BeatFraction.HALF))
        basic.pause(200)
        count += 0 - 1
    music.play_melody("E B C5 A B G A F ", 120)
def Stop():
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED1, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED2, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED3, 0, 67)
    PCA9685.set_led_duty_cycle(PCA9685.LEDNum.LED4, 0, 67)
count = 0
strip: neopixel.Strip = None
PCA9685.init(67, 0)
strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.clear()