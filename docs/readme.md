---
home: false
sidebarDepth: 2
---

# CPIC Web Demo App Guide

[![GitHub release](https://img.shields.io/github/release/kgrid-demos/cpic-kit.svg)](https://github.com/kgrid-demos/cpic-kit/releases/)
[![CircleCI](https://circleci.com/gh/kgrid-demos/cpic-kit.svg?style=svg)](https://circleci.com/gh/kgrid-demos/cpic-kit)


## Introduction

KGrid CPIC Demo consists of a single-page web application and a command-line batch client, to demonstrate the capabilities of KGrid and [CPIC Knowledge Objects](https://kgrid-objects.github.io/cpic-collection/).


## Web Demo APP

This app simulates a panel of a patient's genotype and diplotype and generates drug dosing recommendations.

Geno-to-pheno Knowledge objects are used to determine each gene's phenotype, if applicable.

Relevant drugs recommendations are then determined based on the available genetic information, using the drug dosing recommendation KO.

As default, the app connects with the KGrid Sandbox instances of [Activator](https://activator.kgrid.org) and interacts with the activated Knowledge Objects. The activator url can also be customized to point to the server of interest.

To run the app,

  - Click on the button to select a patient, the preset data will be auto filled in the input panel and results will displayed; If the patient selector is not enabled, the activator may need to configured, see the note below.

  - You can manually change diplotype information in the input panel, the phenotype result and recommendation will be updated accordingly;

Note:

  - Click on the setting (gear icon) in the right upper corner, an overlay will allow you to choose a different activator;

  - Click on the app log, the log area will expand to show more details on the interactions with the connected KGrid activator.


    <div style="text-align:center;"><button style='background-color:green; color:#fff;padding:16px 10px;font-size: 1.3em;'><a href='https://demo.kgrid.org/cpic-kit/web'  style='color:#fff;'>LAUNCH DEMO</a></button></div>



## Batch Command Line Demo

The Batch Command Line demos showcase an integration scenario.  The process consumes a collection
of patient's gene lab panel and returns the corresponding drug selection or dosing guideline
recommendation based on a patient's gene alleles

Below we show examples of the inputs and outputs of this process

#### Gene Lab Panel
Input to the recommendation process is a patient gene lab panel

```json
{
    "patient": {
        "name": "Hank Hill",
        "id": "1"
    },
    "diplotype": {
      "CYP2C19": "*1/*11",
      "CYP2C9": "",
      "CYP2D6": "*3/*3",
      "CYP3A5": "",
      "HLA-B": "*1/*1",
      "SLCO1B1": "",
      "TPMT": "",
      "UGT1A1": "*1/*1"
    },
    "prescriptions": "atazanavir codeine abacavir"
  }
}
```
#### CPIC Recommendation
The output of the recommendation process is a patient's CPIC Recommendation
```json
 {
  "patient": {
    "name": "Hank Hill",
    "id": "1"
  },
  "time": "10/12/2018, 2:43:15 PM",
  "recommendations": [
    {
        "type": "CPIC Recommendation",
        "drug": "Atazanavir",
        "genes": {
            "UGT1A1": {
                "diplotype": "*1/*1",
                "phenotype": "normal metabolizer"
            }
        },
        "recommendation": {
            "implication": "Reference UGT1A1 activity; very low likelihood of bilirubin-related discontinuation of atazanavir.",
            "content": "There is no need to avoid prescribing of atazanavir based on UGT1A1 genetic test result. Inform the patient that some patients stop atazanavir because of jaundice (yellow eyes and skin), but that this patient?s genotype makes this unlikely (less than about a 1 in 20 chance of stopping atazanavir because of jaundice).",
            "classification": "Strong"
        }
    },
    {
        "type": "CPIC Recommendation",
        "drug": "Codeine",
        "genes": {
            "CYP2D6": {
                "diplotype": "*3/*3",
                "phenotype": "poor metabolizer"
            }
        },
        "recommendation": {
            "implication": "Greatly reduced morphine formation following codeine administration, leading to insufficient pain relief. ",
            "content": "Avoid codeine use due to lack of efficacy. Alternatives that are not affected by this CYP2D6 phenotype include morphine and nonopioid analgesics. Tramadol and, to a lesser extent, hydrocodone and oxycodone are not good alternatives because their metabolism is affected by CYP2D6 activity; these agents should be avoided",
            "classification": "Strong"
        }
    },
    {
        "type": "CPIC Recommendation",
        "drug": "abacavir",
        "genes": {
            "HLA-B": {
                "diplotype": "*1/*1",
                "phenotype": ""
            }
        },
        "recommendation": {
            "implication": "Low or reduced risk of abacavir hypersensitivity",
            "content": "abacavir: Use abacavir per standard dosing guidelines",
            "classification": "Strong"
        }
    }
  ]
}
```

We have created a sample json panel file (_cli-client/panel.json_) with several patients to
demonstrate the batch capability.  The following example passing in the example panel to a node
script which takes the patient's gene panel information and using the cpic services constructs
a set of recommendation for that patient.  The recommendation written out the _recommendation.json_ file  

Mac/Unix
```bash
cat cli-client/panel.json | node cli-client/cpic-recommendation.js > recommendations.json
```

Windows
```
type cli-client\panel.json | node cli-client\cpic-recommendation.js > recommendations.json
```
