let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
       console.log(menu)
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        menu
        menu.style.height = `${height}px`;

    })
});

let listElementsSegundo= document.querySelectorAll('.list__button--inside-click');

listElementsSegundo.forEach(item=>{
    item.addEventListener('click',()=>{

        item.classList.toggle('desplegar');

        let height = 0;
        let menu = item.nextElementSibling;
       console.log(menu)
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        menu
        menu.style.height = `${height}px`;
    })
});

const btn = document.querySelector("#btn-menu");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".home_content");

btn.onclick = toggleSidebar;

// btn.addEventListener("click", toggleSidebar);

// searchBtn.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("uncollapse");
}