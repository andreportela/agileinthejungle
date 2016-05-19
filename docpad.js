module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      //name: "Agile in the Jungle",
      description: "Na Selva, a agilidade faz a Diferença!",
      //date: "23 e 24 de Setembro",
      // If your event is free, just comment this line
      //price: "$100",
      //venue: "Coco Bongo",
      address: "Av. Dom Pedro I, 151 - Dom Pedro, 69040-690",
      //city: "Manaus",
      state: "Amazonas"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Registre-se agora!",
        link: "http://eventick.com.br"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/andreportela/agileinthejungle"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://andreportela.github.io/agileinthejungle/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre nós",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Quem nos Patrocina \\o/",
      partners: "Nossos Parceiros!",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Sem café da manhã por que ninguém é rico aqui",
        time: "9h00"
      },
      {
        name: "Portela",
        photo: "http://www.gravatar.com/avatar/d0e95677776fad36bc490e5cb349af5f",
        bio: "Estava sem sono e resolveu brincar com o site da conferência",
        company: "FPF Tech",
        link: {
          href: "https://about.me/andre.portela",
          text: "@andreportela85"
        },
        presentation: {
          title: "Prototipando o site da conferência em uma insônia",
          description: "Como utilizar apenas git e github para resolver colocar um site estático no ar.",
          time: "10h00"
        }
      },
      {
        name: "Ayrton",
        photo: "http://www.gravatar.com/avatar/09307be3373d2ab759ab07aeba459339",
        bio: "Foi dormir cedo nesse dia",
        company: "Microsoft",
        link: {
          href: "https://gitlab.com/u/ayr-ton",
          text: "@ayr-ton"
        },
        presentation: {
          title: "Como registrar o domínio agileinthejungle.com.br na velocidade da luz",
          description: "Vocês não imaginam o quão fácil é comprar um domínio e registrar! É automágico :P",
          time: "11h00"
        }
      },
      {
        name: "Almoço (jaraqui <3)",
        time: "12h00"
      },
      {
        name: "Alexandre Amorim",
        photo: "http://www.gravatar.com/avatar/5bbd1244bf1a14dd166268ac96e18879",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Merenda da Tarde (Patrocinadores, vai uma tapioca aí?)",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};