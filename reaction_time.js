{
    function simulateMouseClick(targetNode) { // https://stackoverflow.com/questions/24025165/simulating-a-mousedown-click-mouseup-sequence-in-tampermonkey
        function triggerMouseEvent(targetNode, eventType) {
            var clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent(eventType, true, true);
            targetNode.dispatchEvent(clickEvent);
        }
        ["mouseover", "mousedown", "mouseup", "click"].forEach(function(eventType) { 
            triggerMouseEvent(targetNode, eventType);
        });
    }
    setInterval(() => {
        var obj = document.getElementsByClassName('view-go')[0];
        if (obj) {
            simulateMouseClick(obj)
        }
    }, 1);
}

// Paste to console, press start and hover over the field with your mouse.