const form = document.querySelector("#form");
const name = document.querySelector("#name");
const selectOptions = document.querySelector(".options");
const sa = document.querySelector("#sabeque");
const submit = document.querySelector("#btn");


const validateForm ={

    name:false,
    selectOptions:false,
    sa:false,
}

form.addEventListener("submit",(e)=>{
e.preventDefault ()

})

name.addEventListener('change',(e)=>{
    if (e.target.value.trim().length > 0) validateForm.name = true
})

selectOptions.addEventListener('change',(e)=>{
    if(e.target.value == "true") validateForm.selectOptions = true
})




