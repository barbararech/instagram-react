import SidebarUser from "./Sidebar User";

function Perfil(props) {
    return (
        <div className="sugestoes-perfis"> 
            <div className="sugestoes-perfis-info">                  
                <img src={props.img} alt="perfil"/>
                <div>
                    <p>{props.title}</p>
                    <p>{props.reason}</p>
                </div>
            </div>
            <div className="sidebar-seguir">
                <button>Seguir</button>
            </div>                    
        </div>
    );
}
  
export default function Sidebar() {
    // Logic

    const items = [
      {
        title: "bad.vibes.memes",
        img: "/img/badvibesmemes 1.png",
        reason: "Segue você"
      },
      {
        title: "chilibirdart",
        img: "/img/chibirdart 1.png",
        reason: "Segue você"
      },
      {
        title: "razoesparaacreditar",
        img: "/img/razoesparaacreditar 1.png",
        reason: "Novo no Instagram"
      },
      {
        title: "adorable_animals",
        img: "/img/adorableanimals 1.png",
        reason: "Segue você"
      },
      {
        title: "bsmallcutecats",
        img: "/img/smallcutecats 1.png",
        reason: "Novo no Instagram"
      }
    ];

    const sugestoes = items.map((item) => (
      <Perfil title={item.title} img={item.img} reason={item.reason} />
    ));

    // UI
    return (
        <div className="coluna2">
        <div className="sidebar">

            {/* <!-- User Sidebar --> */}
            <SidebarUser/>
            
            {/* <!-- Sugestões de Perfis --> */}
            <div className="sugestoes">
                <div>
                    <p>Sugestões para você</p>
                    <p>Ver tudo</p>
                </div>
                {sugestoes}
            </div>

            {/* <!-- Rodapé --> */}
            <div className="rodape">
                <p> Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma </p>
                <p> © 2022 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>    
    </div> 
    );
  }
