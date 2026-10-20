const H = document.createElement("h2");
const P = document.createElement("p");
const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub Heading";
P.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis rerum provident adipisci dignissimos totam perferendis, quasi consectetur vitae ducimus? Veritatis sapiente culpa quibusdam illo hic excepturi dolores qui ipsa incidunt exercitationem obcaecati, dicta numquam reprehenderit minima quis ea voluptas voluptate eveniet ipsum. Laudantium ea repudiandae quaerat unde, veniam corporis sunt ipsam, provident itaque alias autem quia voluptatibus aliquam dolor inventore maiores voluptatem deserunt fugit voluptates? Repellat, enim eos deserunt cumque at earum, deleniti voluptas maxime provident minus, perspiciatis quis maiores. Maxime, quidem rerum placeat amet, inventore aut molestiae nulla quasi aperiam architecto recusandae eum. Exercitationem molestiae at libero expedita!";

B.classList.add("btn", "btn-primary");
B.innerText = "Submit"
const div = document.getElementById("task1");

div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

H.append(" Welcome")
hg

