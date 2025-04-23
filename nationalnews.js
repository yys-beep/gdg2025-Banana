
const malaysiaNewsWebsites = {
    malay: [
      { title: "Astro Awani", url: "https://www.astroawani.com/", imageUrl: "images/astroawani.png" },
      { title: "Berita Harian", url: "https://www.bharian.com.my/", imageUrl: "images/beritaharian.webp" },
      { title: "Harian Metro", url: "https://www.hmetro.com.my/", imageUrl: "images/harianmetro.webp" },
      { title: "Sinar Harian", url: "https://sinarharian.com.my/", imageUrl: "images/sinarharian.svg" },
      { title: "Utusan Malaysia", url: "https://www.utusan.com.my/", imageUrl: "images/utusanmalaysia.webp" },
      { title: "Kosmo!", url: "https://kosmo.com.my/", imageUrl: "images/kosmo.webp" },
      { title: "Malaysia Gazette", url: "https://malaysiagazette.com/", imageUrl: "images/malaysiagazette.png" },
      { title: "mStar", url: "https://www.mstar.com.my/", imageUrl: "images/mstar.svg" },
      { title: "Bernama (Malay)", url: "https://www.bernama.com/bm/", imageUrl: "images/bernama.png" },
    ],
    chinese: [
      { title: "China Press", url: "https://www.chinapress.com.my/", imageUrl: "images/chinapress.svg" },
      { title: "Oriental Daily", url: "https://www.orientaldaily.com.my/", imageUrl: "images/orientaldaily.png" },
      { title: "Nanyang Siang Pau", url: "https://www.enanyang.my/", imageUrl: "images/enanyang.png" },
      { title: "Guang Ming Daily", url: "https://www.guangming.com.my/", imageUrl: "images/guangming.png" },
      { title: "Kwong Wah Yit Poh", url: "https://www.kwongwah.com.my/", imageUrl: "images/kwonghua.png" },
      { title: "See Hua Daily News", url: "https://news.seehua.com/", imageUrl: "images/seehua.png" },
      { title: "Bernama (Chinese)", url: "https://www.bernama.com/man/index.php", imageUrl: "images/bernama.png" },
      { title: "Overseas Chinese", url: "https://ocdn.com.my/", imageUrl: "images/overseachinese.png" },
    ],
    english: [
      { title: "The Star", url: "https://www.thestar.com.my/", imageUrl: "images/thestar.svg" },
      { title: "Malay Mail", url: "https://www.malaymail.com/", imageUrl: "images/malaymail.svg" },
      { title: "New Straits Times", url: "https://www.nst.com.my/", imageUrl: "images/nst.webp" },
      { title: "theSun", url: "https://www.thesun.my/", imageUrl: "images/thesun.png" },
      { title: "Malaysiakini", url: "https://www.malaysiakini.com/", imageUrl: "images/malaysiakini.svg" },
      { title: "The Edge Malaysia", url: "https://www.theedgemalaysia.com/", imageUrl: "images/theedge.png" },
      { title: "MalaysiaNow", url: "https://www.malaysianow.com/", imageUrl: "images/malaysianow.svg" },
      { title: "Bernama (English)", url: "https://www.bernama.com/", imageUrl: "images/bernama.png" },
      { title: "Borneo Post", url: "https://www.theborneopost.com/", imageUrl: "images/borneopost.png" },
      { title: "Sarawak Tribune", url: "https://newsarawaktribune.com.my/", imageUrl: "images/sarawaktribune.png" },
    ],
  };

  const language = ["malay","chinese","english"];
  const newsContainers = document.querySelectorAll(".news"); //return an array
  function loadNews(){
    console.log("loading");
    let index = 0;
    newsContainers.forEach(newsContainer => {
        const allNewsCompany = malaysiaNewsWebsites[language[index]];
        allNewsCompany.forEach(company => {
            const newsLink = document.createElement("a");
            newsLink.href = company.url;
            newsLink.target = "_blank";
            const newsBlock = document.createElement("div");
            newsBlock.classList.add("news-block");
            const newsImage = document.createElement("div");
            newsImage.style.backgroundImage = `url(${company.imageUrl})`;
            newsImage.classList.add("news-image");
            const newsDesc = document.createElement("div");
            newsDesc.classList.add("news-desc");
            newsDesc.innerHTML = `<p>${company.title}</p>`;
            console.log(company.title);

            newsBlock.appendChild(newsImage);
            newsBlock.appendChild(newsDesc);
            newsLink.appendChild(newsBlock);
            newsContainer.appendChild(newsLink);
        })
        index++;
    })
  }

  loadNews();

// const apiUrl = "https://api.worldnewsapi.com/search-news?source-country=my";
// const apiKey = "105a69f1b55540429f90f13e259c9acd";
// const newsContainer = document.getElementsByClassName("news-container");
// let currentPage = 1;
// const limit = 21;
// let initial = 0;
// function getNewsAndLoad(page, limit){
//     fetch(`${apiUrl}&page=${page}&limit=${limit}&api-key=${apiKey}`)
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             let currentNews = data.news.splice(initial,initial+limit);
//             currentNews.forEach(newss => {
//                 const newsBlock = document.createElement("div");
//                 const newsImage = document.createElement("div");
//                 newsImage.style.backgroundImage = `url(${newss.image})`;
//                 newsImage.classList.add("news-image");
//                 newsBlock.appendChild(newsImage);
//                 const newsDesc = document.createElement("div");
//                 let summary = newss.summary
//                 if(summary.length>30){
//                     summary = summary.slice(0,60);
//                     summary = summary.slice(0,summary.lastIndexOf(" "))+"..."
//                 }
//                 newsDesc.innerHTML = `<h1>${newss.title}</h1>
//                                     <h3>${summary}</h3>
//                                     <h5>${newss.publish_date}</h5>
//                                     <p>${newss.author}</p>`;
//                 newsDesc.classList.add("news-desc");
//                 newsBlock.appendChild(newsDesc);
//                 newsBlock.classList.add("news-block");
//                 const newBlockLink = document.createElement("a");
//                 newBlockLink.href = newss.url;
//                 newBlockLink.target = "_blank";
//                 newBlockLink.appendChild(newsBlock);
//                 newsContainer[0].appendChild(newBlockLink);
//             })
//         })
//         .catch(error => console.error("Cannot fetch api"));
// }

// getNewsAndLoad(1,21);

// // function noApitest(){
// //     const newsBlock = document.createElement("div");
// //     const newsImage = document.createElement("div");
// //     newsImage.style.backgroundImage = "url('salad.jpg')";
// //     newsImage.classList.add("news-image");
// //     newsBlock.appendChild(newsImage);
// //     const newsDesc = document.createElement("div");
// //     let summary = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut omnis quaerat quae facere id, architecto itaque pariatur! Cumque et repellat dolores sunt, illo in recusandae numquam maxime quisquam dolorem saepe.";
// //     if(summary.length>30){
// //         summary = summary.slice(0,50);
// //         summary = summary.slice(0,summary.lastIndexOf(" "))+"..."
// //     }
// //     newsDesc.innerHTML = `<h1>THIS IS TITLE</h1>
// //                         <br> 
// //                         <h3>${summary}</h3>
// //                         <br>
// //                         <h5>2025-03-24 19:11:22</h5>
// //                         <p>ALI AKAU DAN ABU</p>`;
// //     newsDesc.classList.add("news-desc");
// //     newsBlock.appendChild(newsDesc);
// //     newsBlock.classList.add("news-block");
// //     const newBlockLink = document.createElement("a");
// //     newBlockLink.href = "https://youtube.com";
// //     newBlockLink.target = "_blank";
// //     newBlockLink.appendChild(newsBlock);
// //     newsContainer[0].appendChild(newBlockLink);
// // }
// // for(let i=0; i<21; i++){
// //     noApitest();
// // }

// window.addEventListener("scroll", ()=>{
//     const scrollPosition = window.innerHeight + window.scrollY;
//     const pageHeight = document.body.scrollHeight;

//     // Add a buffer to detect near the bottom of the page
//     if (scrollPosition >= pageHeight - 100) {
//         initial += 21;
//         currentPage++;
//         getNewsAndLoad(currentPage, limit); // Load more news
//     }

// })

// document.addEventListener("DOMContentLoaded",()=>{
//     getNewsAndLoad(currentPage,limit);
// })
