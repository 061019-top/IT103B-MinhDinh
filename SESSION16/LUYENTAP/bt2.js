let students = [
    {
        id: 1,
        name: "Lê Minh Sơn",
        className: "CNTT5",
        email: "son@gmail.com",
        studentId: "MS01",
    },
    {
        id: 2,
        name: "Lê Minh Thu",
        className: "CNTT5",
        email: "thu@gmail.com",
        studentId: "MS02",
    },
    {
        id: 3,
        name: "Lê Minh Huyền",
        className: "CNTT5",
        email: "huyen@gmail.com",
        studentId: "MS03",
    },
];

const renderData = (data) => {
    let tbody = document.getElementsByClassName("tbody")[0];
    tbody.innerHTML = "";

    data.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.className}</td>
            <td>${item.studentId}</td>
            <td>${item.email}</td>
        `;
        tbody.appendChild(row);
    });
};

renderData(students);