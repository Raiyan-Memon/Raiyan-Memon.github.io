var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


for(var i = 1; i<=10; i++){

    var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+i;

const rootdata = document.querySelector('#root');



async function getmovies(api) { 

    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    showMovies(data.results)

    
 }

 function showMovies(data) { 

    data.forEach(
        (item) => {  

            console.log(item);

    const box  =   document.createElement("div");
    box.classList.add("custom");

    box.innerHTML = `
    <img src="${IMGPATH + item.poster_path}" loading="lazy" decoding="async" alt="">
    <h4>${item.title}</h4>
    `;
    rootdata.appendChild(box);
      
    });

  }

//   init call function
 getmovies(APIURL);

}



$('.search').on('click', searchFun);

async function searchFun()
{

    $('.custom').remove();

    var searchdata = $('.inputwidth').val();



    console.log(searchdata);

    var searchval = SEARCHAPI + searchdata;

    var searchres = await fetch(searchval);
    var searchjson =await searchres.json();

     searchGet(searchjson.results);
    
    

};

function searchGet(data){

    const rootdata = document.querySelector('#searched');



    data.forEach(
        (item) => {
            console.log(item);
     
            const box  =   document.createElement("div");
            box.classList.add("custom");
            box.innerHTML = `

            <img src="${IMGPATH + item.poster_path}" alt="">
            <h4>${item.title}</h4>
             `;


            rootdata.appendChild(box);
        }
    )


}



