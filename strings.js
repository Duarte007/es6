// Method normalize return Unicode Normalization Form of string

const string = "Ça été Mičić. ÀÉÏÓÛ";
console.log(string);

const string_norm = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
console.log(string_norm);
