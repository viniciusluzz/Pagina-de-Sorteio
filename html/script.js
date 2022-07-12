// CÓDIGO PARA ESTILIZAÇÃO

const borderStyle = function (x) {

    return {
        this: x,
        borderBottomOn: function (y) {
            return this.style.borderColor = "#EBE7D0"
        },
        borderBottomOff: function (y) {
            return this.style.borderColor = "#32CD30"
        }
    }
}

let a = [borderStyle(this)]
let p = a[0]

let l1 = document.getElementsByTagName("a")[0]

l1.onmouseover = p.borderBottomOn
l1.onmouseout = p.borderBottomOff

let l2 = document.getElementsByTagName("a")[1]
         
l2.onmouseover = p.borderBottomOn
l2.onmouseout = p.borderBottomOff
         
let l3 = document.getElementsByTagName("a")[2]
      
l3.onmouseover = p.borderBottomOn
l3.onmouseout = p.borderBottomOff
         
let l4 = document.getElementsByTagName("a")[3]

l4.onmouseover = p.borderBottomOn
l4.onmouseout = p.borderBottomOff

let l5 = document.getElementsByTagName("a")[4]

l5.onmouseover = p.borderBottomOn
l5.onmouseout = p.borderBottomOff








