// Afirmações de tipo (Assertions Type)

const site: unknown = "https://github.com";
const favoriteSites: string[] = [];

// Forçando a variável site (dizendo que ela é do tipo string)
favoriteSites.push(site as string);

// Outra forma de forçar
favoriteSites.push(<string> site);