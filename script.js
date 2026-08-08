/* =========================================
   やがあげクン公式サイト
   script.js
========================================= */


/* ---------- ページ読み込み ---------- */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ---------- スムーズスクロール ---------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ---------- スクロールフェードイン ---------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(

".event, .menu-card, .access, .message"

).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* ---------- 商品カードを順番に表示 ---------- */

document.querySelectorAll(".menu-card").forEach((card,index)=>{

    card.style.transitionDelay = `${index * 0.15}s`;

});


/* ---------- 商品カードクリック ---------- */

document.querySelectorAll(".menu-card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(0.97)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:180

        });

    });

});


/* ---------- タイトルを順番に表示 ---------- */

const title = document.querySelector(".hero h1");

if(title){

    const text = title.textContent;

    title.textContent = "";

    let i = 0;

    const timer = setInterval(()=>{

        title.textContent += text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },90);

}


/* ---------- フッターの年 ---------- */

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =

    `© ${new Date().getFullYear()} やがあげクン`;

}


/* ---------- ページトップへ戻る ---------- */

const topButton = document.createElement("button");

topButton.className = "to-top-btn";
topButton.type = "button";
topButton.setAttribute("aria-label", "ページトップへ戻る");

topButton.innerHTML =
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>`;

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    topButton.classList.toggle("is-visible", window.scrollY > 500);

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ---------- コンソールメッセージ ---------- */

console.log("🍗 やがあげクン公式サイトへようこそ！");