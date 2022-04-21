// Entrée : une chaine de caractères
// Sortie : un entier
function ajout(chaineDeNombres) {
    if (chaineDeNombres.length === 0) return 0;
    const tableauDeNombres = chaineDeNombres.split(',').map(value => parseInt(value));
  return tableauDeNombres.reduce((previous, current) => previous + current, 0);
}


// ETAPE 1
// ajout() peut prendre 2 nombres, séparés par des virgules
// renvoie la somme des 2 nombres
console.log(ajout("")); // 0
console.log(ajout("1,2")); // 3

// ETAPE 2
// ajout() peut prendre plus que 2 nombres en entrée
// console.log(ajout("1,2,1,6")); // 10

// ETAPE 3
// ajout() peut prendre 2 nombres séparés par des virgules OU des retours à la ligne (\n)
// console.log(ajout("1\n2,3")) // 6
// console.log(ajout("1,\n")) // ERROR

// ETAPE 4
// ajout() supporte différents délimiteurs
// pour changer le délimiteur, la chaine en paramètre, suivra le pattern : "//[delimiter]\n[numbers…]"
// tous les anciens scénarios doivent être supportés
// console.log(ajout("//;\n1;2")) // 3

// ETAPE 5
// ajout() doit jeter une exception "Les nombres négatifs ne sont pas autorisés : " quand un nombre négatif est passé en paramètres
// et afficher le / les nombres négatifs en question
// console.log(ajout("-1,5\n-3")) // Les nombres négatifs ne sont pas autorisés : -1, -3

// ETAPE 6
// Les nombres plus grands que 1000 (compris) doivent être ignorés
// console.log(ajout("2,1000,3")) // 5

// ETAPE 7
// Les délimiteurs peuvent être de n'importe quelle taille et suivent le format : "//[delimiter]\n"
// console.log(ajout("//[***]\n1***2***3")) // 6

// ETAPE 8
// Autoriser les délimiteurs multiples en suivant le pattern : "//[delim1][delim2]\n"
// console.log(ajout("//[*][%]\n1*2%3")) // 6

// ETAPE 9
// Autoriser les délimiteurs mutliples de n'importe quelle taille
// console.log(ajout("//[**][---]\n1---2**3")) // 6
