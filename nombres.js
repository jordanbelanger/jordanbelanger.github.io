//déclare une variable pour contenir la somme (le total cumulé)
var somme = 0;  //au départ, elle égale zéro
var compte = 0;  //pour compter le nombre d'entrées
var reponse = true;  //initialise reponse à true pour entrer dans la boucle
var tblEntree = [];
 
//boucle pour demander les nombres
while (reponse) {
//ajoute la somme du nombre entré au total cumulé
tblEntree[compte] = parseInt(prompt("Insère un nombre :"));
//incrémente le compteur d'entrées
compte++;
//redemande pour éviter une boucle infinie
reponse = confirm("Veux-tu continuer ?");
}
 
//affiche tableau
console.log(tblEntree);
//calcule somme et min/max
for (let i=0; i < tblEntree.length; i++){
 somme = somme + tblEntree[i]; //somme cumulé
 console.log("somme cumulé = " + somme)
}

//afficher les valeurs
console.log("SOMME = " + somme);
console.log("NOMBRE D'ENTRÉES =" + compte);
console.log("MOYENNE =" + (somme / compte));
