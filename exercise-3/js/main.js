// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
$(function() {
  // Select all <p> elements and assign a click event that removes the clicked element (recall `this`)
  // Select the <circle>, and when it's clicked, turn it red
  
  // Each time the <circle> is clicked, change its radius from 10 to 40
  // Assign a mouseenter event to the <rect> element that makes it have an opacity of .5
  // Assign a mouseleave event to the <rect> element that makes it have an opacity of 1
  $('p').on('click', function () {
  	$(this).remove();
  })

  $('circle').click(function() {
  	$(this).css('fill', 'red');
  	$(this).attr('r') == 40 ? $(this).attr('r', 10) : $(this).attr('r', 40);
  });

  $('rect').on('mouseenter', function() {
  	$(this).attr('opacity', '.5');
  });

  $('rect').on('mouseleave', function() {
  	$(this).attr('opacity', '1');
  })
});
