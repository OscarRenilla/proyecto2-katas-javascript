/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.*/

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  // insert code
  const findMuntan = [];
  for (let mutant of mutants) {
    if (mutant.power === power) {
        findMuntan.push(mutant.name);
    }
  }
  if (findMuntan.length > 0) {
    return `Mutante(s) con el poder de ${power}: ${findMuntan}`;
  } else {
    return `No hay ningún mutante son el poder de ${power}`; 
  }
}
console.log(findMutantByPower(mutants, 'telekinesis'));
console.log(findMutantByPower(mutants, 'laser vision'));