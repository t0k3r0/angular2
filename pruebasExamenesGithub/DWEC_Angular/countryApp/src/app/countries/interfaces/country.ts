export class Country {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: any };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: { name: string; symbol: string } };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: { official: string; common: string } };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: { [key: string]: { f: string; m: string } };
  flag: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: { png: string; svg: string; alt: string };
  coatOfArms: { png: string; svg: string };
  startOfWeek: string;
  capitalInfo: { latlng: number[] };
  postalCode: { format: string; regex: string };

  constructor(
    name: { common: string; official: string; nativeName: { [key: string]: any } },
    tld: string[],
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: { [key: string]: { name: string; symbol: string } },
    idd: { root: string; suffixes: string[] },
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: { [key: string]: string },
    translations: { [key: string]: { official: string; common: string } },
    latlng: number[],
    landlocked: boolean,
    area: number,
    demonyms: { [key: string]: { f: string; m: string } },
    flag: string,
    maps: { googleMaps: string; openStreetMaps: string },
    population: number,
    gini: { [key: string]: number },
    fifa: string,
    car: { signs: string[]; side: string },
    timezones: string[],
    continents: string[],
    flags: { png: string; svg: string; alt: string },
    coatOfArms: { png: string; svg: string },
    startOfWeek: string,
    capitalInfo: { latlng: number[] },
    postalCode: { format: string; regex: string }
  ) {
    this.name = name;
    this.tld = tld;
    this.cca2 = cca2;
    this.ccn3 = ccn3;
    this.cca3 = cca3;
    this.cioc = cioc;
    this.independent = independent;
    this.status = status;
    this.unMember = unMember;
    this.currencies = currencies;
    this.idd = idd;
    this.capital = capital;
    this.altSpellings = altSpellings;
    this.region = region;
    this.subregion = subregion;
    this.languages = languages;
    this.translations = translations;
    this.latlng = latlng;
    this.landlocked = landlocked;
    this.area = area;
    this.demonyms = demonyms;
    this.flag = flag;
    this.maps = maps;
    this.population = population;
    this.gini = gini;
    this.fifa = fifa;
    this.car = car;
    this.timezones = timezones;
    this.continents = continents;
    this.flags = flags;
    this.coatOfArms = coatOfArms;
    this.startOfWeek = startOfWeek;
    this.capitalInfo = capitalInfo;
    this.postalCode = postalCode;
  }
}
