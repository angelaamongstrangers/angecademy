$(function(){

	//alert("hello");

	$("#slider1").slider();

	$("#button1, #button2, #button3").button();
	$("#button4").button();

	$("#dialog1").dialog({
		autoOpen: false,
		buttons: {
			OK: function() {$(this).dialog("close");}
		}
	});
	$("#launcher").click(function(){
		$("#dialog1").dialog("open");

	});

	$("#datepicker1").datepicker();

	var searchDBString = [
		"C++",
		"Coding",
		"iOS",
		"Android",
		"CSS",
		"Javascript",
		"HTML",
	];
	$("#autocomplete1").autocomplete({
		source: searchDBString,

	});

	$("#accordion1").accordion({
		collapsible: true
	});

	$("#menu1").menu();
		

//Justin's part

  $("#accordion").accordion({
    disabled: false,
    active: true
  });

  $(".lunchbox ol").droppable({
    activeClass: "lunchbox--active",
    hoverClass: "lunchbox--hover",
    accept: ":not(.ui-sortable-helper)",
    drop: function(event, ui) {
      $(this).find(".placeholder").remove();
      $("<li></li>").html(ui.draggable.html()).appendTo(this);

      var count = $(this).find('li:has(img)').length + 1;
      if (count > 12) {
        $(".diet-plate__container li").draggable({
          cancel: 'img'
        });
        $(".diet-plate__container li").disableSelection();
        alert('You have too much food!\n\n Please behave yourself.');
      } else {
        $(".diet-plate__container li").draggable();
      }
      /** 
       *  Nutrition Facts Caculator
       */
      
      // function retrieveData () {
      //   var NF = ["calories", "totalFat", "cholesterol", "sodium", "dietaryFiber", "sugar", "protein"];
      //   var NFdata =["calories", "total-fat", "cholesterol", "sodium", "dietary-fiber", "sugar", "protein"];
      //   for( i = 0; i < NF.length ; i++ ){
      // NF[i] = $(this).find('img').get().reduce(
      //   function(a, b) {
      //     return a + $(b).data(NFdata[i]);       
      // }, 0);
      //   }
      // } 
      // retrieveData();

      var calories = $(this).find('img').get().reduce(
        function(a, b) {
          return a + $(b).data('calories');
        }, 0);
      var totalFat = $(this).find('img').get().reduce(
        function(a, b) {
          return a + $(b).data('total-fat');
        }, 0);
      var cholesterol = $(this).find('img').get().reduce(
        function(a, b) {
          return a + $(b).data('cholesterol');
        }, 0);
      var sodium = $(this).find('img').get().reduce(
        function(a, b) {
          return a + $(b).data('sodium');
        }, 0);
      var dietaryFiber = $(this).find('img').get().reduce(
        function(a, b) {
          return a + $(b).data('dietary-fiber');
        }, 0);
      var sugar = $(this).find('img').get().reduce(
        function(a, b) {
          return a + $(b).data('sugar');
        }, 0);
      var protein = $(this).find('img').get().reduce(
        function(a, b) {
          return a + $(b).data('protein');
        }, 0);
      console.log("A total of " + calories + " calories.");
      $('#value--calories').empty().append(calories);
      $('#value--total-fat').empty().append(totalFat);
      $('#value--cholesterol').empty().append(cholesterol);
      $('#value--sodium').empty().append(sodium);
      $('#value--dietary-fiber').empty().append(dietaryFiber);
      $('#value--sugar').empty().append(sugar);
      $('#value--protein').empty().append(protein);

    }
  }).sortable({
    items: "li:not(.placeholder)",
    sort: function() {
      $(this).removeClass("lunchbox--active");

    },
  });
  $(this).find(".placeholder").disableSelection();
  $(".diet-plate__container").find('li').draggable({
    appendTo: "body",
    accept: ".lunchbox",
    helper: "clone",
    scroll: false,
    cursor: 'move',
    connectWith: ".placeholder",
  });

  $(".diet").mousedown(function() {
    $(this).addClass('active');
  });
  $(".diet").mouseup(function() {
    $(this).removeClass('active');
  });



});

