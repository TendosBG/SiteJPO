// Fonction de chiffrement
async function encryptData(data, key) {
    const encodedData = new TextEncoder().encode(data);
    const encryptedData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: new Uint8Array(12) }, key, encodedData);
    return encryptedData;
}

// Fonction de déchiffrement
async function decryptData(encryptedData, key) {
    const decryptedData = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(12) }, key, encryptedData);
    return new TextDecoder().decode(decryptedData);
}

// Génération d'une clé
async function generateKey() {
    return await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
}

// Exemple d'utilisation
async function example() {
    const key = await generateKey();
    const data = 'Données confidentielles à chiffrer';

    // Chiffrement
    const encryptedData = await encryptData(data, key);

    // Déchiffrement
    const decryptedData = await decryptData(encryptedData, key);

    console.log('Données originales :', data);
    console.log('Données déchiffrées :', encryptedData);
}

example();
