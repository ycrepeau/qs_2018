qs_2018
=======



![Page demo](https://www.dropbox.com/s/lvdkce5fshos2gh/Capture%20d%27%C3%A9cran%202018-01-30%2020.21.57.png?raw=1)


Description
-----------

Ce projet est un banc de test. Il vise à mettre en place des outils
permettant de prototyper rapidement du contenu web reliées aux activités
de Québec solidaire.

L'objectif est aussi d'aider les utilisateurRICEs de ce projet à rapidement
maîtriser les outils suivants:

* Git (https://git-scm.com/)
* Node (https://nodejs.org)
* Gulp (https://gulpjs.com/)
* Sass (http://sass-lang.com/)
* Haml (http://haml.info/)
* Coffescript (http://coffeescript.org/)

Autres outils:
* Zurb Foundation (https://foundation.zurb.com/)
* jQuery (https://jquery.com/)
* SVG (https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics)

Git
---

Git est un gestionnaire de code source. Le dépôt central de ce projet est sur
GitHub (il aurait pu être hébergé ailleurs). Si vous comptez vous amuser avec
ce projet, il vous faudra les _cloner_, c'est à dire en faire une copie locale
sur votre machine.

Node
----

Node est un outil permettant d'exécuter des scripts écrits dans le langage Javascript. 
Javascript peut être exécuté dans un fureteur mais il peut également être interprété
du côté serveur ou sur l'invite de commande. C'est cette dernière caractéristique qui
est utilisée dans ce projet.

Gulp
----

Gulp est un gestionnaire de tâche écrit en Javascript. C'est un outil de développement qui
exécutes de très nombreuses tâches dont le but final est de produire des fichiers html, css et
javascript qui pourront être déployés sur un site Web.

Sass
----

Sass est un outil permettant de compiler des fichiers *.sass ou *.scss pour produire un fichier
app.css unifié. Il y a de très nombreux avantages à travailler avec Sass au lieu de coder le CSS
directement. Sass supporte les variables. Très commode quand on a à manipuler des éléments graphiques
qui doivent tous être de la même couleur. Au lieu d'utiliser un code de couleur (#123456) à de nombreux
endroits, on indique à un seul endroit la couleur (affectation à une variable) et on utilise la variable
par après.

Haml
----

Haml permet d'écrire du code HTML de manière très concise. C'est un langage qui dépend formellement de
l'indentation.

_Note:_ Le compilateur haml->html écrit en C (et utilisé par Node), ne marche pas. Il faut donc revenir à
l'implémentation écrite en Ruby. Il vous faudra vous assurer que Ruby est installé sur votre machine 
(si vous avez un Mac, pas de problème, c'est installé par défaut) et de là faire la commande "gem intall haml"
dans la fenêtre de commande.

INSTALLATION
============

Pré-requis
----------

Une machine de développement avec un éditeur texte (moi j'aime bien Visual Code de Microsoft, c'est gratuit, performant, ça marche sur Windows, Linux et bien entendu sur Mac).

Une fenêtre de commande (Terminal.app sur Mac)

Une installation fonctionnelle de Ruby (pour compiler le Haml) et de Node. Tant qu'à y être, installez aussi Python, comme ça vous aurez sous la main tous les environnement de scripting.

Assurez-vous que vous avez une bonne version de git.

Charger le projet
-----------------

Il s'agit de la commande git qui va cloner le présent projet sur votre machine. Tapez la commande:

````
    git clone git@github.com:ycrepeau/qs_2018.git  ou
    git clone https://github.com/ycrepeau/qs_2018.git
````

Initialiser le projet
---------------------

Une fois le projet cloné, allez dans le répertoire (cd nom_du_répertoire) et tapez la commande:

````
    npm install
````

Le fichier _package.json_ contient la liste de tous les modules de Node qui doivent être installés. Leur
installation prendra quelques minutes.

Profitez-en pour ouvrir une 2ème fenêtre et taper la commande:

````
    gem install haml
````

Ceci va installer le compilateur haml qui sera utilisé ultérieurement.

En théorie, le projet est maintenant prêt à être exécuté localement.

Démarrer le serveur
------------------

La commande:

````
    gulp
````

va:

1.  Installer les différentes bibilitothèques css et js utilisées dans le projet. Cette
    installation sera faite avec Bower

2.  Déclencher les différentes compilations. Les fichiers *.scss/*.sass seront compilés et
    deviendront le fichier app.css

3.  Copier certains éléments dans www/js. Ces éléments ont leur source dans les différents
    produits installés par Bower (et présents dans bower_components)

4.  Copier les images qu'on retrouve dans ./img vers ./www/img

5.  Utiliser le répertoire ./www pour fins de tests.

6.  Lancer le serveur en mode Live Reload, ce qui devrait faire démarrer votre
    fureteur par défaut et charger la page http://localhost:8000 

7.  Si vous modifiez un fichier, tout les processus de compilation sera automatiquement
    démarré et le fureteur recevra l'ordre de rafraichir la page concernée (d'où le nom
    LiveReload)

Note:

Le fichier http://localhost:8000/index3.html contient un exemple de ce qui est faisable avec le logo
de Québec solidaire. Le fichier ./haml/index3.haml constitue son code source.




Auteur et License d'utilisation
===============================

© 2018 Yanik Crépeau, tous les droits réservés

Vous êtes autoriséE à avoir du plaisir en copiant, examinant, modifiant et exécutant mon code.
