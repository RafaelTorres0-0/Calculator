const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.keys')
const display = document.querySelector('.display')

keys.addEventListener('click', e=>{
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if(!action){
            if(displayedNum === '0' || previousKeyType == 'operator'){
                display.textContent = keyContent
            }else{
                display.textContent = displayedNum + keyContent
            }
        }
        if(action === 'decimal'){
            display.textContent = displayedNum + '.'
        }
        if(action === 'add' ||
           action === 'subtract' ||
           action === 'multiply' ||
           action === 'divide'   
        ){
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }
        if (action === 'calculate'){
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            display.textContent = calculate (firstValue, operator , secondValue)
        }
    }
})

function calculate(f, o, s){
    let result = ''
    if(o === 'add'){
        result = parseFloat(f) + parseFloat(s)
    }else if(o === 'subtract'){
        result = parseFloat(f) - parseFloat(s)
    }else if(o === 'multiply'){
        result = parseFloat(f) * parseFloat(s)
    }else if(o === 'divide'){
        result = parseFloat(f) / parseFloat(s)
    }
    return result
}