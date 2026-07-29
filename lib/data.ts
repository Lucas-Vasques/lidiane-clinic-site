import {
  Baby,
  HeartPulse,
  Salad,
  Stethoscope,
  ShieldCheck,
  Microscope,
} from "lucide-react";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem sou", href: "#quem-sou" },
  { label: "Consultas", href: "#consultas" },
  { label: "Exames", href: "#exames" },
  { label: "Contato", href: "#contato" },
];

export const services = [
  {
    title: "Alergias e intolerâncias alimentares",
    description: "Manejo de alergias alimentares e intolerâncias, incluindo APLV.",
    icon: Salad,
  },
  {
    title: "Dores abdominais crônicas",
    description: "Investigação clínica e acompanhamento com foco pediátrico.",
    icon: HeartPulse,
  },
  {
    title: "Refluxo gastroesofágico",
    description: "Diagnóstico e tratamento de DRGE em crianças e adultos.",
    icon: Stethoscope,
  },
  {
    title: "Constipação e distúrbios intestinais",
    description: "Condutas modernas com avaliação individualizada.",
    icon: ShieldCheck,
  },
  {
    title: "Doença celíaca",
    description: "Abordagem multidisciplinar e acompanhamento contínuo.",
    icon: Microscope,
  },
  {
    title: "Baixo peso infantil",
    description: "Investigação e tratamento para ganho de peso saudável.",
    icon: Baby,
  },
];

export const performedExams = [
  "Endoscopia digestiva alta",
  "Colonoscopia",
  "Teste respiratório",
];

export const investigatedConditions = [
  "Refluxo gastroesofágico e esofagite eosinofílica",
  "Pólipos e alterações com potencial de evolução",
  "Gastrite, úlceras, polipose e atrofia gástrica",
  "Doença celíaca e alterações duodenais",
  "Sangramentos digestivos",
  "Identificação de processos inflamatórios",
  "Diagnóstico precoce de câncer intestinal",
  "Prevenção e diagnóstico de doenças intestinais diversas",
];
