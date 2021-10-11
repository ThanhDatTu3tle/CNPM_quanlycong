function showForm() {
  var x = document.getElementById("formElement");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function AddData() {
  var x = document.getElementById("number").value;
  var y = document.getElementById("name").value;
  var letters = "/^[a-zA-Z]+$/";
  if (parseInt(x) != x && y == parseInt(y)) {
    alert("Sai cú pháp");
  } else {
    var rows = "";
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var number = document.getElementById("number").value;
    var andress = document.getElementById("andress").value;
    var job = document.getElementById("job").value;

    var icon =
      "<i class='bx bx-pencil user' id='edit'> <i class='bx bx-trash user' id='delete' >";
    rows +=
      "<td>" +
      name +
      "</td><td>" +
      gender +
      "</td><td>" +
      age +
      "</td><td>" +
      number +
      "</td><td>" +
      andress +
      "</td><td>" +
      job +
      "</td><td>" +
      icon +
      "</td>";

    var tbody = document.querySelector("#myTable tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);

    //
  }
}
