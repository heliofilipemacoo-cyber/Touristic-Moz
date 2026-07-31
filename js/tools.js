// Todas as utilidades do site devem ser colocadas aqui, para que possam ser reutilizadas em qualquer página do site.

// Const
const fastNaving = document.querySelector(".fastNaving");
const dev_message = document.querySelector(".dev_message");
const readMore_list = document.querySelectorAll(".readMore");
const plus_content_list = document.querySelectorAll(".plus_content");

// Tool Funcs
/**
* @param {number} min 
* @param {number} max
*/
function randint(min, max){return Math.floor(Math.random()*(max - min + 1)) + min}




window.addEventListener(
    "scroll",
    function () {
        if (window.scrollY >= document.querySelector(".pageNav").scrollHeight && window.scrollY <= document.querySelector("main").scrollHeight) {
            fastNaving.classList.add("showShortCut");
        } else {
            fastNaving.classList.remove("showShortCut");
        }
    }
)

function showDevMessage() {
    const popup = document.createElement("div");
    popup.innerHTML = `
    <div class="dev_message_popUp">
        <div class="dev_message_popUp_content">
            <h2>Fassanos desenvolver mais!</h2>
            
            <p>Com o seu <strong>FeedBack</strong>, podemos desenvolver e melhorar o site.</p>
            <br> 
            
            <i>Icon de construtor</i>
            
            <br><br>
            <p>Fale conosco, e com isso ajudenos a <strong>desenvolver</strong>, <strong>melhorar</strong> e <strong>inovar</strong>!</p>
            <i>Nao pedimos dinhero, apenas a sua opniao</i>
        </div>
        <div class="popup_buttons">
        <button id="dev_message_button_exit" style="border-bottom-left-radius: 18px;">Fechar</button>
        <a href="/paginas/givingFeedback.html"><button id="dev_message_button_go" style="border-bottom-right-radius: 18px;">Avancar</button></a>
        </div>
    </div>
    `;

    document.body.appendChild(popup);
    document.getElementById("dev_message_button_exit").addEventListener('click', function () {
        document.body.removeChild(popup);  
    });
}

dev_message.addEventListener('click', function () {
        showDevMessage();
        dev_message.classList.remove("showMessage");
    })

const intervalo = setInterval(() => {
    dev_message.classList.add("showMessage");
},  randint(5, 10) * 60 * 10);

function toggleShow(index) {
    index--;
    if (plus_content_list[index].classList.contains("show")) {
        plus_content_list[index].classList.remove("show");
        readMore_list[index].innerHTML = "<span>Read more +</span>";
    } else {
        plus_content_list[index].classList.add("show");
        readMore_list[index].innerHTML = "<span>Read less -</span>";
    }
}