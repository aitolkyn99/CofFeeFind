
var ul = document.getElementById('myUL');
var liSelected;
var index = -1;


var menus = `Cafe_Gran 4.5 None None None
Coffee_Bean 4.2 Chai 4200 None
Coffee_Bean 4.2 Double_Chocolate 4200 None
Coffee_Bean 4.2 Espresso 3300 None
Coffee_Bean 4.2 Hazelnut_Latte 4100 None
Coffee_Bean 4.2 Macchiato 3500 None
Coffee_Bean 4.2 Malibu_Dream 4500 None
Coffee_Bean 4.2 Matcha_Green_Tea 4300 None
Coffee_Bean 4.2 White_Chocolate_Latte 4000 None
Droptop 4.7 Chamomile 3300 None
Droptop 4.7 Chocolate_Latte 3100 None
Droptop 4.7 Cookie&amp;Cream_Dropccino 4500 None
Droptop 4.7 Earl_Grey 3300 None
Droptop 4.7 Lemon&amp;Lime_Dropccino 4500 None
Droptop 4.7 Sweet_Potato_Latte 3300 None
Dunkin 4.9 Orange_Mango 4300 None
Dunkin 4.9 Strawberry_Banana 4300 None
MangoSix 4.5 Americano 4000 None
MangoSix 4.5 Berry_Ice_Flakes 12500 None
MangoSix 4.5 Coconut_Ice_Flakes 12000 None
MangoSix 4.5 Earl_Grey 4300 None
MangoSix 4.5 English_Breakfast 4300 None
MangoSix 4.5 Espresso 4500 None
MangoSix 4.5 Mango_&amp;_Coconut 5300 None
MangoSix 4.5 Mango_&amp;_Tapioca 5100 None
Ogada 4.31 Americano 2450 None
Ogada 4.31 Banana_Ginseng 4750 None
Ogada 4.31 Cafe_Latte 3250 None
Ogada 4.31 Fermented_Rice_Smoothie 44500 None
Ogada 4.31 Fresh_Strawberry 9950 None
Ogada 4.31 Honey_Strawberry 4250 None
Ogada 4.31 Milk_Redbean 8950 None
Ogada 4.31 Quince_Citron_Smoothie 4950 None
Smoothie_King 4.1 Banana_Boat 4700 None
Smoothie_King 4.1 Gladiator 5500 None
Smoothie_King 4.1 Immune_Builder 4900 None
Smoothie_King 4.1 Lemon_Twist 5000 None
Smoothie_King 4.1 Mangofest 5000 None
Smoothie_King 4.1 Slim_n_Trim 5200 None
Smoothie_King 4.1 The_Activator 5500 None
Smoothie_King 4.1 Veggie_Blends 5300 None
Starbucks 4.7 Caramel_Macchiato 4900 None
Starbucks 4.7 Green_Tea_Cream 6100 None
Starbucks 4.7 Raspberry_Black_Currant 4800 None
Starbucks 4.7 Red_Bean_Coffee 5800 None
Starbucks 4.7 Toffee_Nut_Latte 5600 None
Starbucks 4.7 White_Chocolate_Mocha 5500 None
Tous_les_jours 4.7 Apple_Chai 4000 None
Tous_les_jours 4.7 Blueberry_Yogurt 5500 None
Tous_les_jours 4.7 Cafe_Mocha 3500 None
Tous_les_jours 4.7 Greentea_Iced_Flakes 10500 None
Tous_les_jours 4.7 Lemon_Squash 5000 None
Tous_les_jours 4.7 Raspberry_Chai 4000 None
Tous_les_jours 4.7 Tomato_Juice 5500 None
Tous_les_jours 4.7 Vanilla_Cafe_Latte 3500 None
Twosome_Place 4.8 Affogato_Black_Tea 6000 None
Twosome_Place 4.8 Citron_Frappe 5200 None
Twosome_Place 4.8 Coffee_Frappe 5300 None
Twosome_Place 4.8 Kiwi_Banana 5500 None
Twosome_Place 4.8 Masala_Chai_Tea 5300 None
Twosome_Place 4.8 Milkshake 5500 None
Twosome_Place 4.8 Orange_Grapefruit 5500 None
Twosome_Place 4.8 Royal_Milk_Tea 5500 None
`
  var customers = `aitosha KAIST_Building_N19 1
baurzhan KAIST_Munji_Campus 1
umartaufiqul KAIST_Building_N12 0
`
  var reviews = `Cafe_Gran 4.5 Cafe_Gran aitosha 2019-05-29 5 Love_it!
Droptop 4.7 Droptop baurzhan 2019-05-30 5 Good
Starbucks 4.7 Starbucks umartaufiqul 2019-05-30 4 Nice_but_expensive
Coffee_Bean 4.2 None None None None None
Dunkin 4.9 None None None None None
MangoSix 4.5 None None None None None
Ogada 4.31 None None None None None
Smoothie_King 4.1 None None None None None
Tous_les_jours 4.7 None None None None None
Twosome_Place 4.8 None None None None None
`;
  var locations = `Cafe_Gran 4.5 KAIST_Student_Cafeteria
Coffee_Bean 4.2 KAIST_International_Center_1F
Droptop 4.7 668-3_Bongmyeong-dong,_Yuseong-gu,_Daejeon
Dunkin 4.9 KAIST_Building_E3
MangoSix 4.5 KAIST_KI_Building_1F
Ogada 4.31 KAIST_Building_E9_2F
Smoothie_King 4.1 KAIST_Building_W1
Starbucks 4.7 115-3_Eoeun-dong,_Yuseong-gu,_Daejeon
Tous_les_jours 4.7 83_Wolpyeong-dong,_Seo-gu,_Daejeon
Twosome_Place 4.8 479-8_Gung-dong,_Yuseong-gu,_Daejeon
`;



function parse_string(s) {
  ans = ""
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '_')
      ans += ' '
    else {
      if (i == 0)
        ans += s[i].toUpperCase();
      else
        ans += s[i];
    }
  }
  return ans;

}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

$(document).ready(function() {
  var shop_info = {};
	var menus_list = menus.split('\n');
	for (info in menus_list) {
		data = menus_list[info].split(' ');
		if (isEmpty(shop_info[data[0]])) {
			shop_info[data[0]] = {'rating': data[1], 'menus': [[data[2], data[3]]]};
		} else {
			shop_info[data[0]].menus.push([data[2], data[3]])
		}
	}
	var reviews_list = reviews.split('\n')
	for (info in reviews_list) {
		data = reviews_list[info].split(' ');
		if (data[3] != 'None') {
			if (isEmpty(shop_info[data[0]]['reviews'])) {
					shop_info[data[0]]['reviews'] = [[data[3], data[4], data[5], data[6]]]
			} else {
					shop_info[data[0]]['reviews'].push([data[3], data[4], data[5], data[6]])
			}
		}
	}



function populateEvents(check) {

  $(".shopList").empty();
  console.log(shop_info);

  if (shop_info.length == 0) {
    var markup = `<div class = "col-md-12" style = "background-color: white;width:100%; margin-left: 2%">
            <h2 style="color: grey; font-size: 18px; margin: 1%; padding: 1%;" > No coffee shops to display. </h2>
                </div>
          </div>`
    $(".shopList").append(markup)
  }
  for (var i = 0; i < Object.keys(shop_info).length-1; ++i) {
    curShop = Object.keys(shop_info)[i]
    // console.log(shop_info[i]);
    var markup = `<div class="card" style = "width:80%; margin-left:10%;">
      <div class="card-header" id="heading` + i + `" style = "display:inline-block;">
        <h2 class="">
          <p style = "float: left;">
            <button class="btn btn-link" style = "font-size: 20px;" type="button" data-toggle="collapse" data-target="#a`+ i + `" aria-expanded="true" aria-controls="a` + i + `1">` +
            parse_string(curShop) +
            `</button>
          </p>
        </h2>
          <p style="float: right;">`
    var shop_rating = shop_info[curShop].rating;

    if ((shop_rating>=4) & (shop_rating<4,5)) {
      markup += `<span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>`
    } else if ((shop_rating>=3) & (shop_rating<4)) {
      markup += `<span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>`
    } else if (shop_rating>=4,5) {
      markup += `<span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>`
    }

          markup+=`</p>

      </div>

      <div id="a`+ i +`" class="collapse" aria-labelledby="heading`+ i +`" data-parent="#accordionExample">
        <div class="card-body">
          <div class="column">
            <p style = "">
              Location: ` +
              // parse_string(shop_info[curShop].location) +

              `LOCATION <br>
              Working hours: ***
            </p>
            <div>
            <button class="btn btn-primary btn addReview" style = "position: absolute; left:; bottom:0; margin-bottom: 3px;">
              Add review
            </button>
            </div>




            <div class= "row askQ"  style="margin-top: 5%; display:none;">

                            <tr class= "eventInfo">
                              <td class = "firstCol"><label for="location" class = "form">Rate this coffee shop:</label></td>
                              <td class = "secondCol">
                              <section class='rating-widget'>

                          <div class='rating-stars text-center'>
                            <ul class='stars'>
                              <li class='star' title='Very Poor' data-value='1'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='Poor' data-value='2'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='Fair' data-value='3'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='Good' data-value='4'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='Excellent' data-value='5'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                            </ul>
                          </div>
                          </section></td>
                            </tr>
                            <tr>
                              <td class = "firstCol"><label for="username" class = "form">Username:</label></td>
                              <td class = "secondCol"><textarea class="form-control username" placeholder="Type your name..." ></textarea></td>
                            </tr>
                            <tr>
                              <td class = "firstCol"><label for="description" class = "form">Comment:</label></td>
                              <td class = "secondCol"><textarea class="form-control description" placeholder="Type your question..." ></textarea></td>
                            </tr>
                            <tr>
                             <div class = "col-md-12">
                                <div class="text-right" style="margin-top: 2%; margin-bottom: 1%; margin-right: 1%">
                                <button type="submit" class="btn btn-primary my-1 submit">Submit</button>

                                <button  type="submit" class="btn btn-secondary my-1 cancel">Cancel</button>
                                </div>
                              </div>
                              <div style = "display:none;" class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong>Warning!</strong> Fill all the fields above.
                          <button type="button" class="close alert-close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                         </div>
                            </tr>
                          </div>






          </div>
          <div class="column">
            <p>
                <strong style = "text-decoration:;"><i>Menu</i></strong>
            </p>
            <table class="table table-hover">
              <thead>
              </thead>
              <tbody>`

              for (var k = 0; k<shop_info[curShop].menus.length; k++) {
                markup+= `<tr>

                  <td>` + parse_string(shop_info[curShop].menus[k][0]) + `</td>
                  <td>` + shop_info[curShop].menus[k][1] + `KRW</td>
                </tr>`
              }
              markup += `
              </tbody>
            </table>
          </div>
      </div>
  </div>`


      $(".shopList").append(markup);
  }

}

populateEvents();














function removeClass(el, className) {
    if(el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

function addClass(el, className) {
    if(el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};

function questionFunction(a) {
  $("#" + a).attr("aria-expanded", "true");
  $("#" + a).addClass('show');
  $("#button" + a).removeClass('collapsed');
  $("#button" + a).attr("aria-expanded", "true");
}

// document.getElementById('addReview').onclick = function(){
//     $("#addReview").hide();
//     document.getElementById('askQ').style.display = "block";
// }
//
// document.getElementById('cancel').onclick = function(){
//     $("#addReview").show();
//     document.getElementById('askQ').style.display = "none";
// }

$(".shopList").on('click','.addReview',function(){
    $(this).hide();
   var x = ($(this).closest('div').parent().children('.askQ'))
   x.animate( { "opacity": "show", top:"100"} , 500 );
});

$(".shopList").on('click','.cancel',function(){
    ($(this).closest('div')).parent().parent().hide();
    // populateEvents();
    // ($(this).closest('div')).parent().parent().parent().children('.addReview').show();
    // console.log("baw");
    ($(this).closest('div')).parent().parent().parent().find('.addReview').show();
  // x.animate( { "opacity": "show", top:"100"} , 500 );
});

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  var check = 0;
  input = document.getElementById('search-bar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
    $("#noResults")[0].style.display = "none";
  if (filter == "") {
    ul.style.display = "none";

  } else {
    ul.style.display = "block";
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
        check = 1;
      } else {
        li[i].style.display = "none";
      }
    }
    if ( check == 0 ) {
      $("#noResults")[0].style.display = "block";
    }
  }

}

$(".shopList").on('mouseover','.stars',function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout','.stars', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });


  /* 2. Action to perform on click */
  $(".shopList").on('click','.stars li',function(){
  // $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }


    var ratingValue = parseInt($('.stars li.selected').last().data('value'), 10);
    console.log(ratingValue);

  });


// function responseMessage(msg) {
//   $('.success-box').fadeIn(200);
//   $('.success-box div.text-message').html("<span>" + msg + "</span>");
// }

})


console.log($("#dropdown").value());
