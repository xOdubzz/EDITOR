const text = document.getElementById("text")
const view = document.getElementById("view")

const update=()=>{
    view.srcdoc = text.value;
    console.log(text.value);
}