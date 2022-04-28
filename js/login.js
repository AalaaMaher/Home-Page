var f = false;
$(function () {
    let persons=[new person (1,"Aalaa Maher",123,9),
    new person (2,"Esraa Maher" ,123,5) ,
   new person(3,"Aya Maher ",123 ,7) ]
localStorage.setItem("persons", JSON.stringify(persons))
person_before = JSON.parse(localStorage.getItem('persons'));
console.log(person_before);
let  mypersons
if (person_before == null) {
    localStorage.setItem("persons", JSON.stringify(persons))
    let mypersons =persons;
}
else
{
 mypersons = JSON.parse(localStorage.getItem('persons'));
}
console.log(mypersons)
var invalid_text = document.getElementById("invalid");
var valid_text = document.getElementById("valid");
var passwordinput = document.getElementById("password");

var invalid_text_user = document.getElementById("invalid_user");
var invalid_text_password = document.getElementById("invalid_password");
invalid_text.style.display = "none";
invalid_text_user.style.display = "none";
invalid_text_password.style.display = "none";
valid_text.style.display = "none";


document.getElementById('login').addEventListener('click', function (e) {
    f=false;
    $("#user").text("");
    invalid_text.style.display = "none";
    valid_text.style.display = "none";
    invalid_text_user.style.display = "none";
    invalid_text_password.style.display = "none";
    if (($("#username").val() == "") && ($("#password").val() == "")) {
        invalid_text.style.display = "block";
        e.preventDefault();
    }
    else if ($("#username").val() == "") {
        invalid_text_user.style.display = "block";
        e.preventDefault();

    }
    else if ($("#password").val() == "") {
        invalid_text_password.style.display = "block";
        e.preventDefault();

    }

    else {
        for (var p in mypersons) {
            console.log(p + ':' + mypersons[p].userName );
            console.log($("#username").val())
            if (($("#username").val() == mypersons[p].userName) && ($("#password").val() == mypersons[p].password)) {
                //  alert("Logged in successfully");
                invalid_text.style.display = "none";
                // location.href = 'employee.html';
                // e.action = location.assign('employee.html')
                f = true;
                console.log("success log in ");
                valid_text.style.display = "block";
                $("#username").blur();
                $("#password").blur();
                $("#user").text(`Welcome 
                ${mypersons[p].userName}`)
                $("#linklogin").html('<a class="nav-link " id="signup" href="#">Sign up</a>');
                setTimeout(() => {
                    $("#exampleModal").modal('hide');
                
                }, 900);
                e.preventDefault();

            }
        }
        console.log(f)
        if (f == false) {
            invalid_text.style.display = "block";
            e.preventDefault();
            console.log(f);
        }

    }

})//end of log in


$("#linklogin").click(function (e){
    if(f==true){
    console.log("sign up ")
    let answer = window.confirm("Are you sure ?");
    if (answer) {
        window.location.reload();
    }
    else {
        
    }}
})//end of click

})//end of load