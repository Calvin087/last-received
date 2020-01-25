(function () {
    const form = document.querySelector("#message-form")

    form.addEventListener('submit', function(e) {

        // stops default being submitted
        e.preventDefault() 

        const message = document.querySelector("#message")
        const feedback = document.querySelector(".feedback")
        const messageContent = document.querySelector(".message-content")

        // If the input is empty, add a class that displays a hidden message for 2 secons.
        if(message.vale === '') {
            feedback.classList.add('show')
            setTimeout(function () {
                feedback.classList.remove('show')
            }, 2000)
        } else {
            // changes message content then resets the input box value.
            messageContent.textContent = message.value
            message.vale = ''
        }

    })


})()