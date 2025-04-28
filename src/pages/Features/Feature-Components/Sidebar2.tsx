// Sidebar2.tsx
import React, { useState } from 'react';

interface Sidebar2Props {
  subject: string;
  onTopicClick: (topicName: string) => void;
}

const moduleData: Record<string, Record<string, string[]>> = {
  'Object-Oriented-Modeling-and-Design': {
    'MODULE 1(INTRODUCTION TO UML AND BASIC STRUCTURAL MODELING)': ['Importance of modeling', 'Principles of modeling', 'Object oriented modeling','An overview of UML', 'Conceptual model of the UML', 'Architecture', 'Software development lifecycle','Classes-Terms and concepts', 'Common modeling techniques','Relationships-Modeling simple dependencies', 'Single inheritance and structural relationships','Common mechanisms', 'Diagrams'],
    'MODULE 2( ADVANCED STRUCTURAL MODELING, CLASS AND OBJECT DIAGRAMS)': ['Advanced classes', 'Advanced relationships', 'Interfaces', 'Types and roles', 'Packages', 'Instances', 'Class and Object Diagrams' ,'Terms and concepts', 'Modeling techniques for class diagram-Modeling simple collaboration', 'Logical database schema', 'Introduction to object diagrams'],
    'MODULE 3(BASIC BEHAVIORAL MODELING )': ['Interactions-Terms and concepts', 'Modeling a flow of control' ,'Interaction diagramsTerms and concepts', 'Modeling flows of control by time ordering and control by organization', 'Forward and reverse engineering','Use cases Terms and concepts', 'Modeling the behavior of the element', ' Use cases Diagrams Terms and concepts', 'Modeling the context of a system', 'Requirement of a system', 'Forward and reverse engineering','Activity Diagrams-Terms and concepts', 'Modeling a workflow', 'modeling an operation'],
    'MODULE 4(ADVANCED BEHAVIORAL MODELING )': ['Events and signals-Modeling a family of signals & exceptions;', 'State machines-Modeling the lifetime of an object','Introduction to processes and threads, Time and space-Modeling timing constraints, Distribution of objects and objects that migrate;','State chart diagrams-Modeling reactive objects, Forward and reverse engineering. '],
    'MODULE 5(ARCHITECTURAL MODELING )': ['Component-Terms and concepts, Modeling executables and libraries, Modeling tables, Files and documents, Modeling an API','Deployment-Modeling processors and devices, Modeling the distribution of components','Component diagrams-Modeling source code, Executable release, Physical database, Adaptable systems, Forward and reverse engineering','Deployment diagramsModeling an embedded systems, Client/Server system, Fully distributed systems, Forward and reverse engineering','Probability Density Estimation- Parametric methods, Maximum likelihood, Bayesian inference'],
  },
  'Artificial-Neural-Networks': {
    'MODULE 1(FUNDAMENTALS OF NEURAL LEARNING)': ['Fundamentals of Neural Learning - Classification and regression, Pre-processing and feature extraction', 'The curse of dimensionality, Polynomial curve fitting, Model complexity, Multivariate non-linear functions','Bayes theorem, Decision boundaries, Minimizing risk','Probability Density Estimation- Parametric methods, Maximum likelihood, Bayesian inference' ],
    'MODULE 2(SINGLE LAYER NETWORKS)': ['Linear discriminant functions, Linear separability, Generalized linear discriminants, Leastsquares techniques', 'The perceptron, Fishers linear discriminant.','Gradient based Strategies: Learning Rate Decay, Momentum-Based Learning, ParameterSpecific Learning Rates', 'Cliffs and Higher-Order Instability, Gradient Clipping', 'Second-Order Derivatives, Polyak Averaging, Local and Spurious Minima'],
    'MODULE 3(MULTI-LAYER PERCEPTRON & RADIAL BASIS FUNCTIONS)': ['ANN-Topic-6'],
    'MODULE 4(ERROR FUNCTIONS)': ['ANN-Topic-7', 'ANN-Topic-8'],
    'MODULE 5(LEARNING AND GENERALIZATION)': ['ANN-Topic-9'],   
  },
  'Mobile-Application-Development':{
    'MODULE 1()':[''],
    'MODULE 2()':['sd'],
    'MODULE 3()':['ds'],
    'MODULE 4()':['ce'],
    'MODULE 5()':['aw']
  },
  'Cyber-Security-Essentials':{
    'MODULE 1(Cyber Security Fundamentals)':["Network Security Concepts: Information assurance fundamentals, Basic cryptography,Symmetric encryption, Public key encryption" , " The Domain Name System(DNS), Firewalls,Virtualization, Radio-Frequency Identification."],
    'MODULE 2(Attacker Techniques)':["Attacker techniques and motivations: Anti forensics, proxy usage", 'Tunneling techniques: HTTP, DNS, ICMP, Intermediaries', 'Steganography and other concepts, Detection and prevention','Fraud techniques: Phishing, smishing, vishing and mobile malicious code, rogue antivirus,click fraud','Threat infrastructure: Botnets, Fast Flux, Advanced Fast Flux.'],
    'MODULE 3(Explotation)':['Shellcode, Integer overflow vulnerabilities, Stack based buffer overflows, Format string vulnerabilities',' SQL injection, Malicious PDF files, Race conditions, Web exploit tools','DoS conditions, Brute force and dictionary attacks.'],
    'MODULE 4(Malicious Code)':['Worms, viruses', 'Evading detection and elevating privileges: obfuscation, Virtual Machine obfuscation Persistent software techniques','Token kidnapping, Virtual machine Detection, Rootkits, Spyware','Attacks against privileged user accounts and escalation of privileges, Stealing information and Exploitation.'  ],
    'MODULE 5(Defence And Analysis Techniques)':['Importance of memory forensics, Capabilities of memory forensics, Memory analysis frameworks, Dumping physical memory','Installing and using volatility, Finding hidden processes, Volatality analyst pack','Honeypots, Malicious code naming, Automated malicious code analysis systems, Intrusion detection techniques.']
  },

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
                    onClick={() => onTopicClick(topic)}
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
