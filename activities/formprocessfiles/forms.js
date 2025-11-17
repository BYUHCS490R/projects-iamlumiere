document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();


    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    // const state = document.getElementById('state').value; 

        if (!fname || !email) {
            alert("You need a name and email.");
            return;
                }

        // if (!state || state == "---") {
        //     alert("You have to put a state");
        //     return;
        // }

        const formData = {
            name: fullname,
            email: email,
            password: password,
            // state: state

        };

        // alert("Form Submitted");
        console.log(formData);
    
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Form Submitted Successfully!");
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                // document.getElementById("myForm").reset();
                document.getElementById("myForm").innerHTML = "";
                document.getElementById("message").innerText = response.message;

            } else if (xhr.readyState === 4) {
                alert ("Error Submitting Form.");
            }
    };
    xhr.send(JSON.stringify(formData));

    }); 