
var linkFeedback = document.querySelector(".feedback-link");
if (linkFeedback) {
    var popupFeedback = document.querySelector(".modal-feedback");
    var close = popupFeedback.querySelector(".close");
    var form = popupFeedback.querySelector(".feedback-form");
    var login = popupFeedback.querySelector("[name = login]"); 
    var email = popupFeedback.querySelector("[name = email]");
    var isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("login");
    } catch (err) {
        isStorageSupport = false;
    }

    linkFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-show");
        popupFeedback.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(evt) {
        if (!login.value || !email.value) {
            evt.preventDefault();
            console.log("Нужно ввести логин и пароль");
            popupFeedback.classList.remove("modal-error");
            popupFeedback.offsetWidth = popupFeedback.offsetWidth;
            popupFeedback.classList.add("modal-error");   
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", login.value);
            }
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popupFeedback.classList.contains("modal-show")) {
                popupFeedback.classList.remove("modal-show");
                popupFeedback.classList.remove("modal-error");
            }
        }
    });
}


var linkMap = document.querySelector(".link-map");
if(linkMap) {
    var popupMap = document.querySelector(".modal-map");
    var closeMap = popupMap.querySelector(".close-map");

    linkMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupMap.classList.add("modal-show");
    });

    closeMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupMap.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        evt.preventDefault();
        if (evt.keyCode === 27) {
            if (popupMap.classList.contains("modal-show")) {
                popupMap.classList.remove("modal-show");
            }
        }
    });
}
    

var linkBookmark = document.querySelectorAll(".bookmark");
if(linkBookmark) {
    var popupCart = document.querySelector(".modal-cart");
    var closeCart = popupCart.querySelector(".close-cart");

    for (var i = 0; i < linkBookmark.length; i++) {
        linkBookmark[i].onclick = function (evt) {
            evt.preventDefault();
            popupCart.classList.add("modal-show");
        };

        closeCart.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupCart.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function (evt) {
         evt.preventDefault();
         if (evt.keyCode === 27) {
             if (popupCart.classList.contains("modal-show")) {
                 popupCart.classList.remove("modal-show");
                }
            }
        });
    }

}


