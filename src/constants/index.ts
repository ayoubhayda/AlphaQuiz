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
