import type { Core } from "@strapi/strapi";

const fallbackNavigation = [
  { label: "Research", url: "/research", isVisible: true },
  { label: "Team", url: "/team", isVisible: true },
  { label: "Publications", url: "/publications", isVisible: true },
  { label: "News", url: "/news", isVisible: true },
  { label: "Contact", url: "/contact", isVisible: true },
];

const defaultGlobalSetting = {
  siteName: "Georgakopoulos-Soares Lab",
  tagline: "Decoding Cancer Genomics through Computational Biology",
  footerText: "© Georgakopoulos-Soares Lab. All rights reserved.",
  contactCtaLabel: "Contact Us",
  contactCtaUrl: "/contact",
  contactCtaDescription:
    "We are always open to new collaborations and partnerships. Get in touch to discuss potential research opportunities.",
  primaryNavigation: fallbackNavigation,
  footerNavigation: fallbackNavigation,
  utilityNavigation: [],
};

const defaultTeamMembers = [
  {
    __component: "team.member" as const,
    name: "Ioannis Mouratidis",
    role: "Research Scientist ",
    focus: "Computational biology",
    affiliation: "Austin Texas University",
    bio: "Ioannis Mouratidis is a Research Software Engineer specializing in machine learning and algorithmic optimization, with over five years of experience applying these methods to bioinformatics and computational biology. He holds a bachelor's degree in Mathematics and a master's in Artificial Intelligence from KU Leuven University. Ioannis is particularly interested in developing scalable and efficient artificial intelligence models that bridge the gap between raw data and actionable insights in life sciences. Outside of work, he enjoys running, reading, and discovering new places through travel.",
    email: null,
    portrait: "ioannis.jpg",
  },
  {
    __component: "team.member",
    name: "Nikol Chantzi",
    role: "Research Scientist",
    focus: "",
    affiliation: "Austin Texas University",
    bio: "I am a mathematician and software engineer. My main research interests lie within probability theory, artificial intelligence, algorithms and computation. When I don’t code I enjoy reading fantasy novels, philosophy books, & working out. I also, love playing RPG board games via which I experience new worlds that spark my imagination to see beyond what’s visible.",
    email: null,
    portrait: "nikol.jpg",
  },
  {
    __component: "team.member",
    name: "Candace Chan",
    role: "PhD Student",
    focus: "Computational biology",
    affiliation: "Austin Texas University",
    bio: "Candace is a computational biologist dedicated to developing advanced tools for disease detection and untangling the complexities of gene regulation. She earned her PhD from the University of California, San Francisco, and bachelor's degree in Molecular and Cell Biology from the University of California, Berkeley.",
    email: null,
    portrait: "candance.jpg",
  },
  {
    __component: "team.member",
    name: "Aksatha Nayak",
    role: "PhD Student",
    focus: "Bioinformatics, Cancer Genomics",
    affiliation: "Austin Texas University",
    bio: "I am a PhD student specializing in bioinformatics, with a focus on cancer genomics. I hold a bachelor's degree in Computer Science and Engineering from India and began my career as a software developer before transitioning into bioinformatics. Prior to starting my PhD, I worked as a Bioinformatician at EMBL-EBI, where I explored my interest in genomic data analysis. Outside of research, I enjoy reading thrillers, hiking and traveling.",
    email: null,
    portrait: "akshatha.jpg",
  },
  {
    __component: "team.member",
    name: "Aris Karatikos",
    role: "Software and Machine Learning Engineer",
    focus: "Software Engineering, Artificial Intelligence, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "Aris Karatzikos is a Software and Machine Learning Engineer with experience in Software Engineering and Artificial Intelligence, specializing in large-scale data systems, bioinformatics, and domain-specific applications in both scientific and industrial contexts. He holds a Master’s degree in Electrical and Computer Engineering and will begin a Ph.D. in Computer Science at the University of Texas at Austin in the fall.",
    email: null,
    portrait: "aris.png",
  },
  {
    __component: "team.member",
    name: "Eleftherios Bochalis",
    role: "PhD Student",
    focus: "Bioinformatics, Cancer Genomics, Evolutionary Biology, AI",
    affiliation: "Austin Texas University",
    bio: "I am a Bioinformatician, with a Master’s in Pharmacy and a robust background in Biology and Computer Science. Currently, I am a PhD student studying Bioinformatics. My main research interests focus on cancer genomics with an emphasis on mutational analysis, evolutionary biology centered around protein evolution, and artificial intelligence. Outside the lab, I play basketball, exercise and listen to music.",
    email: null,
    portrait: "lefteris.jpg",
    linkedin: "https://www.linkedin.com/in/eleftherios-bochalis/",
    github: "https://github.com/mpo05",
  },
  {
    __component: "team.member",
    name: "Georgios Megalovasilis",
    role: "Research Scientist",
    focus: "Bioinformatics, Biomedical Analysis",
    affiliation: "Austin Texas University",
    bio: "I have a background in biology, with hands-on experience in both laboratory and clinical settings. Over time, I became increasingly interested in working with data, which led me to focus on bioinformatics and biomedical analysis during my master’s studies. Now, I enjoy learning new ways to combine biology and programming, and I find the challenges of data-driven research very rewarding. Outside of work, I like reading, hiking, and staying active. Education: Biology BSc, University of Patras. Molecular Medicine MSc, Charité Medical University of Berlin.",
    email: null,
    portrait: "vasilios.jpg",
  },
  {
    __component: "team.member",
    name: "Zhe Liu (Ashley)",
    role: "PhD",
    focus: "Computational Biology, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "My name is Zhe LIU (Ashley). I obtained my Ph.D. from the Department of Computer Science at City University of Hong Kong, under the supervision of Prof. Ka-Chun WONG. My research primarily focuses on computational biology and bioinformatics, with particular interests in transcriptional regulation, single-cell transcriptomics, and the development of computational tools for integrative multi-omics analysis. I am passionate about applying machine learning and data-driven approaches to better understand complex biological systems and human diseases.",
    email: null,
    portrait: "zhe.jpg",
  },
  {
    __component: "team.member",
    name: "Antonis Papageorgiou",
    role: "Bioinformatician",
    focus: "Data Science, Artificial Intelligence, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "Antonis Papageorgiou is a Bioinformatician with a background in Electrical Engineering and Computer Technology. He is passionate about Data Science, AI and Bioinformatics and has strong programming skills. At the moment he is doing his Masters Degree in the field of Bioinformatics and Computational Biology. In his free time, he enjoys traveling and staying active through basketball, tennis and skiing.",
    email: null,
    portrait: "antonis.jpeg",
  },
  {
    __component: "team.member",
    name: "Haris Kilakos",
    role: "PhD Student",
    focus: "Artificial Intelligence, Software Engineering, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "I’m a PhD student in Computer Science at the University of Texas at Austin, specializing in artificial intelligence, software engineering and bioinformatics. My research focuses on developing machine learning methods to tackle complex problems in computational biology, with the goal of deepening our biological understanding. I’m passionate about interdisciplinary collaboration and aim to explore how AI can contribute to meaningful advances in the life sciences.",
    email: null,
    portrait: "haris.jpg",
  },
  {
    __component: "team.member",
    name: "Michail Patsakis",
    role: "Electrical and Computer Engineer",
    focus: "Algorithm Design, Complexity Theory, Software Architecture",
    affiliation: "Austin Texas University",
    bio: "Michail Patsakis is an Electrical and Computer Engineer with a robust background in theoretical computer science and software engineering, having previously contributed his expertise at IBM’s Data & AI department. His research interests span a wide spectrum, encompassing algorithm design, complexity theory and software architecture. In his free time, he enjoys playing blitz chess, classical piano and tennis.",
    email: null,
    portrait: "patsakis.png",
    github: "https://github.com/michalispatsakis",
  },
  {
    __component: "team.member",
    name: "Kimonas Provatas",
    role: "Electrical and Computer Engineer",
    focus: "Software Engineering, System Design, Cybersecurity",
    affiliation: "Austin Texas University",
    bio: "Kimon is an Electrical and Computer Engineer with a strong inclination towards software engineering, system design and cybersecurity. He has worked at IBM security expert labs and his research interests cover software architecture, algorithms and cybersecurity. In his free time he enjoys running, doing outdoor activities and reading classic literature.",
    email: null,
    portrait: "kimonas.jpg",
    linkedin: "https://www.linkedin.com/in/kimonas-provatas-30905a1a1/",
    github: "https://github.com/xkimopro",
  },
];

const defaultTeamPage = {
  heroTitle: "Our Team",
  heroSubtitle:
    "Meet the researchers driving innovation in cancer genomics and computational biology",
  principalInvestigatorName: "Dr. Ilias Georgakopoulos-Soares",
  principalInvestigatorTitle: "Principal Investigator",
  principalInvestigatorSummary:
    "Dr. Georgakopoulos-Soares is an Assistant Professor at the Department of Biochemistry and Molecular Biology at Penn State University. His research focuses on understanding the mechanisms that shape cancer genomes and their implications for cancer development, progression, and treatment response.\n\nThe lab develops computational methods to study mutational processes in cancer and their interactions with the genome and epigenome. Their work aims to improve our understanding of cancer biology and contribute to the development of new diagnostic and therapeutic approaches.",
  principalInvestigatorEducation: [
    {
      __component: "team.education-item" as const,
      label: "Postdoctoral Fellow, University of California, San Francisco",
    },
    {
      __component: "team.education-item" as const,
      label: "Ph.D., University of Cambridge",
    },
    {
      __component: "team.education-item" as const,
      label: "M.Sc., Imperial College London",
    },
  ],
  principalInvestigatorSocialLinks: [
    {
      __component: "team.social-link",
      label: "Twitter",
      url: "https://twitter.com/IliasGeorgakop1",
      iconKey: "twitter" as const,
    },
    {
      __component: "team.social-link",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ilias-georgakopoulos-soares/",
      iconKey: "linkedin" as const,
    },
    {
      __component: "team.social-link",
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=Uxu-s_QAAAAJ&hl=en",
      iconKey: "scholar" as const,
    },
    {
      __component: "team.social-link",
      label: "GitHub",
      url: "https://github.com/ilias-georgakop",
      iconKey: "github" as const,
    },
  ],
  members: defaultTeamMembers,
};

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      const existing = await strapi.entityService.findMany(
        "api::global-setting.global-setting",
        { limit: 1 }
      );

      const hasEntry = Array.isArray(existing)
        ? existing.length > 0
        : Boolean(existing);

      if (!hasEntry) {
        await strapi.entityService.create(
          "api::global-setting.global-setting",
          {
            data: defaultGlobalSetting,
          }
        );
        strapi.log.info("Seeded default global setting");
      }
    } catch (error) {
      strapi.log.error("Failed to seed global setting", error);
    }

    try {
      const existingTeam = await strapi.entityService.findMany(
        "api::team-page.team-page",
        { limit: 1 }
      );

      const hasTeamPage = Array.isArray(existingTeam)
        ? existingTeam.length > 0
        : Boolean(existingTeam);

      if (!hasTeamPage) {
        await strapi.entityService.create("api::team-page.team-page", {
          data: defaultTeamPage as any,
        });
        strapi.log.info("Seeded default team page");
      }
    } catch (error) {
      strapi.log.error("Failed to seed team page", error);
    }
  },
};
