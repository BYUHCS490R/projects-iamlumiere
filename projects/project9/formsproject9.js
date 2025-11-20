document.getElementById('project9form').addEventListener('submit',function(event) {
    event.preventDefault();
   
    const firstname = document.getElementById('accountfirstname').value;
    const lastname = document.getElementById('accountlastname').value;
    const age = document.getElementById("accountage").value;
    const civilstatus = document.getElementById('accountcivilstatus').value;
    const username = document.getElementById('accountusername').value;
    const email = document.getElementById('accountemail').value;
    const password = document.getElementById('accountpassword').value;
    const confirmpassword = document.getElementById('accountconfirmpassword').value;
    const terms = document.getElementById("accountterms").checked;

        if (!firstname) {
            alert("Firstname is required");
            return;
                }

        if (!lastname) {
            alert("Lastname is required");
            return;
                }

        if (age <= 17) {
            alert("You must be 18 to create an account");
            return;
                }

        if (civilstatus === "Blank") {
            alert("Please Select your Civil Status");
            return;
                }

        if (!username) {
            alert("Username is required");
            return;
             }

        if (!email) {
            alert("Email Address is required");
            return;
             }

        if (!password) {
            alert("password is required");
            return;
             }

        if (!confirmpassword) {
            alert("confirm password is required");
            return;
                }

        if (password !== confirmpassword) {
            alert("Password does not match.");
            return;
                }

        if (!terms) {
            alert("Terms and Conditions is required");
            return;
                }


        const formData = {
            Firstname: firstname,
            lastname: lastname,
            age: age,
            civilstatus: civilstatus,
            username: username,
            email: email,
            password: password,
            confirmpassword: confirmpassword,
            terms: terms,

        };

        console.log(formData);
    
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "formsproject9.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Form Submitted Successfully!");
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                // document.getElementById("myForm").reset();
                document.getElementById("project9form").innerHTML = "";
                document.getElementById("message").innerText = response.message;

            } else if (xhr.readyState === 4) {
                alert ("Error Submitting Form.");
            }
    };
    xhr.send(JSON.stringify(formData));

    }); 