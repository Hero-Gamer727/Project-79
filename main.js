menu_list_array = ["Veg Margherita Pizza", "Chicken Tikka Pizza", "Perry Perry Chicken Pizza", "Pepper Chicken Pizza", "Veggie Pizza"];
menulist_length = menu_list_array.length;
console.log(menulist_length)

function getmenu() {
    var menudata = [];
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        menudata = menudata + menu_list_array[i] + "<br>"
        console.log(menudata);
        document.getElementById("display_menu").innerHTML = menudata;
    }
}


function add_item() {
    var menudata = [];
    var item = document.getElementById("add_item").value;
    for (var j = 0; j < menu_list_array.length; j++) {

        menudata = menudata + "<img  id='pizza_img' src= 'images/pizzamg.png'/ >" + menu_list_array[j] + "<br>";
        document.getElementById("display_addedmenu").innerHTML = menudata;
    }

}

function add_top() {
    var item = document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}