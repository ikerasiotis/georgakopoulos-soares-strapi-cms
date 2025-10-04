import { promises as fs } from "node:fs";
import path from "node:path";

import type { Core } from "@strapi/strapi";
import publicationsFixture from "./fixtures/papers_full.json";

type PublicationSeed = {
  position?: number;
  title?: string;
  result_id?: string;
  link?: string;
  snippet?: string;
  publication_info?: {
    summary?: string;
    authors?: Array<{
      name?: string;
      link?: string;
      author_id?: string;
    }>;
  };
  authors?: Array<{
    name?: string;
    link?: string;
    author_id?: string;
  }>;
  resources?: Array<{
    title?: string;
    file_format?: string;
    link?: string;
  }>;
  inline_links?: {
    versions?: {
      total?: number;
    };
  };
};

type DatabaseSeed = {
  title?: string;
  keywords?: unknown;
  description?: string;
  keypoints?: unknown;
  est_entries?: unknown;
  link?: string;
};

type ToolSeed = {
  title?: string;
  keywords?: unknown;
  description?: string;
  keypoints?: unknown;
  tool_features?: unknown;
  link?: string;
};

async function loadDatabaseSeeds(): Promise<DatabaseSeed[]> {
  const candidatePaths = [
    path.resolve(__dirname, "fixtures", "databases.json"),
    path.resolve(__dirname, "..", "fixtures", "databases.json"),
    path.resolve(__dirname, "..", "..", "databases.json"),
    path.resolve(__dirname, "..", "..", "..", "databases.json"),
    path.resolve(process.cwd(), "databases.json"),
    path.resolve(process.cwd(), "..", "databases.json"),
  ];

  for (const filePath of candidatePaths) {
    try {
      const rawContent = await fs.readFile(filePath, "utf-8");
      const parsed = JSON.parse(rawContent);

      if (Array.isArray(parsed)) {
        return parsed as DatabaseSeed[];
      }
    } catch (error) {
      if ((error as NodeJS.ErrnoException)?.code === "ENOENT") {
        continue;
      }

      console.error(`Failed to load database fixture from ${filePath}`, error);
    }
  }

  return [];
}

async function loadToolSeeds(): Promise<ToolSeed[]> {
  const candidatePaths = [
    path.resolve(__dirname, "fixtures", "tools.json"),
    path.resolve(__dirname, "..", "fixtures", "tools.json"),
    path.resolve(__dirname, "..", "..", "tools.json"),
    path.resolve(__dirname, "..", "..", "..", "tools.json"),
    path.resolve(process.cwd(), "tools.json"),
    path.resolve(process.cwd(), "..", "tools.json"),
  ];

  for (const filePath of candidatePaths) {
    try {
      const rawContent = await fs.readFile(filePath, "utf-8");
      const parsed = JSON.parse(rawContent);

      if (Array.isArray(parsed)) {
        return parsed as ToolSeed[];
      }
    } catch (error) {
      if ((error as NodeJS.ErrnoException)?.code === "ENOENT") {
        continue;
      }

      console.error(`Failed to load tools fixture from ${filePath}`, error);
    }
  }

  return [];
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => (typeof item === "string" ? item.trim() : null))
    .filter((item): item is string => Boolean(item?.length));
}

const fallbackNavigation = [
  { label: "Research", url: "/research", isVisible: true },
  { label: "Databases", url: "/databases", isVisible: true },
  { label: "Tools", url: "/tools", isVisible: true },
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

const defaultDatabasePage = {
  heroEyebrow: "Data Resources",
  heroTitle: "Curated Databases for Genomic Discovery",
  heroDescription:
    "The Georgakopoulos-Soares Lab contributes to and maintains databases that capture genomic variation, regulatory elements, and computational tools. Explore these resources to support your own research and collaborations.",
  featuredTitle: "Featured datasets & portals",
  featuredDescription:
    "Each entry includes key highlights, scale, and keywords to help you identify the best fit for your work.",
  keywordsLabel: "Keywords",
  highlightsLabel: "Highlights",
  scaleLabel: "Scale & coverage",
  linkLabel: "Visit resource",
  linkFallbackLabel: "Link coming soon",
};

const defaultToolsPage = {
  heroEyebrow: "Lab Software",
  heroTitle: "Tools Empowering Genomic Discovery",
  heroDescription:
    "We design and maintain open-source software for handling large-scale genomic data, revealing DNA structural patterns, and streamlining computational biology workflows. Explore the toolset that supports our collaborators and the wider scientific community.",
  featuredTitle: "Featured resources",
  featuredDescription:
    "From scalable k-mer analytics to structural motif detection, each tool includes documentation and ready-to-use code to integrate with your pipelines.",
  keywordsLabel: "Keywords",
  highlightsLabel: "Highlights",
  featuresLabel: "Key features",
  linkLabel: "Explore tool",
  linkFallbackLabel: "Link coming soon",
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

const defaultHomePage = {
  heroTitle: "Georgakopoulos-Soares Lab",
  heroSubtitle: "Decoding cancer genomics through computational biology",
  aboutHeading: "About Our Lab",
  aboutBody:
    "<p>The Georgakopoulos-Soares Laboratory is dedicated to understanding the genomic landscape of cancer through innovative computational approaches and data-driven research.</p>",
};

const defaultPublications = (publicationsFixture as PublicationSeed[]).map(
  (item, index) => ({
    position: item.position ?? index + 1,
    title: item.title ?? "Sample Publication Title",
    resultId: item.result_id ?? `publication-${index + 1}`,
    link: item.link ?? "https://example.com/publication",
    snippet:
      item.snippet ??
      "This is a short teaser describing the publication in one or two sentences.",
    publicationSummary:
      item.publication_info?.summary ??
      "Extended summary of the publication including venue, year, and key findings.",
    publicationAuthors: (item.publication_info?.authors ?? []).map(
      (author) => ({
        __component: "publication.author" as const,
        name: author.name ?? "Unknown Author",
        link: author.link ?? null,
        authorId: author.author_id ?? null,
      })
    ),
    authors: (item.authors ?? []).map((author) => ({
      __component: "publication.author" as const,
      name: author.name ?? "Unknown Author",
      link: author.link ?? null,
      authorId: author.author_id ?? null,
    })),
    resources: (item.resources ?? []).map((resource) => ({
      __component: "publication.resource" as const,
      title: resource.title ?? "Publisher Website",
      fileFormat: resource.file_format ?? "PDF",
      link: resource.link ?? "https://example.com/resource.pdf",
    })),
    citations: item.inline_links?.versions?.total ?? 0,
    isVisible: true,
  })
);

const defaultResearchPage = {
  heroTitle: "Research Areas",
  heroSubtitle:
    "Exploring the genomic landscape of cancer through computational approaches",
  approachTitle: "Our Approach",
  approachParagraphs: [
    {
      content:
        "The Georgakopoulos-Soares Lab combines computational biology, genomics, and machine learning to understand the complex patterns of mutations that drive cancer development and progression.",
    },
    {
      content:
        "We develop innovative computational methods to analyze large-scale genomic datasets, with the goal of identifying new biomarkers, therapeutic targets, and insights into cancer biology.",
    },
    {
      content:
        "Our interdisciplinary approach brings together expertise from computer science, statistics, molecular biology, and clinical oncology to address key challenges in cancer research.",
    },
  ],
  approachHighlights: [
    {
      title: "Genomic Analysis",
      description:
        "Analyzing cancer genomes to identify mutational patterns and signatures.",
      accent: "primary" as const,
    },
    {
      title: "Machine Learning",
      description:
        "Developing algorithms that surface actionable insights from complex data.",
      accent: "secondary" as const,
    },
    {
      title: "Translational Research",
      description:
        "Bridging basic science discoveries with clinical applications.",
      accent: "accent" as const,
    },
    {
      title: "Tool Development",
      description:
        "Creating open resources for the scientific and medical community.",
      accent: "primary" as const,
    },
  ],
  focusTitle: "Research Focus Areas",
  focusProjectsLabel: "Key Projects",
  focusAreas: [
    {
      title: "Mutational Signatures in Cancer",
      accent: "primary" as const,
      descriptionParagraphs: [
        {
          content:
            "Our lab is at the forefront of identifying and characterizing mutational signatures in cancer genomes. These signatures reveal the biological processes operating during tumor development.",
        },
        {
          content:
            "By analyzing large-scale genomic datasets we discover new signatures and explore their biological origins with implications for etiology, detection, and treatment.",
        },
      ],
      projects: [
        {
          label:
            "Identification of novel mutational signatures in pediatric cancers",
        },
        {
          label:
            "Computational methods for signature extraction from whole-genome sequencing",
        },
        { label: "Linking mutational signatures to clinical outcomes" },
        { label: "Characterization of tissue-specific mutational processes" },
      ],
      tags: [
        { label: "Genomic Analysis" },
        { label: "Pattern Recognition" },
        { label: "Cancer Etiology" },
      ],
    },
    {
      title: "Genomic Instability and Cancer Evolution",
      accent: "secondary" as const,
      descriptionParagraphs: [
        {
          content:
            "Genomic instability drives tumor evolution and treatment resistance. We interrogate its mechanisms and consequences across cancer types.",
        },
        {
          content:
            "Our computational methods quantify chromosomal instability, microsatellite instability, and replication stress to uncover therapeutic vulnerabilities.",
        },
      ],
      projects: [
        { label: "Cataloguing genomic instability patterns across tumors" },
        { label: "Relating genomic instability to immunotherapy response" },
        { label: "Tracking tumor evolution via instability markers" },
        {
          label:
            "Identifying synthetic lethal partners of instability pathways",
        },
      ],
      tags: [
        { label: "Tumor Evolution" },
        { label: "Genomic Instability" },
        { label: "Treatment Resistance" },
      ],
    },
    {
      title: "Computational Methods for Cancer Genomics",
      accent: "accent" as const,
      descriptionParagraphs: [
        {
          content:
            "We build computational and machine learning frameworks tailored to the complexity of cancer genomes.",
        },
        {
          content:
            "Our tools integrate heterogeneous data, identify driver mutations, and deliver accessible software for the community.",
        },
      ],
      projects: [
        { label: "Multi-omics integration with machine learning" },
        { label: "Frameworks for mutational signature analysis" },
        { label: "Algorithms for discovering cancer driver mutations" },
        {
          label: "Deep learning models for cancer classification and prognosis",
        },
      ],
      tags: [
        { label: "Machine Learning" },
        { label: "Algorithm Development" },
        { label: "Data Integration" },
      ],
    },
    {
      title: "Translational Cancer Genomics",
      accent: "primary" as const,
      descriptionParagraphs: [
        {
          content:
            "We translate genomic discoveries into clinical impact through biomarker development and validation.",
        },
        {
          content:
            "Collaboration with clinical partners ensures our findings inform diagnosis, prognosis, and therapy selection.",
        },
      ],
      projects: [
        { label: "Biomarkers for early cancer detection" },
        { label: "Predictive markers for immunotherapy response" },
        { label: "Prognostic models based on mutational signatures" },
        { label: "ctDNA monitoring for treatment response" },
      ],
      tags: [
        { label: "Biomarker Discovery" },
        { label: "Precision Medicine" },
        { label: "Clinical Translation" },
      ],
    },
  ],
  methods: [
    {
      title: "Computational Genomics",
      description:
        "Advanced pipelines for whole-genome, whole-exome, and transcriptomic data analysis.",
      accent: "primary" as const,
    },
    {
      title: "Machine Learning",
      description:
        "Supervised, unsupervised, and deep learning models tailored to genomic signals.",
      accent: "secondary" as const,
    },
    {
      title: "Data Integration",
      description:
        "Combining genomic, epigenomic, transcriptomic, and clinical data for holistic insights.",
      accent: "accent" as const,
    },
    {
      title: "Statistical Modeling",
      description:
        "Robust statistical frameworks for mutational processes and clinical associations.",
      accent: "primary" as const,
    },
  ],
  methodsTitle: "Our Methods & Technologies",
  resources: [
    {
      title: "SignatureExplorer",
      description:
        "A comprehensive suite for extracting and interpreting mutational signatures.",
      accent: "primary" as const,
      links: [
        { label: "GitHub", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "GenomeInstability",
      description:
        "Toolkit for quantifying genomic instability across patient cohorts.",
      accent: "secondary" as const,
      links: [
        { label: "GitHub", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "MultiOmicsIntegrator",
      description:
        "Framework for harmonizing multi-omics data and generating integrative models.",
      accent: "accent" as const,
      links: [{ label: "GitHub", href: "#" }],
    },
  ],
  resourcesTitle: "Software & Resources",
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
      const existingPublications = await strapi.entityService.findMany(
        "api::publication.publication",
        { fields: ["id"], limit: 1 }
      );

      const hasPublications = Array.isArray(existingPublications)
        ? existingPublications.length > 0
        : Boolean(existingPublications);

      if (!hasPublications) {
        for (const publication of defaultPublications) {
          try {
            await strapi.entityService.create("api::publication.publication", {
              data: publication,
            });
          } catch (publicationError) {
            strapi.log.error(
              `Failed to seed publication ${publication.title}`,
              publicationError
            );
          }
        }
        strapi.log.info("Seeded default publications");
      }

      const databaseSeeds = await loadDatabaseSeeds();

      if (databaseSeeds.length > 0) {
        const existingDatabases = await strapi.entityService.findMany(
          "api::database.database",
          { fields: ["id"], limit: 1 }
        );

        const hasDatabases = Array.isArray(existingDatabases)
          ? existingDatabases.length > 0
          : Boolean(existingDatabases);

      if (!hasDatabases) {
        for (const rawDatabase of databaseSeeds) {
          const title = rawDatabase.title?.trim();

          if (!title) {
            continue;
          }

          const description = rawDatabase.description?.trim() ?? "";
          const keywords = toStringArray(rawDatabase.keywords);
          const keypoints = toStringArray(rawDatabase.keypoints);
          const estEntries = toStringArray(rawDatabase.est_entries);
          const link = rawDatabase.link?.trim();

          try {
            await strapi.entityService.create("api::database.database", {
              data: {
                title,
                description,
                keywords,
                keypoints,
                estEntries,
                link: link || undefined,
              },
            });
          } catch (databaseError) {
            strapi.log.error(
              `Failed to seed database ${title}`,
              databaseError
            );
          }
        }

        strapi.log.info("Seeded default databases");
      }
    }

    const toolSeeds = await loadToolSeeds();

    if (toolSeeds.length > 0) {
      const existingTools = await strapi.entityService.findMany(
        "api::tool.tool",
        { fields: ["id"], limit: 1 }
      );

      const hasTools = Array.isArray(existingTools)
        ? existingTools.length > 0
        : Boolean(existingTools);

      if (!hasTools) {
        for (const rawTool of toolSeeds) {
          const title = rawTool.title?.trim();

          if (!title) {
            continue;
          }

          const description = rawTool.description?.trim() ?? "";
          const keywords = toStringArray(rawTool.keywords);
          const keypoints = toStringArray(rawTool.keypoints);
          const features = toStringArray(rawTool.tool_features);
          const link = rawTool.link?.trim();

          try {
            await strapi.entityService.create("api::tool.tool", {
              data: {
                title,
                description,
                keywords,
                keypoints,
                features,
                link: link || undefined,
              },
            });
          } catch (toolError) {
            strapi.log.error(`Failed to seed tool ${title}`, toolError);
          }
        }

        strapi.log.info("Seeded default tools");
      }
    }

    const existingResearch = await strapi.entityService.findMany(
      "api::research-page.research-page",
      { limit: 1 }
    );

      const hasResearch = Array.isArray(existingResearch)
        ? existingResearch.length > 0
        : Boolean(existingResearch);

      if (!hasResearch) {
        await strapi.entityService.create("api::research-page.research-page", {
          data: defaultResearchPage,
        });
        strapi.log.info("Seeded default research page");
      }

      const existingDatabasePage = await strapi.entityService.findMany(
        "api::database-page.database-page",
        { limit: 1 }
      );

      const hasDatabasePage = Array.isArray(existingDatabasePage)
        ? existingDatabasePage.length > 0
        : Boolean(existingDatabasePage);

      if (!hasDatabasePage) {
        await strapi.entityService.create("api::database-page.database-page", {
          data: defaultDatabasePage,
        });
        strapi.log.info("Seeded default database page");
      }

      const existingToolsPage = await strapi.entityService.findMany(
        "api::tools-page.tools-page",
        { limit: 1 }
      );

      const hasToolsPage = Array.isArray(existingToolsPage)
        ? existingToolsPage.length > 0
        : Boolean(existingToolsPage);

      if (!hasToolsPage) {
        await strapi.entityService.create("api::tools-page.tools-page", {
          data: defaultToolsPage,
        });
        strapi.log.info("Seeded default tools page");
      }
    } catch (error) {
      strapi.log.error("Failed to seed publications or research page", error);
    }

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

    try {
      const existingHome = await strapi.entityService.findMany(
        "api::home-page.home-page",
        { limit: 1 }
      );

      const hasHomePage = Array.isArray(existingHome)
        ? existingHome.length > 0
        : Boolean(existingHome);

      if (!hasHomePage) {
        await strapi.entityService.create("api::home-page.home-page", {
          data: defaultHomePage,
        });
        strapi.log.info("Seeded default home page");
      }
    } catch (error) {
      strapi.log.error("Failed to seed home page", error);
    }
  },
};
