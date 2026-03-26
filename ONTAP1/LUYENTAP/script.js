let students = [
  { id: 1734567890, name: "Nguyễn Văn A", age: 20, class: "CNTT-12" },
  { id: 1734567891, name: "Trần Thị B", age: 21, class: "KTPM-11" },
  { id: 1734567892, name: "Lê Văn C", age: 19, class: "CNTT-12" },
  { id: 1734567893, name: "Phạm Thị D", age: 22, class: "MKT-10" },
  { id: 1734567894, name: "Hoàng Văn E", age: 20, class: "CNTT-11" },
  { id: 1, name: "Hoàng Văn E", age: 20, class: "CNTT-11" },
];

let dataUser = document.getElementById("dataUser");

const renderDatas = () => {
  students = JSON.parse(localStorage.getItem("Students")) || students;
  dataUser.innerHTML = "";
  students.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.class}</td>
        `;
    dataUser.appendChild(tr);
  });
  localStorage.setItem("Students", JSON.stringify(students));
};
renderDatas();

