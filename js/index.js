// Index JavaScript

const fastNaving = document.querySelector(".fastNaving");
const dev_message = document.querySelector(".dev_message");
window.addEventListener(
    "scroll",
    function () {
        if (window.scrollY >= document.querySelector(".pageNav").scrollHeight && window.scrollY <= document.querySelector("main").scrollHeight) {
            fastNaving.classList.add("showShortCut");
            dev_message.classList.add("showMessage");
        } else {
            fastNaving.classList.remove("showShortCut");
            dev_message.classList.remove("showMessage");
        }
    }
)

const readMore_list = document.querySelectorAll(".readMore");
const plus_content_list = document.querySelectorAll(".plus_content");

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

// const body = document.querySelector("body");
// body.innerHTML += `
//     <a>
//         <div class="dev_message">
//             MESSAGE
//         </div>
//     </a>
// `;
