const usuarios = [

    {
        nome: "amandinha",
        videos: 10
    },

    {
        nome: "julia",
        videos: 2
    },

    {
        nome: "maria",
        videos: 5
    },

    {
        nome: "ana",
        videos: 3
    }

];

const feed = document.getElementById("feed");

usuarios.forEach(usuario=>{

    const section=document.createElement("section");
    section.className="usuario";

    const titulo=document.createElement("h2");
    titulo.innerText=usuario.nome;

    const slider=document.createElement("div");
    slider.className="slider";

    for(let i=1;i<=usuario.videos;i++){

        const card=document.createElement("div");
        card.className="video-card";

        card.innerHTML=`

            <video preload="metadata">

                <source src="usuario/${usuario.nome}/${i}.mp4" type="video/mp4">

            </video>

            <p>Vídeo ${i}</p>

        `;

        slider.appendChild(card);

    }

    section.appendChild(titulo);
    section.appendChild(slider);

    feed.appendChild(section);

});