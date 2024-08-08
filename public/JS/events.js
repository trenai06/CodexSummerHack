events = document.querySelectorAll(".date")

events.forEach((event) => {
    event.addEventListener('click', () => {
        removeActiveClasses()
        event.classList.add('active')
    })
})

function removeActiveClasses(){
    events.forEach(event =>{
        event.classList.remove('active')
    })
}


