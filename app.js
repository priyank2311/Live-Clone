let reaction = document.querySelector(".reaction");

let angry = document.querySelector(".angry");

let laugh = document.querySelector(".laugh");

let like = document.querySelector(".like");

let love = document.querySelector(".love");

let love1 = document.querySelector(".love1");

let wow = document.querySelector(".wow");

angry.addEventListener("click", ()=>{
    let createEmoji = document.createElement("img");
    createEmoji.setAttribute("src", "image/angry.png");
    reaction.appendChild(createEmoji);
    createEmoji.classList.add("emoji");
    setTimeout(()=>{
        createEmoji.remove();
    }, 3000);
});
laugh.addEventListener("click", ()=>{
    let createEmoji = document.createElement("img");
    createEmoji.setAttribute("src", "image/laugh.png");
    reaction.appendChild(createEmoji);
    createEmoji.classList.add("emoji");
    setTimeout(()=>{
        createEmoji.remove();
    }, 3000);
});
like.addEventListener("click", ()=>{
    let createEmoji = document.createElement("img");
    createEmoji.setAttribute("src", "image/like.png");
    reaction.appendChild(createEmoji);
    createEmoji.classList.add("emoji");
    setTimeout(()=>{
        createEmoji.remove();
    }, 3000);
});
love.addEventListener("click", ()=>{
    let createEmoji = document.createElement("img");
    createEmoji.setAttribute("src", "image/love.png");
    reaction.appendChild(createEmoji);
    createEmoji.classList.add("emoji");
    setTimeout(()=>{
        createEmoji.remove();
    }, 3000);
});
love1.addEventListener("click", ()=>{
    let createEmoji = document.createElement("img");
    createEmoji.setAttribute("src", "image/love1.png");
    reaction.appendChild(createEmoji);
    createEmoji.classList.add("emoji");
    setTimeout(()=>{
        createEmoji.remove();
    }, 3000);
});
wow.addEventListener("click", ()=>{
    let createEmoji = document.createElement("img");
    createEmoji.setAttribute("src", "image/wow.png");
    reaction.appendChild(createEmoji);
    createEmoji.classList.add("emoji");
    setTimeout(()=>{
        createEmoji.remove();
    }, 3000);
});