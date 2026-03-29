
function greetUser() {
    alert("Welcome to SECJ3483 Web Technology!");
}


document.getElementById("announcement").innerText = "Midterm assessment is on Week 7!";


function searchKeyword() {
    const input = document.querySelector(".srch").value;
    if (input !== "") {
        alert("You searched for: " + input);
    } else {
        alert("Please type something to search.");
    }
}


const resources = [
    { title: "Lecture 1: Intro to Web", link: "lecture1.pdf" },
    { title: "Lecture 2: HTML & CSS", link: "lecture2.pdf" }
];

const container = document.getElementById("announcement");


resources.forEach(item => {
    
    container.innerHTML += `<p style="margin-top: 10px;">
        <a href="${item.link}" style="color: #ff7200; text-decoration: none; font-weight: bold;">- ${item.title}</a>
    </p>`;
});