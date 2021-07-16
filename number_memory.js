{
    var al = false
    var done = false
    var num = -1
    setInterval(() => {
        if (document.getElementsByClassName('big-number ')[0]) {
            num = parseInt(document.getElementsByClassName('big-number ')[0].innerHTML)
            done = true
        } else if (done) {
            done = false
            if (!al) {
                if(document.getElementById('resnum')) {
                    document.getElementById('resnum').remove()
                }
                const resnum = document.createElement('h1')
                resnum.id = 'resnum'
                resnum.innerHTML = num
                resnum.style.top = '10%'
                resnum.style.left = '50%'
                resnum.style.position = 'fixed'
                resnum.style.color = 'red'
                resnum.style.padding = '10px'
                resnum.style.border = '5px solid red'
                resnum.style.zIndex = 10000
                document.getElementById('root').insertBefore(resnum, document.getElementById('root').firstChild)
            } else {
                alert(num)
            }
        }
    }, 10)
}

// Paste the code, click on start, switch to the console and execute it immediately.