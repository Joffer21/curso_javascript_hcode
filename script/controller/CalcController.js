class CalcController {

    constructor() {

        this._operation = []
        this._locale = 'pt-PT'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl =  document.querySelector("#data")
        this._timeEl =  document.querySelector("#hora")
        this.currentDate
        this.initialize()
        this.initButtonsEvents()
    }

    /***** Data e Hora *****/

    initialize() {

        this.setDisplayDateTime()

        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)
     }

     addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
     }

     /******* Botões **********/

     clearAll() {
        this._operation = []
     }

     clearEntry() {
        this._operation.pop()
    }

    getlastOperation() {

        return this._operation[this._operation.length-1]
    }

    setLastOperation(value) {
        this._operation[this._operation.length-1] = value
    }

    isOperator(value) {
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1) 
    }

    addOperation(value) {

        if(isNaN(this.getlastOperation())) {

            if(this.isOperator(value)) {

                this.setLastOperation(value)  //Trocar o operador

            } else if(isNaN(value)) {

                  // outra coisa
                  console.log(value)
            } else {

                this._operation.push(value)
            }
              
        } else {
            let newValue = this.getlastOperation().toString() + value.toString()  //Number
            this.setLastOperation(parseInt(newValue))

        this._operation.push(value)
        console.log(this._operation)
    }

     setError() {
        this._displayCalc = 'Error'
    }

     execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll()
                break;
            case 'ce':
                this.clearEntry()
                break;
            case 'soma':
                this.addOperation('+')
                break;
            case 'subtracao':
                this.addOperation('-')
                break;
            case 'divisao':
                this.addOperation('/')
                break;
            case 'multiplicacao':
                this.addOperation('*')
                break;
            case 'porcento':
                this.addOperation('%')
                break;
            case 'igual':
                
                break;
            case 'ponto':
                this.addOperation('.')           
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break;

            default:
                .setError()
                break;
        }
     }

     initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {

                let textBtn = btn.className.baseVal.replace('btn-', '')

                this.execBtn(textBtn)

            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e=> {
                btn.style.cursor = 'pointer'
            })
        })
     }

     setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: "numeric"
        })

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
     }

     /***** Metodos getters e stters ******/

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