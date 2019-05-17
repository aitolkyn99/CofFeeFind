//
// var li = $('li');
// var liSelected;
// $(window).keydown(function(e) {
//     if(e.which === 40) {
//         if(liSelected) {
//             liSelected.removeClass('selected');
//             next = liSelected.next();
//             if(next.length > 0) {
//                 liSelected = next.addClass('selected');
//             } else {
//                 liSelected = li.eq(0).addClass('selected');
//             }
//         } else {
//             liSelected = li.eq(0).addClass('selected');
//         }
//     } else if(e.which === 38) {
//         if(liSelected) {
//             liSelected.removeClass('selected');
//             next = liSelected.prev();
//             if(next.length > 0) {
//                 liSelected = next.addClass('selected');
//             } else {
//                 liSelected = li.last().addClass('selected');
//             }
//         } else {
//             liSelected = li.last().addClass('selected');
//         }
//     }
// });

var ul = document.getElementById('myUL');
var liSelected;
var index = -1;

document.addEventListener('keydown', function(event) {
var len = ul.getElementsByTagName('li').length-1;
  if(event.which === 40) {
index++;
  //down
  if (liSelected) {
			removeClass(liSelected, 'selected');
      next = ul.getElementsByTagName('li')[index];
      if(typeof next !== undefined && index <= len) {

                liSelected = next;
            } else {
             	index = 0;
                 liSelected = ul.getElementsByTagName('li')[0];
            }
            addClass(liSelected, 'selected');
            console.log(index);
    }
    else {
    index = 0;

   	 liSelected = ul.getElementsByTagName('li')[0];
			 addClass(liSelected, 'selected');
    }
  }
  else if (event.which === 38) {

  //up
    if (liSelected) {
			removeClass(liSelected, 'selected');
      index--;
      console.log(index);
      next = ul.getElementsByTagName('li')[index];
      if(typeof next !== undefined && index >= 0) {
                liSelected = next;
            } else {
            		index = len;
                 liSelected = ul.getElementsByTagName('li')[len];
            }
            addClass(liSelected, 'selected');
    }
    else {
    index = 0;
   	 liSelected = ul.getElementsByTagName('li')[len];
			addClass(liSelected, 'selected');
    }
  }
}, false);

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

function myFunction() {
  // Declare variables
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
    // Loop through all list items, and hide those who don't match the search query
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

$("#openNotif").hide()

$('#bell').on('click',function(){
  var x = ($("#openNotif").is(":hidden"));
  if (x){
    // alert("asdasfd erba is nevtemw'ik!!!");
    $("#openNotif").show();
  } else {
    $("#openNotif").hide()
  }
})


document.getElementById('newQ').onclick = function(){
    document.getElementById('askQ').style.display = "block";
    var p = $("#askQ");
    var offset = p.offset();
    window.scrollBy(offset.left, offset.top);
}

document.getElementById('cancel').onclick = function(){
    document.getElementById('askQ').style.display = "none";
}

console.log($('#alert'));

document.getElementById('submit').onclick = function(){
  // var selectedCategory = $("select.category").children("option:selected").val();
  // console.log(selectedCategory);
  if (($('#description').val()!="")) {
    alert("Your question has been sent to users! You will be notified once the question is answered.")
    $('#description').val("");
    $("#category").val('default');

  } else {
    $("#alert")[0].style.display = "block";
  }
}

document.getElementById('alert-close').onclick = function(){
    $("#alert")[0].style.display = "none";
}

// });
