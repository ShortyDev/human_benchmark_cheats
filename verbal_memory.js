{
    let oldWord = ""
    let wordList = []
    setInterval(() => {
        if (oldWord != document.getElementsByClassName("word")[0].innerHTML) {
            oldWord = document.getElementsByClassName("word")[0].innerHTML
            if (wordList.some(o => o === document.getElementsByClassName("word")[0].innerHTML)) {
                document.getElementsByClassName('e19owgy710')[0].click()
            } else {
                document.getElementsByClassName('e19owgy710')[1].click()
            }
            wordList.push(oldWord)
        }
    }, 1000)
}

// Paste into console when started