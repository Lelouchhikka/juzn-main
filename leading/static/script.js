document.addEventListener('DOMContentLoaded', function () {
    const openFormBtn = document.getElementById('openFormBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const popupOverlay = document.getElementById('popupOverlay');
  
    openFormBtn.addEventListener('click', function () {
      popupOverlay.style.display = 'flex';
    });
  
    closeFormBtn.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('dropdown3');
    const dropdown = document.getElementById('dropdown3');
    const dropdown2 = document.getElementById('dropdown3');
    const popupOverlay = document.getElementById('overlay');

    btn.addEventListener( "mouseenter", function () {

      popupOverlay.style.display = 'block';
    });
    btn.addEventListener( "mouseleave", function () {
      popupOverlay.style.display = 'none';
    });

  });
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('dropdown3');
    const popupOverlay = document.getElementById('overlay');

    btn.addEventListener( "mouseenter", function () {

      popupOverlay.style.display = 'block';
    });
    btn.addEventListener( "mouseleave", function () {
      popupOverlay.style.display = 'none';
    });

  });
 // Handle form submission
 document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission (page reload)

    // Access form data
    const formData = new FormData(this);

    // Display form data (replace this with your actual form handling logic)
    formData.forEach(function (value, key) {
      console.log(key, value);
    });
  });
  function toggleDiv(divId, expandImgId, historyDivId) {
    var div = document.getElementById(divId);
    var img = document.getElementById(expandImgId);
    var historyDiv = document.getElementById(historyDivId);

    div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';

    if (div.style.display === 'none') {
      img.style.transform = 'rotate(' + 0 + 'deg)';
      historyDiv.style.borderRadius = '25px 25px 15px 15px';
    } else {
      historyDiv.style.borderRadius = '25px 25px 0 0';
      img.style.transform = 'rotate(' + 180 + 'deg)';
    }
  }
  function toggleDivs(divId1,divId2, expandImgId) {
    var div1 = document.getElementById(divId1);
    var div2 = document.getElementById(divId2);
    console.log(divId2)
    var text = document.getElementById(expandImgId);

    div1.style.display = (div1.style.display === 'none' || div1.style.display === '') ? 'flex' : 'none';
    div2.style.display = (div2.style.display === 'none' || div2.style.display === '') ? 'flex' : 'none';

    if (div1.style.display === 'none') {
      text.textContent='Показать больше брендов в сети';
    } else {
              text.textContent='Показать меньше брендов в сети';

    }
  }
function updateButtonTextPoppup(selectedOption){
    const closeFormBtn = document.getElementById('closeFormBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    document.getElementById('selectedOption').innerText = selectedOption;
      popupOverlay.style.display = 'flex';

    closeFormBtn.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
    });

}
  function updateButtonText(selectedOption) {
    document.getElementById('selectedOption').innerText = selectedOption;
  }
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });
 document.getElementById("toTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; // Для поддержки старых браузеров
    document.documentElement.scrollTop = 0; // Для современных браузеров
  });
    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});

    $(document).ready(function () {
    // Event listener for radio button change
    $('input[name="flexRadioDefault"]').change(function () {
      // Get the value of the selected radio button
      var selectedValue = $('input[name="flexRadioDefault"]:checked').val();
      console.log(selectedValue);

      // Update the background color based on the selected value
      if (selectedValue === 'Южный') {
        $('.form-check-label1').css('background-color', 'red'); // Change label background color
            $('.form-check-label2').css('background-color', '#fff');
             $('.form-check-label3').css('background-color', '#fff');
        $('.brands-hrr').css('margin-right','1.5rem')

      } else if (selectedValue === 'Гастроном') {
          $('.form-check-label1').css('background-color', '#fff'); // Change label background color
        $('.form-check-label2').css('background-color', '#BE2323'); // Change label background color
             $('.form-check-label3').css('background-color', '#fff');
        $('.brands-hrr').css('margin-right','0')

      } else if (selectedValue === 'Dome') {
          $('.form-check-label1').css('background-color', '#fff');
           $('.form-check-label2').css('background-color', '#fff');
        $('.form-check-label3').css('background-color', '#74AE32'); // Change label background color
      }
    });
  });

  $(document).ready(function () {
    // Event listener for radio button change
    $('input[name="flexRadioDefault"]').change(function () {
      // Get the value of the selected radio button
      var selectedValue = $('input[name="flexRadioDefault"]:checked').val();
      
      // Update the margins based on the selected value
      if (selectedValue === 'Южный') {
        $('.brands-hrr').css('margin-right', '1.5rem');
        $('.brands-hrl').css('margin-left', '1.5rem');
      } else if (selectedValue === 'Гастроном') {
        $('.brands-hrr').css('margin-right', '0');
        $('.brands-hrl').css('margin-left', '0');
      } else {
        // Reset margins for other cases
        $('.brands-hrr').css('margin-right', '0');
        $('.brands-hrl').css('margin-left', '0');
      }
    });
  });