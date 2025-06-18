import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface Sidebar2Props {
  subject: string;
  module: string;
  onTopicClick: (topicName: string, moduleName: string, subjectName: string) => void;
}

const moduleData: Record<string, Record<string, string[]>> = {
  //SCHOOL OF COMPUTING
  //CSE SEM6
  'Object-Oriented-Modeling-and-Design[OOMD]': {
    'MODULE 1(Intro to UML & Basic Structural Modeling)': ['Introduction to UML: Importance of modeling, Principles of modeling, Object oriented modeling',
      'An overview of UML, Conceptual model of the UML, Architecture',
      'Software development life cycle, Basic Structural Modeling: Classes-Terms and concepts',
      'Common modeling techniques, Relationships-Modeling simple dependencies',
      'Single inheritance and structural relationships Common mechanisms, Diagrams',
    ],
    'MODULE 2( Advances Structural Modeling, class & Object Diagrams)': ['Advanced Structural Modeling: Advanced classes, Advanced relationships',
      'Interfaces, Types and roles, Packages, Instances',
      'Class and Object Diagrams: Terms and concepts',
      'Modeling techniques for class diagram-Modeling simple collaboration',
      'Logical database schema, Forward and reverse engineering, Introduction to object diagrams',
    ],
    'MODULE 3(Basic Behavioral Modeling )': ['Basic Behavioral Modeling-I: Interactions-Terms and concepts, Modeling a flow of control',
      'Interaction diagramsTerms and concepts, Modeling flows of control by time ordering and control by organization',
      'Forward and reverse engineering. Basic Behavioral Modeling-II: Use casesTerms and concepts',
      'Modeling the behavior of the element; Use case Diagrams-Terms and concepts, Modeling the context of a system, Requirement of a system',
      'Forward and reverse engineering; Activity Diagrams-Terms and concepts, Modeling a workflow',
      'modeling andoperation, Forward and reverse engineering. ',],
    'MODULE 4(Advanced Behavioral Modeling )': ['Events and signals-Modeling a family of signals & exceptions;', 'State machines-Modeling the lifetime of an object', 'Introduction to processes and threads, Time and space-Modeling timing constraints, Distribution of objects and objects that migrate;', 'State chart diagrams-Modeling reactive objects, Forward and reverse engineering. '],
    'MODULE 5(Architectural Modeling )': ['Component-Terms and concepts, Modeling executables and libraries, Modeling tables, Files and documents, Modeling an API', 'Deployment-Modeling processors and devices, Modeling the distribution of components', 'Component diagrams-Modeling source code, Executable release, Physical database, Adaptable systems, Forward and reverse engineering', 'Deployment diagramsModeling an embedded systems, Client/Server system, Fully distributed systems, Forward and reverse engineering', 'Probability Density Estimation- Parametric methods, Maximum likelihood, Bayesian inference'],
  },
  'Artificial-Neural-Networks[ANN]': {
    'MODULE 1(Fundamentals of neural Learning)': ['Fundamentals of Neural Learning - Classification and regression, Pre-processing and feature extraction', 'The curse of dimensionality, Polynomial curve fitting, Model complexity, Multivariate non-linear functions', 'Bayes theorem, Decision boundaries, Minimizing risk', 'Probability Density Estimation- Parametric methods, Maximum likelihood, Bayesian inference'],
    'MODULE 2(Single Layer Networks)': ['Linear discriminant functions, Linear separability, Generalized linear discriminants, Leastsquares techniques', 'The perceptron, Fishers linear discriminant.', 'Gradient based Strategies: Learning Rate Decay, Momentum-Based Learning, ParameterSpecific Learning Rates', 'Cliffs and Higher-Order Instability, Gradient Clipping', 'Second-Order Derivatives, Polyak Averaging, Local and Spurious Minima'],
    'MODULE 3(Multi-layer Perceptron & Radial Basic Functions)': ['Multi-Layer Perceptron - Feed-forward network mappings, Threshold units',
      'Sigmoidal units, Weight-space symmetries, Error back-propagation', 'Radial Basis Functions - Radial basis function networks, Network training',
    ],
    'MODULE 4(Error Functions)': ['Sum-of-squares error, Minkowski error, Input-dependent variance',
      'Modelling conditional distributions, Estimating posterior probabilities',
      'Sum-of-squares for classification, Cross-entropy for two classes',
      'Multiple independent attributes, Cross-entropy for multiple classes',
      'Entropy;Parameter Optimization Algorithms - Gradient descent',
    ],
    'MODULE 5(Learning and Generalization)': ['Bias and variance, Regularization',
      'Training with noise, Soft weight sharing',
      'Growing and pruning algorithms',
      'Committees of networks, Mixtures of experts',
    ],
  },
  'Mobile-Application-Development[MAD]': {
    'MODULE 1(introduction and mobile user interface design)': ['Mobile web presence, Mobile applications, Marketing',
      'App as a mobile web app; User interface design - Effective use of screen real estate',
      'Mobile application users, Mobile information design',
      'Mobile platforms, Tools of mobile interface design',
      'Android versions, Features and architecture, Required tools, Android application launching',
    ],
    'MODULE 2(activities, intents and Android user interface)': ['Activities, Linking activities using intents',
      'Calling Built – In Applications Using Intents, Displaying notifications',
      'Components of a screen, Adapting to display orientation',
      'Managing changes to screen orientation',
      'Utilizing the action bar, Listening for UI notifications',
    ],
    'MODULE 3(advanced user interface and data persistence)': ['Basic views, Picker views, List view',
      'Image view, Menus with views, Web view',
      'Saving and loading user preferences',
      'Persisting data to files, Creating and using databases',
    ],
    'MODULE 4(messaging, location-Based servies, and networking)': ['SMS messaging, Sending e-mail',
      'Displaying maps, Getting location data',
      'Monitoring a location, Consuming web services using HTTP',
    ],
    'MODULE 5(Android services, publishing Android applications and ios)': ['Services, Communication between a service and an activity',
      'Binding activities to services, Threading',
      'Preparing for publishing, Deploying APK files',
      'iOS tools, iOS project, Debugging iOS apps, Objective-C basics',
      'Hello world app, Building the derby app in iOS',
    ],
  },
  'Cyber-Security-Essentials[CSE]': {
    'MODULE 1(Cyber Security Fundamentals)': ["Network Security Concepts: Information assurance fundamentals, Basic cryptography,Symmetric encryption, Public key encryption", " The Domain Name System(DNS), Firewalls,Virtualization, Radio-Frequency Identification."],
    'MODULE 2(Attacker Techniques)': ["Attacker techniques and motivations: Anti forensics, proxy usage", 'Tunneling techniques: HTTP, DNS, ICMP, Intermediaries', 'Steganography and other concepts, Detection and prevention', 'Fraud techniques: Phishing, smishing, vishing and mobile malicious code, rogue antivirus,click fraud', 'Threat infrastructure: Botnets, Fast Flux, Advanced Fast Flux.'],
    'MODULE 3(Exploitation)': ['Shellcode, Integer overflow vulnerabilities, Stack based buffer overflows, Format string vulnerabilities', ' SQL injection, Malicious PDF files, Race conditions, Web exploit tools', 'DoS conditions, Brute force and dictionary attacks.'],
    'MODULE 4(Malicious Code)': ['Worms, viruses', 'Evading detection and elevating privileges: obfuscation, Virtual Machine obfuscation Persistent software techniques', 'Token kidnapping, Virtual machine Detection, Rootkits, Spyware', 'Attacks against privileged user accounts and escalation of privileges, Stealing information and Exploitation.'],
    'MODULE 5(Defense And Analysis Techniques)': ['Importance of memory forensics, Capabilities of memory forensics, Memory analysis frameworks, Dumping physical memory', 'Installing and using volatility, Finding hidden processes, Volatality analyst pack', 'Honeypots, Malicious code naming, Automated malicious code analysis systems, Intrusion detection techniques.']
  },

  // AIML SEM 6
  'Cloud-Computing[CC]': {
    'MODULE-1(fundamental cloud Computing and Virtualization)': ['Cloud Computing: Origin and influences, Basic concepts and terminology',
      'Goals and benefits, Risks and challenges, Roles and boundaries and Cloud characteristics',
      'Introduction to Virtualization: Characteristics, Taxonomy of virtualization technologies',
      'Pros and cons of virtualization, Virtualization Technologies:Xen, VMware and Hyper-V',
    ],
    'MODULE-2(understanding cloud models and architecture)': ['Cloud Models: NIST model, Cloud Cube model, Deployment models: Public, Private, Hybrid and Community',
      'Service models: IaaS, PaaS and SaaS, Understanding Cloud Architecture: Exploring the Cloud Computing Stack: Composability',
      'Infrastructure, Platforms, Virtual Appliances, Communication Protocols, Applications',
      'Connecting to the Cloud: The Jolicloud Netbook OS and Chromium OS - The Browser as an Operating System',
    ],
    'MODULE-3(understanding cloud services, application and capacity planning)': ['Understanding Cloud Services and ApplicationsInfrastructure as a Service (IaaS): IaaS workloads, Pods, aggregation, and silos',
      'Platform as a Service (PaaS), Software as a Service (SaaS): SaaS characteristics, Open SaaS and SOA',
      'Salesforce.com and CRM SaaS; Identity as a Service (IDaaS): Identity, Networked identity service classes',
      'Identity system codes of conduct, IDaaS interoperability; Compliance as a Service (CaaS)',
      'CapacityPlanning: Defining Baseline and Metrics: Baseline measurements, System metrics',
      'Load Testing, Resource ceilings, Server and instance types; Network Capacity and Scaling',
    ],
    'MODULE-4(Exploring platform as a service(paSs)': ['PaaS Application Frameworks: Drupal, Eccentex AppBase 3.0, LongJump, Square space, WaveMaker and Wolf Frameworks',
      'Exploring Platform as a Service using Google Web Services:Surveying the Google Application Portfolio',
      'Google Toolkit and Working with the Google App Engine',
      'Exploring Platform as a Service usingMicrosoft Cloud Services: Exploring Microsoft Cloud Services',
      'Defining the Windows Azure Platform, Windows Live: Windows Live Essentials',
      'Windows Live Home and Windows Live for Mobile',
    ],
    'MODULE-5(Exploring infrastructure as a service (iaas)': ['Understanding Amazon Web Services, Amazon Web Service Components and Services',
      'Working with the Elastic Compute Cloud (EC2): Amazon Machine Images, Pricing models',
      'System images and software, Creating an account and instance on EC2',
      'Working with Amazon Storage Systems: Amazon Simple Storage System (S3)',
      'Amazon Elastic Block Store (EBS) and CloudFront,  Understanding Amazon Database Services: Amazon SimpleDB',
      'Amazon Relational Database Service (RDS) and Choosing a database for AWS',
    ],
  },
  'Deep-Learning[DL]': {
    'MODULE-1(machine learning with shallow neural networks)': ['Neural Architectures for Binary Classification Models',
      'Neural Architectures for Multiclass Models',
      'Backpropagated Saliency for Feature Selection, Autoencoders- Basic Principles',
      'Nonlinear Activations, Deep Autoencoders, Application to Outlier Detection',
    ],
    'MODULE-2(training deep neural networks)': ['Backpropagation: Backpropagation with the Computational Graph Abstraction, Dynamic Programming',
      'Backpropagation with Post-Activation and Pre-Activation variables, Examples of Updates for Various Activations',
      'Loss Functions on Multiple Output Nodes and Hidden Nodes, Backpropagation Tricks for Handling Shared Weights',
      'Setup and Initialization Issues, Gradient based Strategies: Learning Rate Decay, Momentum-Based Learning',
      'Parameter-Specific Learning Rates, Cliffs and Higher-Order Instability, Gradient Clipping',
      'Second-Order Derivatives, Polyak Averaging, Local and Spurious Minima',
    ],
    'MODULE-3(genetic algorithms)': ['The Bias-Variance Trade-Off, Generalization Issues in Model Tuning and Evaluation',
      'Penalty-Based Regularization, Ensemble Methods, Early Stopping',
      'Unsupervised Pretraining, Regularization in Unsupervised Applications.',
    ],
    'MODULE-4(recurrent neural networks)': ['Recurrent Neural Networks: Expressiveness of Recurrent Networks, The Architecture of Recurrent Neural Networks',
      'The Challenges of Training Recurrent Networks. Long Short-Term Memory (LSTM)',
      'Gated Recurrent Units (GRUs), Applications of Recurrent Neural Networks: Automatic Image Captioning',
      'Sequence-to Sequence Learning and Machine Translation, Sentence-Level Classification',
      'Time-Series Forecasting and Prediction, End-to-End Speech Recognition',
    ],
    'MODULE-5(Convolutional neural networks)': ['The Basic Structure of a Convolutional Network, Training a Convolutional Network',
      'Convolutional Architectures-AlexNet,VGG,GoogleNet,ResNet, Visualizing the Features of a Trained Network',
      'Convolutional Autoencoders, Applications of Convolutional Neural Networks- Content-Based Image Retrieval',
      'Object Detection, Natural Language and Sequence Learning.',
    ],
  },
  'Compiler-Design[CD]': {
    'MODULE-1(introduction to compiler and lexical analysis)': ['Structure of a compiler, Interpretation- Interpreters',
      'Recursive interpreters, Iterative interpreters',
      'Lexical Analysis: The Role of the Lexical Analyzer, Input Buffering',
      'Specification of Tokens, The Lexical-Analyzer Generator LEX',
    ],
    'MODULE-2(syntax analysis)': ['The Role of the Parser, Eliminating Ambiguity, Eliminating of Left Recursion and Left Factoring Top-Down Parsing: Recursive descent parsing',
      'Non Recursive Predictive parsing, LL(1) Grammars, A traditional top-down parser generator—YACC',
      'Bottom-Up Parsing: Shift reduce parsing, LR parsers – Simple LR parser',
      'Canonical LR parser, LALR parser, Using Ambiguous Grammars',
    ],
    'MODULE-3(syntax directed translation and  type checking)': ['Syntax directed definition, S-attributed and L-attributed definitions',
      'Construction of syntax trees, Type Checking: Type Expressions, Type Equivalence',
      'Rules for Type Checking, Type Conversions, Overloading of Functions and Operators',
    ],
    'MODULE-4(intermediate code generator and run time environments)': ['Preprocessing the intermediate code, Preprocessing of expressions, Preprocessing of if statements and goto statements',
      'Preprocessing of routines, Variants of Syntax Trees, Three Address Code',
      'Boolean expressions, Flow-of-Control Statements, Control- Flow Translation of Boolean Expressions',
      'Run time Environments: Storage organization, Stack Allocation of Space, Access to Nonlocal Data on the Stack',
    ],
    'MODULE-5(code optimization and code generator)': ['Basic Blocks and Flow Graphs, Optimization of Basic Blocks, The principal sources of optimization',
      'Introduction to data flow analysis. Code Generation: Issues in the Design of a Code Generator',
      'The Target Language, Simple Code Generator, Peephole optimization',
      'Register allocation and assignment',
    ],
  },


  //DS SEM6

  'Artificial-Intelligence[AI]': {
    'MODULE-1(Intro to AI)': ['Foundations of artificial intelligence, History of artificial intelligence, State of the art, Risks and benefits of AI',
      'Intelligent agents – Agents and environments, The concept of rationality, Structure of agents',
    ],
    'MODULE-2(Problem Solving by Searching)': ['Problem solving agents, Search algorithms, Uninformed search strategies',
      'Informed search strategies – Greedy best-first search, A* search; Heuristic functions',
    ],
    'MODULE-3(Search in Complex Environments)': ['Local search algorithms and optimization problems – Hill-climbing search, Simulated annealing, Local beam search, Evolutionary algorithms',
      'Optimal decisions in games – The minimax search algorithm, Optimal decisions in multiplayer games, Alpha-Beta pruning,Move ordering',
      ' Monte Carlo tree search, Kalman Filte',
    ],
    'MODULE-4(Probabilistic reasoning)': ['Representing Knowledge in an uncertain domain, Semantics of Bayesian networks',
      'Probabilistic reasoning over time – Time and uncertainty, Inference in temporal models',
    ],
    'MODULE-5(Robotics , ethics & Safety in AI)': ['Robots, Robot hardware, Robotic perception, Alternative robotic frameworks, Application domains ,Limits of AI',
      'Ethics of AI – Surveillance, security and privacy, Fairness and bias, Trust and transparency, AI safety',
    ],

  },
  'Distributed-Systems[DS]': {
    'MODULE-1(introduction)': ['Relation to parallel multiprocessor/multicomputer systems - Message-passing systems versus shared memory systems - Synchronous versus asynchronous executions',
      'Design issues and challenges - A model of distributed executions - Models of communication networks - Past and future cones of an event - Models of process communications'
    ],
    'MODULE-2(logical time)': [
      'A framework for a system of logical clocks - Scalar time - Vector time - Efficient implementations of vector clocks',
      ' Jard–Jourdan’s adaptive technique - Matrix time - Virtual time - Physical clock synchronization: NTP',
    ],
    'MODULE-3(global state and snapshot recording algorithms)': ['Global state and snapshot recording algorithms - Snapshot algorithms for FIFO channels - ariations of the Chandy–Lamport algorithm',
      'Snapshot algorithms for non-FIFO channels - Snapshots in a causal delivery system - Monitoring global state'
    ],
    'MODULE-4(Distributed mutual exclusion algorithms)': ['Lamport’s algorithm - Ricart–Agrawala algorithm - Singhal’s dynamic information-structure algorithm - Lodha and Kshemkalyani’s fair mutual exclusion algorithm',
      'Quorum-based mutual exclusion algorithms - Maekawa’s algorithm - Agarwal–El Abbadi quorum-based algorithm',
      'Token-based algorithms - Suzuki–Kasami’s broadcast algorithm - Raymond’s tree-based algorithm'
    ],
    'MODULE-5(Deadlock detection in distributed systems )': ['System model - Models of deadlocks - Knapp’s classification of distributed deadlock detection algorithms',
      'Mitchell and Merritt’s algorithm for the singleresource model - Chandy–Misra–Haas algorithm for the AND model',
      'Chandy–Misra–Haas algorithm for the OR model - Distributed shared memory - Abstraction and advantages - Memory consistency models'
    ],

  },
  'Software-Testing&QA[STQA]': {
    'MODULE-1(Intro)': ['Agile Testing – Traditional vs agile testing - Principles for agile testers – Mind set- Applying principles and values –Adding value'
    ],
    'MODULE-2(Team logistics)': ['Team Structure - Independent QA Teams - Integration of Testers into an Agile Project - Agile Project Teams - Physical Logistics',
      'Resources - Tester-Developer Ratio - Hiring an Agile Tester - Building a Team - Self-Organizing Team',
      'Involving Other Teams - Every Team Member Has Equal Value - Performance and Rewards'
    ],
    'MODULE-3(Transitioning Typical processes)': ['Lightweight Processes - Metrics Defect Tracking – Tracking tools - Test Planning - Test Strategy vs Test Planning',
      'Traceability - Existing Processes and Models - Audits - Frameworks, Models, and Standards'
    ],
    'MODULE-4(Test Tool strategy)': ['Tools to Elicit Examples and Requirements - Checklists - Mind Maps - Spreadsheets - Mock-Ups - Flow Diagrams',
      'Software-Based Tools - Tools for Automating Tests Based on Examples - Tools to Test below the GUI and API Level',
      'Tools for Testing through the GUI - Strategies for Writing Tests - Testability - Code Design and Test Design'
    ],
    'MODULE-5(Test That critique That product)': ['Introduction to Quadrant 3 - Demonstrations - Scenario Testing - Exploratory Testing - Usability Testing',
      'Behind the GUI - Testing Documents and Documentation - User Documentation - Reports - Tools to Assist with Exploratory Testing'
    ],
    //Computer Organization&Architecture[COA] IS IN CYS SEM6
  },

  //CYS SEM6
  'Computer-Architecture & Organization[CAO]': {
    'MODULE-1(introduction)': [
      'Organization and architecture, Structure and function, IAS computer structure',
      'Computer function, Interconnection structures, Bus interconnection',],
    'MODULE-2(central processing unit)': ['Arithmetic logic unit, Integer multiplication- Booth’s algorithm; Floating point representation principles, Machine instruction characteristics',
      'Addressing modes, Instruction formats – Instruction length, Allocation of bits; Processor organization',
      'Register organization – User visible registers, Control and status registers; Instruction cycle',
    ],
    'MODULE-3(control unit input/output)': ['Control Unit: Micro operations, Control of the processor – Functional requirements, Control signals, Internal processor organization',
      ' Hardwired implementation, Microinstructions, Microprogrammed control unit',
      'Micro instruction sequencing – Design considerations, sequencing techniques, Address generation',
      'Micro instruction sequencing – Design considerations, sequencing techniques, Address generation Microinstruction encoding',
      'Input/Output: External devices, I/O modules, Direct memory access function, I/O Channels and Processors, PCI Physical and Logical Architecture'
    ],
    'MODULE-4(memory systems)': ['Semiconductor Memories: Computer Memory System overview, Semiconductor Main Memory- Organization, DRAM and SRAM',
      'Types of ROM, Chip logic, Chip packaging, Module organization, Interleaved memory',
      'DDR DRAM, Flash Memory, Newer Nonvolatile Solid-State Memory Technologies',
      'Cache Memory: Cache Memory Principles, Elements of Cache Design-Cache Addresses, Mapping Functions ',
      'External Memory: Solid State Drives'
    ],
    'MODULE-5(parallel organization)': ['Parallel Processing: Multiple Processor Organizations, Instruction Pipelining, Symmetric Multiprocessors, Nonuniform Memory Access, Multicore Organization',
      'Multicore Computers: Hardware performance issues, Software performance issues, Multicore organization, Intel Core i7-990X'
    ],
  },
  'Cryptography-and-Network-Security[CNS]': {
    'MODULE-1(introdution)': ['Computer security concepts, Security attacks, Security services',
      'Security mechanisms,Model for network security, Symmetric cipher model',
      'Substitution techniques -Monoalphabetic ciphers and Polyalphabetic ciphers.'
    ],
    'MODULE-2(Symmetric ciphers)': ['Stream ciphers and block ciphers, Data Encryption Standard (DES)',
      'Advanced Encryption Standard (AES) - Structure, Transformation Functions',
      'Block Cipher Operation - Multiple encryption and triple DES',
      'Cipher block chaining mode, Cipher feedback mode, Output feedback mode, Counter mode.'
    ],
    'MODULE-3(public key & cryptographic data intergrity algorithms)': ['Public Key Cryptography: RSA, Diffie-Hellman key exchange, Elgamal cryptographic system',
      'Cryptographic Data Integrity Algorithms: Hash Functions - Simple hash functions',
      'Secure Hash Algorithm SHA-512; Message Authentication Codes – Requirements, Functions',
      'Security of MACs, HMAC; Digital signatures - Schnorr Digital signature scheme'
    ],
    'MODULE-4(mutual trust)': ['Key Management and Distribution: Symmetric key distribution using symmetric and asymmetric encryption',
      'Distribution of public keys, X.509 certificates, Public key infrastructure.',
      'User Authentication: Remote user authentication principles, Kerberos, Personal identity verification.'
    ],
    'MODULE-5(network and internet security)': ['Transport Level Security: Web security considerations, Transport layer security, HTTPS.;',
      'Electronic Mail Security: S/MIME, Pretty Good Privacy, DNSSEC.',
      'IP Security: Overview, Policy, Encapsulating security payload.'
    ],
  },
  'Ethical-Hacking[EH]': {
    'MODULE-1(introduction)': ['Introduction: Hacking Impacts, The Hacker Framework: Planning the test, Sound Operations, Reconnaissance',
      'Enumeration, Vulnerability Analysis, Exploitation, Final Analysis, Deliverable, Integration',
      'Information Security Models: Computer Security, Network Security, Service Security, Application Security, Security Architecture',
      'Information Security Program: The Process of Information Security, Component Parts of Information Security Program, Risk Analysis and Ethical Hacking'
    ],
    'MODULE-2(the business perspective and planning for a controlled attack)': ['Business Objectives, Security Policy, Previous Test Results, Business Challenges Inherent Limitations',
      'Imposed Limitations, timing is Everything, Attack Type, Source Point',
      'Required Knowledge, Multi-Phased Attacks, Teaming and Attack Structure, Engagement Planner',
      'The Right Security Consultant, The Tester, Logistics, Intermediates, Law Enforcement'
    ],
    'MODULE-3(preparing for a hack and reconnaissance)': ['Technical Preparation, Managing the Engagement',
      'Social Engineering', 'Physical Security,Internet Reconnaissance'
    ],
    'MODULE-4(enumeration and exploitation)': ['Enumeration Techniques, Soft Objective, Looking Around or Attack',
      'Elements of Enumeration, Preparing for the Next Phase Intutive Testing',
      'Evasion, Threads and Groups, Operating Systems, Password Crackers, RootKits',
      'applications, Wardialing, Network, Services and Areas of Concern'
    ],
    'MODULE-5(deliverable and integration)': ['The Deliverable, The Document, Overall Structure, Aligning Findings',
      'Presentation Integrating the Results, Integration Summary',
      'Mitigation, Defense Planning, Incident Management, Security Policy, Conclusion'
    ],
  },
  'Web-Application-Security[WAS]': {
    'MODULE-1(Security Models and Virtual Private Databases)': ['Database Application Security Models: Introduction, Types of users',
      'Security models, Application types, Application security models.',
      'Virtual Private Databases: Introduction, Overview of VPD, Implementing VPDs',
      'Implementing Oracle VPD, Viewing VPD Policies and application context using the data dictionary and policy manager',
      'Implementing row and column level security with SQL server.'
    ],
    'MODULE-2(database security design)': ['Secure DBMS Design: Introduction, Security mechanisms in DBMSs, Secure DBMS architectures.',
      'Design of Secure Databases: Preliminary analysis, Requirement analysis and security policy selection',
      'Conceptual design, Logical design, Physical design, Implementation of security mechanisms, Verification, and testing'
    ],
    'MODULE-3(data auditing and auditing database activities)': ['Application Data Auditing: Introduction, DML action auditing architecture, Oracle triggers',
      'SQL server triggers, Fine grained auditing with Oracle, DML statement audit trail, Auditing application errors with Oracle.',
      'Auditing Database Activities: Using Oracle database activities, Creating DLL triggers with Oracle',
      'Auditing database activities with Oracle, Auditing server activity with Microsoft SQL server 2000',
      'Implementing AQL profiler, Security auditing with SQL server, SQL injection.'
    ],
    'MODULE-4(the wed security)': ['The Web Security Problem, Risk Analysis and Best Practices, Cryptography',
      'the Web:Cryptography and Web Security, Working Cryptographic Systems and Protocols',
      'Legal Restrictions on Cryptography, Digital Identification; Top 10 vulnerabilities in OWAS'
    ],
    'MODULE-5(the web Privacy)': ['The Web’s War on Your Privacy, Privacy-Protecting Techniques',
      'Backups and Antitheft, Web Server Security, Physical Security for Servers',
      'Host Security for Servers, Securing Web Applications.'
    ],
  },

  'Demo': {
    'MODULE-1()': [],
    'MODULE-2()': [],
    'MODULE-3()': [],
    'MODULE-4()': [],
    'MODULE-5()': [],
  },

  //IT-SEM6



  // CSE SEM 4
  'Computer-Networks[CN]': {
    'MODULE-1(introduction and physical layer)': ['Network hardware, Network software',
      'Reference models - OSI, TCP/IP',
      'Example networks – Internet',
      'Wireless LANs - 802.11',
      'Physical Layer - Guided transmission media, Wireless transmission',
      'Switching - Circuit switching,Packet switching',
    ],
    'MODULE-2(data link layer and medium access control sub layer)': ['Data Link Layer: Data link layer design issues, Error detection and correction - CRC, Hamming codes',
      'Elementary data link protocols, Sliding window protocols',
      'Medium Access Control Sub layer: ALOHA, Carrier sense multiple access protocols, Collision free protocols, Ethernet',
      ' Data link layer switching - Repeaters, Hubs, Bridges, Switches, Routers,Gateways',
    ],
    'MODULE-3(network layer)': ['Network layer design issues, Routing algorithms - Shortest path algorithm, Flooding, Distance vector routing',
      'Link state routing, Hierarchical routing, Broadcast routing, Multicast routing, Any cast routing',
      'Congestion control algorithms, Network layer in the internet - The IP version 4 protocol',
      'IP addresses, IP version 6, Internet control protocols, OSPF, BGP',
    ],
    'MODULE-4(transport layer)': ['UDP – Segment header, Remote procedure call, Real-time transport protocols',
      'TCP – service model, Protocol, Segment header, Connection establishment',
      'Connection release, Sliding window, Timer management, Congestion control',
    ],
    'MODULE-5(application layer)': ['Domain Name System (DNS) - Name space, Domain resource records, Name servers',
      ' Electronic mail - Architecture and services, User agent, Message formats, Message transfer, Final delivery',
      'The World Wide Web - Architectural overview, HTTP, FTP',
    ],
  },
  'Design-Analysis&Algorithms[DAA]': {
    'MODULE-1(Intro to Algorithms)': ['Algorithm, Algorithm pseudocode conventions, Performance analysis - Space complexity,Time complexity, Asymptotic notations',
      'Amortized analysis – Aggregate analysis, Accounting method, Potential method',
      ' Recurrences - Substitution method, Recursion-tree method, Master method',
    ],
    'MODULE-2(disjoint sets , divide and conquer)': ['Disjoint Sets: Operations, Union and Find algorithms',
      'Divide and Conquer: General method, Defective chess board, Binary search, Finding maximum and minimum, Merge sort, Strassen’s matrix multiplication',
    ],
    'MODULE-3(dynamic programming)': ['General method, Matrix-chain multiplication, All pairs shortest path, Optimal binary search trees',
      '0/1 Knapsack problem, Traveling salesperson problem, Flow shop scheduling',
    ],
    'MODULE-4(greedy method ,back tracking)': ['Greedy Method: General method, Knapsack problem, Job sequencing with deadlines',
      'Huffman codes, Single source shortest paths, Optimal merge patterns',
      'Backtracking: General method, 8–Queens problem, Sum of subsets, Graph coloring, Hamiltonian cycles',
    ],
    'MODULE-5(branch and bounce,np-hard and np-complete problems)': ['Branch and Bound: LC search, LC branch and bound, FIFO branch and bound',
      '0/1 knapsack problem, Traveling salesperson problem',
      'NP Hard and NP-Complete Problems: Nondeterministic algorithms, NP-hard and NP- complete classes, Cook’s theorem',
      'NP-hard scheduling problems – Scheduling identical processors',
    ],
  },
  'Software Engineering[SE]': {
    'MODULE-1(software engineering and process)': ['Engineering Layers; The Software Process, Software Engineering Practice, Software myths',
      'Process models: A Generic Process Model, Prescriptive Process Models-The Waterfall Model, Incremental Process Models, Specialized Process Models',
      'The Unified Process, Agile Development-Agility, Agile Process, Extreme Programming (XP), Scrum, Lean Software Development (LSD)',
      'Dynamic System Development Method, Agile Modeling (AM), Agile Unified Process (AUP), The Cleanroom strategy',
    ],
    'MODULE-2(requirement engineering and modeling)': ['Requirements Engineering: Functional and non-functional requirements, The software requirements document, Requirements specifications',
      'Requirements engineering processes, Requirements elicitation and analysis, Requirements validation, Requirements management',
      'Requirements Modeling: Requirements Analysis, Data Modeling Concepts, Flow-Oriented Modeling',
      'Scenario based Modeling, UML Models that supplement the Use Case Case study on Requirements modeling for Web and MobileApps',
    ],
    'MODULE-3(design engineering and metrics)': ['Design Engineering: Design within the context of Software Engineering, The Design process, Design concepts',
      'Software Architecture, Architectural Styles, Architectural design, Pattern based Design-Design Patterns, Pattern based software design',
      'Process and Project Metrics: Metrics in the process and project domains, Software Measurement, Metrics for software quality',
    ],
    'MODULE-4(software testing strategies and applications)': ['Testing strategies: A strategic approach to software testing, Strategic issues, Test strategies for conventional software, Test strategies for object oriented software',
      'Validation testing, System testing, The art of debugging',
      'Testing Conventional Applications: Software testing fundamentals, White box testing- Basis path testing, Control structure testing',
      ' Black box testing, Object oriented testing methods',
    ],
    'MODULE-5(risk, quality management and reengineering)': ['Risk and Quality Management: Reactive and Proactive risk strategies, Software risks, Risk Mitigation Monitoring and Management (RMMM)',
      'RMMM plan, Software quality factors, Defect Amplification Model',
      'Formal Technical Reviews (FTR), Software Quality Assurance (SQA)- Tasks, Goals and Metrics; Software reliability',
      'Reengineering: Introduction, Business Process Reengineering (BPR), Software Reengineering, Restructuring, Reverse engineering, Forward engineering',
    ],
  },
  //Artificial-Intelligence[AI] is in DS SEM 6

  //IT SEM4
  'Data-Mining[DM]': {
    'MODULE-1(data mining and data Preprocessing)': ['Introduction to Data Mining, kinds of data, kinds of patterns',
      'major issues in Data Mining, Data Pre-processing, Data Cleaning',
      'Data Integration, Data Reduction, Data Transformation and Discretization.'
    ],
    'MODULE-2(associations and classification)': ['Basic Concepts, Frequent itemset Mining Methods, pattern evaluation methods- From Association Mining to Correlation Analysis',
      'Classification, Decision Tree Introduction, Bayesian Classification Methods',
      'Rule Based Classification, Prediction: Linear Regression.'
    ],
    'MODULE-3(cluster analysis)': ['Cluster Analysis: Types of Data in Cluster Analysis, A Categorization of Major Clustering Methods',
      'Partitioning Methods-k-Means and K-Medoids, Hierarchical methodsAgglomerative and divisive method',
      'Density-Based Method-DBSCAN, Grid-Based MethodSTING, Outlier Analysis'
    ],
    'MODULE-4(data mining trends)': ['Mining Complex Data Types: Mining sequence data, Mining other kinds of data: Spatial, Text, Multimedia and Web data.',
      'Data Mining Trends: Mining Complex Data Types, Methodologies of Data Mining',
      'Data Mining Applications, Data Mining and Society, Data Mining Trends.'
    ],
    'MODULE-5(visualization of multi-dimensional data)': ['Introduction, Diagrams for Multidimensional visualization',
      'Kiviat diagrams, 3D Scattergram, 3D Line Graph',
      'Chernoff Faces, Volume Rendering, Visual Data Mining - Animation'
    ],
  },


  'Theory-of-Computation[TOC]': {
    'MODULE-1(finite automata)': ['Introduction to Finite automata, the central concepts of automata theory, Deterministic finite automata',
      'Nondeterministic Finite automata, the equivalence of DFA and NDFA, Finite automata with epsilon-transitions',
      'Conversion of epsilon-NFA to NFA and DFA, Mealy and Moore models'
    ],
    'MODULE-2(regular expressions and languages)': ['Regular expressions, Identity rules, Finite automata and Regular expressions, Applications of regular expressions',
      'Pumping lemma for regular languages, Applications of the pumping lemma, Closure properties of regular languages, Equivalence of two regular expressions', 'Equivalence of two finite automata and minimization of automata',
    ],
    'MODULE-3(context free grammers)': ['Context-Free Grammars, Parse trees, Applications of context free grammars',
      'Ambiguity in grammars and languages, Normal forms for context-free grammars, the pumping lemma for context-free languages'
    ],
    'MODULE-4(push down automata)': ['Definition of the pushdown automaton, the languages of a PDA, Equivalence of PDA’s and CFG’s',
      'Deterministic pushdown automata, Chomsky hierarchy of languages, Undecidability'
    ],
    'MODULE-5(turing machine)': ['Turing machine model, Representation of Turing machine, Language acceptability by Turing machine',
      'Design of Turing machine, Techniques for Turing machine construction, Variants of Turing machines, Universal Turing machine',
      'Recursive and recursively enumerable languages (REL), properties of recursive and recursively enumerable languages, the model of linear bounded automaton'
    ],
  },
  'R-Programming[RP]': {
    'MODULE-1(introduction to r)': ['Introduction, How to run R, R Sessions and Functions, Basic Math, Variables',
      'Data Types, Vectors, Conclusion, Advanced Data Structures, Data Frames',
      'Lists, Matrices, Arrays, Classes'
    ],
    'MODULE-2(r programming Structures)': ['R Programming Structures, Control Statements, Loops, -Looping Over Nonvector Sets',
      'IfElse, Arithmetic and Boolean Operators and values, Default Values for Argument',
      'Return Values, Deciding Whether to explicitly call return-Returning Complex Objects',
      'Functions are Objective, No Pointers in R, Recursion, A Quicksort Implementation-Extended Extended Example: A Binary Search Tree.'
    ],
    'MODULE-3(doing math and simulation in r)': ['Doing Math and Simulation in R, Math Function, Extended Example Calculating ProbabilityCumulative Sums and Products-Minima and Maxima-Calculus',
      'Functions Fir Statistical Distribution, Sorting, Linear Algebra Operation on Vectors and Matrices',
      'Extended Example: Vector cross Product-Extended Example: Finding Stationary Distribution of Markov Chains',
      'Set Operation, Input /out put, Accessing the Keyboard and Monitor, Reading and writer Files.'
    ],
    'MODULE-4(graphics  )': ['Graphics, Creating Graphs, The Workhorse of R Base Graphics',
      'the plot() Function – Customizing Graphs, Saving Graphs to Files'
    ],
    'MODULE-5(probability distributions and regression models)': ['Probability Distributions, Normal Distribution-Binomial Distribution-Poisson Distributions Other Distribution',
      'Basic Statistics, Correlation and Covariance, T-Tests,-ANOVA. Linear Models',
      'Simple Linear Regression, -Multiple Regression Generalized Linear Models, Logistic Regression',
      'Poisson Regression-other Generalized Linear Models-Survival Analysis, Nonlinear Models, Splines-Decision-Random Forests.',
    ],

  },
  'Internet-of-Things[IOT]': {
    'MODULE-1(introduction and domain applications)': ['Introduction to Internet of Things: Definition, Conceptual Framework, Architectural View, Technology behind IoT',
      'Communication Technologies, Data Enrichment, Data consolidation and Device management at Gateway',
      'IoT and M2M: M2M, Difference between IoT and M2M, SDN and NFV for IoT',
      'Domain Specific IoTs: Home automation, Cities, Environment, Health and Life Style'
    ],
    'MODULE-2(sensors and connectivity)': ['Sensor Technology, Actuators, RFID Technology, Internet Connectivity',
      'Internet-Based Communications, IP Addressing in the IoT, Medium Access Control, Application Layer Protocols'
    ],
    'MODULE-3(prototyping and hardware)': ['Embedded Computing Basics, Embedded platforms for prototyping, Things always connected to the Internet/Cloud, Amazon Web Services for IoT'
    ],
    'MODULE-4(design methodologies and case studies)': ['Design Methodology: Purpose and Requirements specifications, Process Specifications, Domain Model Specification',
      'Information Model Specification, Service Specification, IoT Level Specifications',
      'Functional View Specification, Operational View Specification, Device and Component integration, Application development',
      'Case Studies Illustrating IoT Design: Home Automation, Cities'
    ],
    'MODULE-5(data analytics for iot and iot security)': ['Data Analytics for IoT: Apache Hadoop, Using Hadoop MapReduce for Batch Data Analysis',
      'IoT Security: Vulnerabilities, Security Requirements and Threat analysis, Security Tomography and Layered Attacker Model',
      'Identity Management and Establishment, Access Control and Secure Message Communication, Security Models, Profiles and Protocols for IoT'
    ],
  },
  //CSE SEM2
  'Calculus-T&T[CTT]': {
    'MODULE-1(Single Variable Calculus)': ['Rolle’s Theorem',
      'Lagrange’s mean value theorem',
      'Cauchy’s mean value theorem',
      'Taylor’s and Maclaurin’s theorems with remainders (without proof) related problems.'
    ],
    'MODULE-2(Multi Variable Calculus)': ['function of several variables',
      'Jacobian and its properties',
      'Functional dependence',
      'Maxima and minima of functions with two variables',
      'Lagrange’s multiplier method'
    ],
    'MODULE-3(Laplace Transforms)': ['Definition of Laplace transform, Existence conditions',
      'Laplace transforms of standard functions',
      'Linearity property First and second shifting theorems, Change of scale property',
      'Laplace transforms of derivatives and integrals, Multiplication by n t, Division by t',
      'Laplace transform of periodic functions (without proofs)',
      'Laplace transforms of unit step function and unit impulse function'
    ],
    'MODULE-4(Inverse Laplace Transforms)': ['Definition of inverse Laplace transform, Linearity property, First and second shifting theorems',
      'Change of scale property, Inverse Laplace transforms of derivatives and integrals',
      'Multiplication by s, Division by s, Convolution theorem (without proofs)',
      'Applications of Laplace transforms to ordinary differential equations of first and second order with constant coefficients',
    ],
    'MODULE-5(Fourier Series & Transformers)': ['Fourier series: Determination of Fourier coefficients, Euler‘s formulae, Convergence of Fourier series (Dirichlet’s conditions), Fourier series in(-pi,pi), Half range sine and cosine expansions, Parseval’s identity in(0,pi)',
      'Fourier Transforms: Complex Fourier transform, Fourier sine and cosine transforms, Inverse Fourier transforms'
    ],

  },
  'Basic-EEE[BEEE]': {
    'MODULE-1(Fundamentals of Electric Circuits)': ['Classification of network elements, Voltage-Current relations for passive elements',
      'Kirchhoffs laws; Series-Parallel connection, Mesh and Nodal analysis (With DC Independent Sources only)',
      'AC sources–Single loop generator, Phasor representation, Voltage, Current',
      'Impedance, Power factor and Apparent power'
    ],
    'MODULE-2(Electrical Systems)': ['Motors: Types of motors, working principle and applications—DC motor',
      'Three Phase Induction motor, Synchronous motor, Stepper motor',
      'Single Phase Transformer: Construction, principle of operation, EMF equation',
      'Electrical wiring: Methods of electrical wiring systems, Earthing procedure',
      'Switch fuse unit (SFU), Operation of MCB and Relays',
    ],
    'MODULE-3(Utilization Of Electrical Systems)': ['Illumination: Light sources, Terminologies, Laws of illumination',
      'Types of lamps, Lighting calculations; Interior Lighting - Industrial lighting',
      'Exterior lighting- Street lighting and Flood lighting',
      'Uninterruptible Power Supply (UPS) - Components in UPS, Functionality and Calculation of ratings for UPS components to a specific load',
      'Emergency supply: Batteries -Types of batteries, Elementary calculations for energy consumption for a specified application',
    ],
    'MODULE-4(Sensors & Transducers)': ['Sensors- Light sensor, Voltage sensor, Temperature and Humidity sensor, Motion detection sensors',
      'Wireless bluetooth sensors and Distance measurement with Ultrasound sensor',
      'Transducers -Basic requirements of transducers, Passive transducers, Strain gauge',
      'Hall-Effect transducer, LVDT and Active transducers- Piezoelectric and Thermocouple',
      'Data acquisition system (overview and concept only)',],

    'MODULE-5(Fundamentals of Electronics Engineering)': ['Half wave and full wave rectifier, Zener diode, characteristics, application – Regulator, BJT—operation',
      'Introduction to Operational amplifier: Inverting and non-inverting amplifier',
      'Application—Adder, Comparator, Integrator and Differentiator',
      'Analog to Digital Convertors—Flash type and Successive approximation types',
      'Digital to Analog converters, Weighed resistor and R-2R types',]

  },
  'Discrete-Math-Structures[DMS]': {
    'MODULE-1(Mathematical Logic & Normal Forms)': ['Graph as models, Matrices and Isomorphism',
      'Decomposition and special graphs',
      'Paths, cycles and Trails, Vertex degree and counting',
      'Directed graphs, vertex degrees, Eulerian digraph'
    ],

    'MODULE-2(Relations & Functions)': ['Properties of trees, Distance in Trees and graphs',
      'Disjoint spanning trees, Spanning Trees and Enumeration',
      'Optimization and Trees, Maximum matching, Hall’s matching condition',
      'Min-Max Theorems, Independent sets and covers',
      'Maximum & Weighted bipartite matching, Tutte’s 1-factor theorem'
    ],
    'MODULE-3(Induction , Counting and Algebraic Structures )': ['Cuts and connectivity, connectivity, edge connectivity',
      'blocks, 2- connected graphs, connectivity of digraphs',
      'K- connected and K-edge connected graphs, Applications of Menger’s theorem',
      'Network Flow Problems: Maximum network flow, Integral flows',
      'supplies and demands, Applications of network flow techniques'
    ],
    'MODULE-4(Generating Functions and Recurrence Relations)': ['Vertex coloring and upper bounds: Definition and examples, Upper bounds',
      'Brook’s Theorem; Structure of K-chromatic Graphs: Graphs with large chromatic number',
      'External problems and Turan’s theorem, color-critical graphs',
      'Enumerative aspects: Counting proper colorings, Chordal graphs',
      'Planar graphs: Embedding and Euler’s formula',
      'Characterization of planar graphs, Parameters of planarity'
    ],
    'MODULE-5(Graphs & Trees)': ['Line graph and edge coloring: Edge coloring',
      'Characterization of line graphs, Hamiltonian Cycles: Necessary conditions',
      'sufficient conditions, cycles in directed graphs; Planarity',
      'coloring and cycles: Tait’s theorem, Grinberg’s theorem',
      'snarks, Flows and cycle covers'
    ],
  },
  'JAVA[OOPJ]': {
    'MODULE-1(OOPS fundamentals)': ['Introduction, functional interfaces, block lambda expressions, generic functional interfaces',
      'passing lambda expressions as arguments',
      'exceptions-variable capture, method references to static',
      'methods-method references to instance methods',
      'method references with generics',
    ],
    'MODULE-2(Inheritance , Interface & Packages)': ['Introduction-JDBC drivers, JDBC architecture',
      'JDBC classes and interfaces',
      'loading drivers, making a connection, execute SQL statement',
      'SQL statements, retrieving result, scrollable and updatable result set',
    ],
    'MODULE-3(Exception Handling & Multithreading)': ['Server-side Java, Advantages over applets',
      'servlet architecture, life cycle',
      'generic servlet, HTTP Servlet',
      'passing parameters to servlets',
      'retrieving parameters-Cookies-problem with servlet',

    ],
    'MODULE-4(Collection Framework)': ['Processing Regular Expression, Pattern, Matcher, Syntax, Two pattern matching option.',
      'Remote Method Invocation: A Simple Client/Server Application Using RMI',
      'Networking:Basics, java.net, InetAddress, TCP/IP client sockets, TCP/IP server sockets, Datagram',
    ],
    'MODULE-5(GUI Programming)': ['Concurrent API packages',
      'Synchronization objects',
      'Executor, Concurrent collections',
      'Locks, Atomic operations, Parallel Programming'
    ],

  },
  'Professional-Ethics&HV[PEHV]': {
    'MODULE-1(Professional Ethics)': ['Scope and aim of ethics, Senses of ethics',
      'Variety of moral issues, Types of inquiry',
      'Moral dilemmas, Moral autonomy-Kohlberg’s theory',
      'Gilligan’s theory, Consensus, and controversy',
    ],
    'MODULE-2(Professional Ideals & Virtues)': ['Theories on virtues and ideals, Professions, Professionalism',
      'Characteristics, Expectations, Professional responsibility, Integrity',
      'Self-respect, Sense of responsibility, Self-interest',
      'Customs and religion, Self-interest and ethical egoism',
      'Customs and ethical relativism, Religion and divine',
    ],
    'MODULE-3(Social Experimentation)': ['Experimentation, Similarities to standard experiments',
      'Learning from the past and knowledge gained',
      'responsible experimenters, Conscientiousness, Moral autonomy and accountability',
      'The challenger case, Codes of ethics and limitations',
      'Industrial standards and Problems with the law of engineering',
    ],
    'MODULE-4(Responsibilities & Rights)': ['Collegiality and loyalty, Respect for authority',
      'Collective bargaining, Confidentiality, Conflict of interests',
      'Occupational crime, Rights of engineers, Professional rights',
      'Whistle-blowing, The BART case, Employee rights, and discrimination',
    ],
    'MODULE-5(Harmony with Professional Ethics)': ['Acceptance of human values; Ethical Human Conduct, Basis for Humanistic Education',
      'Constitution, and Universal Order; Competence in professional ethics',
      'Case studies: Holistic technologies, Management Models and Production Systems',
      'Transition from the present state to Universal Human Order: socially and ecologically responsible engineers',
      'technologists and managers - enriching institutions and organizations',],

  },
  //IT SEM2

  'Python-Programming[PP]': {
    '-MODULE-1(introduction)': ['Introduction to Python, Tokens, Variables, Literals',
      'Identifiers, Keywords, Special symbols, Operators, Fundamental datatypes',
      'Expressions, Type conversions, Handling Input and output in Python'
    ],
    '-MODULE-2(control structures)': ['Selection Statements: if statement, if-else statement, if-elif-else statement, nested-if statement',
      'Iterative Statements: while loop, for loop, break statement, continue statement, pass and else statements used with loops'
    ],
    '-MODULE-3(sequence,sets,dictionaries and regular expressions)': ['Sequences: Lists and operations – Creating, Inserting elements, Updating elements, Deleting elements, Searching and sorting, List comprehensions, Nested lists',
      'Tuples – Creating, Searching and sorting, Nested tuples',
      'Strings – Initializing a string and string operations, String handling methods, String formatting'
    ],
    '-MODULE-4(functions and file handling)': ['Functions: Need for functions, Function definition, Function call, Variable scope and lifetime, Return statement, Positional arguments',
      'Keyword arguments, Default arguments and variable length arguments, Recursive functions, Lambda functions, Generatorsv',
      'File Handling: Types of files, Opening and closing files, Reading and writing data'
    ],
    '-MODULE-5(object oriented programming and exception handling)': ['Object Oriented Programming: Introduction to object-oriented programming, Classes and objects, Inheritance and polymorphism, Abstract Classes and interfaces',
      'Exception Handling: Errors in a python program, Exceptions, Exception handling, Types of exceptions, Except block, Assert statement, User defined exceptions'
    ],
  },
  'Physics-for-Computing[PC]': {
    'MODULE-1(wave optics)': ['Interference: Introduction - Interference in thin films (reflected light) - Newton’s rings - Determination of wavelength.',
      'Diffraction: Introduction - Fraunhofer diffraction - Single slit diffraction (qualitative) - Double slit diffraction (qualitative).',
      'Polarization: Introduction - Polarization by reflection - and double refraction - Nicol prism',
      'Half wave and Quarter wave plate - Engineering applications of interference - diffraction and polarization.'
    ],
    'MODULE-2(introduction to quantum mechanics)': ['Principles of Quantum Mechanics: Introduction – de Broglie’s hypothesis for matter waves',
      'Davison and Germer’s experiment - Schrödinger’s one dimensional wave equation (time independent)',
      'significance of wave function – Fermi Dirac distribution and effect of temperature (qualitative treatment).'
    ],
    'MODULE-3(quantum physics and band theory of solids)': ['Applications of Quantum Physics: Particle in a 1 D box (Eigen Value and Eigen Function)',
      '3 D Analysis (Qualitative) - Tunnelling Effect (Qualitative) - Kronig Penney model (qualitative treatment)',
      'origin of energy bands formation in solids.'
    ],
    'MODULE-4(semiconductors and optoelectronic devices)': ['Introduction - Intrinsic semiconductors - Density of electrons in intrinsic semiconductor',
      'Intrinsic carrier concentration - Fermi energy - Electrical conductivity of intrinsic semiconductors',
      'Extrinsic semiconductors - Density of charge carriers in Extrinsic semiconductors (qualitative)',
      'Drift and Diffusion currents - Direct and Indirect band gap semiconductors - Hall effect',
      'pn junction Optoelectronic devices: Light Emitting Diode (LED) - Photodiode - Semiconductor diode laser'
    ],
    'MODULE-5(fiber optics)': ['Introduction to fiber optics - Total Internal Reflection - Critical angle of propagation',
      'Acceptance angle - Numerical Aperture – V number (qualitative) - Classification of fibers based on Refractive index profile',
      'modes - Applications of optical fibers – Fiber optic Sensors (temperature, displacement).'
    ],
  },


  'Digital-Logic-Design[DLD]': {
    'MODULE-1(binary system and boolean algebra)': ['Introduction, Binary Numbers, Number Base Conversions',
      'Error Detection and Correction, Complements of Numbers, Signed Binary Numbers',
      'Binary Codes, Boolean Algebra, Boolean Functions, Canonical and Standard Forms, Digital Logic Gates.'
    ],
    'MODULE-2(gate level minimization)': ['The Map Method, Four Variable K-Map, Product-of-Sums and Sum-of-Products Simplification',
      'Don’t Care Conditions, NAND and NOR Implementations',
      'Other Two Level Implementations, Exclusive–OR function.'
    ],
    'MODULE-3(combinational logic)': ['Combinational Circuits, Analysis of Combinational Circuits, Design Procedure, Binary AdderSubtractor',
      'Decimal Adder, Binary Multiplier, Magnitude Comparator',
      'Decoders, Encoders, Multiplexers, De-Multiplexers.'
    ],
    'MODULE-4(sequential logic)': ['Latches, Flip-Flops, Analysis of Clocked Sequential Circuits',
      'Design of Synchronous Sequential Circuits, Registers, Shift Registers',
      'Ripple Counters, Synchronous Counters, Ring Counter and Johnson Counter.'
    ],
    'MODULE-5(Programmable logic)': ['RAM, ROM, Programmable Logic Array',
      'Programmable Array Logic, Sequential Programmable Devices.'
    ],
  },

  'Matrix-Theory[MTLA]': {
    'MODULE-1(matrices and linear system of equations)': ['Elementary Row-operations, Elementary Matrices, Echelon form, Rank of a matrix by row- reduction',
      'Solutions of system of linear equations by row reduction, Matrix Factorization,LU factorization, LDU factorization'
    ],
    'MODULE-2(eigen values , eigen vectors and diagonalization)': ['Characteristic equation of a matrix, Eigenvalues and Eigenvectors of matrices, Similarity of matrices',
      'Diagonalization by using Eigenvalues, Cayley-Hamilton Theorem (Without Proof), Evaluation of matrix powers'
    ],
    'MODULE-3(vector spaces)': ['Vector spaces, Sub-spaces, Four fundamental subspaces of a matrix, Span',
      'Linearly independent and dependent, Basis, construction of Basis, dimensions, Finite dimensional vector space'
    ],
    'MODULE-4(linear transformation)': ['Linear transformation, Kernal and range of linear transformation, Basic properties, Invertible linear transformation, Matrix of linear transformation'
    ],
    'MODULE-5(inner product spaces)': ['Inner product, Norm, Distance, Inner product space, Orthogonal and orthonormal basis',
      'Gram-Schmidt orthogonalization, Singlular Value Decomposition for square matrices'
    ],
  },


  //SCHOOL OF ENGINEERING
};

const Sidebar2: React.FC<Sidebar2Props> = ({ subject, module, onTopicClick }) => {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const handleModuleClick = (module: string) => {
    setOpenModule((prev) => (prev === module ? null : module));
  };

  const handleTopicClick = (topic: string, module: string) => {
    setSelectedTopic(topic);
    onTopicClick(topic, module, subject);
  };
  const modules = moduleData[subject] || {};

  return (
    <div
      className={`transition-all  ease-in-out bg-gray-100 dark:bg-[#2c2c2c] rounded-xl shadow-lg h-full
      ${collapsed ? 'h-15' : 'h-screen'} ${collapsed ? 'w-15' : 'w-64'}${collapsed ? 'duration-100' : 'duration-300'}
    p-2 flex flex-col`}
    >

      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`bg-indigo-500 dark:bg-orange-600 text-white p-2 rounded mb-2 ${collapsed ? 'mr-0' : 'w-10'}`}
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>
      {! collapsed && (
        <>
      <aside className="min-h-screen w-64 bg-gray-100 dark:bg-[#2c2c2c] p-4 shadow-lg transition-all duration-300 ease-in-out rounded-xl">
        <h2 className="text-lg font-bold mb-4 text-black dark:text-white">
          Choose Topics in {subject || "None Selected"}
        </h2>
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
                      onClick={() => handleTopicClick(topic, module)}
                      className={`w-full text-left px-2 py-1 rounded mb-1 
                      ${selectedTopic === topic
                          ? 'bg-indigo-500 dark:bg-orange-700 text-black dark:text-white'
                          : 'hover:bg-indigo-200 dark:hover:bg-orange-900 dark:text-gray-300'
                        }`}
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
      </>)
      }
    </div>
  );
};

export default Sidebar2;