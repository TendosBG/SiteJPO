import CryptoJS from 'crypto-js';
const indices = {
    "54" : "Vous cherchez désormais le cône qui faisait danser vos grands-parents (ou arrière grands-parents) dans les années 20 mais qu'est-ce que cela pourrait être ?",
    "65" : "Je sers à faire avancer les petits bateaux et je deviens amnésique à l'extinction des ordinateurs, qui suis-je ?",
    "73" : "Je peux stocker jusqu'à 2GB et ma marque porte le nom du genre musical de cette chanson, à vous de me trouver.",
    "6C" : "Je sers à tester des objets; ceux si sont parfois à vides, parfois en verre, parfois en cuivre, certains à la maison et d'autres dans les radios"
}

function Encrypt(string){

    const key = CryptoJS.enc.Utf8.parse('toto');

    const encrypted = CryptoJS.AES.encrypt(string, key);

    console.log('Encrypted Data:', encrypted.toString());
}

Encrypt("54");