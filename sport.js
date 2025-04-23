let country = ""; 

function showMessageMalaysia(){
    country = "MY";
    fetchSportNews();
}

function showMessageWorld(){
    country = "wo";
    fetchSportNews();
}

document.getElementById("sports-news").style.height = "100vh";

function fetchSportNews(){
    document.getElementById("sports-news").innerHTML = `<h1 style="color:rgb(253, 170, 170); font-family="Tektur">Loading...</h1>`;
    document.getElementById("sports-news").style.height = "50vh";
    const functionUrl = `https://easeandaccess.netlify.app/.netlify/functions/getsportnews?country=${country}`;

    fetch(functionUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data && Array.isArray(data.results)) { // Check if data.results exists and is an array
                const articles = data.results;
                let output = "<h1 style='color: white;'>Latest Sport News</h1>";
                articles.forEach(article => {
                    let desc;
                    if (article.description) {
                        desc = article.description.slice(0, 350);
                        desc = desc.slice(0,desc.lastIndexOf(" ")+1) + '...';
                    } else {
                        desc = "No description available."; // More user-friendly fallback
                    }
                    output += `
                        <div style="margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #ccc; color: white;">
                        <h3>${article.title}</h3>
                        <p>${article.pubDate}</p>
                        <p>${desc}</p>
                        <a href="${article.link}" target="_blank">Read more</a>
                        </div>`;

                });
                document.getElementById("sports-news").innerHTML = output;
                document.getElementById("sports-news").style.height = "auto";
            } else {
                console.error("Error: Invalid data format received from the API:", data);
                document.getElementById("sports-news").innerHTML = `<h2 style="color: white; font-size: 30px; text-align: center;">Failed to load sports news due to an unexpected data format.</h2>`;
                document.getElementById("sports-news").style.height = "auto";
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            document.getElementById("sports-news").innerHTML = `<h2 style="color: white; font-size: 30px; text-align: center;">Failed to load sports news.</h2>`;
            document.getElementById("sports-news").style.height = "auto";
        });

}
