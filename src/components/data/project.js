import React from "react";
import { DiPython } from "react-icons/di";

const project = [
  {
    contentStyle: {
      background: "#ffff66",
      color: "#0066ff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #086972" },
    label: "Django / React + Redux / React - Bootstrap / sqlite",
    title: "Eshop — E-commerce Shopping Website",
    subtitle: "a responsive E-commerce shopping website",
    detail: "Applied full featured shopping cart, product reviews and ratings, PayPal / credit card integration and more",
    icon: <DiPython />,
    iconStyle: { background: "#071a52", color: "#fff" },
    links: [
      {
        url: "https://github.com/hyqshr/YQminiShop",
        text: "View source code"
      }
    ]
  },
  {
    contentStyle: {
      background: "#17b978",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #086972" },
    label: "Python / Fasttext / neo4j",
    title: "KGQA4Financial",
    subtitle: "Question Answering Bot for Finance and Stock Data",
    detail: "Store data in graph database neo4j, parsing user's query with AC automation and then use Cypher Query Language in neo4j to return and process result for user  ",
    icon: <DiPython />,
    iconStyle: { background: "#071a52", color: "#fff" },
    links: [
      {
        url: "https://github.com/hyqshr/KGQA",
        text: "View source code"
      }
    ]
  },
  {
    contentStyle: {
      background: "#ff80bf",
      color: "#660000"
    },
    contentArrowStyle: { borderLeft: "7px solid  #086972" },
    label: "",
    title: "Medical NER",
    subtitle: "Name Entity Recognition for Medical System",
    detail: "Trying different models such as CRF, BiLSTM, and Ngrams in Pytorch to improved accuracy",
    icon: <DiPython />,
    iconStyle: { background: "#071a52", color: "#fff" },
    links: [
      // {
      //   url: "",
      //   text: "View webpage"
      // },
      {
        url: "https://github.com/hyqshr/Medical-NER",
        text: "View source code"
      }
    ]
  },
  {
    contentStyle: {
      background: "#ff80bf",
      color: "#660000"
    },
    contentArrowStyle: { borderLeft: "7px solid  #086972" },
    label: "jupyter notebook / python",
    title: "Simple Spell Correcter",
    subtitle: "A spell correction implemetned with jupyter notebook with bigram to calculate wrong spell probability",
    detail: "",
    icon: <DiPython />,
    iconStyle: { background: "#071a52", color: "#fff" },
    links: [
      // {
      //   url: "",
      //   text: "View webpage"
      // },
      {
        url: "https://github.com/hyqshr/Simple-Spell-Correcter",
        text: "View source code"
      }
    ]
  }
];

export default project;
