const token =
    "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3";
const url = `https://gorest.co.in/public/v2/users?access-token=${token}`;
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("fetched data------>", data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

async function renderUsers() {
    let users = await fetchData(url);
    let html = "";
    users.forEach((user) => {
        let htmlSegment = `<div style="border: 1px solid #000; padding:10px; margin: 10px">
                            <h2>${user.name}</h2>
                            <div ><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    const root = document.getElementById("root");
    root.innerHTML = html;
}
renderUsers();
