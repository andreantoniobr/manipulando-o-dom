// Buttons
const btnTrocarTexto = document.getElementById("btnTrocarTexto");
const btnMudarCor = document.getElementById("btnMudarCor");
const btnToggle = document.getElementById("btnToggle");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnTheme = document.getElementById("btnTheme");
const btnThemeIcon = document.getElementById("btnThemeIcon");
const btnWrite = document.getElementById("btnWrite");
const btnRemove = '<a class="btn btn-remove"><i class="bi bi-trash"></i></a>';

// Selecionando elementos
const containerText = document.getElementById("container-text");
const textTags = containerText.getElementsByTagName("h1");
const write = document.getElementById("write");
const writeBox = document.getElementById("write-box");

const writeWord = "Write...";
let text = "O texto foi modificado!";
let addedElementsAmount = 0;

// Alterar o texto do parágrafo
btnTrocarTexto.addEventListener("click", () => {    
    changeAllText(text)
});

// Mudar a cor do parágrafo
btnMudarCor.addEventListener("click", () => {
    for(let texTag of textTags) {
        texTag.classList.toggle("destacado"); // Adiciona ou remove a classe
    }    
});

// Esconder/Mostrar o texto
btnToggle.addEventListener("click", () => {
    for(let texTag of textTags) {
        toogleHideElement(texTag);
    }    
    toogleButton(btnToggle, "data-visible", true, btnToggle, "bi-eye", "bi-eye-slash", "Show", "Hide")
});

// Adicionar um novo elemento dinamicamente
btnAdicionar.addEventListener("click", () => {
    let newElement = document.createElement("h1");
    addedElementsAmount++;
    newElement.innerHTML = addedElementsAmount + ' - Novo elemento adicionado!' + btnRemove;
    containerText.appendChild(newElement);
    btns = containerText.querySelectorAll('a');
    addActionToButtons()
});

btnTheme.addEventListener("click", () => {
    const themeElement = document.documentElement;
    const themeAttribute = "data-theme";
    if(themeElement.hasAttribute(themeAttribute)){
        themeElement.removeAttribute(themeAttribute); 
        btnTheme.innerHTML = '<i class="bi bi-brightness-high me-2"></i>Light';

    } else {
        themeElement.setAttribute(themeAttribute, "dark");
        btnTheme.innerHTML = '<i class="bi bi-moon-stars me-2"></i>Dark';
    }
});

/*-----------------------------*/
/*	WRITE INPUT
/*-----------------------------*/
write.addEventListener("focus", () => {
    if(write.value == writeWord) {
        write.value = "";
    }    
});

write.addEventListener("blur", () => {
    if(write.value == "") {
        write.value = writeWord;
    }    
});

write.addEventListener("input", () => {
    changeAllText(write.value);    
});

/*-----------------------------*/
/*	WRITE BUTTON
/*-----------------------------*/
btnWrite.addEventListener("click", () => {
    toogleHideElement(writeBox);
});

/*-----------------------------*/
/*	HELPER FUCTIONS
/*-----------------------------*/
function changeAllText(text){
    for(let texTag of textTags) {
        texTag.innerHTML = text + btnRemove;
    }  
    addActionToButtons()
}

function toogleHideElement(element){
    element.classList.toggle("oculto");
}

function addActionToButtons(){
    const btns = containerText.querySelectorAll('a');
    for(let btn of btns){
        btn.addEventListener('click', function() {
            this.parentNode.remove();
        });
    }
}

function toogleButton(element, attribute, attributeValue, btn, classToAdd1, classToAdd2, text1, text2){
    if(element.hasAttribute(attribute)){
        element.removeAttribute(attribute);
        addIconButton(btn, classToAdd1, text1);     

    } else {
        element.setAttribute(attribute, attributeValue);
        addIconButton(btn, classToAdd2, text2);
    }    
}

function addIconButton(btn, classToAdd, text){
    btn.innerHTML = `<i class="bi ${classToAdd} me-2"></i>${text}`;
}

function addClass(element, classToAdd){
    element.classList.add(classToAdd);
}

function removeClass(element, classToRemove){
    element.classList.remove(classToRemove);
}

/*-----------------------------*/
/*	START JS
/*-----------------------------*/
//Add start actions to remove buttons
addActionToButtons()

//Hide Write Input
toogleHideElement(writeBox);

//Write start Value
write.value = writeWord;