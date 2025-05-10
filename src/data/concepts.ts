import { Concept, ChemicalExample } from '../types';

export const concepts: Concept[] = [
  {
    id: 'acides',
    title: 'Acides (Acids)',
    description: 'Les acides sont des composés qui libèrent des ions H+ en solution. Ils ont un goût aigre et font virer au rouge la teinture de tournesol.',
    icon: 'flask',
    color: 'bg-rose-500',
  },
  {
    id: 'sels',
    title: 'Sels (Salts)',
    description: 'Les sels sont des composés ioniques formés par la réaction entre un acide et une base. Ils sont généralement cristallins et solubles dans l\'eau.',
    icon: 'beaker',
    color: 'bg-blue-500',
  },
  {
    id: 'oxydes',
    title: 'Oxydes (Oxides)',
    description: 'Les oxydes sont des composés binaires contenant de l\'oxygène combiné à un autre élément. Ils peuvent être métalliques ou non métalliques.',
    icon: 'atom',
    color: 'bg-amber-500',
  },
  {
    id: 'hydroxyles',
    title: 'Bases Hydroxylées (Hydroxide Bases)',
    description: 'Les bases hydroxylées contiennent le groupe hydroxyle (OH-). Elles sont souvent des hydroxydes métalliques.',
    icon: 'flask-round',
    color: 'bg-emerald-500',
  },
];

export const chemicalExamples: Record<string, ChemicalExample[]> = {
  'acides': [
    { id: 'hcl', formula: 'HCl', name: 'Acide chlorhydrique', description: 'Nom usuel: Esprit de sel - Formé par dissolution du chlorure d\'hydrogène dans l\'eau' },
    { id: 'h2so4', formula: 'H₂SO₄', name: 'Acide sulfurique', description: 'Nom usuel: Huile de vitriol - Acide fort utilisé dans les batteries' },
    { id: 'hno3', formula: 'HNO₃', name: 'Acide nitrique', description: 'Nom usuel: Eau forte - Utilisé dans la fabrication des engrais' },
    { id: 'ch3cooh', formula: 'CH₃COOH', name: 'Acide acétique', description: 'Nom usuel: Vinaigre - Principal composant du vinaigre' },
    { id: 'h3po4', formula: 'H₃PO₄', name: 'Acide phosphorique', description: 'Nom usuel: Acide orthophosphorique - Utilisé dans les boissons gazeuses' },
  ],
  'sels': [
    { id: 'nacl', formula: 'NaCl', name: 'Chlorure de sodium', description: 'Nom usuel: Sel de table - Le sel de cuisine commun' },
    { id: 'cuso4', formula: 'CuSO₄', name: 'Sulfate de cuivre', description: 'Nom usuel: Vitriol bleu - Utilisé comme fongicide' },
    { id: 'kcl', formula: 'KCl', name: 'Chlorure de potassium', description: 'Nom usuel: Sylvine - Utilisé comme engrais' },
    { id: 'na2co3', formula: 'Na₂CO₃', name: 'Carbonate de sodium', description: 'Nom usuel: Soude Solvay - Utilisé dans la fabrication du verre' },
  ],
  'oxydes': [
    { id: 'co2', formula: 'CO₂', name: 'Dioxyde de carbone', description: 'Nom usuel: Gaz carbonique - Gaz à effet de serre' },
    { id: 'so2', formula: 'SO₂', name: 'Dioxyde de soufre', description: 'Nom usuel: Anhydride sulfureux - Polluant atmosphérique' },
    { id: 'al2o3', formula: 'Al₂O₃', name: 'Oxyde d\'aluminium', description: 'Nom usuel: Alumine - Composant du corindon et du saphir' },
    { id: 'fe2o3', formula: 'Fe₂O₃', name: 'Oxyde de fer(III)', description: 'Nom usuel: Hématite - Responsable de la couleur rouille' },
    { id: 'sio2', formula: 'SiO₂', name: 'Dioxyde de silicium', description: 'Nom usuel: Silice - Composant principal du sable' },
  ],
  'hydroxyles': [
    { id: 'naoh', formula: 'NaOH', name: 'Hydroxyde de sodium', description: 'Nom usuel: Soude caustique - Base forte utilisée dans la fabrication du savon' },
    { id: 'koh', formula: 'KOH', name: 'Hydroxyde de potassium', description: 'Nom usuel: Potasse caustique - Utilisé dans les batteries alcalines' },
    { id: 'mg_oh_2', formula: 'Mg(OH)₂', name: 'Hydroxyde de magnésium', description: 'Nom usuel: Lait de magnésie - Utilisé comme antiacide' },
    { id: 'al_oh_3', formula: 'Al(OH)₃', name: 'Hydroxyde d\'aluminium', description: 'Nom usuel: Alumine hydratée - Utilisé comme retardateur de flamme' },
  ],
};

export const nomenclatureRules: Record<string, string[]> = {
  'acides': [
    "Un acide est formé quand un ion hydrogène (H+) se combine avec un anion.",
    "Pour les acides binaires (avec deux éléments): 'acide' + nom de l'élément + 'hydrique'.",
    "Pour les oxacides (contenant de l'oxygène): préfixe selon le nombre d'atomes d'oxygène + le nom de l'élément + suffixe 'ique' ou 'eux'.",
    "Les suffixes varient selon l'état d'oxydation: '-ique' pour l'état d'oxydation supérieur, '-eux' pour l'état inférieur."
  ],
  'sels': [
    "Les sels sont nommés en combinant le nom de l'anion et du cation.",
    "Le nom du métal (cation) est suivi du nom de l'anion.",
    "Pour les métaux à valence variable, on précise la valence avec des chiffres romains.",
    "Les anions en '-ate' et '-ite' conservent leur terminaison dans le nom du sel."
  ],
  'oxydes': [
    "Les oxydes sont formés par la combinaison d'oxygène avec un autre élément.",
    "Oxydes métalliques: 'oxyde de' + nom du métal.",
    "Oxydes non-métalliques: préfixe selon le nombre d'atomes + 'oxyde de' + nom du non-métal.",
    "Pour les métaux à valence variable, on précise la valence avec des chiffres romains."
  ],
  'hydroxyles': [
    "Les bases hydroxylées contiennent le groupe hydroxyle (OH-).",
    "Nomenclature: 'hydroxyde de' + nom du métal.",
    "Pour les métaux à valence variable, on précise la valence.",
    "La formule générale est M(OH)x, où M est le métal et x la valence."
  ]
};

export const quizQuestions: QuizQuestion[] = [
  // Acides
  {
    id: 'q1',
    type: 'formula-to-name',
    questionText: 'Quel est le nom de l\'acide HCl?',
    options: ['Acide chlorhydrique', 'Acide chlorique', 'Acide hypochloreux', 'Chlorure d\'hydrogène'],
    correctAnswer: 'Acide chlorhydrique',
    explanation: 'HCl est l\'acide chlorhydrique, aussi appelé esprit de sel.',
    conceptId: 'acides'
  },
  {
    id: 'q2',
    type: 'name-to-formula',
    questionText: 'Quelle est la formule de l\'acide sulfurique?',
    options: ['H₂SO₃', 'H₂SO₄', 'HSO₄', 'HSO₃'],
    correctAnswer: 'H₂SO₄',
    explanation: 'L\'acide sulfurique (huile de vitriol) a pour formule H₂SO₄.',
    conceptId: 'acides'
  },
  // Sels
  {
    id: 'q3',
    type: 'formula-to-name',
    questionText: 'Quel est le nom du composé NaCl?',
    options: ['Chlorure de sodium', 'Chlorure de natrium', 'Sel de sodium', 'Sodium chloré'],
    correctAnswer: 'Chlorure de sodium',
    explanation: 'NaCl est le chlorure de sodium, communément appelé sel de table.',
    conceptId: 'sels'
  },
  {
    id: 'q4',
    type: 'name-to-formula',
    questionText: 'Quelle est la formule du sulfate de cuivre (vitriol bleu)?',
    options: ['CuSO₄', 'Cu₂SO₄', 'CuSO₃', 'CuS'],
    correctAnswer: 'CuSO₄',
    explanation: 'Le sulfate de cuivre, aussi connu sous le nom de vitriol bleu, a pour formule CuSO₄.',
    conceptId: 'sels'
  },
  // Oxydes
  {
    id: 'q5',
    type: 'formula-to-name',
    questionText: 'Quel est le nom du composé CO₂?',
    options: ['Monoxyde de carbone', 'Dioxyde de carbone', 'Oxyde de carbone', 'Carbonate'],
    correctAnswer: 'Dioxyde de carbone',
    explanation: 'CO₂ est le dioxyde de carbone, communément appelé gaz carbonique.',
    conceptId: 'oxydes'
  },
  {
    id: 'q6',
    type: 'name-to-formula',
    questionText: 'Quelle est la formule de l\'oxyde d\'aluminium (alumine)?',
    options: ['AlO', 'Al₂O', 'AlO₃', 'Al₂O₃'],
    correctAnswer: 'Al₂O₃',
    explanation: 'L\'oxyde d\'aluminium, aussi appelé alumine, a pour formule Al₂O₃.',
    conceptId: 'oxydes'
  },
  // Hydroxyles
  {
    id: 'q7',
    type: 'formula-to-name',
    questionText: 'Quel est le nom du composé Mg(OH)₂?',
    options: ['Oxyde de magnésium', 'Hydroxyde de magnésium', 'Magnésium hydroxylé', 'Dihydroxyde de magnésium'],
    correctAnswer: 'Hydroxyde de magnésium',
    explanation: 'Mg(OH)₂ est l\'hydroxyde de magnésium, aussi connu sous le nom de lait de magnésie.',
    conceptId: 'hydroxyles'
  },
  {
    id: 'q8',
    type: 'name-to-formula',
    questionText: 'Quelle est la formule de l\'hydroxyde de fer(III)?',
    options: ['FeOH', 'Fe(OH)₂', 'Fe(OH)₃', 'Fe₃(OH)'],
    correctAnswer: 'Fe(OH)₃',
    explanation: 'L\'hydroxyde de fer(III) a pour formule Fe(OH)₃.',
    conceptId: 'hydroxyles'
  }
];