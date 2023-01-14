

$(function () {


  // alert(`This page is under Production so please be patient. -- Raiyan Memon`);


  // var APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  //34319 total pages
  for (var i = 1; i <= 1; i++) {

    // var APIURL ="https://api.themoviedb.org/3/discover/movie/popular&api_key=04c35731a5ee918f014970082a0088b1&page="+i;

    var APIURL = "https://api.themoviedb.org/3/movie/popular?api_key=6d02a218c581074ce22ac8d31f03aaf7&page=" + i;

    const rootdata = document.querySelector('#root');

    getmovies(APIURL);
    console.time('function #1');
    function getmovies(APIURL) {
      $.ajax({
        url: APIURL,
        type: 'GET',
        success: function (res) {
          showResOnUI(res.results);
        }
      });
    }

    function showResOnUI(getres) {
      if (getres == '') {
        alert('No Movie Found, Please Check the Spelling or try different name.');
        location.reload();
      }

      getres.forEach(
        (item) => {
          console.log(item.title);
          const box = document.createElement("div");
          box.classList.add("custom");
          box.innerHTML = `
                <img src="${IMGPATH + item.poster_path}" loading="lazy" decoding="async" alt="">
                <h4>${item.title}</h4>
                `;
          rootdata.appendChild(box);
        });
    }
    console.timeEnd('function #1');
  } //forloop

  $(document).on('click', '.search', searchFun);

   function searchFun() {
    $('.custom').remove();

    var searchdata = $('.inputwidth').val();

    if ($('.inputwidth').val() == '') {
      location.reload();
    } else {
      $('.inputwidth').blur();
      var searchval = SEARCHAPI + searchdata;
      getmovies(searchval);
    }
  };



  //on click of submit
  $('#submit').on('click', function (e) {
    e.preventDefault();
  })


  //pagination-custom
  //on click of prev
  $('#prev').on('click', prevfun);

   function prevfun() {

    console.log('prev');
    var prevcount = $('#countinput').val();
    console.log(prevcount);
    var toint = parseInt(prevcount);
    // console.log(typeof(toint));
    var store = $('#countinput').val(--toint);
    console.log($('#countinput').val());
    $('#count').text($('#countinput').val());


    //data on pagination
    var APIURL2 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

    $('.custom').remove();
    var getdata = $('#countinput').val();
    var searchval = APIURL2 + getdata;
    console.log(searchval);
    getmovies(searchval);
    disable();
  }


  //on click of next
  $('#next').on('click', nextfun)

   function nextfun() {

    console.log('next');
    var nextcount = $('#countinput').val();
    // console.log(nextcount);
    var tointn = parseInt(nextcount);
    console.log(typeof (tointn));
    var store = $('#countinput').val(++tointn);
    console.log($('#countinput').val());
    $('#count').text($('#countinput').val());


    //data on pagination
    var APIURL1 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

    $('.custom').remove();
    var getdata = $('#countinput').val();
    var searchval = APIURL1 + getdata;
    getmovies(searchval);
    disable();
  }

  function disable() {

    if ($('#countinput').val() == '1') {
      $('#prev').addClass('disabled');
    } else {
      $('#prev').removeClass('disabled');
    }
  }



  //setting
  $("#setting").click(function () {
    $("#setting-content").slideToggle("slow");
  });

  //check value



})