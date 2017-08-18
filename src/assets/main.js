$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/sergiocruz.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed)
    }
  });

  function addCourses(coursesList) {
    var $badges = $('#badges');
    coursesList.forEach( function(course) {

      var $course = $('<div />', {
        class: 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        target: '_blank',
        class: 'btn btn-primary',
        text: 'See Course'
      }).appendTo($course);
      
    });
  }
});
