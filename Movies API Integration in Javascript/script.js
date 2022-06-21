var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//API for image optimisation
const imgapilink = "http://api.resmush.it/ws.php?img=";






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
            // console.log(item.poster_path);

        // console.log(imgapilink + IMGPATH + item.poster_path);
        var processimg =imgapilink + IMGPATH + item.poster_path;
        // console.log("path");
        console.log(processimg);



        
myfun(processimg);

async function myfun(data1){
    

    //Quality for compression
const url = 'qlty=10';
//passing parameters in url
const params = new URLSearchParams(url);

    // console.log(data1);
    var response = await fetch(data1,{
        method : 'post',
        body : params
    });     

    // console.log(params);   
    var data = await response.json();
    // console.log(data.dest);

    var destimg = data.dest;
    // console.log(destimg);


    const box  =   document.createElement("div");
    box.classList.add("custom");

    box.innerHTML = `

   
    <img src="${destimg}" alt="">

    
    <h4>${item.title}</h4>
    `;
    rootdata.appendChild(box);





    // alert('raiasdf');
}




        // var imgdata = item['poster_path'];

        // document.querySelector('#img').src = IMGPATH + item.poster_path;

      

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
            // rootdata.appendChild(box);


            rootdata.appendChild(box);


            
            


        }
    )


}

///https://image.tmdb.org/t/p/w1280/iPS4ju4Po7n7RIpR4yRMSw3k8oG.jpg


const imgurl = 'https://image.tmdb.org/t/p/w1280/iPS4ju4Po7n7RIpR4yRMSw3k8oG.jpg';
//images

// const imgapilink1 = "http://api.resmush.it/ws.php?img=";
// var path = 'C:\Users\raiya\Full Stack Development Course\Movies API Integration in Javascript\powerful fire hand punch24891_square_20220508_224132_032_76.jpg'


// var dataapi = imgapilink1 + path;

// console.log(imgapilink1 + path);
// console.log(imgurl);


// const url = 'qlty=30';
// const params = new URLSearchParams(url);

// myfun(imgapilink1 + imgurl);
// async function myfun(data1){
    
//     // console.log(data1);
//     var response = await fetch(data1,{
//         method : 'post',
//         body : params
//     });     

//     // console.log(response);   
//     var data = await response.json();
//     console.log(data);
//     alert('raiasdf');
// }

