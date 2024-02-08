async function fetchdata(){
    let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-01-06&sortBy=publishedAt&apiKey=aa017b262378415f90d9de9199c0f232");
    let data = await response.json();
    console.log(data.articles);
}

fetchdata();