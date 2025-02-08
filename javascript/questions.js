

const questions =[
    {
    category: "Science",
    questions: [
        {
            question:"Quelle est la formule chimique de l'eau ?", options: ["H2O", "CO2", "NaCl", "O2"], correctanswer : 0,
           },
           
           {
               question:"Quelle est l'unité de mesure de l'énergie ?", options: ["Watt", "Joul", "Pascal", "Newton"], correctanswer : 1,
              },
   
              {
               question:"Quelle est la vitesse de la lumière dans le vide ?", options: ["3 000 km/s", " 30 000 km/s", "300 000 km/s ", "3 000 000 km/s"], correctanswer : 2,
              },
              {
               question:"Quel est le plus grand organe du corps humain", options: ["Le foie", "Le cerveau", "La peau", "Le cœur"], correctanswer : 2,
              },
              
              {
               question:"Quelle est la charge d'un électron ?", options: ["Positive", "Neutre", "Negative", "Variable"], correctanswer : 2,
              },
              {
               question:"Quel organe produit l'insuline ?", options: ["Le foie", "Le pancréas", "Les reins", "Le cœur"], correctanswer : 1,
              },
              {
               question:"Quelle planète est surnommée la planète rouge", options: ["Venus", "Mars", "Jupter", "Saturne"], correctanswer : 1,
              },
              {
               question:"Combien de planètes composent notre système solaire ? ", options: ["7", " 9", "10", " 8"], correctanswer : 3,
              },
              {
               question:"Quelle est la planète la plus proche du Soleil ?", options: ["Vénus", "Mars", "Mercure", "Terre"], correctanswer : 2,
              },
              {
               question:"Quel est le gaz le plus abondant dans l'atmosphère terrestre ?", options: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"], correctanswer : 1,
              },
              {
               question:"Quel est le nom de la théorie qui explique l'origine de l'univers ?", options: ["Théorie de l'évolution", "Théorie de la relativité", "Théorie du Big Bang", "Théorie des cordes"], correctanswer : 2,
              },
              {
               question:"Quel est le nom de la molécule qui porte l'information génétique dans les cellules ?", options: ["ARN", "Glucide", "Protéine", "ADN"], correctanswer : 3,
              },
              {
               question:"Quel est l'élément chimique le plus abondant dans l'univers ?", options: ["Hydrogène", "Oxygène", "Carbone", "Hélium"], correctanswer : 0,
              },
              {
               question:"Quel est le nom du phénomène qui explique pourquoi le ciel est bleu ?", options: ["Réfraction", "Diffusion", "Réflexion", "Absorption"], correctanswer : 1,
              },
              {
               question:"Quel est le nom de la réaction chimique qui absorbe de l'énergie sous forme de chaleur ?", options: ["Réaction endothermique", "Réaction exothermique", "Réaction d'oxydoréduction", "Réaction acide-base"], correctanswer : 0,
              },
              {
               question:"Quel est le symbole chimique de l'or ?", options: ["Au", "Ag", "Fe", "Cu"], correctanswer : 0,
              },
              {
               question:"Quelle est la planète la plus chaude du système solaire ?", options: ["Mercure", "Jupiter", "Mars", "Venus"], correctanswer : 0,
              },
              {
               question:"Quel est l'élément principal dans le diamant ?", options: ["Fer", "Calcium", "Silice", "Carbone"], correctanswer : 3,
              },
              {
               question:"Quel est le nom de la galaxie dans laquelle se trouve la Terre ?", options: ["Andromède", "Voie Lactée", "Orion", "Sombrero"], correctanswer : 1,
              },
              {
               question:"Quel est le nom du processus de division cellulaire?", options: ["Transcription", "Méiose", "Réplication", "Mitose"], correctanswer : 3,
              },
              {
               question:"Quel est l'organe responsable de la filtration du sang ?", options: ["Cœur", "Poumon", "Rein", "Foie"], correctanswer : 2,
              },
              {
               question:"Quel est le nom de la molécule qui stocke l'énergie dans les cellules ?", options: ["ADN", "ARN", "ATP", "Glucose"], correctanswer : 2,
              },
              {
               question:"Quel est le nom de la couche protectrice de la Terre contre les UV ?", options: ["Troposphère", "Stratosphère", "Ozonosphère", "Ionosphère"], correctanswer : 2,
              },
              {
               question:"Quel est le nom du supercontinent qui existait il y a 300 millions d'années ?", options: ["Pangée", "Gondwana", "Laurasia", "Rodinia"], correctanswer : 0,
              },
              {
               question:"Quel est le nom de la couche de la Terre où se trouve la vie ?", options: ["Hydrosphère", "Lithosphère", "Biosphère", "Atmosphère"], correctanswer : 2,
              },
              {
               question:"Quel est le nom du phénomène où la Lune bloque la lumière du Soleil ?", options: ["Éclipse lunaire", "Éclipse solaire", "Nouvelle Lune", "Pleine Lune"], correctanswer : 1,
              },
              {
               question:"Quel est l'organe responsable de la production des globules rouges ?", options: ["Foie", "Pancréas", "Rate", "Moelle osseuse"], correctanswer : 3,
              },
              {
               question:"Quel est le nom de la particule qui compose la lumière ?", options: ["Électron", "Photon", "Proton", "Neutron"], correctanswer : 1,
              },
              {
               question:"Quel est le nom du composant principal d'un ordinateur qui effectue les calculs ?", options: ["Carte graphique", "Processeur", "Disque dur", "RAM"], correctanswer : 1,
              },
              {
               question:"Quel est le nom du système d'exploitation open source basé sur Linux ?", options: ["Windows", "macOS", "Ubuntu", "iOS"], correctanswer : 2,
              },
              {
               question:"Quel est le nom du protocole utilisé pour accéder aux pages web ?", options: ["FTP", "HTTP", "SMTP", "TCP"], correctanswer : 1,
              },
              {
               question:"Quel est le nom du format de fichier compressé couramment utilisé ?", options: ["TXT", "MP3", "PDF", "ZIP"], correctanswer : 1,
              },
              {
               question:"Quel langage est utilisé pour interagir avec les bases de données ?", options: ["Python", "Ruby", "Java", "SQL"], correctanswer : 3,
              },
              {
               question:"Quel est le nom de l'élément chimique le plus léger ?", options: ["Hélium", "Hydrogène", "Oxygène", "Carbone"], correctanswer : 1,
              },
              {
               question:"Quel est le nom de la couche la plus interne de la Terre ?", options: ["Croûte", "Manteau", "Noyau", "Lithosphère"], correctanswer : 2,
              },
              {
               question:"Quel est le nom de la plus grande forêt tropicale du monde ?", options: ["Forêt amazonienne", "Forêt du Congo", "Forêt boréale", "Forêt de Bornéo"], correctanswer : 0,
              },
              {
               question:"Quel organe chez les plantes produit des graines ?", options: ["Les racines", "Les feuilles", "Les fleurs", "Les tiges"], correctanswer : 2,
              },
              {
               question:"Quelle est la principale fonction des racines d'une plante ?", options: ["Produire de l'oxygène", "Absorber l'eau et les nutriments", "Protéger la plante", "Créer des fleurs"], correctanswer : 1,
              },
              {
               question:"Les abeilles sont essentielles à l'environnement parce qu'elles :", options: ["Chassent les prédateurs", "Pollinisent les plantes", "Construisent des nids", "Mangent des feuilles"], correctanswer : 1,
              },
              {
               question:"Quel est le nom du phénomène où un liquide devient gazeux ?", options: ["Solidification", "Condensation", "Fusion", "Vaporisation"], correctanswer : 3,
              },
              {
               question:"Quel est le plus grand océan de la Terre ?", options: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"], correctanswer : 3,
              },
              {
               question:"Quel phénomène fait tourner la Terre sur elle-même ?", options: ["La force centrifuge", "La gravité", "L'inertie", "L'attraction lunaire"], correctanswer : 2,
              },
              {
               question:"Quel est l'organe responsable de l'équilibre ?", options: ["Oreilles", "Cerveau", "Yeux", "Cœur"], correctanswer : 0,
              },
              {
               question:"Quelle planète a des anneaux visibles ?", options: ["Jupiter", "Mars", "Saturne", "Vénus"], correctanswer : 2,
              },
    ]
},
{
    category :"Histoire",
    questions :[
        {
            question: "Qui a découvert l'Amérique en 1492 ?",  options: ["Marco Polo", "Christophe Colomb", "Vasco de Gama", "Ferdinand Magellan"], 
            correctanswer: 1,
        },
        {
            question: "Quel général a perdu à la bataille de Waterloo ?", 
            options: ["Napoléon Bonaparte", "George Washington", "Hannibal", "Jules César"], 
            correctanswer: 0,
        },
        {
            question: "En quelle année a eu lieu la Révolution Américaine ?", 
            options: ["1776", "1789", "1804", "1848"], 
            correctanswer: 0,
        },
        {
            question: "Qui a été le premier président des États-Unis ?", 
            options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Franklin D. Roosevelt"], 
            correctanswer: 1,
        },
        {
            question: "Quand a eu lieu la Première Guerre mondiale ?", 
            options: ["1912-1917", "1914-1918", "1920-1924", "1939-1945"], 
            correctanswer: 1,
        },
        {
            question: "Quel événement a marqué la fin du Moyen Âge ?", 
            options: ["La chute de Constantinople", "La Révolution Française", "L'invention de l'imprimerie", "La découverte de l'Amérique"], 
            correctanswer: 0,
        },
        {
            question: "Qui a écrit la Déclaration d'Indépendance des États-Unis ?", 
            options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "Abraham Lincoln"], 
            correctanswer: 2,
        },
        {
            question: "Qui a été assassiné le 28 juin 1914, déclenchant la Première Guerre mondiale ?", 
            options: ["Franz Ferdinand", "Winston Churchill", "Mahatma Gandhi", "Abraham Lincoln"], 
            correctanswer: 0,
        },
        {
            question: "Quel mouvement a été initié par Martin Luther en 1517 ?", 
            options: ["Réforme protestante", "Révolution industrielle", "Renaissance", "Révolution américaine"], 
            correctanswer: 0,
        },
        {
            question: "Quel empire a été dirigé par Alexandre le Grand ?", 
            options: ["Empire romain", "Empire perse", "Empire grec", "Empire mongol"], 
            correctanswer: 2,
        },
        {
            question: "Quel événement a eu lieu le 7 décembre 1941 ?", 
            options: ["L'attaque de Pearl Harbor", "Le lancement de la bombe atomique", "La libération de Paris", "La signature de l'armistice de la Seconde Guerre mondiale"], 
            correctanswer: 0,
        },
        {
            question: "Qui a inventé l'ampoule électrique ?", 
            options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"], 
            correctanswer: 1,
        },

        {
            question: "En quelle année l'Algérie a-t-elle obtenu son indépendance ?", 
            options: ["1954", "1962", "1960", "1958"], 
            correctanswer: 1,
        },
        {
            question: "Qui était le premier président de l'Algérie indépendante ?", 
            options: ["Ahmed Ben Bella", "Houari Boumédiène", "Abdelaziz Bouteflika", "Ali Kafi"], 
            correctanswer: 0,
        },
        {
            question: "Quel événement marquant a eu lieu le 1er novembre 1954 en Algérie ?", 
            options: ["Le début de la guerre de libération", "La signature des accords d'Evian", "La victoire de l'indépendance", "La proclamation de la république"], 
            correctanswer: 0,
        },
        {
            question: "Quel pays a colonisé l'Algérie ?", 
            options: ["La France", "L'Italie", "L'Espagne", "Le Royaume-Uni"], 
            correctanswer: 0,
        },
        {
            question: "Quel leader algérien a joué un rôle clé dans la révolution contre la colonisation ?", 
            options: ["Abdelkader", "Ferhat Abbas", "Ali La Pointe", "Ahmed Ben Bella"], 
            correctanswer: 3,
        },
        {
            question: "Quand ont été signés les accords d'Evian ?", 
            options: ["1962", "1954", "1960", "1956"], 
            correctanswer: 0,
        },
        
        {
            question: "Quand a eu lieu le débarquement en Normandie ?", 
            options: ["6 juin 1944", "7 décembre 1941", "1er septembre 1939", "8 mai 1945"], 
            correctanswer: 0,
        },
        {
            question: "Quel événement a marqué le début de la Seconde Guerre mondiale ?", 
            options: ["L'attaque de Pearl Harbor", "L'invasion de la Pologne par l'Allemagne", "La signature de l'armistice", "Le débarquement en Normandie"], 
            correctanswer: 1,
        },
        {
            question: "Qui était le leader de l'Allemagne pendant la Seconde Guerre mondiale ?", 
            options: ["Adolf Hitler", "Joseph Staline", "Benito Mussolini", "Winston Churchill"], 
            correctanswer: 0,
        },
        {
            question: "Quel pays a été attaqué en premier par l'Allemagne nazie ?", 
            options: ["France", "Pologne", "Soviétique", "Royaume-Uni"], 
            correctanswer: 1,
        },
        {
            question: "Quel événement a eu lieu le 7 décembre 1941 ?", 
            options: ["L'attaque de Pearl Harbor", "La capitulation de l'Allemagne", "La conférence de Yalta", "Le bombardement d'Hiroshima"], 
            correctanswer: 0,
        },
        {
            question: "Quel événement a marqué la fin de la Seconde Guerre mondiale en Europe ?", 
            options: ["La défaite de l'Allemagne", "Le débarquement en Normandie", "La bataille de Stalingrad", "La signature de l'armistice"], 
            correctanswer: 0,
        },
        {
            question: "Qui a formulé la théorie de la relativité ?", 
            options: ["Isaac Newton", "Galilée", "Albert Einstein", "Marie Curie"], 
            correctanswer: 2,
        },
        {
            question: "Qui a découvert la loi de la gravitation universelle ?", 
            options: ["Albert Einstein", "Isaac Newton", "Galilée", "Nicolas Copernic"], 
            correctanswer: 1,
        },
        {
            question: "Quel scientifique est connu pour ses travaux sur la radioactivité ?", 
            options: ["Albert Einstein", "Marie Curie", "Charles Darwin", "Nikola Tesla"], 
            correctanswer: 1,
        },
        {
            question: "Quel est le nom de la première mission humaine sur la Lune ?", 
            options: ["Apollo 11", "Apollo 13", "Gemini 5", "Luna 2"], 
            correctanswer: 0,
        },
        {
            question: "Qui a inventé le téléphone ?", 
            options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Guglielmo Marconi"], 
            correctanswer: 2,
        },
        {
            question: "Quelle est la planète la plus proche du Soleil ?", 
            options: ["Vénus", "Terre", "Mercure", "Mars"], 
            correctanswer: 2,
        },
        {
            question: "En quelle année l'homme a-t-il marché pour la première fois sur la Lune ?", 
            options: ["1969", "1959", "1972", "1984"], 
            correctanswer: 0,
        },

    ]
},

{
    category:"Geographie",
    questions:[
        {
            question: "Quelle est la capitale de la France ?", 
            options: ["Berlin", "Madrid", "Paris", "Rome"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le plus grand océan du monde ?", 
            options: ["Atlantique", "Indien", "Arctique", "Pacifique"], 
            correctanswer: 3,
         },
         {
            question: "Quel pays est le plus vaste du monde en termes de superficie ?", 
            options: ["Canada", "Russie", "Chine", "États-Unis"], 
            correctanswer: 1,
         },
         {
            question: "Dans quel continent se trouve le désert du Sahara ?", 
            options: ["Asie", "Afrique", "Amérique", "Europe"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la plus grande île du monde ?", 
            options: ["Borneo", "Greenland", "Madagascar", "Tasmanie"], 
            correctanswer: 1,
         },

         {
            question: "Quel est le plus long fleuve du monde ?", 
            options: ["Nil", "Amazon", "Yangtsé", "Mississippi"], 
            correctanswer: 1,
         },
         {
            question: "Quel est le pays le plus peuplé du monde ?", 
            options: ["Inde", "Chine", "États-Unis", "Brésil"], 
            correctanswer: 1,
         },
         {
            question: "Laquelle de ces montagnes est la plus haute ?", 
            options: ["Mont Everest", "K2", "Mont Kilimandjaro", "Mont Fuji"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le plus grand lac d'Afrique ?", 
            options: ["Lac Victoria", "Lac Tanganyika", "Lac Malawi", "Lac Tchad"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le nom du canal qui relie la mer Méditerranée et la mer Rouge ?", 
            options: ["Canal de Panama", "Canal de Suez", "Canal de Kiel", "Canal de Corinth"], 
            correctanswer: 1,
         },
         {
            question: "Dans quel océan se trouve l'île de Madagascar ?", 
            options: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la capitale du Canada ?", 
            options: ["Toronto", "Ottawa", "Vancouver", "Montréal"], 
            correctanswer: 1,
         },
         {
            question: "Quel est le plus petit pays du monde ?", 
            options: ["Monaco", "Vatican", "Nauru", "Saint-Marin"], 
            correctanswer: 1,
         },

         {
            question: "Quel est le plus grand pays d'Afrique en termes de superficie ?", 
            options: ["Algérie", "Nigeria", "Égypte", "Soudan"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le nom de la chaîne de montagnes qui sépare l'Europe de l'Asie ?", 
            options: ["Andes", "Himalayas", "Alpes", "Oural"], 
            correctanswer: 3,
         },
         {
            question: "Quel est le pays qui possède la plus grande forêt tropicale du monde ?", 
            options: ["Brésil", "Indonésie", "République Démocratique du Congo", "Amazonie"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la capitale de l'Australie ?", 
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le plus grand désert du monde ?", 
            options: ["Sahara", "Gobi", "Karakum", "Antarctique"], 
            correctanswer: 3,
         },
         {
            question: "Quel est le nom du plus grand archipel du monde ?", 
            options: ["Indonésie", "Philippines", "Japon", "Maldives"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le pays le plus méridional du monde ?", 
            options: ["Argentine", "Chili", "Nouvelle-Zélande", "Antarctique"], 
            correctanswer: 3,
         },
         {
            question: "Quel est le plus grand pays d'Amérique du Sud ?", 
            options: ["Argentine", "Brésil", "Colombie", "Chili"], 
            correctanswer: 1,
         },

         {
            question: "Quel est le pays le plus élevé en moyenne altitude ?", 
            options: ["Chili", "Népal", "Bolivie", "Tibet"], 
            correctanswer: 2,
         },
         {
            question: "Lequel de ces pays est un archipel ?", 
            options: ["Inde", "Grèce", "Japon", "Australie"], 
            correctanswer: 2,
         },
         {
            question: "Dans quel pays se trouve la célèbre ville de Petra ?", 
            options: ["Syrie", "Egypte", "Jordanie", "Liban"], 
            correctanswer: 2,
         },
         {
            question: "Quelle est la capitale du Japon ?", 
            options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le plus grand pays d'Asie en termes de superficie ?", 
            options: ["Chine", "Inde", "Russie", "Kazakhstan"], 
            correctanswer: 2,
         },
         {
            question: "Quel est l'océan qui borde l'est des États-Unis ?", 
            options: ["Atlantique", "Indien", "Pacifique", "Arctique"], 
            correctanswer: 0,
         },
         {
            question: "Quel pays est divisé par la ligne de l'Équateur ?", 
            options: ["Brésil", "Indonésie", "Colombie", "Kénya"], 
            correctanswer: 0,
         },
         {
            question: "Le Mont Kilimandjaro se trouve dans quel pays ?", 
            options: ["Kenya", "Tanzanie", "Ouganda", "Rwanda"], 
            correctanswer: 1,
         },
         {
            question: "Quel est le nom du canal qui sépare la France du Royaume-Uni ?", 
            options: ["Canal de Panama", "Canal de Suez", "Canal de la Manche", "Canal de Kiel"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le plus grand pays d'Océanie ?", 
            options: ["Australie", "Papouasie-Nouvelle-Guinée", "Fidji", "Samoa"], 
            correctanswer: 0,
         },

         {
            question: "Quelle est la capitale de l'Italie ?", 
            options: ["Milan", "Rome", "Florence", "Venise"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la capitale de l'Inde ?", 
            options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"], 
            correctanswer: 1,
         },
         {
            question: "Dans quelle ville se trouve la célèbre tour de Pise ?", 
            options: ["Rome", "Venise", "Pise", "Florence"], 
            correctanswer: 2,
         },
         {
            question: "Quelle est la capitale du Canada ?", 
            options: ["Toronto", "Montréal", "Vancouver", "Ottawa"], 
            correctanswer: 3,
         },
         {
            question: "Quelle est la capitale du Royaume-Uni ?", 
            options: ["Liverpool", "Manchester", "Londres", "Edimbourg"], 
            correctanswer: 2,
         },
         {
            question: "Quelle est la capitale de la Chine ?", 
            options: ["Shanghai", "Hong Kong", "Beijing", "Chengdu"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le nom de la capitale de l'Australie ?", 
            options: ["Sydney", "Melbourne", "Brisbane", "Canberra"], 
            correctanswer: 3,
         },
         {
            question: "Quelle ville est la capitale de la Grèce ?", 
            options: ["Athènes", "Thessalonique", "Crète", "Santorin"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la capitale du Japon ?", 
            options: ["Osaka", "Tokyo", "Hiroshima", "Kyoto"], 
            correctanswer: 1,
         },
         {
            question: "Dans quelle ville se trouve la célèbre place Rouge ?", 
            options: ["Saint-Pétersbourg", "Moscou", "Kiev", "Tbilissi"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la capitale de l'Espagne ?", 
            options: ["Barcelone", "Madrid", "Séville", "Valence"], 
            correctanswer: 1,
         },
         {
            question: "Dans quelle ville se trouve la célèbre Sagrada Família ?", 
            options: ["Madrid", "Barcelone", "Valence", "Malaga"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la capitale du Mexique ?", 
            options: ["Cancún", "Mexico", "Guadalajara", "Monterrey"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la capitale du Vietnam ?", 
            options: ["Ho Chi Minh-Ville", "Hanoi", "Da Nang", "Hue"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la capitale du Brésil ?", 
            options: ["Rio de Janeiro", "Brasilia", "São Paulo", "Salvador"], 
            correctanswer: 1,
         },
         {
            question: "Dans quelle ville se trouve le célèbre Colisée ?", 
            options: ["Rome", "Milan", "Naples", "Florence"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la capitale de l'Afrique du Sud ?", 
            options: ["Johannesburg", "Pretoria", "Le Cap", "Durban"], 
            correctanswer: 1,
         },
         {
            question: "Dans quelle ville se trouve la Grande Muraille de Chine ?", 
            options: ["Beijing", "Xi'an", "Shanghai", "Chengdu"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la capitale de la Turquie ?", 
            options: ["Istanbul", "Ankara", "Izmir", "Antalya"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la capitale de l'Argentine ?", 
            options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"], 
            correctanswer: 0,
         },        
         
    ]
},
{
    category:"Culture Génerale",
    questions:[
        {
            question: "Quel est le plus grand océan du monde ?", 
            options: ["Atlantique", "Indien", "Arctique", "Pacifique"], 
            correctanswer: 3,
         },
         {
            question: "Qui a peint la 'La Joconde' ?", 
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le nom du plus célèbre moteur de recherche sur Internet ?", 
            options: ["Yahoo", "Google", "Bing", "DuckDuckGo"], 
            correctanswer: 1,
         },
         {
            question: "Qui a écrit le livre '1984' ?", 
            options: ["George Orwell", "J.K. Rowling", "Hemingway", "Mark Twain"], 
            correctanswer: 0,
         },
         {
            question: "En quelle année l'Empire romain est-il tombé ?", 
            options: ["476", "1492", "1066", "732"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le plus long fleuve du monde ?", 
            options: ["Amazon", "Nil", "Mississippi", "Yangtze"], 
            correctanswer: 0,
         },
         {
            question: "Quel film a remporté l'Oscar du meilleur film en 1997 ?", 
            options: ["Titanic", "Forrest Gump", "The Shawshank Redemption", "Gladiator"], 
            correctanswer: 0,
         },
         {
            question: "Qui a inventé la théorie de la relativité ?", 
            options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"], 
            correctanswer: 2,
         },
         {
            question: "Quelle est la capitale de l'Australie ?", 
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], 
            correctanswer: 2,
         },
         {
            question: "Qui est le créateur du célèbre personnage de dessin animé Mickey Mouse ?", 
            options: ["Walt Disney", "Stan Lee", "Hayao Miyazaki", "Chuck Jones"], 
            correctanswer: 0,
         },
         {
            question: "Qui a découvert la gravité ?", 
            options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"], 
            correctanswer: 1,
         },
         {
            question: "Quel est le plus grand désert du monde ?", 
            options: ["Sahara", "Arctique", "Antarctique", "Karakum"], 
            correctanswer: 2,
         },
         {
            question: "Qui a écrit 'Roméo et Juliette' ?", 
            options: ["William Shakespeare", "Charles Dickens", "Victor Hugo", "Jane Austen"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la capitale de l'Italie ?", 
            options: ["Rome", "Milan", "Venise", "Florence"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le nom du premier satellite artificiel lancé dans l'espace ?", 
            options: ["Sputnik 1", "Apollo 11", "Hubble", "Explorer 1"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le nom de la première femme à avoir obtenu un prix Nobel ?", 
            options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Dorothy Hodgkin"], 
            correctanswer: 0,
         },
         {
            question: "Quel pays est connu pour sa cuisine à base de sushi ?", 
            options: ["Corée du Sud", "Chine", "Japon", "Thaïlande"], 
            correctanswer: 2,
         },
         {
            question: "Quel film d'animation a été le premier à être nominé pour l'Oscar du meilleur film ?", 
            options: ["Toy Story", "Shrek", "Coco", "Le Roi Lion"], 
            correctanswer: 0,
         },
         {
            question: "Qui a écrit 'La Divine Comédie' ?", 
            options: ["Dante Alighieri", "Homer", "Virgile", "Ovide"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la plus grande île du monde ?", 
            options: ["Groenland", "Australie", "Madagascar", "Borneéo"], 
            correctanswer: 0,
         },
         {
            question: "Qui a inventé le premier avion ?", 
            options: ["Charles Lindbergh", "Wright brothers", "Amelia Earhart", "Howard Hughes"], 
            correctanswer: 1,
         },
         
         {
            question: "Quel est le nom du premier homme à avoir marché sur la Lune ?", 
            options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], 
            correctanswer: 1,
         },
         {
            question: "Quel est le nom de la série télévisée qui suit les aventures de Walter White ?", 
            options: ["Breaking Bad", "The Sopranos", "Friends", "Stranger Things"], 
            correctanswer: 0,
         },
         {
            question: "Qui a écrit 'Les Fleurs du mal' ?", 
            options: ["Charles Baudelaire", "Paul Verlaine", "Victor Hugo", "Arthur Rimbaud"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la capitale du Canada ?", 
            options: ["Ottawa", "Toronto", "Vancouver", "Montréal"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le nom de l'instrument de musique joué par un violoniste ?", 
            options: ["Piano", "Guitare", "Violon", "Flûte"], 
            correctanswer: 2,
         },
         {
            question: "Quel est l'élément chimique avec le symbole 'Fe' ?", 
            options: ["Fer", "Fluor", "Francium", "Fermium"], 
            correctanswer: 0,
         },
         {
            question: "Qui a réalisé le film 'Les Temps Modernes' ?", 
            options: ["Charlie Chaplin", "Buster Keaton", "Harold Lloyd", "Stan Laurel"], 
            correctanswer: 0,
         },
         {
            question: "Dans quel pays peut-on visiter le site historique de Machu Picchu ?", 
            options: ["Chili", "Brésil", "Pérou", "Colombie"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le plus grand lac d'Afrique ?", 
            options: ["Lac Victoria", "Lac Tanganyika", "Lac Malawi", "Lac Tchad"], 
            correctanswer: 0,
         },
         {
            question: "Qui a écrit 'Le Petit Prince' ?", 
            options: ["Antoine de Saint-Exupéry", "Jules Verne", "Albert Camus", "Victor Hugo"], 
            correctanswer: 0,
         },
         {
            question: "Quelle est la capitale de l'Égypte ?", 
            options: ["Le Caire", "Alexandrie", "Louxor", "Gizeh"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le nom de l'élément chimique avec le symbole 'Na' ?", 
            options: ["Natrium (Sodium)", "Néon", "Nickel", "Nytrogène"], 
            correctanswer: 0,
         },
         {
            question: "En quelle année la Révolution française a-t-elle commencé ?", 
            options: ["1789", "1776", "1799", "1804"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le plus grand mammifère terrestre ?", 
            options: ["Éléphant d'Afrique", "Girafe", "Rhinocéros", "Bison"], 
            correctanswer: 0,
         },
         {
            question: "Qui a inventé la machine à vapeur ?", 
            options: ["James Watt", "Isaac Newton", "Nikola Tesla", "Albert Einstein"], 
            correctanswer: 0,
         },
         {
            question: "Dans quel pays se trouve la Grande Barrière de Corail ?", 
            options: ["Australie", "États-Unis", "Brésil", "Mexique"], 
            correctanswer: 0,
         },
         {
            question: "Quel artiste a créé la célèbre peinture 'Guernica' ?", 
            options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], 
            correctanswer: 1,
         },
         {
            question: "Qui a écrit 'Le Seigneur des Anneaux' ?", 
            options: ["C.S. Lewis", "George R.R. Martin", "J.R.R. Tolkien", "J.K. Rowling"], 
            correctanswer: 2,
         },
         {
            question: "Quel est le plus grand animal terrestre ?", 
            options: ["Éléphant d'Afrique", "Girafe", "Rhinocéros", "Bison"], 
            correctanswer: 0,
         },
         {
            question: "Quel animal est connu pour sa capacité à changer de couleur ?", 
            options: ["Caméléon", "Lézard", "Pieuvre", "Aigle"], 
            correctanswer: 0,
         },
         {
            question: "Quel est l'animal le plus rapide du monde ?", 
            options: ["Guépard", "Aigle royal", "Léopard", "Tigre"], 
            correctanswer: 0,
         },
         {
            question: "Quel est le plus grand mammifère marin ?", 
            options: ["Orque", "Requin baleine", "Baleine bleue", "Dauphin"], 
            correctanswer: 2,
         },
         {
            question: "Les abeilles produisent du nectar pour faire quoi ?", 
            options: ["Construire des ruches", "Fabriquer du miel", "Se nourrir", "Attirer les fleurs"], 
            correctanswer: 1,
         },
         {
            question: "Quel est le nom de la plus grande espèce de requin ?", 
            options: ["Requin blanc", "Requin marteau", "Requin baleine", "Requin tigre"], 
            correctanswer: 2,
         },
         {
            question: "Quel animal est le plus grand prédateur terrestre ?", 
            options: ["Tigre", "Ours polaire", "Lion", "Grizzly"], 
            correctanswer: 1,
         },
         {
            question: "Quel est l'animal le plus lent du monde ?", 
            options: ["Paresseux", "Tortue", "Koala", "Escargot"], 
            correctanswer: 0,
         },
         {
            question: "Quel animal vit le plus longtemps ?", 
            options: ["Éléphant", "Tortue géante des Galápagos", "Orque", "Perroquet"], 
            correctanswer: 1,
         },
         {
            question: "Quelle est la principale alimentation des pandas ?", 
            options: ["Bambou", "Viande", "Insectes", "Fruits"], 
            correctanswer: 0,
         },
         
         
         
         
         
    ]

},

];