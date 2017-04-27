/*
Activité : gestion des contacts
*//////////////////////////////////////////////////////////////////////////////////////
/*              INITIALISATION DU GESTIONNAIRE DES CONTACTS                        */
/////////////////////////////////////////////////////////////////////////////////////
/*         Création de l'objet contact              */
//////////////////////////////////////////////////////
var contact = {
    // Initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    // Renvoie la description du contact
    decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

/*        Insertion des 2 contacts initiaux          */
///////////////////////////////////////////////////////
var contact1 = Object.create(contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");

/*        Création d'un tableau qui contiendra nos objets Contacts    */
////////////////////////////////////////////////////////////////////////
var Gestionnaire = [];

/*        On alimente le tableau Gestionnaire avec nos objets         */
////////////////////////////////////////////////////////////////////////
Gestionnaire.push(contact1);
Gestionnaire.push(contact2);


/////////////////////////////////////////////////////
/*           DEBUT DU PROGRAMME PRINCIPAL          */
/////////////////////////////////////////////////////
console.log ("Bienvenue dans le Gestionnaire des contacts !");
menu();
var choix = Number(prompt("Choisissez une option :"));

while (choix !== 0) { /// Tant que mon choix est différent de 0
    switch (choix){
        case 1: afficher(); // Affiche la liste des contacts
            break;

        case 2: ajout(); // Ajoute un nouveau contact
                menu();
            break;

        case 0: break; // ne fait rien

            default : console.log("Ce choix n'existe pas, veuillez recommencer !");
            menu();
            break;
    }
    choix = Number(prompt("Choisissez une option :"));
};
//// je suis sorti de la boucle cela veut dire que je quitte le programme
console.log("Merci d'avoir utiliser mon programme.... A bientôt !");
/////////////////////////////////////////////////////
/*          FIN DU PROGRAMME PRINCIPAL             */
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
/*              CREATION DES FONCTIONS UTILISEES DANS LE MENU                      */
/////////////////////////////////////////////////////////////////////////////////////
/*       Affichage des options du Menu */
/////////////////////////////////////////
function menu() {
    console.log ("\n 1 : Lister les contacts");
    console.log (" 2 : Ajouter un contact");
    console.log (" 0 : Quitter le Gestionnaire");

};

/*       Affiche du contenu du Gestionnaire    */
/////////////////////////////////////////////////
function afficher() {
    console.log ("\nVoici la liste de tous vos contacts :");
    Gestionnaire.forEach(function (liste) {

    console.log(liste.decrire()); // on utilise la méthode decrire créé dans nos objets

    }); // la parenthese fermante correspond à la la parenthese de la méthode forEach()

};

/*      Ajout d'un contact dans notre Gestionnaire     */
/////////////////////////////////////////////////////////
function ajout() {
    var reponse = "";
    var nom = prompt("Veuillez saisir le nom du nouveau contact : ");
    var prenom = prompt("Veuillez saisir le prenom du nouveau contact : ");

    var autreContact = Object.create(contact);
    autreContact.init(nom, prenom);
    Gestionnaire.push(autreContact);
    reponse = "Le nouveau contact a été ajouté.";
    return console.log(reponse);
};

/////////////////////////////////////////////////////////////////////////////////////
