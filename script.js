function check() {
    let enter;

    enter = document.getElementById("key");

    enter = enter.value;

    let encoder = new TextEncoder();
    let data = encoder.encode(enter);

    crypto.subtle.digest('SHA-256', data).then(hash => {
        let hashArray = Array.from(new Uint8Array(hash));
        let hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        switch (hashHex) {
            case '2fca346db656187102ce806ac732e06a62df0dbb2829e511a770556d398e1a6e':
                console.log("Vous cherchez désormais le cône qui faisait danser vos grands-parents (ou arrière grands-parents) dans les années 20 mais qu’est-ce que cela pourrait être ?");
                let p1 = document.getElementById("1");
                p1.innerHTML = "Vous cherchez désormais le cône qui faisait danser vos grands-parents (ou arrière grands-parents) dans les années 20 mais qu’est-ce que cela pourrait être ?";
                break;
            case '108c995b953c8a35561103e2014cf828eb654a99e310f87fab94c2f4b7d2a04f':
                console.log('Je sers à faire avancer les petits bateaux et je deviens amnésique à l’extinction des ordinateurs, qui suis-je');
                let p2 = document.getElementById("2");
                p2.innerHTML = "Je sers à faire avancer les petits bateaux et je deviens amnésique à l’extinction des ordinateurs, qui suis-je";
                break;
            case '96061e92f58e4bdcdee73df36183fe3ac64747c81c26f6c83aada8d2aabb1864':
                console.log('Je peux stocker jusqu’à 2GB et ma marque porte le nom d\'un genre musical, à vous de me trouver. (Code QR vers une musique de Jazz)');
                let p3 = document.getElementById("3");
                p3.innerHTML = "Je peux stocker jusqu’à 2GB et ma marque porte le nom d\'un genre musical, à vous de me trouver. (Code QR vers une musique de Jazz)";
                break;
            case 'bc46aa72d175144d22f54f96a9d98729220d15bb0d419ee45f58a556cd9e2a25':
                console.log('Je sers à tester des objets; ceux si sont parfois à vides, parfois en verre, parfois en cuivre, certains à la maison et d’autres dans les radios');
                let p4 = document.getElementById("4");
                p4.innerHTML = "Je sers à tester des objets; ceux si sont parfois à vides, parfois en verre, parfois en cuivre, certains à la maison et d’autres dans les radios";
                break;
            case 'd029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c':
                console.log('TERMINE');
                let p5 = document.getElementById("5");
                p5.innerHTML = "TERMINE";
                break;
        }
    });

    enter.value = "";
}
