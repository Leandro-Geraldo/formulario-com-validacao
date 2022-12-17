const campoInput = document.querySelectorAll(".input")
const btnSubmit = document.querySelector(".submit")

btnSubmit.addEventListener('click', (event)=>{
  event.preventDefault()

  campoInput.forEach(input =>{
    if (input.value !== '') {
      input.parentElement.classList.remove('span-error')
      input.classList.remove('error')

    }else{
      input.parentElement.classList.add('span-error')
      input.classList.add('error')
    }
  })
})

campoInput.forEach(input => {
    input.addEventListener('change', () => {
      if (input.value !== "") {
        input.classList.add('preenchido')
        input.parentElement.classList.remove('span-error')
      }
      else {
        input.classList.remove('preenchido')
      }
    })
  })
