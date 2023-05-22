var request = new XMLHttpRequest();

request.open("GET", "https://api.github.com/users/pratulmuthuraja/repos", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  var statusHTML = "";

  $.each(data, function (i, status) {
    statusHTML +=
      '<div class="list-group"> <a href="' + status.html_url + '" class="list-group-item list-group-item-action" aria-current="true"> <div class="d-flex w-100 justify-content-between"><h5 class="mb-1">' + status.name +'</h5> </div>  <p class="mb-1"></p></a>'; });
  $("#projects-list").html(statusHTML);
};

request.send();
