import React, { useState } from 'react';

interface Sidebar2Props {
  subject: string;
  onTopicClick: (topicName: string, moduleName: string, subjectName: string) => void;
}

const moduleData: Record<string, Record<string, string[]>> = {
  //CSE SEM6
  'Object-Oriented-Modeling-and-Design[OOMD]': {
    'MODULE 1(Intro to UML & Basic Structural Modeling)': ['Importance of modeling', 'Principles of modeling', 'Object oriented modeling', 'An overview of UML', 'Conceptual model of the UML', 'Architecture', 'Software development lifecycle', 'Classes-Terms and concepts', 'Common modeling techniques', 'Relationships-Modeling simple dependencies', 'Single inheritance and structural relationships', 'Common mechanisms', 'Diagrams'],
    'MODULE 2( Advances Structural Modeling, class & Object Diagrams)': ['Advanced classes', 'Advanced relationships', 'Interfaces', 'Types and roles', 'Packages', 'Instances', 'Class and Object Diagrams', 'Terms and concepts', 'Modeling techniques for class diagram-Modeling simple collaboration', 'Logical database schema', 'Introduction to object diagrams'],
    'MODULE 3(Basic Behavioral Modeling )': ['Interactions-Terms and concepts', 'Modeling a flow of control', 'Interaction diagramsTerms and concepts', 'Modeling flows of control by time ordering and control by organization', 'Forward and reverse engineering', 'Use cases Terms and concepts', 'Modeling the behavior of the element', ' Use cases Diagrams Terms and concepts', 'Modeling the context of a system', 'Requirement of a system', 'Forward and reverse engineering', 'Activity Diagrams-Terms and concepts', 'Modeling a workflow', 'modeling an operation'],
    'MODULE 4(Advanced Behavioral Modeling )': ['Events and signals-Modeling a family of signals & exceptions;', 'State machines-Modeling the lifetime of an object', 'Introduction to processes and threads, Time and space-Modeling timing constraints, Distribution of objects and objects that migrate;', 'State chart diagrams-Modeling reactive objects, Forward and reverse engineering. '],
    'MODULE 5(Architectural Modeling )': ['Component-Terms and concepts, Modeling executables and libraries, Modeling tables, Files and documents, Modeling an API', 'Deployment-Modeling processors and devices, Modeling the distribution of components', 'Component diagrams-Modeling source code, Executable release, Physical database, Adaptable systems, Forward and reverse engineering', 'Deployment diagramsModeling an embedded systems, Client/Server system, Fully distributed systems, Forward and reverse engineering', 'Probability Density Estimation- Parametric methods, Maximum likelihood, Bayesian inference'],
  },
  'Artificial-Neural-Networks[ANN]': {
    'MODULE 1(Fundamentals of neural Learning)': ['Fundamentals of Neural Learning - Classification and regression, Pre-processing and feature extraction', 'The curse of dimensionality, Polynomial curve fitting, Model complexity, Multivariate non-linear functions', 'Bayes theorem, Decision boundaries, Minimizing risk', 'Probability Density Estimation- Parametric methods, Maximum likelihood, Bayesian inference'],
    'MODULE 2(Single Layer Networks)': ['Linear discriminant functions, Linear separability, Generalized linear discriminants, Leastsquares techniques', 'The perceptron, Fishers linear discriminant.', 'Gradient based Strategies: Learning Rate Decay, Momentum-Based Learning, ParameterSpecific Learning Rates', 'Cliffs and Higher-Order Instability, Gradient Clipping', 'Second-Order Derivatives, Polyak Averaging, Local and Spurious Minima'],
    'MODULE 3(Multi-layer Perceptron & Radial Basic Functions)': ['ANN-Topic-6'],
    'MODULE 4(Error Functions)': ['ANN-Topic-7', 'ANN-Topic-8'],
    'MODULE 5(Learning and Generalization)': ['ANN-Topic-9'],
  },
  'Mobile-Application-Development[MAD]': {
    'MODULE 1()': [''],
    'MODULE 2()': ['sd'],
    'MODULE 3()': ['ds'],
    'MODULE 4()': ['ce'],
    'MODULE 5()': ['aw'],
  },
  'Cyber-Security-Essentials': {
    'MODULE 1(Cyber Security Fundamentals)': ["Network Security Concepts: Information assurance fundamentals, Basic cryptography,Symmetric encryption, Public key encryption", " The Domain Name System(DNS), Firewalls,Virtualization, Radio-Frequency Identification."],
    'MODULE 2(Attacker Techniques)': ["Attacker techniques and motivations: Anti forensics, proxy usage", 'Tunneling techniques: HTTP, DNS, ICMP, Intermediaries', 'Steganography and other concepts, Detection and prevention', 'Fraud techniques: Phishing, smishing, vishing and mobile malicious code, rogue antivirus,click fraud', 'Threat infrastructure: Botnets, Fast Flux, Advanced Fast Flux.'],
    'MODULE 3(Exploitation)': ['Shellcode, Integer overflow vulnerabilities, Stack based buffer overflows, Format string vulnerabilities', ' SQL injection, Malicious PDF files, Race conditions, Web exploit tools', 'DoS conditions, Brute force and dictionary attacks.'],
    'MODULE 4(Malicious Code)': ['Worms, viruses', 'Evading detection and elevating privileges: obfuscation, Virtual Machine obfuscation Persistent software techniques', 'Token kidnapping, Virtual machine Detection, Rootkits, Spyware', 'Attacks against privileged user accounts and escalation of privileges, Stealing information and Exploitation.'],
    'MODULE 5(Defense And Analysis Techniques)': ['Importance of memory forensics, Capabilities of memory forensics, Memory analysis frameworks, Dumping physical memory', 'Installing and using volatility, Finding hidden processes, Volatality analyst pack', 'Honeypots, Malicious code naming, Automated malicious code analysis systems, Intrusion detection techniques.']
  },
  //CSE SEM2
  'Calculus-T&T[CTT]': {
    'MODULE-1()': ['Rolle’s Theorem',
      'Lagrange’s mean value theorem',
      'Cauchy’s mean value theorem',
      'Taylor’s and Maclaurin’s theorems with remainders (without proof) related problems.'
    ],
    'MODULE-2()': ['function of several variables',
      'Jacobian and its properties',
      'Functional dependence',
      'Maxima and minima of functions with two variables',
      'Lagrange’s multiplier method'
    ],
    'MODULE-3()': ['Definition of Laplace transform, Existence conditions',
      'Laplace transforms of standard functions',
      'Linearity property First and second shifting theorems, Change of scale property',
      'Laplace transforms of derivatives and integrals, Multiplication by n t, Division by t',
      'Laplace transform of periodic functions (without proofs)',
      'Laplace transforms of unit step function and unit impulse function'
    ],
    'MODULE-4()': ['Definition of inverse Laplace transform, Linearity property, First and second shifting theorems',
      'Change of scale property, Inverse Laplace transforms of derivatives and integrals',
      'Multiplication by s, Division by s, Convolution theorem (without proofs)',
      'Applications of Laplace transforms to ordinary differential equations of first and second order with constant coefficients',
    ],
    'MODULE-5()': ['Fourier series: Determination of Fourier coefficients, Euler‘s formulae, Convergence of Fourier series (Dirichlet’s conditions), Fourier series in(-pi,pi), Half range sine and cosine expansions, Parseval’s identity in(0,pi)',
      'Fourier Transforms: Complex Fourier transform, Fourier sine and cosine transforms, Inverse Fourier transforms'
    ],

  },
  'Basic-EEE[BEEE]': {
    'MODULE-1()': ['Classification of network elements, Voltage-Current relations for passive elements',
      'Kirchhoffs laws; Series-Parallel connection, Mesh and Nodal analysis (With DC Independent Sources only)',
      'AC sources–Single loop generator, Phasor representation, Voltage, Current',
      'Impedance, Power factor and Apparent power'
    ],
    'MODULE-2()': ['Motors: Types of motors, working principle and applications—DC motor',
      'Three Phase Induction motor, Synchronous motor, Stepper motor',
      'Single Phase Transformer: Construction, principle of operation, EMF equation',
      'Electrical wiring: Methods of electrical wiring systems, Earthing procedure',
      'Switch fuse unit (SFU), Operation of MCB and Relays',
    ],
    'MODULE-3()': ['Illumination: Light sources, Terminologies, Laws of illumination',
      'Types of lamps, Lighting calculations; Interior Lighting - Industrial lighting',
      'Exterior lighting- Street lighting and Flood lighting',
      'Uninterruptible Power Supply (UPS) - Components in UPS, Functionality and Calculation of ratings for UPS components to a specific load',
      'Emergency supply: Batteries -Types of batteries, Elementary calculations for energy consumption for a specified application',
    ],
    'MODULE-4()': ['Sensors- Light sensor, Voltage sensor, Temperature and Humidity sensor, Motion detection sensors',
      'Wireless bluetooth sensors and Distance measurement with Ultrasound sensor',
      'Transducers -Basic requirements of transducers, Passive transducers, Strain gauge',
      'Hall-Effect transducer, LVDT and Active transducers- Piezoelectric and Thermocouple',
      'Data acquisition system (overview and concept only)',],
    'MODULE-5()': ['Half wave and full wave rectifier, Zener diode, characteristics, application – Regulator, BJT—operation',
      'Introduction to Operational amplifier: Inverting and non-inverting amplifier',
      'Application—Adder, Comparator, Integrator and Differentiator',
      'Analog to Digital Convertors—Flash type and Successive approximation types',
      'Digital to Analog converters, Weighed resistor and R-2R types',]

  },
  'Discrete-Math-Structures[DMS]': {
    'MODULE-1()': ['Graph as models, Matrices and Isomorphism',
      'Decomposition and special graphs',
      'Paths, cycles and Trails, Vertex degree and counting',
      'Directed graphs, vertex degrees, Eulerian digraph'],
    'MODULE-2()': ['Properties of trees, Distance in Trees and graphs',
      'Disjoint spanning trees, Spanning Trees and Enumeration',
      'Optimization and Trees, Maximum matching, Hall’s matching condition',
      'Min-Max Theorems, Independent sets and covers',
      'Maximimum & Weighted bipartite matching, Tutte’s 1-factor theorem'
    ],
    'MODULE-3()': ['Cuts and connectivity, connectivity, edge connectivity',
      'blocks, 2- connected graphs, connectivity of digraphs',
      'K- connected and K-edge connected graphs, Applications of Menger’s theorem',
      'Network Flow Problems: Maximum network flow, Integral flows',
      'supplies and demands, Applications of network flow techniques'
    ],
    'MODULE-4()': ['Vertex coloring and upper bounds: Definition and examples, Upper bounds',
      'Brook’s Theorem; Structure of K-chromatic Graphs: Graphs with large chromatic number',
      'Extremal problems and Turan’s theorem, color-critical graphs',
      'Enumerative aspects: Counting proper colorings, Chordal graphs',
      'Planar graphs: Embedding and Euler’s formula',
      'Characterization of planar graphs, Parameters of planarity'
    ],
    'MODULE-5()': ['Line graph and edge coloring: Edge coloring',
      'Characterization of line graphs, Hamiltonian Cycles: Necessary conditions',
      'sufficient conditions, cycles in directed graphs; Planarity',
      'coloring and cycles: Tait’s theorem, Grinberg’s theorem',
      'snarks, Flows and cycle covers'
    ],
  },
  'JAVA[OOPJ]': {
    'MODULE-1()': ['Introduction, functional interfaces, block lambda expressions, generic functional interfaces',
      'passing lambda expressions as arguments',
      'exceptions-variable capture, method references to static',
      'methods-method references to instance methods',
      'method references with generics',
    ],
    'MODULE-2()': ['Introduction-JDBC drivers, JDBC architecture',
      'JDBC classes and interfaces',
      'loading drivers, making a connection, execute SQL statement',
      'SQL statements, retrieving result, scrollable and updatable resultset',
    ],
    'MODULE-3()': ['Server-side Java, Advantages over applets',
      'servlet architecture, life cycle',
      'generic servlet, HTTP Servlet',
      'passing parameters to servlets',
      'retrieving parameters-Cookies-problem with servlet',

    ],
    'MODULE-4()': ['Processing Regular Expression, Pattern, Matcher, Syntax, Two pattern matching option.',
      'Remote Method Invocation: A Simple Client/Server Application Using RMI',
      'Networking:Basics, java.net, InetAddress, TCP/IP client sockets, TCP/IP server sockets, Datagrams',
    ],
    'MODULE-5()': ['Concurrent API packages',
      'Synchronization objects',
      'Executor, Concurrent collections',
      'Locks, Atomic operations, Parallel Programming'
    ],

  },
  'Professional-Ethics&HV[PEHV]': {
    'MODULE-1()': ['Scope and aim of ethics, Senses of ethics',
      'Variety of moral issues, Types of inquiry',
      'Moral dilemmas, Moral autonomy-Kohlberg’s theory',
      'Gilligan’s theory, Consensus, and controversy',
    ],
    'MODULE-2()': ['Theories on virtues and ideals, Professions, Professionalism',
      'Characteristics, Expectations, Professional responsibility, Integrity',
      'Self-respect, Sense of responsibility, Self-interest',
      'Customs and religion, Self-interest and ethical egoism',
      'Customs and ethical relativism, Religion and divine',
    ],
    'MODULE-3()': ['Experimentation, Similarities to standard experiments',
      'Learning from the past and knowledge gained',
      'responsible experimenters, Conscientiousness, Moral autonomy and accountability',
      'The challenger case, Codes of ethics and limitations',
      'Industrial standards and Problems with the law of engineering',
    ],
    'MODULE-4()': ['Collegiality and loyalty, Respect for authority',
      'Collective bargaining, Confidentiality, Conflict of interests',
      'Occupational crime, Rights of engineers, Professional rights',
      'Whistle-blowing, The BART case, Employee rights, and discrimination',
    ],
    'MODULE-5()': ['Acceptance of human values; Ethical Human Conduct, Basis for Humanistic Education',
      'Constitution, and Universal Order; Competence in professional ethics',
      'Case studies: Holistic technologies, Management Models and Production Systems',
      'Transition from the present state to Universal Human Order: socially and ecologically responsible engineers',
      'technologists and managers - enriching institutions and organizations',]

  },
// CSE SEM 4

};

const Sidebar2: React.FC<Sidebar2Props> = ({ subject, onTopicClick }) => {
  const [openModule, setOpenModule] = useState<string | null>(null);

  const handleModuleClick = (module: string) => {
    setOpenModule((prev) => (prev === module ? null : module));
  };

  const modules = moduleData[subject] || {};

  return (
    <aside className="min-h-screen w-64 bg-gray-100 dark:bg-[#2c2c2c] p-4 shadow-lg transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-bold mb-4 text-black dark:text-white">Choose Topics in {subject || 'None Selected'}</h2>
      <div>
        {Object.entries(modules).map(([module, topics]) => (
          <div key={module}>
            <button
              onClick={() => handleModuleClick(module)}
              className="w-full text-left px-2 py-1 font-semibold rounded hover:bg-indigo-200 dark:hover:bg-orange-900 mb-2 dark:text-white"
            >
              {module}
            </button>
            {openModule === module && (
              <div className="pl-4">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => onTopicClick(topic, module, subject)}
                    className="w-full text-left px-2 py-1 rounded hover:bg-indigo-200 dark:hover:bg-orange-900 mb-1 dark:text-gray-300"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar2;