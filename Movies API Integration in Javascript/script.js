

$(function () { 

var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//34311 total pages
for(var i = 1; i<=1; i++){

    var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+i;

const rootdata = document.querySelector('#root');

async function getmovies(api) { 

    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
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

            <img src="${IMGPATH + item.poster_path}" loading="lazy" decoding="async" alt="">
            <h4>${item.title}</h4>
             `;


            rootdata.appendChild(box);
        }
    )
}




//on click of submit
// $('#submit').on('click', function (e) { 
//     e.preventDefault();
//  })


 //pagination-custom
 //on click of prev
 $('#prev').on('click', prevfun);

 async function prevfun(){

    console.log('prev');
    var prevcount = $('#countinput').val();
    console.log(prevcount);
    var toint = parseInt(prevcount);
    // console.log(typeof(toint));
  var store =  $('#countinput').val(--toint);
  console.log($('#countinput').val());
  $('#count').text($('#countinput').val());


    //data on pagination
    var APIURL2 ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

  $('.custom').remove();
  var getdata = $('#countinput').val();

//   console.log(getdata);

  var searchval = APIURL2 + getdata;
  console.log(searchval);

  var searchres = await fetch(searchval);
  var searchjson =await searchres.json();

   searchGet(searchjson.results);

disable();
 }


  //on click of next
$('#next').on('click', nextfun)

async function nextfun(){
 
    console.log('next');
    var nextcount = $('#countinput').val();
    // console.log(nextcount);
    var tointn = parseInt(nextcount);
    console.log(typeof(tointn));
  var store =  $('#countinput').val(++tointn);
  console.log($('#countinput').val());
  $('#count').text($('#countinput').val());


  //data on pagination
var APIURL1 ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

  $('.custom').remove();
  var getdata = $('#countinput').val();

//   console.log(getdata);

  var searchval = APIURL1 + getdata;
  console.log(searchval);

  var searchres = await fetch(searchval);
  var searchjson =await searchres.json();

   searchGet(searchjson.results);
    
  disable();
 }

 function disable() {  

  if($('#countinput').val() == '1'){
    $('#prev').addClass('disabled');
  }else{
    $('#prev').removeClass('disabled');
  }
}
})