import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      profile: null
    },
    categories: [
      {
        id: 0,
        name: 'Tout',
      },
      {
        id: 1,
        name: 'Forêt'
      },
      {
        id: 2,
        name: 'Montagne'
      },
      {
        id: 3,
        name: 'Lac'
      }
    ],
    articles: [],
    questionnaire: {
      questions: [
        {
          id: 0,
          text: 'La Terre est envahie par des zombies, que fais-tu ?',
          answers: [
            {
              id: 0,
              text: 'A. Je panique et je me confine quelque temps avant de m’enfuir nu dans la forêt.',
              level: 1
            },
            {
              id: 1,
              text: 'B. Je reste calme, je pars dans ma Batcave équipée jusqu’aux dents. ',
              level: 3
            },
            {
              id: 2,
              text: 'C. Je prends les armes et pars en guerre pour tous les tuer. ',
              level: 2
            },
            {
              id: 3,
              text: 'D. Des zombies ? J’ai vu The Walking Dead, j’ai juste à jeter des bouteilles au loin pour les éloigner.',
              level: 0
            },
          ]
        },
        {
          id: 1,
          text: 'Un zombie te repère et veut te mordre, que fais-tu ?',
          answers: [
            {
              id: 0,
              text: 'A. Je m’évanouis.',
              level: 0
            },
            {
              id: 1,
              text: 'B. Je lui explose le crâne sans réfléchir.',
              level: 3
            },
            {
              id: 2,
              text: 'C. J’essaye de fuir en remuant ciel et terre.',
              level: 2
            },
            {
              id: 3,
              text: 'D. Je m’enfuis comme un ninja.',
              level: 1
            },
          ]
        },
        {
          id: 2,
          text: 'En forêt, tu vois un ours au loin, que fais-tu ? ',
          answers: [
            {
              id: 0,
              text: 'A. Je vise, SHOOT SHOOT BALLE DANS LA TETE, mon repas du soir est déjà prêt !',
              level: 3
            },
            {
              id: 1,
              text: 'B. Je prépare mon champ de mines, rendez-vous à Verdun.',
              level: 2
            },
            {
              id: 2,
              text: 'C. Je suis incapable de le tuer, j’ai l’impression de voir Baloo dans Le Livre de la Jungle.',
              level: 1
            },
            {
              id: 3,
              text: 'D. Je mangerais mes pâtes sans boulette de viande.',
              level: 0
            },
          ]
        },
        {
          id: 3,
          text: 'Es-tu un pro de l’organisation ?',
          answers: [
            {
              id: 0,
              text: 'A. Absolument, Excel n’a plus de secret pour moi.',
              level: 3
            },
            {
              id: 1,
              text: 'B. L\'organisation + moi = 2.',
              level: 0
            },
            {
              id: 3,
              text: 'C. Bof mais je sais où se trouve mes caleçons.',
              level: 1
            },
            {
              id: 4,
              text: 'D. J’ai déjà mon set préparé.',
              level: 2
            },
          ]
        },
        {
          id: 4,
          text: 'Une situation difficile se présente, que fais-tu ?  ',
          answers: [
            {
              id: 0,
              text: 'A. Je ragequit.',
              level: 1
            },
            {
              id: 1,
              text: 'B. J’active mon oeil de lynx.',
              level: 3
            },
            {
              id: 2,
              text: 'C. Je me mets en PLS.',
              level: 0
            },
            {
              id: 3,
              text: 'D. Je fonce tête baissée comme un taureau.',
              level: 2
            },
          ]
        },
        {
          id: 5,
          text: 'Un inconnu est blessé et hurle à l\'aide au loin, que fais-tu ?',
          answers: [
            {
              id: 0,
              text: 'A. Je lui viens en aide sans hésiter, j’ai regardé toutes les saisons de Grey’s Anatomy.',
              level: 3
            },
            {
              id: 1,
              text: 'B. Je lui apporte mon aide mais je reste méfiant, c’est peut-être un piège.',
              level: 2
            },
            {
              id: 2,
              text: 'C. Chacun sa route, chacun son chemin.',
              level: 0
            },
            {
              id: 3,
              text: 'D. Je cours comme dans Alerte à Malibu au ralenti.',
              level: 1
            },
          ]
        },
        {
          id: 6,
          text: 'Si tu devais choisir une seule arme, laquelle choisirais-tu ?',
          answers: [
            {
              id: 0,
              text: 'A. Une arme à feu, comme en 45.',
              level: 2
            },
            {
              id: 1,
              text: 'B. Un arc, j’ai la précision de Robin des Bois.',
              level: 3
            },
            {
              id: 2,
              text: 'C. Jamais sans mon couteau.',
              level: 1
            },
            {
              id: 3,
              text: 'D. Une batte de baseball, ça va taper des homeruns.',
              level: 0
            },
          ]
        },
        {
          id: 7,
          text: 'Tu dois allumer un feu, quel outil choisirais-tu ?  ',
          answers: [
            {
              id: 0,
              text: 'A. Un briquet, j’en avais déjà besoin pour ma clope.',
              level: 1
            },
            {
              id: 1,
              text: 'B. Des allumettes, je pourrais faire aussi faire des châteaux avec.',
              level: 0
            },
            {
              id: 2,
              text: 'C. Une pierre à feu, yabba dabba doo!',
              level: 3
            },
            {
              id: 3,
              text: 'D. Deux pierres que j’utilise en silex. Une pierre deux coups.',
              level: 2
            },
          ]
        },
        {
          id: 8,
          text: 'Comment t’orientes-tu seul dans la nature ?',
          answers: [
            {
              id: 0,
              text: 'A. Avec une boussole. Je ne perds jamais le nord.',
              level: 0
            },
            {
              id: 1,
              text: 'B. Avec le soleil, sans oublier ma crème solaire. ',
              level: 2
            },
            {
              id: 2,
              text: 'C. Je grave mon passage dans les arbres que je croise, comme un ado en colo.',
              level: 1
            },
            {
              id: 3,
              text: 'D. Avec les étoiles. Vers l’infini et au-delà !',
              level: 3
            },
          ]
        },
        {
          id: 9,
          text: 'Comment te prépares-tu pour dormir en toute sécurité ? ',
          answers: [
            {
              id: 0,
              text: 'A. Je cherche différents types de bois pour optimiser au mieux ma cabane, vêtu(e) de ma chemise à carreaux.',
              level: 2
            },
            {
              id: 1,
              text: 'B. Je fais un feu près de mon sac de couchage pour me réchauffer les miches.',
              level: 1
            },
            {
              id: 2,
              text: 'C. Je fais un matelas de feuilles et je les fume le lendemain.',
              level: 0
            },
            {
              id: 3,
              text: 'D. Je vais en hauteur dans les arbres pour être loin des prédateurs. Je suis un enfant de la jungle.',
              level: 3
            },
          ]
        },
        {
          id: 10,
          text: 'Combien de temps t’entraînes-tu pour ton futur stage de survie ?',
          answers: [
            {
              id: 0,
              text: 'A. Je ne m’entraîne pas, je suis un warrior.',
              level: 0
            },
            {
              id: 1,
              text: 'B. Je m’entraîne le temps d’un week-end après l’apéro.',
              level: 1
            },
            {
              id: 2,
              text: 'C. Je m’entraîne seul pendant trois semaines, comme Goku.',
              level: 2
            },
            {
              id: 3,
              text: 'D. Je m’entraîne avec un coach personnel pendant un an pour tout détruire.',
              level: 3
            },
          ]
        },
        {
          id: 11,
          text: 'Comment fais-tu face au froid ? ',
          answers: [
            {
              id: 0,
              text: 'A. Je tue un animal et je fais peau neuve.',
              level: 3
            },
            {
              id: 1,
              text: 'B. Je bouge en permanence comme une petite puce.',
              level: 1
            },
            {
              id: 2,
              text: 'C. Je cherche un endroit à l’abri des courants d’air. J’ai peur d’attraper froid.',
              level: 2
            },
            {
              id: 3,
              text: 'D. Je me frictionne et je maintiens le flamme allumée <3',
              level: 0
            },
          ]
        },
        {
          id: 12,
          text: 'Comment procèdes-tu pour traverser un lac ? ',
          answers: [
            {
              id: 0,
              text: 'A. Je me jette à l’eau. Plouf ',
              level: 1
            },
            {
              id: 1,
              text: 'B. Je construis un radeau comme Robinson Crusoé. ',
              level: 3
            },
            {
              id: 2,
              text: 'C. Je me mets en tenue d’Ève et range mes affaires dans mon sac pour ne pas les mouiller. ',
              level: 2
            },
            {
              id: 3,
              text: 'D. Je fais un détour afin d’éviter le lac. J’ai pas envie de me mouiller.',
              level: 0
            },
          ]
        },
        {
          id: 13,
          text: 'Comment te nourris-tu en milieu hostile ? ',
          answers: [
            {
              id: 0,
              text: 'A. Je connais les types de plantes, champignons et insectes comestibles et je crée des pièges pour chasser. Recette 5 étoiles.',
              level: 3
            },
            {
              id: 1,
              text: 'B. Je mange ce que je trouve en le nettoyant. C’est mon côté crado. ',
              level: 0
            },
            {
              id: 2,
              text: 'C. Je reconnais certaines plantes et j’évite de prendre des champignons par méfiance. J’ai déjà fait un bad trip. ',
              level: 2
            },
            {
              id: 3,
              text: 'D. Je chasse en priorité ce que je trouve. À moi Timon et Pumba !',
              level: 1
            },
          ]
        },
        {
          id: 14,
          text: 'Tu viens de te blesser légèrement (coupure), que fais-tu ?',
          answers: [
            {
              id: 0,
              text: 'A. Je mets de l’eau. Ça va aller...',
              level: 1
            },
            {
              id: 1,
              text: 'B. Je fais une pomade avec des plantes médicinales. #DrHouse',
              level: 3
            },
            {
              id: 2,
              text: 'C. Je relativise et ne soigne pas ma blessure. Au final, on va tous mourir. ',
              level: 0
            },
            {
              id: 3,
              text: 'D. Je me fais un bandage. Prêt pour le front.',
              level: 2
            },
          ]
        },
        {
          id: 15,
          text: 'Tu viens de te blesser gravement (nécessitant des points de suture), que fais-tu ? ',
          answers: [
            {
              id: 0,
              text: 'A. Je panique et j’appelle à l’aide tout en compressant ma blessure avec mes mains. SOS !',
              level: 0
            },
            {
              id: 1,
              text: 'B. Je fais mes propres points de suture. Une brindille, un fil de pêche et je serre les dents.',
              level: 3
            },
            {
              id: 2,
              text: 'C. Je fais un garrot pour ne pas que s’empire. On va éviter l’amputation.',
              level: 1
            },
            {
              id: 3,
              text: 'D. Je fais un garrot et je mets un bandage pour soigner au mieux. Et c’est reparti pour un tour !',
              level: 2
            },
          ]
        },
      ],
      answers: [],
    },
    levels: [
      {
        id: 0,
        name: 'Sportif du dimanche',
        text: 'T’es pas le meilleur de ta catégorie, on doit se le dire... mais on t’a concocté un programme exprès pour toi, normalement réservé aux enfants mais on va faire une exception ! Rejoins-nous !',
        description: 'Un petit week-end pour apprendre les bases',
        icon: 'flipflops',
      },
      {
        id: 1,
        name: 'Amateur',
        text: 'Bon ok t’as regardé quelques séries sur la survie mais t’as dû louper quelques épisodes... Rejoins-nous pour la suite de la saison et tu seras à jour !',
        description: '4 à 5 jours pour un peu plus de skills',
        icon: 'chamallow',
      },
      {
        id: 2,
        name: 'Semi-pro',
        text: 'Franchement t’es chaud mais y a encore un écart entre Bear Grylls et toi. Viens nous voir et on se regardera quelques épisodes de Man VS Wild en version grandeur nature !',
        description: '8 à 9 jours pour te perfectionner encore plus',
        icon: 'brasero',
      },
      {
        id: 3,
        name: 'Élite',
        text: 'Terminator, c’est toi ? On a rien à redire sur ton niveau, on a hâte de voir ça sur le terrain !',
        description: '12 à 13 jours pour frimer devant les autres',
        icon: 'knife',
      },
      {
        id: 4,
        name: 'Famille',
        text: '',
        description: 'Un pack spécial de 3 à 4 jours pour petits et grands survivalistes avec des activités adaptées pour toute la famille',
        icon: 'famille',
      },
    ],
    locations:  [
      {
        id: 1,
        name: 'Grande Chartreuse',
        thumbnail: 'stages/grande-chartreuse.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '3.4',
        price: '99',
        category_id: 1,
        level_id: 0
      },
      {
        id: 2,
        name: 'Forêt de Fontainebleau',
        thumbnail: 'stages/fontainebleau.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '4.7',
        price: '129',
        category_id: 1,
        level_id: 2
      },
      {
        id: 3,
        name: 'Forêt de Rambouillet',
        thumbnail: 'stages/rambouillet.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '3.9',
        price: '159',
        category_id: 1,
        level_id: 0
      },
      {
        id: 4,
        name: 'Forêt de Meudon',
        thumbnail: 'stages/meudon.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '2.7',
        price: '59',
        category_id: 1,
        level_id: 2
      },
      {
        id: 5,
        name: 'Forêt de Tronçais',
        thumbnail: 'stages/troncais.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '4.0',
        price: '159',
        category_id: 1,
        level_id: 0
      },
      {
        id: 6,
        name: 'Forêt de Huelgoat',
        thumbnail: 'stages/huelgoat.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '2.4',
        price: '49',
        category_id: 1,
        level_id: 2
      },
      {
        id: 7,
        name: 'Forêt de Paimpont',
        thumbnail: 'stages/paimpont.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '3.7',
        price: '149',
        category_id: 1,
        level_id: 0
      },
      {
        id: 8,
        name: 'Forêt d\'Iraty',
        thumbnail: 'stages/iraty.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '4.8',
        price: '189',
        category_id: 1,
        level_id: 2
      },
      {
        id: 9,
        name: 'Ballon d\'Alsace',
        thumbnail: 'stages/ballon-alsace.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '4.7',
        price: '129',
        category_id: 2,
        level_id: 1
      },
      // {
      //   id: 10,
      //   name: 'Montagne',
      //   thumbnail: 'location-1.jpg',
      //   place: '',
      //   description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
      //   rating: '4.7',
      //   price: '129',
      //   category_id: 2,
      //   level_id: 0
      // },
      // {
      //   id: 11,
      //   name: 'Montagne',
      //   thumbnail: 'location-1.jpg',
      //   place: '',
      //   description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
      //   rating: '4.7',
      //   price: '129',
      //   category_id: 2,
      //   level_id: 2
      // },
      // {
      //   id: 12,
      //   name: 'Montagne',
      //   thumbnail: 'location-1.jpg',
      //   place: 'Yvelines, France',
      //   description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
      //   rating: '4.7',
      //   price: '129',
      //   category_id: 2,
      //   level_id: 0
      // },
      {
        id: 13,
        name: 'Lac Lémans',
        thumbnail: 'location-1.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '4.2',
        price: '99',
        category_id: 3,
        level_id: 2
      },
      {
        id: 14,
        name: 'Lac de Lauzon',
        thumbnail: 'stages/lauzon.jpg',
        place: '',
        description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
        rating: '4.0',
        price: '179',
        category_id: 3,
        level_id: 1
      },
      // {
      //   id: 15,
      //   name: 'Lac',
      //   thumbnail: 'location-1.jpg',
      //   place: 'Yvelines, France',
      //   description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
      //   rating: '4.7',
      //   price: '129',
      //   category_id: 3,
      //   level_id: 0
      // },
      // {
      //   id: 16,
      //   name: 'Lac',
      //   thumbnail: 'location-1.jpg',
      //   place: 'Yvelines, France',
      //   description: 'Presque un esprit de vacances, mais le confort en moins. Stage de survie familial pour les plus braves !',
      //   rating: '4.7',
      //   price: '129',
      //   category_id: 3,
      //   level_id: 3
      // },
    ]
  },
  mutations: {
    SET_USER(state, payload) {
      return state.user.data = payload
    },
    SET_USER_PROFILE(state, payload) {
      return state.user.profile = payload
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_ARTICLES(state, payload) {
      return state.articles = payload
    },
    SET_LOCATIONS(state, payload) {
      return state.locations = payload
    },
    SET_LEVELS(state, payload) {
      return state.levels = payload
    },
  },
  actions: {
    fetchUser(context) {
      // Check for auth
      const user = firebase.auth().currentUser
      if (user) {
        firebase.firestore().collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              context.commit('SET_USER_PROFILE', doc.data())
            }
          })
        context.commit('SET_USER', user)
        context.commit('SET_LOGGED_IN', true)
      } else {
        context.commit('SET_LOGGED_IN', false)
      }
    },
    setUserProfile(context, userProfile) {
      context.commit('SET_USER_PROFILE', userProfile)
    },
    setArticles(context, articlesObject) {
      context.commit('SET_ARTICLES', articlesObject)
    },
    fetchArticles(context) {
      let articles;
      window.axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nomad-survie', {})
        .then(response => {
          articles = response.data.items
          articles.forEach(article => {
            article.content = article.content.replace(/<figure.*>.*?<\/figure>/ig, '');
            article.description = article.description.replace(/<figure.*>.*?<\/figure>/ig, '');
          })
          context.commit('SET_ARTICLES', articles)
        })
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },

})

export default store
