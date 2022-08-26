class CalcController {

    constructor() {

        this._locale = 'pt-PT'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl =  document.querySelector("#data")
        this._timeEl =  document.querySelector("#hora")
        this.currentDate
        this.initialize()
    }

    initialize() {

        this.setDisplayDateTime()

        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)
     }

     setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: "numeric"
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
     }

    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value
    }

    get displauCalc() {
        return this._displayCalcEl.innerHTML
    }

    set displauCalc(value) {
        this._displayCalcEl.innerHTML = value
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(value) {
        this.currentDate = value
    }
    
}