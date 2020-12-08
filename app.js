
let resort = document.querySelector(".resort")
resort.addEventListener("click", openDropdown)

function openDropdown() {
    document.querySelector("#resortContent").classList.toggle("show");
    console.log("hej")
  }
  

window.onclick = function(event) {  
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



/* <div class="dropdown resort">
    <button class="dropbtn dropResorts">SKI RESORTS</button>
    <div id="myDropdown resortContent" class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>
</div>
<div class="dropdown offers">
    <button onclick="myFunction()" class="dropbtn">OFFERS</button>
    <div id="myDropdown" class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>
</div>
<div class="dropdown lodging">
    <button onclick="myFunction()" class="dropbtn">LODGING</button>
    <div id="myDropdown" class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
</div> */




// .dropbtn {
//     background-color: #3498DB;
//     color: white;
//     padding: 16px;
//     font-size: 16px;
//     border: none;
//     cursor: pointer;
// }
  
// .dropbtn:hover, 
// .dropbtn:focus {
//     background-color: #2980B9;
// }
  
// .dropdown {
//     position: relative;
//     display: inline-block;
// }
  
// .dropdown-content {
//     display: none;
//     position: absolute;
//     background-color: #f1f1f1;
//     min-width: 160px;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//     z-index: 1;
// }
  
// .dropdown-content a {
//     color: black;
//     padding: 12px 16px;
//     text-decoration: none;
//     display: block;
// }
  
// .dropdown-content a:hover {
//     background-color: #ddd;
// }