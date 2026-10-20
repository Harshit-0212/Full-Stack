const ar = ["Hemangi", "Pagal", "hai", "or", "badtameez", "bhi"];

const List = document.createElement("ol")

ar.forEach((item) => {
    const l = document.createElement("li")
    l.textContent = item
    List.appendChild(l)
})

document.getElementById("myList").appendChild(List)