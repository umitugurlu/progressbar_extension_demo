//% color="#9C27B0" weight=100 icon="\uf110"

namespace progressAnimation{
    
    
    //% blockId=progressAnimationLoading
    //% block="progressBar LedSayisi = $ledsayisi, LedSirasi =  $sira, Durum = $durum"
    
    //% ledsayisi.defl=3  sira.defl=1
    //% durum.defl=true
    //% ledsayisi.min=1 ledsayisi.max=5
    //% sira.min=0 sira.max=4
    //% color="#FF5733" 





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