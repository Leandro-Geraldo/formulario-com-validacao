const campos = document.querySelectorAll(".inputs")
const campoInput = document.querySelectorAll(".input")
const btnSubmit = document.querySelector(".submit")


btnSubmit.addEventListener("click", (event)=>{
    event.preventDefault()
    
    
    campoInput.forEach(input => {
        campos.forEach( i=>{
            if(input.value === ""){
                input.classList.add("error")
                i.classList.add("span-error")
            }else{
                i.classList.remove("span-error")
                input.classList.remove("error");
            }
        })
    })
})

campoInput.forEach(input => {
    input.addEventListener('change', () => {
      if (input.value !== "") {
        input.classList.add('preenchido')
      }
      else {
        input.classList.remove('preenchido')
      }
    })
  })
