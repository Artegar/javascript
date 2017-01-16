var myarray = [12, 5, 3, 2];
var somme = 0;
var affiche="";



for (var i = 0; i < myarray.length; i++) {
    affiche = affiche +'\n'+ myarray[i];
    somme += myarray[i];
    
}

alert(affiche);
'\n';
alert(somme);

