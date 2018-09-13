/* 
Réaliser un programme permettant d’effectuer les opérations suivantes :
Soit une classe de 5 élèves : 
John, 24ans (const john  = 24;)
Barbara, 28 ans (const barbara = 28;) etc...
Patrick, 32 ans
Benjamin, 17 ans
Sylvie, 36 ans
Calculer la somme des âges 
Calculer la moyenne des âges
Calculer la différence d’âge entre le plus jeune élève et le plus vieux
Afficher “vrai” ou “faux” : la différence d’âge est supérieure à 10 ans
Afficher “vrai” ou “faux” : John et Benjamin ont moins de 25 ans
Créer une variable grâce à l’opérateur ternaire qui aura la valeur suivante : 
Si Sylvie a moins de 35 ans : “Il n’y a personne au dessus de 35 ans”
Si Sylvie a plus de 35 ans : “Au moins une personne a plus de 35 ans”
*/

const john = 24
const barbara = 28
const patrick = 32
const benjamin = 17
const sylvie = 36

const sumAge = john + barbara + patrick + benjamin + sylvie
console.log(sumAge)
const averageAge = sumAge / 5
console.log(averageAge)

const young = Math.min(john, barbara, patrick, benjamin, sylvie)
const old = Math.max(john, barbara, patrick, benjamin, sylvie)
const dif = old - young
console.log(dif)
console.log(dif > 10)
console.log(john < 25 && benjamin < 25)

const output = sylvie > 35 ? `Il n'y a personne au "dessus" de ${sylvie} ans` : 'Au moins une "personne" a plus de ' + sylvie + ' ans'
console.log(output)


console.log(Math.ceil(5.7))
console.log(Math.floor(5.7))
console.log(Math.round(5.7))
