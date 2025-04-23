import React from "react";
import { jsxs } from "react/jsx-runtime";
const CSE_Module_1 = () => {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>AI 4th module</title>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n        * {\n            margin: 0;\n            padding: 0;\n            text-indent: 0;\n        }\n\n        h1 {\n            color: #4471C4;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 18pt;\n        }\n\n        h4 {\n            color: black;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        .p,\n        p {\n            color: black;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n            margin: 0pt;\n        }\n\n        .s1 {\n            color: black;\n            font-family: Calibri, sans-serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        .s2 {\n            color: black;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 7pt;\n            vertical-align: 3pt;\n        }\n\n        .s3 {\n            color: black;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 7pt;\n            vertical-align: -1pt;\n        }\n\n        .s4 {\n            color: black;\n            font-family: Calibri, sans-serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 7pt;\n            vertical-align: -1pt;\n        }\n\n        .s5 {\n            color: black;\n            font-family: "Cambria Math", serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        h3 {\n            color: #4471C4;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 14pt;\n        }\n\n        .s6 {\n            color: #4471C4;\n            font-family: Calibri, sans-serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 16pt;\n        }\n\n        h2 {\n            color: #4471C4;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 16pt;\n        }\n\n        .s7 {\n            color: black;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 14pt;\n        }\n\n        .s8 {\n            color: black;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 16pt;\n        }\n\n        .s9 {\n            color: #4471C4;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: bold;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        li {\n            display: block;\n        }\n\n        #l1 {\n            padding-left: 0pt;\n        }\n\n        #l1>li>*:first-child:before {\n            content: "• ";\n            color: black;\n            font-family: Arial, sans-serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        li {\n            display: block;\n        }\n\n        #l2 {\n            padding-left: 0pt;\n        }\n\n        #l2>li>*:first-child:before {\n            content: "• ";\n            color: black;\n            font-family: Arial, sans-serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        li {\n            display: block;\n        }\n\n        #l3 {\n            padding-left: 0pt;\n            counter-reset: e1 1;\n        }\n\n        #l3>li>*:first-child:before {\n            counter-increment: e1;\n            content: counter(e1, decimal)". ";\n            color: black;\n            font-family: "Times New Roman", serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        #l3>li:first-child>*:first-child:before {\n            counter-increment: e1 0;\n        }\n\n        #l4 {\n            padding-left: 0pt;\n        }\n\n        #l4>li>*:first-child:before {\n            content: " ";\n            color: black;\n            font-family: Symbol, serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        #l5 {\n            padding-left: 0pt;\n        }\n\n        #l5>li>*:first-child:before {\n            content: "• ";\n            color: black;\n            font-family: Arial, sans-serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        li {\n            display: block;\n        }\n\n        #l6 {\n            padding-left: 0pt;\n        }\n\n        #l6>li>*:first-child:before {\n            content: "• ";\n            color: black;\n            font-family: Arial, sans-serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        #l7 {\n            padding-left: 0pt;\n        }\n\n        #l7>li>*:first-child:before {\n            content: " ";\n            color: black;\n            font-family: Symbol, serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n\n        li {\n            display: block;\n        }\n\n        #l8 {\n            padding-left: 0pt;\n        }\n\n        #l8>li>*:first-child:before {\n            content: "• ";\n            color: black;\n            font-family: Arial, sans-serif;\n            font-style: normal;\n            font-weight: normal;\n            text-decoration: none;\n            font-size: 11pt;\n        }\n    '
        }}
      />
      <h1
        style={{
          paddingTop: "3pt",
          paddingLeft: "153pt",
          textIndent: "0pt",
          textAlign: "left"
        }}
      >
        UNIT IV
      </h1>
      <p style={{ paddingTop: "10pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <h4 style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "justify" }}>
        Representing Knowledge in an Uncertain Domain
      </h4>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        Independence and conditional independence relationships among variables can
        greatly reduce the number of probabilities that need to be specified in
        order to define the full joint distribution. Bayesian network is a data
        structure that represents the dependencies among variables. Bayesian
        networks can represent essentially any full joint probability distribution
        in many cases very concisely.
      </p>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "107%",
          textAlign: "justify"
        }}
      >
        A Bayesian network is a directed graph in which each node is annotated with
        quantitative probability information. The full specification is as follows:
      </p>
      <ul id="l1">
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "40pt",
              textIndent: "-17pt",
              textAlign: "left"
            }}
          >
            Each node corresponds to a random variable, which may be discrete or
            continuous.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "9pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            Directed links or arrows connect pairs of nodes. If there is an arrow
            from node X to node Y, X is said to be a parent of Y. The graph has no
            directed cycles and hence is a directed acyclic graph, or DAG.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "107%",
              textAlign: "justify"
            }}
          >
            Each node has associated probability information that quantifies the
            effect of the parents on the node using a finite number of parameters.
          </p>
        </li>
      </ul>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        The topology of the network—the set of nodes and links—specifies the
        conditional independence relationships that hold in the domain. The
        intuitive meaning of an arrow is typically that X has a direct influence on
        Y , which suggests that causes should be parents of effects.
      </p>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        Once the topology of the Bayes net is laid out, we need only specify the
        local probability information for each variable, in the form of a
        conditional distribution given its parents. The full joint distribution for
        all the variables is defined by the topology and the local probability
        information.
      </p>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        Consider the simple world, consisting of the variables Toothache,{" "}
        <span className="s1">Cavity, Catch and Weather</span>. We know that Weather
        is independent of the other variables; furthermore, we argued that{" "}
        <span className="s1">Toothache and Catch </span>are conditionally
        independent, given Cavity. These relationships are represented by the Bayes
        net structure shown in Figure 13.1 .
      </p>
      <p
        style={{
          paddingTop: "7pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        Formally, the conditional independence of{" "}
        <span className="s1">Toothache </span>and Catch , given Cavity, is indicated
        by the absence of a link between Toothache and Catch. Intuitively, the
        network represents the fact that Cavity is a direct cause of Toothache and
        Catch, whereas no direct causal relationship exists between Toothache and
        Catch.
      </p>
      <p style={{ paddingLeft: "21pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        Now consider the following example, which is just a little more complex. You
        have a new burglar alarm installed at home. It is fairly reliable at
        detecting a burglary, but is occasionally set off by minor earthquakes.
        (This example is due to Judea Pearl, a resident of earthquake-prone Los
        Angeles.) You also have two neighbors, John and Mary, who have promised to
        call you at work when they hear the alarm. John nearly always calls when he
        hears the alarm, but sometimes confuses the telephone ringing with the alarm
        and calls then, too. Mary, on the other hand, likes rather loud music and
        often misses the alarm altogether. Given the evidence of who has or has not
        called, we would like to estimate the probability of a burglary.
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        A Bayes net for this domain appears in Figure 13.2 . The network structure
        shows that burglary and earthquakes directly affect the probability of the
        alarm’s going off, but whether John and Mary call depends only on the alarm.
        The network thus represents our assumptions that they do not perceive
        burglaries directly, they do not notice minor earthquakes, and they do not
        confer before calling
      </p>
      <p style={{ paddingLeft: "48pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "41pt",
          textIndent: "36pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        The local probability information attached to each node in Figure 13.2 takes
        the form of a conditional probability table (CPT). (CPTs can be used only
        for discrete variables; other representations, including those suitable for
        continuous variables. Each row in a CPT contains the conditional probability
        of each node value for a conditioning case. A conditioning case is just a
        possible combination of values for the parent nodes—a miniature possible
        world, if you like. Each row must sum to 1, because the entries represent an
        exhaustive set of cases for the variable. For Boolean variables, once you
        know that the probability of a true value is p, the probability of false
        must be 1-p, so we often omit the second number, as in Figure 13.2 . In
        general, a table for a Boolean variable with k Boolean parents contains 2
        <span className="s2">k</span> independently specifiable probabilities. A
        node with no parents has only one row, representing the prior probabilities
        of each possible value of the variable.
      </p>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "41pt",
          textIndent: "36pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        The network does not have nodes corresponding to Mary’s currently listening
        to loud music or to the telephone ringing and confusing John. These factors
        are summarized in the uncertainty associated with the links from Alarm to
        Johncalls and Marycalls . This shows both laziness and ignorance in
        operation: it would be a lot of work to find out why those factors would be
        more or less likely in any particular case, and we have no reasonable way to
        obtain the relevant information anyway.
      </p>
      <p
        style={{
          paddingTop: "7pt",
          paddingLeft: "41pt",
          textIndent: "36pt",
          lineHeight: "108%",
          textAlign: "left"
        }}
      >
        The probabilities actually summarize a potentially infinite set of
        circumstances in which the alarm might fail to go off (high humidity, power
        failure, dead battery, cut wires, a dead mouse stuck inside the bell, etc.)
        or John or Mary might fail to call and report it (out to lunch, on vacation,
        temporarily deaf, passing helicopter, etc.). In this way, a small agent can
        cope with a very large world, at least approximately.
      </p>
      <h4
        style={{
          paddingTop: "3pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "justify"
        }}
      >
        The Semantics of Bayesian Networks
      </h4>
      <ul id="l2">
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "justify"
            }}
          >
            The syntax of a Bayes net consists of a directed acyclic graph with some
            local probability information attached to each node. The semantics
            defines how the syntax corresponds to a joint distribution over the
            variables of the network.
          </p>
        </li>
        <li data-list-text="•">
          <p
            className="s1"
            style={{
              paddingTop: "7pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            <span className="p">
              Assume that the Bayes net contains variables X
            </span>
            <span className="s3">1</span>
            <span className="p">,X</span>
            <span className="s3">2</span>
            <span className="p">,….X</span>
            <span className="s3">n</span>
            <span className="p">
              . A generic entry in the joint distribution is then
            </span>
            P(X<span className="s4">1</span> = x<span className="s4">1</span>{" "}
            <span className="s5">∧ </span>… <span className="s5">∧ </span>X
            <span className="s4">n</span> = x<span className="s4">n</span>) P(x
            <span className="s4">1</span>,… ,x<span className="s4">n</span>)
            <span className="p">
              , or for short. The semantics of Bayes nets defines each entry in the
              joint distribution as follows:
            </span>
          </p>
        </li>
      </ul>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "61pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        Where X<span className="s3">i</span> denotes the values of{" "}
        <span className="s1">Parents(X</span>
        <span className="s4">i</span>
        <span className="s1">) </span>that appear in x<span className="s3">1</span>,
        x<span className="s3">2</span>,….x<span className="s3">n</span>. Thus, each
        entry in the joint distribution is represented by the product of the
        appropriate elements of the local conditional distributions in the Bayes
        net.
      </p>
      <p
        style={{
          paddingTop: "7pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "109%",
          textAlign: "justify"
        }}
      >
        To illustrate this, we can calculate the probability that the alarm has
        sounded, but neither a burglary nor an earthquake has occurred, and both
        John and Mary call. We simply multiply the relevant entries from the local
        conditional distributions (abbreviating the variable names):
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "83pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "justify"
        }}
      >
        The full joint distribution can be used to answer any query about the
        domain. If a Bayes net is a representation of the joint distribution, then
        it too can be used to answer any query, by summing all the relevant joint
        probability values, each calculated by multiplying probabilities from the
        local conditional distributions.
      </p>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "107%",
          textAlign: "justify"
        }}
      >
        The parameters are exactly the conditional probabilities implied by the
        joint distribution. The conditional probabilities can be computed from the
        joint distribution as follows:
      </p>
      <p style={{ paddingLeft: "81pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <h4
        style={{
          paddingTop: "10pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "justify"
        }}
      >
        A method for constructing Bayesian networks
      </h4>
      <p
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "109%",
          textAlign: "justify"
        }}
      >
        Equation (13.2) defines what a given Bayes net means. The next step is to
        explain how to construct a Bayesian network in such a way that the resulting
        joint distribution is a good representation of a given domain.
      </p>
      <p
        style={{
          paddingTop: "7pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "109%",
          textAlign: "justify"
        }}
      >
        We will now show that Equation (13.2) implies certain conditional
        independence relationships that can be used to guide the knowledge engineer
        in constructing the topology of the network.
      </p>
      <p
        style={{
          paddingTop: "7pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "109%",
          textAlign: "justify"
        }}
      >
        First, we rewrite the entries in the joint distribution in terms of
        conditional probability, using the product rule
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "109%",
          textAlign: "justify"
        }}
      >
        Bayesian network is a correct representation of the domain only if each node
        is conditionally independent of its other predecessors in the node ordering,
        given its parents. We can satisfy this condition with this methodology:
      </p>
      <ol id="l3">
        <li data-list-text={1}>
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "34pt",
              textIndent: "-11pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            NODES: First determine the set of variables that are required to model
            the domain. Now order them, . Any order will work, but the resulting
            network will be more compact if the variables are ordered such that
            causes precede effects.
          </p>
        </li>
        <li data-list-text={2}>
          <p
            className="s1"
            style={{
              paddingTop: "8pt",
              paddingLeft: "33pt",
              textIndent: "-10pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            <span className="p">
              LINKS: For i=1 to n do: Choose a minimal set of parents for{" "}
            </span>
            X<span className="s4">i</span> from X<span className="s4">1</span>,… ,X
            <span className="s4">i−1</span>
            <span className="s3">,</span>
            <span className="p">
              {" "}
              such that Equation (13.3) is satisfied. For each parent insert a link
              from the parent to X
            </span>
            <span className="s3">i</span>
            <span className="p">.</span>
          </p>
        </li>
        <li data-list-text={3}>
          <p
            className="s1"
            style={{
              paddingTop: "8pt",
              paddingLeft: "34pt",
              textIndent: "-11pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            <span className="p">
              CPTs: Write down the conditional probability table,{" "}
            </span>
            P(X<span className="s4">i</span>
            |Parents(X<span className="s4">i</span>))
            <span className="p">. Intuitively, the parents of node X</span>
            <span className="s3">i</span>
            <span className="p">
              {" "}
              should contain all those nodes in that directly influence
            </span>
            X<span className="s4">1</span>,… ,X<span className="s4">i−1</span>
            <span className="p">
              . For example, suppose we have completed the network in Figure 13.2
              except for the choice of parents for Marycalls. Marycallsis certainly
              influenced by whether there is a Burglar or an Earthquake, but not
              directly influenced. Intuitively, our knowledge of the domain tells us
              that these events influence Mary’s calling behavior only through their
              effect on the alarm. Also, given the state of the alarm, whether John
              calls has no influence on Mary’s calling. Formally speaking, we
              believe that the following conditional independence statement holds:
            </span>
          </p>
          <p style={{ paddingTop: "6pt", textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p style={{ paddingLeft: "36pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <p style={{ paddingTop: "4pt", textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p
            className="s1"
            style={{
              paddingLeft: "5pt",
              textIndent: "0pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            Thus, Alarm will be the only parent node for Marycalls. Because each
            node is connected only to earlier nodes, this construction method
            guarantees that the network is acyclic. Another important property of
            Bayes nets is that they contain no redundant probability values. If
            there is no redundancy, then there is no chance for inconsistency: it is
            impossible for the knowledge engineer or domain expert to create a
            Bayesian network that violates the axioms of probability.
          </p>
          <h4
            style={{
              paddingTop: "3pt",
              paddingLeft: "5pt",
              textIndent: "0pt",
              textAlign: "justify"
            }}
          >
            Compactness and node ordering
          </h4>
          <p
            className="s1"
            style={{
              paddingTop: "8pt",
              paddingLeft: "5pt",
              textIndent: "0pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            Even in a locally structured domain, we will get a compact Bayes net
            only if we choose the node ordering well.
          </p>
          <p
            className="s1"
            style={{
              paddingTop: "8pt",
              paddingLeft: "5pt",
              textIndent: "0pt",
              textAlign: "justify"
            }}
          >
            What happens if we happen to choose the wrong order?
          </p>
          <p
            className="s1"
            style={{
              paddingTop: "9pt",
              paddingLeft: "5pt",
              textIndent: "0pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            Consider the burglary example again. Suppose we decide to add the nodes
            in the order Marycalls, Johncalls, Alarm, Burglar, Earthquake. We then
            get the somewhat more complicated network shown in Figure 13.3(a) . The
            process goes as follows:
          </p>
          <ul id="l4">
            <li data-list-text="">
              <p
                style={{
                  paddingTop: "7pt",
                  paddingLeft: "40pt",
                  textIndent: "-17pt",
                  textAlign: "left"
                }}
              >
                Adding : No parents.
              </p>
              <ul id="l5">
                <li data-list-text="•">
                  <p
                    style={{
                      paddingTop: "9pt",
                      paddingLeft: "41pt",
                      textIndent: "-18pt",
                      lineHeight: "109%",
                      textAlign: "left"
                    }}
                  >
                    Adding : If Mary calls, that probably means the alarm has gone
                    off, which makes it more likely that John calls. Therefore,
                    needs as a parent.
                  </p>
                </li>
                <li data-list-text="•">
                  <p
                    style={{
                      paddingTop: "7pt",
                      paddingLeft: "41pt",
                      textIndent: "-18pt",
                      lineHeight: "109%",
                      textAlign: "left"
                    }}
                  >
                    Adding Alarm: Clearly, if both call, it is more likely that the
                    alarm has gone off than if just one or neither calls, so we need
                    both and as parents.
                  </p>
                </li>
                <li data-list-text="•">
                  <p
                    style={{
                      paddingTop: "7pt",
                      paddingLeft: "41pt",
                      textIndent: "-18pt",
                      lineHeight: "107%",
                      textAlign: "left"
                    }}
                  >
                    Adding Burglar: If we know the alarm state, then the call from
                    John or Mary might give us information about our phone ringing
                    or Mary’s music, but not about burglary:
                  </p>
                </li>
              </ul>
              <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
              </p>
              <p
                style={{
                  paddingLeft: "90pt",
                  textIndent: "0pt",
                  textAlign: "left"
                }}
              >
                <span />
              </p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}>
                <br />
              </p>
              <p
                style={{
                  paddingLeft: "41pt",
                  textIndent: "0pt",
                  textAlign: "left"
                }}
              >
                Hence we need just Alarm as parent.
              </p>
            </li>
            <li data-list-text="">
              <p
                style={{
                  paddingTop: "8pt",
                  paddingLeft: "41pt",
                  textIndent: "-18pt",
                  lineHeight: "108%",
                  textAlign: "justify"
                }}
              >
                Adding Earthquake: If the alarm is on, it is more likely that there
                has been an earthquake. (The alarm is an earthquake detector of
                sorts.) But if we know that there has been a burglary, then that
                explains the alarm, and the probability of an earthquake would be
                only slightly above normal. Hence, we need both Alarm and Burglar as
                parents.
              </p>
            </li>
          </ul>
        </li>
      </ol>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "109%",
          textAlign: "left"
        }}
      >
        The resulting network has two more links than the original network in Figure
        13.2 and requires 13 conditional probabilities rather than 10.
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <h3 style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        Probabilistic Reasoning over Time
      </h3>
      <p
        style={{
          paddingTop: "15pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "150%",
          textAlign: "justify"
        }}
      >
        Here we try to interpret the present, understand the past, and perhaps
        predict the future, even when very little is crystal clear. Agents in
        partially observable environments must be able to keep track of the current
        state, to the extent that their sensors allow. Methodology for doing that:
        an agent maintains a belief state that represents which states of the world
        are currently possible. From the belief state and a transition model, the
        agent can predict how the world might evolve in the next time step. From the
        percepts observed and a sensor model, the agent can update the belief state.
      </p>
      <p
        className="s6"
        style={{
          paddingTop: "8pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "justify"
        }}
      >
        Time and Uncertainty
      </p>
      <p
        className="s1"
        style={{
          paddingTop: "17pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "150%",
          textAlign: "justify"
        }}
      >
        Techniques for probabilistic reasoning in the context of static worlds, in
        which each random variable has a single fixed value. For example, when
        repairing a car, we assume that whatever is broken remains broken during the
        process of diagnosis; our job is to infer the state of the car from observed
        evidence, which also remains fixed. Now consider a slightly different
        problem: treating a diabetic patient. As in the case of car repair, we have
        evidence such as recent insulin doses, food intake, blood sugar
        measurements, and other physical signs. The task is to assess the current
        state of the patient, including the actual blood sugar level and insulin
        level. Given this information, we can make a decision about the patient’s
        food intake and insulin dose. Unlike the case of car repair, here the
        dynamic aspects of the problem are essential. Blood sugar levels and
        measurements thereof can change rapidly
      </p>
      <p
        className="s1"
        style={{
          paddingTop: "1pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "150%",
          textAlign: "justify"
        }}
      >
        over time, depending on recent food intake and insulin doses, metabolic
        activity, the time of day, and so on. To assess the current state from the
        history of evidence and to predict the outcomes of treatment actions, we
        must model these changes.
      </p>
      <h2
        style={{
          paddingTop: "7pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "justify"
        }}
      >
        States and observations
      </h2>
      <p
        style={{
          paddingTop: "17pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "150%",
          textAlign: "justify"
        }}
      >
        The discrete-time models, in which the world is viewed as a series of
        snapshots or time slices. Number the time slices 0, 1, 2, and so on, rather
        than assigning specific times to them. Typically, the time interval between
        slices is assumed to be the same for every interval. For any particular
        application, a specific value of has to be chosen. Sometimes this is
        dictated by the sensor; for example, a video camera might supply images at
        intervals of 1/30 of a second. In other cases, the interval is dictated by
        the typical rates of change of the relevant variables; for example, in the
        case of blood glucose monitoring, things can change significantly in the
        course of ten minutes, so a one-minute interval might be appropriate.
      </p>
      <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "6pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <h4 style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        Transition and sensor models
      </h4>
      <p style={{ paddingTop: "6pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "10pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "8pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "11pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        There are two ways to improve the accuracy of the approximation
        <span className="s1">:</span>
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <h3
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "149%",
          textAlign: "left"
        }}
      >
        Inference in Temporal Models
        <span className="p">
          Having set up the structure of a generic temporal model, we can formulate
          the basic inference tasks that must be solved:
        </span>
      </h3>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "4pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "8pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "9pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p
        style={{
          paddingTop: "10pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "justify"
        }}
      >
        In addition to these inference tasks, we also have
      </p>
      <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <h4
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "150%",
          textAlign: "justify"
        }}
      >
        LEARNING:{" "}
        <span className="p">
          The transition and sensor models, if not yet known, can be learned from
          observations. Just as with static Bayesian networks, dynamic Bayes net
          learning can be done as a by-product of inference. Inference provides an
          estimate of what transitions actually occurred and of what states
          generated the sensor readings, and these estimates can be used to learn
          the models. The learning process can operate via an iterative update
          algorithm called expectation–maximization or EM, or it can result from
          Bayesian updating of the model parameters given the evidence.
        </span>
      </h4>
      <h4
        style={{
          paddingTop: "7pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "justify"
        }}
      >
        Filtering and prediction.
      </h4>
      <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        className="s1"
        style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "justify" }}
      >
        A useful filtering algorithm needs to maintain a current
      </p>
      <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        className="s1"
        style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "justify" }}
      >
        for some function f . This process is called recursive estimation.
      </p>
      <p
        className="s1"
        style={{
          paddingTop: "1pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "left"
        }}
      >
        We can view the calculation as being composed of two parts: first, the
        current state
      </p>
      <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "10pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "14pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "8pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p
        className="s7"
        style={{
          paddingTop: "3pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "left"
        }}
      >
        Smoothing
      </p>
      <p
        className="s1"
        style={{
          paddingTop: "9pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "left"
        }}
      >
        smoothing is the process of computing the distribution over past states
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "8pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "7pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "2pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p
        className="s8"
        style={{
          paddingTop: "10pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "left"
        }}
      >
        Drawbacks of the algorithm:
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <h3
        style={{
          paddingTop: "3pt",
          paddingLeft: "5pt",
          textIndent: "0pt",
          textAlign: "left"
        }}
      >
        Hidden Markov Models
      </h3>
      <ul id="l6">
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "9pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            HMM is a temporal probabilistic model in which the state of the process
            is described by a single, discrete random variable.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "107%",
              textAlign: "left"
            }}
          >
            Although HMMs require the state to be a single, discrete variable, there
            is no corresponding restriction on the evidence variables.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "left"
            }}
          >
            This is because the evidence variables are always observed, which means
            that there is no need to keep track of any distribution over their
            values. (If a variable is not observed, it can simply be dropped from
            the model for that time step.) There can be many evidence variables,
            both discrete and continuous.
          </p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <h4 style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
            Simplified matrix algorithm
          </h4>
          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <p style={{ paddingLeft: "8pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p style={{ paddingLeft: "97pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <p style={{ paddingTop: "6pt", textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <h4
            style={{
              paddingTop: "8pt",
              paddingLeft: "5pt",
              textIndent: "0pt",
              textAlign: "left"
            }}
          >
            Advantages:
          </h4>
          <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p
            style={{
              paddingLeft: "5pt",
              textIndent: "0pt",
              lineHeight: "150%",
              textAlign: "justify"
            }}
          >
            Besides providing an elegant description of the filtering and smoothing
            algorithms for HMMs, the matrix formulation reveals opportunities for
            improved algorithms.
          </p>
          <ul id="l7">
            <li data-list-text="">
              <p
                style={{
                  paddingTop: "7pt",
                  paddingLeft: "41pt",
                  textIndent: "-18pt",
                  lineHeight: "150%",
                  textAlign: "justify"
                }}
              >
                The first is a simple variation on the forward–backward algorithm
                that allows smoothing to be carried out in constant space,
                independently of the length of the sequence. The idea is that
                smoothing for any particular time slice k requires the simultaneous
                presence of both the forward and backward messages, f{" "}
                <span className="s3">1:k</span> and b{" "}
                <span className="s3">k+1:t</span>, according to Equation (14.8) .
                The forward–backward algorithm achieves this by storing the fs
                computed on the forward pass so that they are available during the
                backward pass. Another way to achieve this is with a single pass
                that propagates both f and b in the same direction. For example, the
                “forward” message f can be propagated backward if we manipulate
                Equation (14.12) to work in the other direction:
              </p>
            </li>
          </ul>
          <p style={{ paddingLeft: "175pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p
            className="s1"
            style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
          >
            The complete algorithm, which requires storing and updating and B, is
            shown in Figure 14.6 .
          </p>
          <p style={{ paddingTop: "7pt", textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p style={{ paddingLeft: "21pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <h2 style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
            Kalman Filters
          </h2>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "9pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            Imagine watching a small bird flying through dense jungle foliage at
            dusk: you glimpse brief, intermittent flashes of motion; you try hard to
            guess where the bird is and where it will appear next so that you don’t
            lose it.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "107%",
              textAlign: "left"
            }}
          >
            Or imagine that you are a World War II radar operator peering at a
            faint, wandering blip that appears once every 10 seconds on the screen.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "left"
            }}
          >
            Or, going back further still, imagine you are Kepler trying to
            reconstruct the motions of the planets from a collection of highly
            inaccurate angular observations taken at irregular and imprecisely
            measured intervals.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "3pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            In all these cases, you are doing filtering: estimating state variables
            (here, the position and velocity of a moving object) from noisy
            observations over time.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "40pt",
              textIndent: "-17pt",
              textAlign: "left"
            }}
          >
            If the variables were discrete, we could model the system with a hidden
            Markov model.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "9pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            The methods for handling continuous variables, using an algorithm called
            Kalman filtering, after one of its inventors, Rudolf Kalman.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            The bird’s flight might be specified by six continuous variables at each
            time point; three for position xt,yt,ztand xv,yv,zv three for velocity .
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "left"
            }}
          >
            We will need suitable conditional densities to represent the transition
            and sensor models; we will use linear–Gaussian distributions. This means
            that the next state must be a linear function of the current state xt+1,
            plus some Gaussian noise t, a condition that turns out to be quite
            reasonable in practice.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "43pt",
              textIndent: "-20pt",
              lineHeight: "108%",
              textAlign: "left"
            }}
          >
            Consider, for example, the -coordinate of the bird, ignoring the other
            coordinates for now. Let the time interval between observations be , and
            assume constant velocity during the interval; then the position update
            is given by xt+delta=xt+xdelta . Adding Gaussian noise (to account for
            wind variation, etc.), we obtain a linear–Gaussian transition model:
          </p>
        </li>
      </ul>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "57pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        className="s1"
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "108%",
          textAlign: "left"
        }}
      >
        The Bayesian network structure for a system with position vector and
        velocity is shown in Figure 14.9
      </p>
      <p style={{ paddingLeft: "27pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <h4
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "150%",
          textAlign: "justify"
        }}
      >
        Updating Gaussian distributions{" "}
        <span className="p">
          A key property of the linear–Gaussian family of distributions: it remains
          closed under Bayesian updating. (That is, given any evidence, the
          posterior is still in the linear– Gaussian family.) Here we make this
          claim precise in the context of filtering in a temporal probability model.
          The required properties correspond to the two-step filtering calculation
          in Equation (14.5) :
        </span>
      </h4>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "17pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <h4 style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        A simple one-dimensional example
      </h4>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ paddingLeft: "15pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        style={{
          paddingLeft: "5pt",
          textIndent: "0pt",
          lineHeight: "150%",
          textAlign: "left"
        }}
      >
        Figure 14.10 shows one update cycle of the Kalman filter in the
        one-dimensional case for particular values of the transition and sensor
        models. <b>Applicability of Kalman filtering.</b>
      </p>
      <p style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}>
        <span />
      </p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <p
        className="s9"
        style={{ paddingLeft: "5pt", textIndent: "0pt", textAlign: "left" }}
      >
        Applications of Kalman Filtering
      </p>
      <p style={{ paddingTop: "1pt", textIndent: "0pt", textAlign: "left" }}>
        <br />
      </p>
      <ul id="l8">
        <li data-list-text="•">
          <p
            style={{ paddingLeft: "40pt", textIndent: "-17pt", textAlign: "left" }}
          >
            The Kalman filter and its elaborations are used in a vast array of
            applications.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "40pt",
              textIndent: "-17pt",
              textAlign: "left"
            }}
          >
            The “classical” application is in radar tracking of aircraft and
            missiles.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "9pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            Related applications include acoustic tracking of submarines and ground
            vehicles and visual tracking of vehicles and people.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "107%",
              textAlign: "left"
            }}
          >
            In a slightly more esoteric vein, Kalman filters are used to reconstruct
            particle trajectories from bubble-chamber photographs and ocean currents
            from satellite surface measurements.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            The range of application is much larger than just the tracking of
            motion: any system characterized by continuous state variables and noisy
            measurements will do.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            Such systems include pulp mills, chemical plants, nuclear reactors,
            plant ecosystems, and national economies.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "40pt",
              textIndent: "-17pt",
              textAlign: "left"
            }}
          >
            What does it mean for a system to be “unsmooth” or “poorly behaved”?
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "9pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "107%",
              textAlign: "left"
            }}
          >
            Technically, it means that there is significant nonlinearity in system
            response within the region that is “close” (according to the covariance
            ) to the current mean .
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "justify"
            }}
          >
            To understand this idea in nontechnical terms, consider the example of
            trying to track a bird as it flies through the jungle. The bird appears
            to be heading at high speed straight for a tree trunk.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "3pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "left"
            }}
          >
            The Kalman filter, whether regular or extended, can make only a Gaussian
            prediction of the location of the bird, and the mean of this Gaussian
            will be centered on the trunk, as shown in Figure 14.12(a) .
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            A reasonable model of the bird, on the other hand, would predict evasive
            action to one side or the other, as shown in Figure 14.12(b) .
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "7pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "109%",
              textAlign: "left"
            }}
          >
            Such a model is highly nonlinear, because the bird’s decision varies
            sharply depending on its precise location relative to the trunk
          </p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
          <p style={{ paddingLeft: "15pt", textIndent: "0pt", textAlign: "left" }}>
            <span />
          </p>
          <p style={{ paddingTop: "7pt", textIndent: "0pt", textAlign: "left" }}>
            <br />
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "107%",
              textAlign: "left"
            }}
          >
            To handle examples like these, we clearly need a more expressive
            language for representing the behavior of the system being modeled.
          </p>
        </li>
        <li data-list-text="•">
          <p
            style={{
              paddingTop: "8pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
              lineHeight: "108%",
              textAlign: "left"
            }}
          >
            Within the control theory community, for which problems such as evasive
            maneuvering by aircraft raise the same kinds of difficulties, the
            standard solution is the switching Kalman filter
          </p>
        </li>
      </ul>
    </>
  );
};
export default CSE_Module_1;
