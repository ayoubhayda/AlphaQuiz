import javaScriptLogo from "@/assets/public/javascript.png";
import pythonLogo from "@/assets/public/python.png";
import phpLogo from "@/assets/public/php.png";
import mysqlLogo from "@/assets/public/mysql.png";
import algorithmicsLogo from "@/assets/public/algorithmics.png";
import { StaticImageData } from "next/image";

export interface moduleTypes {
  id: number;
  slug: string;
  name: string;
  description: string;
  iconImage: StaticImageData;
  status: string;
  difficulty: string;
  questions: number;
}

export interface quizType {
  id: number;
  moduleSlug: string;
  moduleName: string;
  moduleIconImage: StaticImageData;
  description: string;
  questions: questionType[];

}

export interface questionType {
  id: number;
  question: string;
  options: optionType[];
  rightOptionId: number;
  points: number;
}

export interface optionType {
  id: number;
  option: string;
}
// classes List
export const classesList = [
  { label: "Class 101", value: "CLASS101" },
  { label: "Class 102", value: "CLASS102" },
  { label: "Class 103", value: "CLASS103" },
  { label: "Class 104", value: "CLASS104" },
  { label: "Class 105", value: "CLASS105" },
];

// Liste des Modules
export const modulesList: moduleTypes[] = [
  {
    id: 0,
    slug: "python",
    name: "Python",
    description:
      "Découvrez le langage Python, connu pour sa simplicité et sa polyvalence. Ce module vous introduit aux bases de la programmation : variables, conditions, boucles, fonctions et structures de données. À travers des quiz interactifs, vous consoliderez vos acquis tout en développant une logique claire et structurée, applicable à de nombreux domaines comme l’analyse de données, l’automatisation et l’intelligence artificielle.",
    iconImage: pythonLogo,
    status: "Active",
    difficulty: "Facile",
    questions: 20,
  },
  {
    id: 1,
    slug: "javascript",
    name: "JavaScript",
    description:
      "Apprenez à maîtriser JavaScript, le langage incontournable du web moderne. Ce module vous accompagne dans la découverte des fondamentaux du langage : manipulation du DOM, événements, fonctions, objets, tableaux et gestion des erreurs. Grâce aux quiz proposés, vous pourrez tester vos connaissances et renforcer votre compréhension à chaque étape de votre apprentissage.",
    iconImage: javaScriptLogo,
    status: "Active",
    difficulty: "Moyenne",
    questions: 20,
  },
  {
    id: 2,
    slug: "php",
    name: "PHP",
    description:
      "Plongez dans l’univers du développement web côté serveur avec PHP. Ce module vous apprendra à créer des pages dynamiques, gérer les formulaires, interagir avec des bases de données et structurer votre code. Les quiz de validation vous permettront de vérifier vos compétences en logique serveur et de mieux appréhender l'intégration de PHP dans des projets web complets.",
    iconImage: phpLogo,
    status: "Terminé",
    difficulty: "Moyenne",
    questions: 20,
  },
  {
    id: 3,
    slug: "mysql",
    name: "MySQL",
    description:
      "Maîtrisez l’art de concevoir, interroger et manipuler des bases de données relationnelles avec MySQL. Ce module couvre les concepts clés tels que les tables, les relations, les jointures, les requêtes SELECT, INSERT, UPDATE, DELETE et bien plus. Les quiz associés vous aideront à pratiquer vos compétences SQL et à mieux comprendre la logique des bases de données structurées.",
    iconImage: mysqlLogo,
    status: "Active",
    difficulty: "Moyenne",
    questions: 20,
  },
  {
    id: 4,
    slug: "algorithmique",
    name: "Algorithmique",
    description:
      "Plongez au cœur des mécanismes de résolution de problèmes en apprenant à concevoir, analyser et optimiser des algorithmes. Ce module est essentiel pour comprendre la logique de programmation, la structure conditionnelle, les boucles, ainsi que la complexité algorithmique. Préparez-vous à mettre en pratique ces notions à travers une série de quiz ciblés qui testeront votre capacité à raisonner efficacement.",
    iconImage: algorithmicsLogo,
    status: "Active",
    difficulty: "Difficile",
    questions: 20,
  },
];


// Python Quiz
export const pythonQuiz: quizType = {
  id: 0,
  moduleSlug: "python",
  moduleName: "Python",
  moduleIconImage: pythonLogo,
  description: "Testez vos connaissances de base en Python. Ce quiz couvre les fondements du langage, les structures de contrôle, les fonctions, et les types de données.",
  questions: [
    {
      id: 0,
      question: "Quelle est la bonne façon d’afficher 'Bonjour le monde' en Python ?",
      options: [
        { id: 0, option: "print('Bonjour le monde')" },
        { id: 1, option: "echo 'Bonjour le monde'" },
        { id: 2, option: "console.log('Bonjour le monde')" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 1,
      question: "Quel est le type de données de la valeur suivante : 3.14 ?",
      options: [
        { id: 0, option: "int" },
        { id: 1, option: "float" },
        { id: 2, option: "str" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 2,
      question: "Que renvoie l'expression suivante : len('Python') ?",
      options: [
        { id: 0, option: "5" },
        { id: 1, option: "6" },
        { id: 2, option: "7" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 3,
      question: "Quelle structure est utilisée pour répéter une instruction plusieurs fois ?",
      options: [
        { id: 0, option: "if" },
        { id: 1, option: "for" },
        { id: 2, option: "def" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 4,
      question: "Quelle est la sortie de : print(type('42')) ?",
      options: [
        { id: 0, option: "<class 'int'>" },
        { id: 1, option: "<class 'float'>" },
        { id: 2, option: "<class 'str'>" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 5,
      question: "Quelle fonction permet de convertir une chaîne en nombre entier ?",
      options: [
        { id: 0, option: "str()" },
        { id: 1, option: "int()" },
        { id: 2, option: "float()" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 6,
      question: "Que renvoie : 10 // 3 ?",
      options: [
        { id: 0, option: "3.33" },
        { id: 1, option: "3" },
        { id: 2, option: "1" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 7,
      question: "Comment définit-on une fonction en Python ?",
      options: [
        { id: 0, option: "function maFonction():" },
        { id: 1, option: "def maFonction():" },
        { id: 2, option: "func maFonction():" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 8,
      question: "Quel est le mot-clé utilisé pour une condition ?",
      options: [
        { id: 0, option: "loop" },
        { id: 1, option: "if" },
        { id: 2, option: "define" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 9,
      question: "Quel est le résultat de : bool(0) ?",
      options: [
        { id: 0, option: "True" },
        { id: 1, option: "False" },
        { id: 2, option: "Erreur" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 10,
      question: "Quelle syntaxe est correcte pour une liste en Python ?",
      options: [
        { id: 0, option: "{1, 2, 3}" },
        { id: 1, option: "[1, 2, 3]" },
        { id: 2, option: "(1, 2, 3)" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 11,
      question: "Comment ajoute-t-on un élément à une liste ?",
      options: [
        { id: 0, option: "liste.add(x)" },
        { id: 1, option: "liste.append(x)" },
        { id: 2, option: "liste.insert(x)" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 12,
      question: "Quel symbole est utilisé pour les commentaires en Python ?",
      options: [
        { id: 0, option: "//" },
        { id: 1, option: "#" },
        { id: 2, option: "--" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 13,
      question: "Quel mot-clé permet de sortir d’une boucle ?",
      options: [
        { id: 0, option: "return" },
        { id: 1, option: "exit" },
        { id: 2, option: "break" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 14,
      question: "Quel est le résultat de : 2 ** 3 ?",
      options: [
        { id: 0, option: "6" },
        { id: 1, option: "8" },
        { id: 2, option: "9" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 15,
      question: "Quelle structure de données est immuable ?",
      options: [
        { id: 0, option: "list" },
        { id: 1, option: "set" },
        { id: 2, option: "tuple" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 16,
      question: "Quel est le résultat de : 'a' + 'b' * 2 ?",
      options: [
        { id: 0, option: "abb" },
        { id: 1, option: "abab" },
        { id: 2, option: "a2b" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 17,
      question: "Comment vérifier si 'x' est dans une liste 'maListe' ?",
      options: [
        { id: 0, option: "'x' dans maListe" },
        { id: 1, option: "x in maListe" },
        { id: 2, option: "maListe.has(x)" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 18,
      question: "Que signifie 'None' en Python ?",
      options: [
        { id: 0, option: "Une chaîne vide" },
        { id: 1, option: "Une variable non initialisée" },
        { id: 2, option: "Aucune valeur / null" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 19,
      question: "Quel sera le résultat de : print(5 > 3 and 2 < 1) ?",
      options: [
        { id: 0, option: "True" },
        { id: 1, option: "False" },
        { id: 2, option: "Erreur" },
      ],
      rightOptionId: 1,
      points: 5,
    },
  ],
};

// JavaScript Quiz
export const javascriptQuiz: quizType = {
  id: 1,
  moduleSlug: "javascript",
  moduleName: "JavaScript",
  moduleIconImage: javaScriptLogo,
  description: "Évaluez vos connaissances de base en JavaScript. Ce quiz couvre les variables, les types de données, les conditions, les boucles et les fonctions.",
  questions: [
    {
      id: 0,
      question: "Quelle est la bonne syntaxe pour déclarer une variable en JavaScript ?",
      options: [
        { id: 0, option: "variable nom = 5;" },
        { id: 1, option: "let nom = 5;" },
        { id: 2, option: "dim nom = 5;" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 1,
      question: "Quel type de données est retourné par typeof 'Bonjour' ?",
      options: [
        { id: 0, option: "string" },
        { id: 1, option: "text" },
        { id: 2, option: "char" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 2,
      question: "Comment écrit-on un commentaire sur une seule ligne en JavaScript ?",
      options: [
        { id: 0, option: "#" },
        { id: 1, option: "//" },
        { id: 2, option: "<!-- -->" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 3,
      question: "Quelle est la sortie de : console.log(2 + '2') ?",
      options: [
        { id: 0, option: "4" },
        { id: 1, option: "'22'" },
        { id: 2, option: "NaN" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 4,
      question: "Quelle boucle est utilisée pour parcourir un tableau ?",
      options: [
        { id: 0, option: "for" },
        { id: 1, option: "repeat" },
        { id: 2, option: "foreach" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 5,
      question: "Quelle est la sortie de : Boolean(0) ?",
      options: [
        { id: 0, option: "true" },
        { id: 1, option: "false" },
        { id: 2, option: "null" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 6,
      question: "Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?",
      options: [
        { id: 0, option: "push()" },
        { id: 1, option: "add()" },
        { id: 2, option: "append()" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 7,
      question: "Quelle est la bonne syntaxe pour une fonction ?",
      options: [
        { id: 0, option: "function = maFonction() {}" },
        { id: 1, option: "function maFonction() {}" },
        { id: 2, option: "def maFonction() {}" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 8,
      question: "Comment appelle-t-on une fonction nommée saluer ?",
      options: [
        { id: 0, option: "appeler saluer" },
        { id: 1, option: "saluer();" },
        { id: 2, option: "call saluer" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 9,
      question: "Que fait l'opérateur === ?",
      options: [
        { id: 0, option: "Compare seulement les valeurs" },
        { id: 1, option: "Compare les types uniquement" },
        { id: 2, option: "Compare les valeurs et les types" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 10,
      question: "Quelle est la sortie de : console.log(typeof null) ?",
      options: [
        { id: 0, option: "'object'" },
        { id: 1, option: "'null'" },
        { id: 2, option: "'undefined'" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 11,
      question: "Comment peut-on écrire une condition ?",
      options: [
        { id: 0, option: "if x > 5 then" },
        { id: 1, option: "if (x > 5) {}" },
        { id: 2, option: "if x > 5 {}" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 12,
      question: "Quel mot-clé permet de déclarer une constante ?",
      options: [
        { id: 0, option: "const" },
        { id: 1, option: "let" },
        { id: 2, option: "var" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 13,
      question: "Quel est le résultat de : '5' == 5 ?",
      options: [
        { id: 0, option: "true" },
        { id: 1, option: "false" },
        { id: 2, option: "undefined" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 14,
      question: "Que renvoie une fonction sans mot-clé return ?",
      options: [
        { id: 0, option: "0" },
        { id: 1, option: "undefined" },
        { id: 2, option: "null" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 15,
      question: "Quelle méthode permet de convertir une chaîne en majuscules ?",
      options: [
        { id: 0, option: "toUpperCase()" },
        { id: 1, option: "upper()" },
        { id: 2, option: "capitalize()" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 16,
      question: "Comment déclare-t-on un tableau vide ?",
      options: [
        { id: 0, option: "let tab = [];" },
        { id: 1, option: "let tab = {};" },
        { id: 2, option: "let tab = ;" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 17,
      question: "Quelle est la sortie de : console.log('3' + 2) ?",
      options: [
        { id: 0, option: "'32'" },
        { id: 1, option: "5" },
        { id: 2, option: "Erreur" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 18,
      question: "Quelle fonction permet d’afficher une alerte dans le navigateur ?",
      options: [
        { id: 0, option: "alert()" },
        { id: 1, option: "prompt()" },
        { id: 2, option: "console.log()" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 19,
      question: "Quelle est la sortie de : typeof undefined ?",
      options: [
        { id: 0, option: "'undefined'" },
        { id: 1, option: "'null'" },
        { id: 2, option: "'object'" },
      ],
      rightOptionId: 0,
      points: 5,
    },
  ],
};

// PHP Quiz
export const phpQuiz: quizType = {
  id: 2,
  moduleSlug: "php",
  moduleName: "PHP",
  moduleIconImage: phpLogo,
  description: "Testez vos connaissances de base en PHP. Ce quiz couvre la syntaxe, les variables, les structures de contrôle et les fonctions fondamentales.",
  questions: [
    {
      id: 0,
      question: "Quel est le bon moyen de commencer un script PHP ?",
      options: [
        { id: 0, option: "<?php" },
        { id: 1, option: "<script>" },
        { id: 2, option: "<php>" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 1,
      question: "Comment déclare-t-on une variable en PHP ?",
      options: [
        { id: 0, option: "$maVariable = 'Hello';" },
        { id: 1, option: "maVariable = 'Hello';" },
        { id: 2, option: "var maVariable = 'Hello';" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 2,
      question: "Quelle est la bonne fonction pour afficher du texte ?",
      options: [
        { id: 0, option: "console.log()" },
        { id: 1, option: "echo()" },
        { id: 2, option: "echo" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 3,
      question: "Comment écrire un commentaire sur une seule ligne ?",
      options: [
        { id: 0, option: "# Ceci est un commentaire" },
        { id: 1, option: "// Ceci est un commentaire" },
        { id: 2, option: "/* Ceci est un commentaire */" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 4,
      question: "Quelle fonction retourne la longueur d’une chaîne ?",
      options: [
        { id: 0, option: "strlen()" },
        { id: 1, option: "length()" },
        { id: 2, option: "count()" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 5,
      question: "Quelle structure est utilisée pour répéter du code plusieurs fois ?",
      options: [
        { id: 0, option: "loop" },
        { id: 1, option: "repeat" },
        { id: 2, option: "while" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 6,
      question: "Comment vérifier si deux valeurs sont identiques en PHP ?",
      options: [
        { id: 0, option: "==" },
        { id: 1, option: "===" },
        { id: 2, option: "=" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 7,
      question: "Quelle est la valeur par défaut d’une variable non définie ?",
      options: [
        { id: 0, option: "null" },
        { id: 1, option: "0" },
        { id: 2, option: "false" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 8,
      question: "Quel mot-clé est utilisé pour définir une fonction ?",
      options: [
        { id: 0, option: "function" },
        { id: 1, option: "def" },
        { id: 2, option: "fun" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 9,
      question: "Comment concaténer deux chaînes de caractères ?",
      options: [
        { id: 0, option: "+" },
        { id: 1, option: "." },
        { id: 2, option: "&" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 10,
      question: "Comment accéder à un élément dans un tableau indexé ?",
      options: [
        { id: 0, option: "$tableau{0}" },
        { id: 1, option: "$tableau[0]" },
        { id: 2, option: "$tableau<0>" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 11,
      question: "Quelle structure conditionnelle est utilisée en PHP ?",
      options: [
        { id: 0, option: "if - else" },
        { id: 1, option: "when - otherwise" },
        { id: 2, option: "check - else" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 12,
      question: "Comment vérifier si une variable existe ?",
      options: [
        { id: 0, option: "isset()" },
        { id: 1, option: "exists()" },
        { id: 2, option: "defined()" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 13,
      question: "Quelle superglobale contient les données d’un formulaire envoyé en POST ?",
      options: [
        { id: 0, option: "$_GET" },
        { id: 1, option: "$_POST" },
        { id: 2, option: "$_REQUEST" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 14,
      question: "Que renvoie l’instruction return dans une fonction ?",
      options: [
        { id: 0, option: "Une valeur" },
        { id: 1, option: "Une fonction" },
        { id: 2, option: "Une variable" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 15,
      question: "Quelle est la portée par défaut d'une variable dans une fonction ?",
      options: [
        { id: 0, option: "Globale" },
        { id: 1, option: "Locale" },
        { id: 2, option: "Statique" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 16,
      question: "Quel est le bon moyen de créer un tableau associatif ?",
      options: [
        { id: 0, option: "$data = array('nom' => 'Ayoub');" },
        { id: 1, option: "$data = ['Ayoub' => 'nom'];" },
        { id: 2, option: "$data = nom: Ayoub;" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 17,
      question: "Quelle fonction permet de compter les éléments d’un tableau ?",
      options: [
        { id: 0, option: "len()" },
        { id: 1, option: "count()" },
        { id: 2, option: "size()" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 18,
      question: "Quel opérateur est utilisé pour une comparaison logique ET ?",
      options: [
        { id: 0, option: "&&" },
        { id: 1, option: "||" },
        { id: 2, option: "!" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 19,
      question: "Quel est le résultat de : 10 % 3 ?",
      options: [
        { id: 0, option: "3" },
        { id: 1, option: "1" },
        { id: 2, option: "0" },
      ],
      rightOptionId: 1,
      points: 5,
    },
  ],
};

// MySql Quiz
export const mysqlQuiz: quizType = {
  id: 3,
  moduleSlug: "mysql",
  moduleName: "MySQL",
  moduleIconImage: mysqlLogo, // تأكد أنك استوردت mysqlLogo
  description: "Testez vos connaissances de base en MySQL. Ce quiz couvre les commandes SQL, la structure des bases de données, et les opérations courantes.",
  questions: [
    {
      id: 0,
      question: "Quelle commande permet d’afficher toutes les bases de données ?",
      options: [
        { id: 0, option: "SHOW DATABASES;" },
        { id: 1, option: "LIST DATABASES;" },
        { id: 2, option: "SELECT DATABASES;" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 1,
      question: "Quelle commande permet de créer une base de données ?",
      options: [
        { id: 0, option: "MAKE DATABASE nom;" },
        { id: 1, option: "CREATE DATABASE nom;" },
        { id: 2, option: "NEW DATABASE nom;" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 2,
      question: "Quel mot-clé est utilisé pour sélectionner une base ?",
      options: [
        { id: 0, option: "USE" },
        { id: 1, option: "SELECT" },
        { id: 2, option: "SET" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 3,
      question: "Quel type de données est utilisé pour du texte court ?",
      options: [
        { id: 0, option: "VARCHAR" },
        { id: 1, option: "TEXT" },
        { id: 2, option: "STRING" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 4,
      question: "Quel est le mot-clé pour définir une clé primaire ?",
      options: [
        { id: 0, option: "PRIMARY" },
        { id: 1, option: "KEY" },
        { id: 2, option: "PRIMARY KEY" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 5,
      question: "Quelle commande permet de supprimer une table ?",
      options: [
        { id: 0, option: "DELETE TABLE nom;" },
        { id: 1, option: "DROP TABLE nom;" },
        { id: 2, option: "REMOVE TABLE nom;" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 6,
      question: "Quelle commande permet d’afficher toutes les lignes d’une table ?",
      options: [
        { id: 0, option: "SELECT * FROM nom;" },
        { id: 1, option: "SHOW FROM nom;" },
        { id: 2, option: "GET ALL nom;" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 7,
      question: "Comment insérer une nouvelle ligne dans une table ?",
      options: [
        { id: 0, option: "ADD TO table VALUES (...);" },
        { id: 1, option: "INSERT INTO table VALUES (...);" },
        { id: 2, option: "PUT INTO table (...);" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 8,
      question: "Quel mot-clé permet de modifier la structure d'une table ?",
      options: [
        { id: 0, option: "CHANGE" },
        { id: 1, option: "MODIFY" },
        { id: 2, option: "ALTER" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 9,
      question: "Quel type permet de stocker des nombres entiers ?",
      options: [
        { id: 0, option: "VARCHAR" },
        { id: 1, option: "INT" },
        { id: 2, option: "CHAR" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 10,
      question: "Quelle clause est utilisée pour filtrer les résultats ?",
      options: [
        { id: 0, option: "WHERE" },
        { id: 1, option: "IF" },
        { id: 2, option: "FILTER" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 11,
      question: "Quel mot-clé permet de trier les résultats ?",
      options: [
        { id: 0, option: "SORT BY" },
        { id: 1, option: "ORDER BY" },
        { id: 2, option: "ARRANGE BY" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 12,
      question: "Quelle fonction retourne le nombre total de lignes ?",
      options: [
        { id: 0, option: "SUM()" },
        { id: 1, option: "COUNT()" },
        { id: 2, option: "TOTAL()" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 13,
      question: "Comment sélectionne-t-on des lignes uniques ?",
      options: [
        { id: 0, option: "SELECT UNIQUE ..." },
        { id: 1, option: "SELECT DISTINCT ..." },
        { id: 2, option: "SELECT DIFFERENT ..." },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 14,
      question: "Quel mot-clé est utilisé pour relier deux tables ?",
      options: [
        { id: 0, option: "JOIN" },
        { id: 1, option: "LINK" },
        { id: 2, option: "ATTACH" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 15,
      question: "Comment changer une valeur dans une ligne existante ?",
      options: [
        { id: 0, option: "MODIFY table SET..." },
        { id: 1, option: "UPDATE table SET..." },
        { id: 2, option: "CHANGE table VALUE..." },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 16,
      question: "Quelle commande permet de supprimer toutes les lignes d’une table ?",
      options: [
        { id: 0, option: "DELETE * FROM table;" },
        { id: 1, option: "CLEAR table;" },
        { id: 2, option: "DELETE FROM table;" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 17,
      question: "Quel type permet de stocker la date et l’heure ?",
      options: [
        { id: 0, option: "DATE" },
        { id: 1, option: "DATETIME" },
        { id: 2, option: "TIMESTAMP" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 18,
      question: "Quelle commande donne la structure d'une table ?",
      options: [
        { id: 0, option: "SHOW STRUCTURE table;" },
        { id: 1, option: "DESCRIBE table;" },
        { id: 2, option: "LIST table;" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 19,
      question: "Quelle contrainte empêche les doublons dans une colonne ?",
      options: [
        { id: 0, option: "UNIQUE" },
        { id: 1, option: "NOT NULL" },
        { id: 2, option: "INDEX" },
      ],
      rightOptionId: 0,
      points: 5,
    },
  ],
};

// Algorithmique Quiz
export const algorithmiqueQuiz: quizType = {
  id: 4,
  moduleSlug: "algorithmique",
  moduleName: "Algorithmique",
  moduleIconImage: algorithmicsLogo,
  description: "Testez vos compétences en logique algorithmique à travers des questions qui couvrent les bases essentielles pour tout futur développeur.",
  questions: [
    {
      id: 0,
      question: "Quel est le rôle principal d’un algorithme ?",
      options: [
        { id: 0, option: "Afficher des images" },
        { id: 1, option: "Résoudre un problème de manière structurée" },
        { id: 2, option: "Dessiner des interfaces utilisateur" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 1,
      question: "Quelle structure permet de répéter un bloc d'instructions ?",
      options: [
        { id: 0, option: "condition" },
        { id: 1, option: "boucle" },
        { id: 2, option: "fonction" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 2,
      question: "Quel mot-clé utilise-t-on pour une condition dans un pseudo-code ?",
      options: [
        { id: 0, option: "SI...ALORS...SINON" },
        { id: 1, option: "IF...DO...ELSE" },
        { id: 2, option: "CHECK...RUN" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 3,
      question: "Quel est le résultat de l'algorithme suivant :\nInitialiser x = 5\nx = x + 3\nAfficher x",
      options: [
        { id: 0, option: "5" },
        { id: 1, option: "8" },
        { id: 2, option: "3" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 4,
      question: "Quelle structure est utilisée pour parcourir un tableau ?",
      options: [
        { id: 0, option: "switch" },
        { id: 1, option: "for" },
        { id: 2, option: "if" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 5,
      question: "Combien de fois s’exécute la boucle :\nPour i de 0 à 3 faire Afficher i",
      options: [
        { id: 0, option: "4 fois" },
        { id: 1, option: "3 fois" },
        { id: 2, option: "5 fois" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 6,
      question: "Quelle est la complexité de l’algorithme de tri à bulles ?",
      options: [
        { id: 0, option: "O(n)" },
        { id: 1, option: "O(n^2)" },
        { id: 2, option: "O(log n)" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 7,
      question: "Quelle est l'utilité d’un tableau dans un algorithme ?",
      options: [
        { id: 0, option: "Stocker plusieurs valeurs sous une seule variable" },
        { id: 1, option: "Dessiner un graphique" },
        { id: 2, option: "Créer une interface utilisateur" },
      ],
      rightOptionId: 0,
      points: 5,
    },
    {
      id: 8,
      question: "Que renvoie une fonction récursive ?",
      options: [
        { id: 0, option: "Toujours zéro" },
        { id: 1, option: "Un appel à elle-même jusqu'à une condition d'arrêt" },
        { id: 2, option: "Une boucle infinie" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 9,
      question: "Quel est le but d’un pseudo-code ?",
      options: [
        { id: 0, option: "Traduire l’algorithme en langage machine" },
        { id: 1, option: "Exprimer un algorithme en langage simple et compréhensible" },
        { id: 2, option: "Dessiner des schémas UML" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 10,
      question: "Dans une recherche linéaire, combien de comparaisons au maximum dans un tableau de 10 éléments ?",
      options: [
        { id: 0, option: "1" },
        { id: 1, option: "5" },
        { id: 2, option: "10" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 11,
      question: "Quel algorithme est plus efficace pour rechercher dans un tableau trié ?",
      options: [
        { id: 0, option: "Recherche linéaire" },
        { id: 1, option: "Recherche binaire" },
        { id: 2, option: "Tri à bulles" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 12,
      question: "Quel est l’objectif d’un algorithme de tri ?",
      options: [
        { id: 0, option: "Ajouter des données" },
        { id: 1, option: "Ranger les données selon un ordre" },
        { id: 2, option: "Supprimer des valeurs" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 13,
      question: "Si un algorithme a une complexité O(n), que signifie cela ?",
      options: [
        { id: 0, option: "Le temps d'exécution est constant" },
        { id: 1, option: "Le temps d'exécution augmente linéairement avec les données" },
        { id: 2, option: "Il double à chaque fois" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 14,
      question: "Que fait l’algorithme suivant ?\nEntrée: x\nSi x mod 2 = 0 alors Afficher 'Pair' sinon 'Impair'",
      options: [
        { id: 0, option: "Vérifie si x est positif" },
        { id: 1, option: "Vérifie si x est divisible par 2" },
        { id: 2, option: "Ajoute 2 à x" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 15,
      question: "Quel est le premier élément d’un tableau dans la plupart des langages ?",
      options: [
        { id: 0, option: "1" },
        { id: 1, option: "0" },
        { id: 2, option: "-1" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 16,
      question: "Combien de fois la boucle suivante s’exécute-t-elle ?\nPour i allant de 1 à 5\n   Pour j allant de 1 à 3",
      options: [
        { id: 0, option: "8" },
        { id: 1, option: "15" },
        { id: 2, option: "5" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 17,
      question: "Quelle instruction arrête une boucle immédiatement ?",
      options: [
        { id: 0, option: "stop" },
        { id: 1, option: "break" },
        { id: 2, option: "exit" },
      ],
      rightOptionId: 1,
      points: 5,
    },
    {
      id: 18,
      question: "Un algorithme récursif sans condition d’arrêt provoque :",
      options: [
        { id: 0, option: "Une boucle utile" },
        { id: 1, option: "Une erreur de compilation" },
        { id: 2, option: "Un appel infini (stack overflow)" },
      ],
      rightOptionId: 2,
      points: 5,
    },
    {
      id: 19,
      question: "Quel est le rôle de la variable d’itération dans une boucle ?",
      options: [
        { id: 0, option: "Compter les éléments" },
        { id: 1, option: "Stocker une valeur constante" },
        { id: 2, option: "Indiquer l’indice actuel" },
      ],
      rightOptionId: 2,
      points: 5,
    },
  ],
};

// Function to get quiz list
export const getQuizList = (slug: string): quizType | null => {
  switch (slug) {
    case "python":
      return pythonQuiz;
    case "javascript":
      return javascriptQuiz;
    case "php":
      return phpQuiz;
    case "mysql":
      return mysqlQuiz;
    case "algorithmique":
      return algorithmiqueQuiz;
    default:
      return null;
  }
};







