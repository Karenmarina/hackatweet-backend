function checkBody(body, keys) {
  let isValid = true;

  //   body : un objet contenant des paires clé-valeur
  // // keys =>  le paramètre keys représente un tableau de chaînes de caractères.
  // Chaque chaîne dans ce tableau correspond à une clé (ou propriété) que la fonction va vérifier dans l'objet body.

  for (const field of keys) {
    if (!body[field] || body[field] === "") {
      isValid = false;
    }
  }

  return isValid;
}

module.exports = { checkBody };
