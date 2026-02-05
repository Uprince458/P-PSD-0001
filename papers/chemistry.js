// Global container for all papers
window.questionPapers = window.questionPapers || {};

// =======================
// CHEMISTRY QUESTION PAPER
// =======================
window.questionPapers["Chemistry Test"] = {
  password: "CHEM123",
  questions: [
  {
   question: "Which is / are correct about Fajan’s rule?",
   options: [
     "Larger cation favours covalency",
     "Smaller anion and larger cation favour more polarization and covalency",
     "Neither (1) nor (2)",
     "Both (1) and (2)"
   ],
   answer: "Both (1) and (2)",
   solution: `Neither larger cation favours covalency nor smaller anion and larger cation favour more polarization and covalency.`
  },

  {
    question: "The ion which shows highest magnetic moment is",
    options: ["Ti3+", "Ni2+", "Mn2+", "Cr3+"],
    answer: "Mn2+",
    solution: `Mn²⁺ ; 3d⁵
   It has 5 unpaired electrons, hence n = 5`
  },

  {/*3*/
    question: "Which of the following is an example of super octet molecules?",
    options: ["ClF<sub>3</sub>","PCl<sub>5</sub>","IF<sub>7</sub>","All of these"],
    answer: "All of these",
    solution: "CO has all electrons paired; the others are odd-electron molecules."
  },

  {
    question: "Total number of sigma bonds involved in ethylene molecule are",
    options: ["CO", "NO", "NO<sub>2</sub>", "ClO<sub>2</sub>"],
    answer: "5"
  },

  {
    question: "The boiling point of a compound is raised by",
    options: [
      "Intermolecular hydrogen bonding",
      "Volatility of compound",
      "Intramolecular hydrogen bonding",
      "Non-polarity in the molecules"
    ],
    answer: "Intermolecular hydrogen bonding"
  },

  {
    question: "The molecule in which central atom does NOT undergo sp3 hybridisation is",
    options: ["NH3", "H2O", "CH4", "BF3"],
    answer: "BF3"
  },

  {
    question: "When a chemical bond is formed between two atoms, energy of the system",
    options: ["Increases", "Decreases", "Remains same", "May increase or decrease"],
    answer: "Decreases"
  },

  {
   question: "Which of the following molecules has highest bond dissociation enthalpy?",
   options: ["Cl2", "I2", "F2", "Br2"],
   answer: "Cl2",
   solution: `Cl₂ has the highest bond dissociation enthalpy due to optimal atomic size and bond length.`
 },
  {
    question: "What is the bond angle ∠HOH in H2O molecule?",
    options: ["109°28′", "104°28′", "107°", "120°"],
    answer: "104°28′",
    solution: "Due to lone pair–lone pair and lone pair–bond pair repulsion."
  },
  {
    question: "What is the bond angle O–S–O in SO2 molecule?",
    options: ["180°", "104.5°", "119.5°", "107°"],
    answer: "119.5°"
  },

  {
    question: "Which among the following is an electron deficient compound?",
    options: ["SiF4", "BCl3", "PCl5", "CCl4"],
    answer: "BCl3"
  },

  {
    question: "Among the following, the molecule with linear geometry is",
    options: ["C2H4", "BeF2", "NH3", "H2O"],
    answer: "BeF2"
  },

  {
    question: "Two lone pairs and two bond pairs of electrons are present in",
    options: ["BF3", "NH3", "H2O", "CO2"],
    answer: "H2O"
  },

  {
    question: "Identify the molecule containing a triple bond",
    options: ["Ammonia", "Dinitrogen", "Water", "Methane"],
    answer: "Dinitrogen"
  },

  {
    question: "Which halide of aluminium is ionic in nature?",
    options: ["AlF3", "AlCl3", "AlBr3", "AlI3"],
    answer: "AlF3"
  },

  {
    question: "Ratio of σ : π bonds in benzene is",
    options: ["2 : 1", "1 : 2", "4 : 1", "3 : 2"],
    answer: "3 : 2"
  },

  {
    question: "Which of the following molecules has no lone pair of electrons on central atom?",
    options: ["SO2", "SF6", "NH3", "SF4"],
    answer: "SF6"
  },     /* 17 */
        {
    question: "Which among the following molecules is NOT linear in shape?",
    options: ["HBr", "H2S", "BeBr2", "CO2"],
    answer: "H2S"
  },

  {
    question: "The geometry of sp3d2 hybrid orbitals is",
    options: ["Linear", "Octahedral", "Triangular", "Trigonal bipyramidal"],
    answer: "Octahedral"
  },

  {
    question: "Match the hybridisation with orientation in space",
    options: [
      "sp3–Tetrahedral, dsp2–Trigonal bipyramidal, sp3d–Square planar, sp3d2–Octahedral",
      "sp3–Octahedral, dsp2–Trigonal bipyramidal, sp3d–Square planar, sp3d2–Tetrahedral",
      "sp3–Square planar, dsp2–Tetrahedral, sp3d–Trigonal bipyramidal, sp3d2–Octahedral",
      "sp3–Tetrahedral, dsp2–Square planar, sp3d–Trigonal bipyramidal, sp3d2–Octahedral"
    ],
    answer: "sp3–Tetrahedral, dsp2–Square planar, sp3d–Trigonal bipyramidal, sp3d2–Octahedral"
  },

  {
    question: "Which of the following molecules possesses highest dipole-dipole interaction?",
    options: ["HF", "HBr", "HI", "HCl"],
    answer: "HF"
  },

  {
    question: "In forming compound AB, an electron is transferred from A to B. Then",
    options: [
      "A is divalent",
      "B is oxidised",
      "A and B are covalently bonded",
      "The compound AB is electrovalent"
    ],
    answer: "The compound AB is electrovalent"
  },

  {
    question: "Identify the correct decreasing order of bond dissociation enthalpy",
    options: [
      "F–F > Cl–Cl > Br–Br > I–I",
      "Cl–Cl > F–F > Br–Br > I–I",
      "I–I > Br–Br > Cl–Cl > F–F",
      "Cl–Cl > Br–Br > F–F > I–I"
    ],
    answer: "Cl–Cl > F–F > Br–Br > I–I"
  },

  {
    question: "Which type of bond has minimum covalent bond length?",
    options: ["N≡N", "C≡C", "C≡N", "O=O"],
    answer: "N≡N"
  },

  {
    question: "Correct decreasing order of covalent character of ionic bond is",
    options: [
      "AlCl3 > MgCl2 > NaCl",
      "AlCl3 > NaCl > MgCl2",
      "MgCl2 > NaCl > AlCl3",
      "NaCl > MgCl2 > AlCl3"
    ],
    answer: "AlCl3 > MgCl2 > NaCl"
  },

  {
    question: "The decreasing order of bond angle in the following molecules is",
    options: [
      "NH3 > CH4 > H2O",
      "H2O > NH3 > CH4",
      "CH4 > H2O > NH3",
      "CH4 > NH3 > H2O"
    ],
    answer: "CH4 > NH3 > H2O"
  },

  {
    question: "Among the following, the paramagnetic substance is",
    options: ["Al", "Mg", "Zn", "Na"],
    answer: "Na"
  },

  {
    question: "Identify metal halide having highest ionic character",
    options: ["MF", "MBr", "MI", "MCl"],
    answer: "MF"
  },

  {
    question: "The molecule having sp3d2 hybridisation and square planar shape is",
    options: ["SF4", "BF4−", "ICl4−", "XeO2F2"],
    answer: "ICl4−"
  },

  {
    question: "Match the molecule with its shape",
    options: [
      "BrF5–T shape, H2O–See saw, ClF3–Square pyramidal, SF4–Bent",
      "BrF5–See saw, H2O–T shape, ClF3–Bent, SF4–Square pyramidal",
      "BrF5–Bent, H2O–Square pyramidal, ClF3–T shape, SF4–See saw",
      "BrF5–Square pyramidal, H2O–Bent, ClF3–T shape, SF4–See saw"
    ],
    answer: "BrF5–Square pyramidal, H2O–Bent, ClF3–T shape, SF4–See saw"
  },

  {
    question: "Number of species NOT having octet around central atom: NH3, AlCl3, BeCl2, CCl4, PCl5",
    options: ["2", "4", "1", "3"],
    answer: "3"
  },

  {
    question: "The ratio of σ : π bonds in benzene is",
    options: ["2 : 1", "1 : 2", "4 : 1", "3 : 2"],
    answer: "3 : 2"
  },

  {
    question: "Which of the following molecules has bond order greater than one?",
    options: ["F2", "H2", "Li2", "N2"],
    answer: "N2"
  },

  {
    question: "The correct order of bond angle is",
    options: [
      "NCl3 > NBr3",
      "H2Te > H2S",
      "N3− < I3−",
      "NO3− > NO2−"
    ],
    answer: "NO3− > NO2−"
  },

  {
    question: "Correct formula of ionic compound formed by A:[Ar]3d10 4s2 and B:[Ne]3s2 3p4 is",
    options: ["A2B", "AB", "AB2", "A2B3"],
    answer: "AB"
  },

  {
    question: "Identify a molecule having bent shape",
    options: ["SO2", "BeBr2", "CO2", "BF3"],
    answer: "SO2"
  },

  {
    question: "Correct order of conductivity of ionic compound is",
    options: [
      "KCl(aq) > KCl(s) > KCl(fused)",
      "KCl(aq) > KCl(fused) > KCl(s)",
      "KCl(s) > KCl(aq) > KCl(fused)",
      "None of these"
    ],
    answer: "KCl(aq) > KCl(fused) > KCl(s)"
  },

  {
    question: "Which of the following molecule has largest bond angle?",
    options: ["H2O", "NH3", "CO2", "CH4"],
    answer: "CO2"
  },
  {
    question: "Number of S-O bond in S<sub>2</sub>O<sub>8</sub><sup>2-</sup> and number of S-S bond in Rhombic sulphur is respectively:",
    options: ["8,8", "6,8", "2,4", "4,2"],
    answer: "8,8"
  },

  {/*40*/
    question: " Amongst the following, the total number of species NOT having eight electrons around central atom in its outermost shell is: NH3, AlCl3, BeCl2, CCl4, PCl5",
    options: ["2", "4", "1", "3"],
    answer: "3"
  },

  {
    question: "The ratio of σ bonds to π bonds in benzene is",
    options: ["2 : 1", "1 : 2", "4 : 1", "3 : 2"],
    answer: "3 : 2"
  },

  {
    question: "Which of the following molecules has bond order greater than one?",
    options: ["F2", "H2", "Li2", "N2"],
    answer: "N2"
  },

  {
    question: "The correct order of bond angle is",
    options: [
      "NCl3 > NBr3",
      "H2Te > H2S",
      "N3− < I3−",
      "NO3− > NO2−"
    ],
    answer: "NO3− > NO2−"
  },

  {
    question: "What will be the correct formula if A and B form an ionic compound? A: [Ar] 3d10 4s2, B: [Ne] 3s2 3p4",
    options: ["A2B", "AB", "AB2", "A2B3"],
    answer: "AB"
  },

  {
    question: "Identify a molecule having bent shape",
    options: ["SO2", "BeBr2", "CO2", "BF3"],
    answer: "SO2"
  },

  {
    question: "Correct order of conductivity of ionic compound is",
    options: [
      "KCl(aq) > KCl(s) > KCl(fused)",
      "KCl(aq) > KCl(fused) > KCl(s)",
      "KCl(s) > KCl(aq) > KCl(fused)",
      "None of these"
    ],
    answer: "KCl(aq) > KCl(fused) > KCl(s)"
  },

  {
    question: "Which of the following molecule has largest bond angle?",
    options: ["H2O", "NH3", "CO2", "CH4"],
    answer: "CO2"
  },

  {
    question: "Which of the following is a nonpolar molecular solid? ",
    options: ["HCL", "SO<sub>2</sub>", "CCL<sub>4</sub>", "ALN"],
    answer: "CCL<sub>4</sub>"
  },

  {
    question: "The pair that contains two P-H bonds in each of the oxoacids is:",
    options: ["H<sub>3</sub>PO<sub>2</sub> & H<sub>4</sub>P<sub>2</sub>O<sub>5</sub>", "H<sub>4</sub>P<sub>2</sub>O<sub>5</sub> & H<sub>4</sub>P<sub>2</sub>O<sub>6</sub>", "H<sub>3</sub>PO<sub>3</sub> & H<sub>3</sub>PO<sub>2</sub>", "H<sub>4</sub>P<sub>2</sub>O<sub>5</sub> & H<sub>3</sub>PO<sub>3</sub>"],
    answer: "H<sub>3</sub>PO<sub>2</sub> & H<sub>4</sub>P<sub>2</sub>O<sub>5</sub> "
  },

  {
    question: "Which of the following molecules has no lone pair of electrons on the central atom?",
    options: ["SO2", "SF6", "NH3", "SF4"],
    answer: "SF6"
  }
  ]
};
