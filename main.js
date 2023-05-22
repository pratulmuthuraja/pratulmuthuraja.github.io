var request = new XMLHttpRequest();

request.open("GET", "https://api.github.com/users/pratulmuthuraja/repos", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  var statusHTML = "";

  $.each(data, function (i, status) {
    statusHTML +=
      "<li><a href='" + status.html_url + "'>" + status.name + "</a></li>";
  });

  $("#projects-list").html(statusHTML);
};

request.send();
