let praising = [
    "Wow! Same birthday! 🔥",
    "Birthday twins 😎",
    "You are awesome!",
    "We are buddies 🤝",
    "Same pinch! 🎉"
];

let teasing = [
    "Oops not my birthday 😜",
    "Better luck next time 😂",
    "No match bro 😅",
    "We are not buddies 😏",
    "Try again next year 😆"
];

function checkDOB() {

    let userDOB = document.getElementById("dob").value;

    if (!userDOB) {
        document.getElementById("result").innerText = "⚠ Please select a date!";
        document.getElementById("result").style.color = "orange";
        return;
    }

    let date = new Date(userDOB);
    let userDay = date.getDate();
    let userMonth = date.getMonth();

    let myDOB = new Date("2006-01-21");
    let myDay = myDOB.getDate();
    let myMonth = myDOB.getMonth();

    let message = "";

    if (userDay === myDay && userMonth === myMonth) {
        let randomIndex = Math.floor(Math.random() * praising.length);
        message = praising[randomIndex];

        document.getElementById("result").style.color = "green";
    } else {
        let randomIndex = Math.floor(Math.random() * teasing.length);
        message = teasing[randomIndex];

        document.getElementById("result").style.color = "red";
    }

    document.getElementById("result").innerText = message;
}