namespace progressAnimation{


export function progress_bar (ledsayisi: number, sira: number, durum: boolean):void {
    if (durum) {
        for (let satir = 0; satir <= 4; satir++) {
            for (let sutun = 0; sutun <= ledsayisi - 1; sutun++) {
                led.plot(satir, sutun + sira)
                for (let index = 0; index <= 50; index++) {
                    led.setBrightness(index * 4 + 55)
                    basic.pause(10)
                }
                led.setBrightness(55)
            }
        }
        for (let index = 0; index < 4; index++) {
            led.enable(false)
            basic.pause(100)
            led.enable(true)
            basic.pause(100)
        }
        led.setBrightness(255)
    }
    basic.pause(500)
    basic.clearScreen()
}





}