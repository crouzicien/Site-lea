import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public photos: any = [

    {
      tag: "illustrator",
      url: "assets/oeuvres/2.jpg",
      text: "Réalisation d'images comportant plusieurs formes, créant ainsi une unité grâce au dispositif de 4 couleurs."
    },
    {
      tag: "photoshop",
      url: "assets/oeuvres/3.jpg",
      text: "Utilisation d'une oeuvre célébre pour créer une publicité.Choix d'une oeuvre de Basquiat ( artiste représentant des cranes nécrosés) pouvant parfaitement illustrer les effets nocifs de substances illicites."
    },
    {
      tag: "photoshop",
      url: "assets/oeuvres/1.jpg",
      text: "Un devoir de montage photoshop sur le sujet du voyage. J'ai donc opté pour le voyage spirituel d'un enfant."
    },
    {
      tag: "illustrator",
      url: "assets/oeuvres/5.jpg",
      text: "Utilisation de formes pour créer une fraise."
    },
    {
      tag: "photoshop",
      url: "assets/oeuvres/4.jpg",
      text: "Incrustation d'un logo personnel sur pot de sauce tomate."
    },
    {
      tag: "photoshop",
      url: "assets/oeuvres/6.jpg",
      text: "Montage entre un perroquet et une chauve-souris."
    },
    {
      tag: "photoshop",
      url: "assets/oeuvres/7.jpg",
      text: "Détourage de cheveux sur un fond coloré."
    },
    {
      tag: "indesign",
      url: "assets/oeuvres/8.jpg",
      text: "Création d'un menu dépliant.",
      horizontal: true
    },
    {
      tag: "indesign",
      url: "assets/oeuvres/9.jpg",
      text: "Création d'une couverture de magazine."
    },
    {
      tag: "indesign",
      url: "assets/oeuvres/10.jpg",
      text: "Reconstitution d'un portrait d'une célébrité essentiellement composé de mots en rapport avec cette dernière."
    },
    {
      tag: "indesign",
      url: "assets/oeuvres/11.jpg",
      text: "Création d'un flyer avec choix personnel de l'univers artistique; Die antwoord, groupe de musique hip-hop-rave sud-africain (univers très décalé). "
    },
    {
      tag: "indesign",
      url: "assets/oeuvres/12.jpg",
      text: "Recto de flyer comportant le reste des informations ainsi qu'un plan."
    },
    {
      tag: "photoshop",
      url: "assets/oeuvres/13.jpg",
      text: "Mise en situation du flyer en temps qu'affiche dans un metro Parisien.",
    },
    {
      tag: "indesign",
      url: "assets/oeuvres/14.jpg",
      text: "Création d'une affiche d'exposition du salon de la typographie."
    },
    {
      tag: "indesign",
      url: "assets/oeuvres/15.jpg",
      text: "",
      horizontal: true
    }
  ]

  public filtrePhotos = {
    tag: ""
  }

  public onglets = {
    current: "Tout",
    liste: [
      "Tout",
      "PhotoShop",
      "Illustrator",
      "indesign",

      "Dessins",
    ],
    click(link) {
      this.current = link
      this.click_out(link)
    },
    click_out: (link) => {
      if (link == 'Tout') link = ""
      this.filtrePhotos.tag = link
    }

  }

  public contact = {
    go() {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }


  public vignette = {
    overIn: ($e, photo) => {
      console.log($e.srcElement)
      this.photos.map(x => x.showVignette = false)
      photo.showVignette = true
    },
    overOut: ($e) => {
      this.photos.map(x => x.showVignette = false)
    },
    zoomIn: (photo) => {
      this.photos.map(x => x.zoom = false)
      photo.zoom = true
    }
  }
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

}
