//SEARCHBAR START
let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft -= 100;
})
right_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft += 100;
})
// Movies Box Set

const movies = [
        {
            id: 38,
            img: "img/cuacong/Gate-1.jpg",
            title: "cửa cổng 4 cánh",
            letter: "c",
            year: "Giá từ 1.000.000đ",
            url: "https://www.google.com/",
        },
        {
            id: 37,
            img: "img/cuacong/Gate-1.jpg",
            title: "cua cong 4 canh",
            letter: "c",
            year: "Giá từ 1.000.000đ",
            url: "https://www.google.com/",
        },
        {
            id: 36,
            img: "mimg/the gazi attck.jpg",
            title: "The Gazi Attack",
            letter: "t",
            year: 2021,
            url: "https://www.google.com/",
        },
        {
            id: 35,
            img: "mimg/comndo.jpg",
            title: "Comndo",
            letter: "c",
            year: 2020,
            url: "themanor.html",
        },

        // img: "mimg/caption phillips.jpg",
        // title: "Caption Phillips",

        {
            id: 34,
            img: "mimg/6under.jpg",
            title: "Nguyễn Thanh Sơn",
            letter: "n",
            year:2023,
            url: "https://www.24h.com.vn/",
        },
        {
            id: 33,
            img: "mimg/bloodshoot.jpg",
            title: "Blood Shoot",
            letter: "b",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 32,
            img: "mimg/blade.jpg",
            title: "Blade",
            letter: "b",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 31,
            img: "mimg/takepoint.webp",
            title: "Take Point",
            letter: "t",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 30,
            img: "mimg/battel drown.jpg",
            title: "Battel Drown",
            letter: "b",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 29,
            img: "mimg/bagi.jpg",
            title: "Bagi",
            letter: "b",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 28,
            img: "mimg/bad boys.jpg",
            title: "Bad Boys",
            letter: "b",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 27,
            img: "mimg/ateet.jpg",
            title: "Ateet",
            letter: "a",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 26,
            img: "mimg/aqwaman.jpg",
            title: "Aqwaman",
            letter: "a",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 25,
            img: "mimg/angel.jpg",
            title: "Angel",
            letter: "a",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 24,
            img: "mimg/allahdin.jpg",
            title: "Allahdin",
            letter: "a",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 23,
            img: "mimg/air.jpg",
            title: "Air",
            letter: "a",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 22,
            img: "mimg/acceleration.jpg",
            title: "Acceler ration",
            letter: "a",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 21,
            img: "mimg/abcd.jpg",
            title: "ABCD",
            letter: "a",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 20,
            img: "mimg/a perfact.jpg",
            title: "A Pefact",
            letter: "a",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 19,
            img: "mimg/6under.jpg",
            title: "6 Underground",
            letter: "u",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 18,
            img: "mimg/noah.webp",
            title: "Noah",
            letter: "n",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 17,
            img: "mimg/notimethedie.webp",
            title: "No Time The Die",
            letter: "n",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 16,
            img: "mimg/oz.webp",
            title: "OZ",
            letter: "o",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 15,
            img: "mimg/paul.webp",
            title: "Paul",
            letter: "p",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 14,
            img: "mimg/pixels.webp",
            title: "Pixels",
            letter: "p",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 13,
            img: "mimg/Qismat_2.webp",
            title: "Qismat 2",
            letter: "q",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 12,
            img: "mimg/red_notice.jpg",
            title: "Red Notice",
            letter: "r",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 11,
            img: "mimg/shershaah.webp",
            title: "Shershaah",
            letter: "s",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 10,
            img: "mimg/shiddat.webp",
            title: "Shiddat",
            letter: "s",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 9,
            img: "mimg/snakeeyes.webp",
            title: "Snake Eyes",
            letter: "s",
            year: 2020,
            url: "themanor.html",
        },
        {
            id: 8,
            img: "mimg/takepoint.webp",
            title: "Take Point",
            letter: "t",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 7,
            img: "mimg/The-Manor.webp",
            title: "The Manor",
            letter: "t",
            year: 2021,
            url: "themanor.html",
        },
        {
            id: 6,
            img: "mimg/theblackwater.webp",
            title: "The Black Water",
            letter: "t",
            year: 2020,
            url: "theblackwater.html",
        },
        {
            id: 5,
            img: "mimg/theoutpost.webp",
            title: "The Out Post",
            letter: "t",
            year: 2019,
            url: "venom2.html",
        },
        {
            id: 4,
            img: "mimg/thevault.webp",
            title: "The Vault",
            letter: "t",
            year: 2019,
            url: "venom2.html",
        },
        {
            id: 3,
            img: "mimg/venom2.webp",
            title: "Venom 2",
            letter: "v",
            year: 2021,
            url: "venom2.html",
        },
        {
            id: 2,
            img: "mimg/Warrior.webp",
            title: "Warrior",
            letter: "w",
            year: 2020,
            url: "bfg.html",
        },
        {
            id: 1,
            img: "mimg/xtreme.webp",
            title: "Xtreme",
            letter: "x",
            year: 2022,
            url: "bfg.html",
        },
    ]
    // all array copyed!

// SEARCH 3 JS
let search_bx2 = document.getElementsByClassName('search_bx2')[0];

// SEARCH 2 JS
window.addEventListener('load', () => {
    movies.forEach(element => {
        const { img, title, year, url } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content2">
            <h6>${title}</h6>
            <p>${year}</p>
        </div>`;
        search_bx2.appendChild(card);
    });
});

// SEARCH 1 JS
search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})
//SEARCHBAR END

//Start of Tawk.to Script
type="text/javascript"
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/641ac1014247f20fefe75230/1gs483sea';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
//End of Tawk.to Script