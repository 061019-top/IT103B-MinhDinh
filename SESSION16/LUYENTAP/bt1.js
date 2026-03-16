const images = [
    "https://tse1.mm.bing.net/th/id/OIP.8NQSViBNlG8OB-fuGpxUAwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e38cc800-66a4-451b-a31f-e971751cc588/dha7t4v-acebff07-28fb-4d4f-943a-278a44906ac1.jpg/v1/fill/w_894,h_894,q_70,strp/elon_musk_is_a_nice_man_by_nickhubbell_dha7t4v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2UzOGNjODAwLTY2YTQtNDUxYi1hMzFmLWU5NzE3NTFjYzU4OFwvZGhhN3Q0di1hY2ViZmYwNy0yOGZiLTRkNGYtOTQzYS0yNzhhNDQ5MDZhYzEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._ms_ZaXDjxDTBtwG90ZQgHsvPPuPL5FKsfc1VOayb1E",
    "https://i.pinimg.com/736x/55/58/2a/55582af4c38e44e013d9b7d26fe57b02.jpg"
]
let element = document.getElementsByTagName("img")[0]
let nextBt = document.getElementsByClassName("next")[0]
let index = 1;
element.setAttribute("src", images[0])
const changeImg = () =>{
    if(index==images.length){
        index = 0}
        element.setAttribute("src", images[index])
        index++;
}


nextBt.addEventListener("click",changeImg)