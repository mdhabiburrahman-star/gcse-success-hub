import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Code2,
  CheckCircle2,
  ArrowRight,
  Clock,
  Binary,
  Cpu,
  Database,
  ShieldCheck,
  Sigma,
  Calculator,
  Network,
  Brain,
} from "lucide-react";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      {
        title:
          "Tutoring Topics — UK GCSE & A-Level Maths, Computer Science + Bangladesh HSC ICT | TutorMentor Near Me",
      },
      {
        name: "description",
        content:
          "Detailed topic list: UK KS3/GCSE/A-Level Mathematics, school → university Computer Science, and full Bangladesh HSC ICT syllabus — number systems, binary/octal/hex conversion, digital logic, logic gates, Boolean algebra, databases and programming. Private home tutor, London.",
      },
      {
        name: "keywords",
        content:
          "HSC ICT tutor London, Bangladesh HSC ICT, number system tutor, binary octal hexadecimal conversion, digital logic tutor, logic gates, Boolean algebra, GCSE maths tutor, A-Level computer science tutor, private home tutor London",
      },
      { property: "og:title", content: "Subjects & Topics — TutorMentor Near Me" },
      {
        property: "og:description",
        content:
          "UK Maths & Computer Science + full Bangladesh HSC ICT — every topic covered, in-home London.",
      },
      { property: "og:url", content: "https://tutormentor.lovable.app/subjects" },
    ],
    links: [{ rel: "canonical", href: "https://tutormentor.lovable.app/subjects" }],
  }),
  component: SubjectsPage,
});

type TopicGroup = { title: string; icon: any; items: string[] };

const mathsLevels = [
  {
    level: "Primary & KS3 (Years 5–9)",
    groups: [
      {
        title: "Number & Arithmetic",
        icon: Calculator,
        items: [
          "Place value, rounding, estimation",
          "Four operations with integers, decimals & negatives",
          "Fractions, decimals, percentages — conversions & ordering",
          "Powers, roots, prime factorisation, HCF & LCM",
          "Ratio, proportion and scaling",
        ],
      },
      {
        title: "Algebra Foundations",
        icon: Sigma,
        items: [
          "Algebraic notation, expressions and substitution",
          "Expanding brackets, factorising, simplifying",
          "Linear equations & inequalities",
          "Sequences — term-to-term and nth term",
          "Coordinates and straight-line graphs",
        ],
      },
      {
        title: "Geometry, Stats & Problem Solving",
        icon: BookOpen,
        items: [
          "Angles, parallel lines, polygons, symmetry",
          "Perimeter, area, surface area & volume",
          "Transformations: translation, reflection, rotation, enlargement",
          "Data handling — mean/median/mode/range, charts",
          "Word problems and reasoning",
        ],
      },
    ],
  },
  {
    level: "GCSE Mathematics (Years 10–11, AQA / Edexcel / OCR)",
    groups: [
      {
        title: "Number",
        icon: Calculator,
        items: [
          "Standard form & calculator skills",
          "Surds, indices and laws of exponents",
          "Compound percentages, growth & decay",
          "Bounds and accuracy",
          "Recurring decimals to fractions",
        ],
      },
      {
        title: "Algebra",
        icon: Sigma,
        items: [
          "Solving linear, quadratic and simultaneous equations",
          "Quadratic factorising, completing the square, quadratic formula",
          "Rearranging formulae & functions",
          "Iteration and numerical methods",
          "Algebraic fractions and proofs",
          "Graphs: linear, quadratic, cubic, reciprocal, exponential, trig",
        ],
      },
      {
        title: "Ratio, Proportion & Rates of Change",
        icon: BookOpen,
        items: [
          "Direct & inverse proportion",
          "Best-buy, recipes, currency conversion",
          "Speed–distance–time, density, pressure",
          "Compound measures and unit conversion",
        ],
      },
      {
        title: "Geometry & Measures",
        icon: BookOpen,
        items: [
          "Pythagoras and trigonometry (SOH CAH TOA)",
          "Sine & cosine rules, area of triangle",
          "Circle theorems",
          "3D shapes, volume, surface area",
          "Vectors and vector proofs",
          "Loci and constructions",
        ],
      },
      {
        title: "Probability & Statistics",
        icon: BookOpen,
        items: [
          "Probability trees, Venn diagrams, conditional probability",
          "Frequency tables, histograms, cumulative frequency",
          "Box plots, quartiles, interquartile range",
          "Scatter graphs, correlation, lines of best fit",
          "Sampling and bias",
        ],
      },
      {
        title: "Exam Technique",
        icon: CheckCircle2,
        items: [
          "Foundation vs Higher tier paper strategy",
          "Calculator vs non-calculator timing",
          "Show-your-working marks",
          "Past papers (AQA / Edexcel / OCR) with mark-scheme drills",
        ],
      },
    ],
  },
  {
    level: "A-Level Mathematics & Further Maths",
    groups: [
      {
        title: "Pure Mathematics",
        icon: Sigma,
        items: [
          "Algebra & functions, partial fractions",
          "Differentiation: chain, product, quotient rules",
          "Integration: by substitution, by parts, definite integrals",
          "Sequences, series and binomial expansion",
          "Trigonometry, identities, radians",
          "Exponentials & logarithms",
          "Numerical methods, Newton-Raphson",
          "Vectors in 2D and 3D",
        ],
      },
      {
        title: "Statistics & Mechanics",
        icon: BookOpen,
        items: [
          "Probability distributions: binomial, normal",
          "Hypothesis testing & p-values",
          "Correlation, regression, large data set",
          "Kinematics — SUVAT, variable acceleration",
          "Forces, Newton's laws, friction, moments",
          "Projectiles and connected particles",
        ],
      },
      {
        title: "Further Maths Topics",
        icon: Brain,
        items: [
          "Complex numbers, Argand diagrams",
          "Matrices and transformations",
          "Polar coordinates, hyperbolic functions",
          "Further calculus and differential equations",
        ],
      },
    ],
  },
];

const csLevels = [
  {
    level: "UK GCSE Computer Science (AQA 8525 / OCR J277)",
    groups: [
      {
        title: "Fundamentals of Algorithms",
        icon: Brain,
        items: [
          "Computational thinking: decomposition, abstraction, pattern recognition",
          "Pseudocode and flowcharts",
          "Searching — linear search, binary search",
          "Sorting — bubble, merge, insertion sort",
          "Trace tables and algorithm efficiency",
        ],
      },
      {
        title: "Programming",
        icon: Code2,
        items: [
          "Python programming from scratch",
          "Variables, constants, data types & casting",
          "Selection (if/elif/else) and iteration (for/while)",
          "Functions, parameters, return values, scope",
          "Lists, tuples, dictionaries, strings",
          "File handling (read/write/append)",
          "Robust programming: validation, defensive design, error handling",
          "Testing — iterative and final, normal/boundary/erroneous data",
        ],
      },
      {
        title: "Data Representation",
        icon: Binary,
        items: [
          "Binary, denary and hexadecimal — full conversion practice",
          "Binary addition and binary shifts",
          "Two's complement for negative numbers",
          "Character sets: ASCII and Unicode",
          "Images as pixels, resolution, colour depth, file size calculations",
          "Sound — sample rate, bit depth, file size",
          "Compression: lossy vs lossless, RLE, Huffman",
        ],
      },
      {
        title: "Computer Systems & Architecture",
        icon: Cpu,
        items: [
          "Von Neumann architecture, fetch–decode–execute cycle",
          "CPU components: ALU, CU, registers (PC, MAR, MDR, ACC)",
          "Cache, clock speed, cores — performance factors",
          "Primary vs secondary storage (HDD, SSD, optical)",
          "Embedded systems",
        ],
      },
      {
        title: "Networks, Security & Ethics",
        icon: Network,
        items: [
          "LAN/WAN, topologies (star, mesh, bus)",
          "TCP/IP stack, packet switching, protocols (HTTP, HTTPS, FTP, SMTP, IMAP)",
          "Wired vs wireless, encryption (symmetric/asymmetric)",
          "Threats: malware, phishing, social engineering, SQL injection",
          "Defences: firewalls, anti-malware, MFA, penetration testing",
          "Ethical, legal and environmental impacts (Data Protection Act, Computer Misuse Act)",
        ],
      },
    ],
  },
  {
    level: "UK A-Level Computer Science (AQA 7517 / OCR H446)",
    groups: [
      {
        title: "Programming & Theory of Computation",
        icon: Code2,
        items: [
          "Object-oriented programming (Java / Python)",
          "Recursion and recursive algorithms",
          "Big-O notation and complexity analysis",
          "Abstract data types: stacks, queues, lists, trees, graphs, hash tables",
          "Tree traversals, Dijkstra's, A* pathfinding",
          "Regular expressions, finite state machines, Turing machines",
        ],
      },
      {
        title: "Boolean Algebra & Digital Logic",
        icon: Binary,
        items: [
          "Logic gates: AND, OR, NOT, NAND, NOR, XOR, XNOR",
          "Truth tables for any combination of gates",
          "Building logic circuits from Boolean expressions",
          "Boolean algebra laws: De Morgan's, distributive, absorption",
          "Simplification with Karnaugh maps",
          "Half adder, full adder, flip-flops",
        ],
      },
      {
        title: "Databases & SQL",
        icon: Database,
        items: [
          "Relational databases, primary/foreign keys, ER diagrams",
          "Normalisation to 3NF",
          "SQL: SELECT, JOIN, WHERE, GROUP BY, INSERT, UPDATE, DELETE",
          "Transactions and ACID properties",
        ],
      },
      {
        title: "Networks & Web",
        icon: Network,
        items: [
          "TCP/IP four-layer model in depth",
          "Client–server vs peer-to-peer",
          "HTTP/HTTPS, REST APIs, JSON",
          "Web technologies: HTML, CSS, JavaScript",
          "Encryption, digital signatures, certificates",
        ],
      },
      {
        title: "Non-Exam Assessment (NEA) Project",
        icon: CheckCircle2,
        items: [
          "Problem analysis, stakeholder interviews",
          "Design: data structures, algorithms, modular decomposition",
          "Implementation in Python / Java / C#",
          "Testing strategy and evaluation",
          "Full write-up — meeting all mark-scheme criteria",
        ],
      },
    ],
  },
  {
    level: "College & University Programming",
    groups: [
      {
        title: "Languages",
        icon: Code2,
        items: [
          "Python — beginner to advanced (OOP, modules, NumPy, Flask)",
          "Java — OOP, JavaFX, JDBC, Spring basics",
          "C / C++ — pointers, memory, STL",
          "JavaScript / TypeScript — Node.js, React",
          "PHP — Laravel & legacy LAMP stack",
          "SQL — MySQL, PostgreSQL, Oracle",
        ],
      },
      {
        title: "University Coursework Support",
        icon: BookOpen,
        items: [
          "Data structures & algorithms assignments",
          "Operating systems concepts",
          "Software engineering, UML, Agile/Scrum projects",
          "Web development (full-stack) coursework",
          "Database design projects (ERD → SQL → app)",
          "Final-year projects and dissertations",
        ],
      },
      {
        title: "Cybersecurity & Cloud",
        icon: ShieldCheck,
        items: [
          "Network security: TCP/IP, firewalls, VPN, Wireshark",
          "Web app security: OWASP Top 10, SQL injection, XSS, CSRF",
          "Tools: OWASP ZAP, Burp Suite, Nmap, Metasploit",
          "Cryptography: symmetric, asymmetric, hashing, PKI",
          "Cloud fundamentals: AWS (Lambda, S3, EC2), Oracle Cloud, Docker, Kubernetes",
          "Secure SDLC and DevSecOps basics",
        ],
      },
    ],
  },
];

const hscIct = [
  {
    title: "Chapter 1 — ICT in the World & Communication",
    icon: Network,
    items: [
      "Concepts of ICT, data vs information",
      "Global village, social, economic & cultural impact",
      "Virtual reality, biometrics, cryptography, smart home, AI, robotics",
      "Data communication: bandwidth, transmission modes (simplex, half/full duplex)",
      "Transmission media: guided (twisted pair, coaxial, fibre) & unguided (radio, microwave, infrared, satellite, Bluetooth, Wi-Fi)",
      "Computer networks — LAN, MAN, WAN, topologies (bus, star, ring, tree, mesh, hybrid)",
      "Cloud computing concepts",
    ],
  },
  {
    title: "Chapter 2 — Communication Systems & Networking",
    icon: Network,
    items: [
      "Network devices: hub, switch, router, gateway, NIC, modem",
      "Mobile communication generations 1G → 5G",
      "Wi-Fi, WiMAX, Bluetooth comparison",
      "IP addressing basics",
    ],
  },
  {
    title: "Chapter 3 — Number Systems & Digital Devices",
    icon: Binary,
    items: [
      "Number systems: decimal, binary, octal, hexadecimal — definitions, bases, place values",
      "Conversion between all bases: binary ↔ decimal ↔ octal ↔ hexadecimal (every combination, with shortcuts)",
      "Binary arithmetic: addition, subtraction, multiplication, division",
      "Signed numbers: sign-magnitude, 1's complement, 2's complement",
      "BCD, ASCII, Unicode coding",
      "Boolean algebra: postulates, laws (commutative, associative, distributive, De Morgan's)",
      "Logic gates: AND, OR, NOT, NAND, NOR, XOR, XNOR — symbols, truth tables, expressions",
      "Universal gates: building any gate from NAND only or NOR only",
      "Boolean function → logic gate diagram (and back)",
      "Designing combinational circuits: half adder, full adder, encoder, decoder, multiplexer, de-multiplexer",
      "Flip-flops: RS, JK, D, T",
      "Register and counter basics",
    ],
  },
  {
    title: "Chapter 4 — Web Design & HTML",
    icon: Code2,
    items: [
      "Website structure, static vs dynamic websites, domain & hosting",
      "HTML basics: tags, attributes, head/body structure",
      "Text formatting, lists, links, images",
      "Tables and forms",
      "Publishing a website",
    ],
  },
  {
    title: "Chapter 5 — Programming Language",
    icon: Code2,
    items: [
      "Programming language generations & translators (compiler, interpreter, assembler)",
      "Algorithm and flowchart design",
      "C programming: data types, operators, input/output",
      "Control structures: if-else, switch, loops (for, while, do-while)",
      "Arrays, strings, functions",
      "Problem-solving and exam-style coding questions",
    ],
  },
  {
    title: "Chapter 6 — Database Management System (DBMS)",
    icon: Database,
    items: [
      "Database concepts: data, field, record, table, file",
      "DBMS advantages, types and structure",
      "Relational database, keys (primary, foreign, candidate)",
      "Database operations: sort, search, index, query",
      "SQL basics: CREATE, SELECT, INSERT, UPDATE, DELETE",
      "Data security and backup",
    ],
  },
];

const englishGrammar = [
  {
    title: "Parts of Speech",
    icon: BookOpen,
    items: [
      "Nouns — common, proper, abstract, collective, countable/uncountable",
      "Pronouns — personal, possessive, reflexive, relative, demonstrative, indefinite",
      "Verbs — main, auxiliary, modal, transitive/intransitive, regular/irregular",
      "Adjectives — descriptive, comparative, superlative, order of adjectives",
      "Adverbs — manner, place, time, frequency, degree",
      "Prepositions — of time, place, direction, agent",
      "Conjunctions — coordinating (FANBOYS), subordinating, correlative",
      "Interjections and determiners (a, an, the, this, some, any)",
    ],
  },
  {
    title: "Tenses (All 12 + Usage)",
    icon: Clock,
    items: [
      "Present Simple, Continuous, Perfect, Perfect Continuous",
      "Past Simple, Continuous, Perfect, Perfect Continuous",
      "Future Simple, Continuous, Perfect, Perfect Continuous",
      "Time expressions and signal words for each tense",
      "Tense agreement in complex sentences",
      "Narrative tenses for storytelling",
    ],
  },
  {
    title: "Sentence Structure & Syntax",
    icon: Sigma,
    items: [
      "Subject, verb, object, complement, adjunct",
      "Simple, compound, complex, compound-complex sentences",
      "Clauses — independent, dependent, relative, noun, adverbial",
      "Phrases — noun, verb, adjective, adverb, prepositional",
      "Active vs passive voice — full transformation practice",
      "Direct vs indirect (reported) speech",
      "Conditionals — zero, first, second, third, mixed",
      "Question forms, tag questions, negation",
    ],
  },
  {
    title: "Advanced Grammar & Usage",
    icon: Brain,
    items: [
      "Subject–verb agreement (tricky cases)",
      "Articles — a/an/the, zero article rules",
      "Modal verbs — ability, obligation, permission, deduction",
      "Gerunds vs infinitives",
      "Participles and participle clauses",
      "Inversion for emphasis (Never have I…)",
      "Cleft sentences (It was… who…)",
      "Common errors and misused pairs (affect/effect, its/it's, fewer/less)",
    ],
  },
  {
    title: "Punctuation & Mechanics",
    icon: CheckCircle2,
    items: [
      "Full stops, commas, semicolons, colons, dashes",
      "Apostrophes — possession vs contraction",
      "Quotation marks and dialogue",
      "Capitalisation rules",
      "Hyphens, brackets, ellipsis",
      "Paragraphing and cohesion",
    ],
  },
  {
    title: "Vocabulary, Writing & Exam Skills",
    icon: Code2,
    items: [
      "Synonyms, antonyms, homophones, collocations",
      "Prefixes, suffixes, root words",
      "Idioms, phrasal verbs, formal vs informal register",
      "Essay, letter, report and email writing",
      "Comprehension and reading strategies",
      "GCSE English Language & Literature exam techniques",
      "IELTS / SSC / HSC English paper preparation",
    ],
  },
];

function TopicGroupCard({ group }: { group: TopicGroup }) {
  const Icon = group.icon;
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-gold" />
        <h4 className="font-semibold text-foreground">{group.title}</h4>
      </div>
      <ul className="mt-3 space-y-1.5">
        {group.items.map((it) => (
          <li key={it} className="flex gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LevelBlock({
  level,
  groups,
}: {
  level: string;
  groups: TopicGroup[];
}) {
  return (
    <div className="rounded-3xl border border-border/70 bg-background/40 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h3 className="text-xl font-bold text-foreground sm:text-2xl">{level}</h3>
        <Link to="/contact" className="text-xs font-semibold text-gold hover:underline">
          Request support for this level →
        </Link>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((g) => (
          <TopicGroupCard key={g.title} group={g} />
        ))}
      </div>
    </div>
  );
}

function SubjectsPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Tutoring services</span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">Every topic. Every level. At your home.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Detailed topic breakdown for <strong className="text-foreground">UK
          KS3 / GCSE / A-Level Mathematics</strong>,{" "}
          <strong className="text-foreground">school → university Computer Science</strong>{" "}
          and the full{" "}
          <strong className="text-foreground">Bangladesh HSC ICT syllabus</strong>.
          Sessions are face-to-face in your London home — minimum 2 hours per booking.
        </p>
      </div>

      {/* ENGLISH GRAMMAR */}
      <div className="mt-20">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-gold ring-1 ring-primary/40">
            <BookOpen className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-3xl font-bold">English Grammar & Language</h2>
            <p className="text-sm text-muted-foreground">
              Full grammar coverage — school KS3/GCSE, HSC/SSC English, IELTS foundations and everyday communication.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {englishGrammar.map((c) => (
            <TopicGroupCard key={c.title} group={c} />
          ))}
        </div>
      </div>

      {/* MATHS */}
      <div className="mt-16">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-gold ring-1 ring-primary/40">
            <Sigma className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-3xl font-bold">Mathematics (UK Curriculum)</h2>
            <p className="text-sm text-muted-foreground">
              KS3 · GCSE (AQA / Edexcel / OCR) · A-Level · Further Maths
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-8">
          {mathsLevels.map((l) => (
            <LevelBlock key={l.level} level={l.level} groups={l.groups} />
          ))}
        </div>
      </div>

      {/* COMPUTER SCIENCE */}
      <div className="mt-20">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-gold ring-1 ring-primary/40">
            <Code2 className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-3xl font-bold">Computer Science (UK Curriculum)</h2>
            <p className="text-sm text-muted-foreground">
              GCSE · A-Level (AQA / OCR) · College & University
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-8">
          {csLevels.map((l) => (
            <LevelBlock key={l.level} level={l.level} groups={l.groups} />
          ))}
        </div>
      </div>

      {/* BANGLADESH HSC ICT */}
      <div className="mt-20">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold ring-1 ring-gold/40">
            <Binary className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-3xl font-bold">Bangladesh HSC ICT — Full Syllabus</h2>
            <p className="text-sm text-muted-foreground">
              Master of all NCTB HSC ICT chapters — taught in English or Bangla.
              Ideal for Bangladeshi HSC, A-Level equivalent and university entrance prep.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {hscIct.map((c) => (
            <TopicGroupCard key={c.title} group={c} />
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-sm text-muted-foreground">
          <strong className="text-foreground">Deep specialism:</strong> number system
          conversions (binary, octal, hex), binary addition, digital logic, logic gates,
          gate-to-gate conversion, building functions from gates, and converting Boolean
          functions to circuit diagrams — taught with hundreds of worked examples and
          HSC board question drills.
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5 text-gold" /> Minimum 2-hour session per booking. Travel cost applies within Greater London.
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-card/60 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Don't see your exact topic?</h2>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          If your topic falls anywhere within UK Maths/Computer Science or Bangladesh
          HSC ICT, I cover it. Send me the topic and exam board — I'll confirm and
          plan the lesson around your weak points.
        </p>
        <Link to="/contact" className="btn-primary mt-6 text-sm inline-flex">
          Ask about a topic <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
