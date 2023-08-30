"use strict"

const shareBtn = document.querySelector(".share-btn")
const interact = document.querySelector(".interact")
const icons = document.querySelector(".icons")


shareBtn.addEventListener("click", ()=>{
    interact.classList.toggle("clicked")
})