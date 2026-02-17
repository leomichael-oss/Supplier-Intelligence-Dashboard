const ESG_KEYWORDS = [
  "esg",
  "sustainab",
  "climate",
  "carbon",
  "emission",
  "renewable",
  "recycling",
  "recyclable",
  "waste",
  "water",
  "deforestation",
  "human rights",
  "labor",
  "safety",
  "health",
  "nutrition",
  "governance",
  "board",
  "compliance",
  "food color"
];

function toTimestamp(value) {
  const ts = Date.parse(value || "");
  return Number.isNaN(ts) ? 0 : ts;
}

function sortByRecency(items = []) {
  return [...items].sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));
}

const ESG_LIBRARY = {
  "nestle": {
    summary:
      "Nestle's ESG exposure is concentrated in product health, water stewardship, and human-rights risk in agricultural supply chains. Current actions emphasize reformulation, climate/water reporting, and due-diligence controls in sourcing.",
    stories: [
      {
        date: "2025-06-25",
        summary: "Nestle announced it will remove synthetic food colors from its U.S. food and beverage portfolio, reflecting nutrition and consumer-health pressure.",
        url: "https://news.google.com/search?q=Nestle+food+colors+artificial+additives"
      },
      {
        date: "2025-02-13",
        summary: "Nestle's sustainability performance reporting outlines progress and remaining gaps across GHG, deforestation, water, and responsible sourcing metrics.",
        url: "https://news.google.com/search?q=Nestle+sustainability+performance+reporting"
      },
      {
        date: "2025-01-15",
        summary: "Nestle maintains human-rights disclosures focused on supply-chain due diligence, grievance mechanisms, and remediation governance.",
        url: "https://news.google.com/search?q=Nestle+human+rights+supply+chain"
      }
    ]
  },
  "kraft-heinz": {
    summary:
      "Kraft Heinz's main ESG pressure points are packaging circularity and emissions reduction while keeping products affordable and nutritious. The company has centered its ESG execution on packaging redesign, resource efficiency, and reporting transparency.",
    stories: [
      {
        date: "2023-10-16",
        summary: "Kraft Heinz published its ESG report, detailing progress on hunger relief, nutrition reformulation, energy and waste intensity, and packaging transitions.",
        url: "https://news.google.com/search?q=Kraft+Heinz+ESG+report+2023"
      },
      {
        date: "2023-07-31",
        summary: "Kraft Heinz set a target to reduce virgin plastic use by 20% by 2030, with portfolio-specific actions such as higher recycled-content packaging.",
        url: "https://news.google.com/search?q=Kraft+Heinz+reduce+virgin+plastic+2030"
      },
      {
        date: "2023-01-01",
        summary: "The Heinz sustainability platform summarizes ongoing priorities in soil health, water use, packaging recyclability, and energy transition.",
        url: "https://www.heinz.com/sustainability/"
      }
    ]
  },
  "pepsico": {
    summary:
      "PepsiCo faces ESG scrutiny around packaging waste, climate delivery credibility, and portfolio nutrition outcomes. Management is responding with updated pep+ targets, disclosures on progress, and legal defense against plastics-related claims.",
    stories: [
      {
        date: "2025-08-28",
        summary: "PepsiCo released its 2024 ESG Summary with updates on regenerative agriculture, renewable electricity, water replenishment, packaging, and nutrition goals.",
        url: "https://www.pepsico.com/newsroom/press-releases/2025/pepsico-reports-2024-progress-against-pepsico-positive-pep-sustainability-and-nutrition-goals"
      },
      {
        date: "2025-05-22",
        summary: "PepsiCo revised climate, water, agriculture, and packaging goals under pep+, reframing timelines and target design for execution realism.",
        url: "https://www.pepsico.com/newsroom/press-releases/2025/PepsiCo-refines-sustainability-goals-to-position-business-for-the-long-term"
      },
      {
        date: "2024-10-31",
        summary: "Los Angeles County sued PepsiCo and Coca-Cola over allegations tied to plastic-bottle recyclability and pollution messaging.",
        url: "https://apnews.com/article/c326225a08b2a2778afdd27d3db2d628"
      }
    ]
  },
  "procter-gamble": {
    summary:
      "P&G's ESG profile is dominated by emissions reduction in operations and supply chain, responsible forest and palm sourcing, and disclosure quality. The company is positioning ESG as part of long-term brand resilience and input-risk management.",
    stories: [
      {
        date: "2025-09-23",
        summary: "P&G published its 2024 Citizenship Report with updated disclosures on environmental sustainability, ethics, and social impact programs.",
        url: "https://us.pg.com/citizenship/"
      },
      {
        date: "2024-12-01",
        summary: "P&G highlighted progress in responsible palm sourcing and received RSPO recognition, reinforcing supply-chain governance focus.",
        url: "https://us.pg.com/citizenship/"
      },
      {
        date: "2024-06-30",
        summary: "P&G's ESG climate portal tracks progress on Scope 1/2 reductions, renewable electricity, and supply-chain decarbonization intensity.",
        url: "https://www.pginvestor.com/esg/environmental/climate/default.aspx"
      }
    ]
  },
  "maple-leaf": {
    summary:
      "Maple Leaf's ESG exposure is concentrated in protein-system emissions, animal welfare expectations, and operational safety. The company addresses this through integrated disclosure, regenerative agriculture programs, and welfare/process investments.",
    stories: [
      {
        date: "2025-06-05",
        summary: "Maple Leaf released its 2024 Integrated Report detailing emissions progress, regenerative acreage expansion, and landfill-diversion performance.",
        url: "https://www.prnewswire.com/news-releases/maple-leaf-foods-releases-2024-integrated-report-highlighting-sustainability-and-strategic-achievements-302474709.html"
      },
      {
        date: "2025-06-05",
        summary: "The 2024 integrated report provides detailed disclosures on animal care standards, social metrics, and decarbonization performance.",
        url: "https://www.mapleleaffoods.com/wp-content/uploads/sites/6/2025/06/2024_MLF_Integrated-Report_EN.pdf"
      },
      {
        date: "2024-10-30",
        summary: "Maple Leaf linked public engagement campaigns to environmental behavior change messaging and broader sustainability commitments.",
        url: "https://mapleleaffoods.mediaroom.com/2024-10-30-Maple-Leaf-Foods-launches-eco-conscious-Grow-Your-Own-Greens-challenge-to-celebrate-its-third-annual-Little-Changes-Day"
      }
    ]
  },
  "saputo": {
    summary:
      "Saputo's key ESG issues are dairy value-chain emissions, water use, and land-use/deforestation exposure in upstream commodities. Recent disclosures emphasize SBTi-aligned targets and completion of a multi-year ESG cycle.",
    stories: [
      {
        date: "2025-06-09",
        summary: "Saputo issued its 2025 Promise Report with updates on climate performance, people metrics, and responsible sourcing initiatives.",
        url: "https://www.saputo.com/en/investors"
      },
      {
        date: "2025-06-09",
        summary: "Saputo reported climate progress and published validated 2030 science-based targets, including Scope 1, 2, and FLAG Scope 3 commitments.",
        url: "https://saputo.com/en/our-promise/environment/energy-ghg"
      },
      {
        date: "2025-06-01",
        summary: "The Saputo Promise framework highlights execution priorities across environment, social, and governance pillars.",
        url: "https://www.saputo.com/en/our-promise"
      }
    ]
  },
  "general-mills": {
    summary:
      "General Mills' ESG risks are centered on agricultural emissions, regenerative transition execution, and packaging circularity. The company continues to prioritize farm-level programs and public responsibility reporting to manage those exposures.",
    stories: [
      {
        date: "2025-01-01",
        summary: "General Mills' responsibility materials track commitments across climate, water, human rights, and packaging progress.",
        url: "https://www.generalmills.com/impact"
      },
      {
        date: "2024-12-10",
        summary: "General Mills disclosed external recognition tied to responsible-company scoring and referenced ongoing ESG reporting commitments.",
        url: "https://www.generalmills.com/news/press-releases/general-mills-ranked-no-2-on-newsweeks-americas-most-responsible-companies-2025-list"
      },
      {
        date: "2023-10-17",
        summary: "General Mills and Walmart announced a regenerative agriculture collaboration targeting 600,000 acres by 2030.",
        url: "https://www.generalmills.com/news/press-releases/general-mills-and-walmart-join-forces-to-advance-regenerative-agriculture"
      }
    ]
  },
  "kellanova": {
    summary:
      "Kellanova's ESG focus is on resilient ingredient sourcing, farm-level climate adaptation, and responsible sourcing governance. Its latest updates emphasize regenerative agriculture programs with measurable farmer and resource outcomes.",
    stories: [
      {
        date: "2025-11-24",
        summary: "Kellanova, Walmart, and Indigo Ag launched an Arkansas rice program linking regenerative practices to water stewardship and farmer economics.",
        url: "https://newsroom.kellanova.com/2025-11-24-Kellanova-Walmart-Indigo-Arkansas-rice-regenerative-farmer"
      },
      {
        date: "2025-09-17",
        summary: "Kellanova and ADM reported completion of a regenerative cotton program spanning 120,000 acres with emissions and soil outcomes.",
        url: "https://www.prnewswire.com/news-releases/kellanova-and-adm-regenerative-agriculture-program-improves-soil-health-on-120-000-acres-supports-farmers-in-southeast-united-states-302558537.html"
      },
      {
        date: "2025-01-01",
        summary: "Kellanova's Better Days reporting details responsible-sourcing priorities across high-risk agricultural ingredients and supply chains.",
        url: "https://betterdayspromise.kellanova.com/responsible-sourcing"
      }
    ]
  },
  "coca-cola": {
    summary:
      "Coca-Cola's ESG pressure is highest on packaging waste, water stewardship, and target credibility. Recent disclosures pair revised environmental goals with continued litigation and stakeholder scrutiny over plastics.",
    stories: [
      {
        date: "2024-12-02",
        summary: "Coca-Cola updated its environmental goals, extending time horizons and refocusing commitments across water, packaging, and emissions.",
        url: "https://www.coca-colacompany.com/media-center/the-coca-cola-company-evolves-voluntary-environmental-goals"
      },
      {
        date: "2024-10-31",
        summary: "Los Angeles County sued Coca-Cola and PepsiCo over alleged deception tied to plastic-bottle recyclability claims.",
        url: "https://apnews.com/article/c326225a08b2a2778afdd27d3db2d628"
      },
      {
        date: "2024-01-01",
        summary: "Coca-Cola's sustainability pages continue to emphasize water replenishment and high-risk watershed priorities.",
        url: "https://www.coca-cola.com/cb/en/sustainability"
      }
    ]
  },
  "unilever": {
    summary:
      "Unilever's ESG profile includes strong climate and deforestation execution alongside scrutiny on target revisions. Current disclosures emphasize transition-plan governance and scope-3 delivery through supplier programs.",
    stories: [
      {
        date: "2026-01-01",
        summary: "Unilever's updated Climate Transition Action Plan details pathway assumptions, capex focus, and decarbonization levers for operations and value chain.",
        url: "https://www.unilever.com/files/8b5df5f6-cb90-40fd-9691-38d06905d81d/unilever-climate-transition-action-plan-updated-2024.pdf"
      },
      {
        date: "2024-04-19",
        summary: "Unilever's revision of selected environmental and social targets drew criticism from NGOs and highlighted execution-versus-ambition tension.",
        url: "https://www.theguardian.com/business/2024/apr/19/unilever-to-scale-back-environmental-and-social-pledges"
      },
      {
        date: "2024-01-01",
        summary: "Unilever's climate reporting tracks progress on supplier engagement, deforestation-free sourcing, and regenerative agriculture scale-up.",
        url: "https://www.unilever.com/sustainability/climate/"
      }
    ]
  },
  "hershey": {
    summary:
      "Hershey remains exposed to agriculture-linked climate risk, cocoa sourcing complexity, and packaging circularity constraints. Its ESG response is centered on science-based emissions targets and responsible sourcing controls.",
    stories: [
      {
        date: "2024-06-18",
        summary: "Hershey updated and revalidated science-based emissions targets, including FLAG and non-FLAG Scope 3 pathways to 2030.",
        url: "https://investors.thehersheycompany.com/"
      },
      {
        date: "2025-01-01",
        summary: "Hershey's environment disclosures outline progress in renewable electricity, water reduction, and operational efficiency programs.",
        url: "https://www.thehersheycompany.com/en_us/home/sustainability/progress-on-priorities/environment.html"
      },
      {
        date: "2025-01-01",
        summary: "Hershey's responsible sourcing disclosures detail due diligence on human rights and commodity-specific risk management.",
        url: "https://www.thehersheycompany.com/en_us/home/sustainability/progress-on-priorities/responsible-sourcing.html"
      }
    ]
  },
  "lindt": {
    summary:
      "Lindt's ESG exposure is heavily linked to cocoa supply-chain human rights, child-labor risk mitigation, and traceable sourcing performance. Recent reporting focuses on due diligence systems, remediation coverage, and sourcing metrics.",
    stories: [
      {
        date: "2025-03-01",
        summary: "Lindt published its 2024 Sustainability Report with expanded disclosures on climate, sourcing, and governance outcomes.",
        url: "https://reports.lindt-spruengli.com/sustainability-report-2024/"
      },
      {
        date: "2025-03-01",
        summary: "Lindt's human-rights section details child-labor due diligence in cocoa origins and the use of monitoring/remediation systems.",
        url: "https://reports.lindt-spruengli.com/sustainability-report-2024/pillars/business-ethics-and-integrity-and-human-rights/respecting-human-rights.html"
      },
      {
        date: "2025-03-01",
        summary: "Responsible sourcing disclosures show progress on priority materials, cocoa traceability coverage, and no-deforestation requirements.",
        url: "https://reports.lindt-spruengli.com/sustainability-report-2024/pillars/improving-livelihoods/responsible-sourcing.html"
      }
    ]
  },
  "loreal": {
    summary:
      "L'Oreal's key ESG issues are climate and water performance, raw-material traceability, and supply-chain standards. Recent disclosures emphasize environmental leadership recognition and measurable progress in renewable energy and water reuse.",
    stories: [
      {
        date: "2025-12-12",
        summary: "L'Oreal reported a tenth consecutive CDP triple-A score, highlighting progress in climate, forests, and water-security disclosures.",
        url: "https://www.loreal-finance.com/en/"
      },
      {
        date: "2025-02-26",
        summary: "L'Oreal announced a ninth consecutive CDP triple-A cycle with updated performance indicators on renewable energy and traceable sourcing.",
        url: "https://www.loreal-finance.com/en/annual-report-2024/social-and-environmental-highlights/"
      },
      {
        date: "2025-03-31",
        summary: "L'Oreal's annual-report sustainability highlights summarize social, environmental, and governance performance indicators.",
        url: "https://www.loreal-finance.com/en/annual-report-2024/social-and-environmental-highlights/"
      }
    ]
  },
  "kenvue": {
    summary:
      "Kenvue's ESG focus is on emissions reduction, packaging circularity, and responsible ingredient sourcing in a recently separated public-company structure. Recent disclosures emphasize measurable decarbonization progress and SBTi-aligned commitments.",
    stories: [
      {
        date: "2025-06-26",
        summary: "Kenvue released its 2024 Healthy Lives Mission report with updates on operational emissions, renewable electricity, and packaging innovation.",
        url: "https://www.kenvue.com/kenvue-releases-second-annual-healthy-lives-mission-report"
      },
      {
        date: "2024-05-02",
        summary: "Kenvue announced SBTi validation of near-term climate targets, including Scope 1/2 cuts and supplier science-based target coverage.",
        url: "https://www.kenvue.com/media/healthy-lives-mission-science-based-targets-validation"
      },
      {
        date: "2024-01-01",
        summary: "Kenvue's Healthy Lives Mission disclosures define commitments across climate, plastics, forest-risk inputs, and product innovation.",
        url: "https://www.kenvue.com/kenvue-affirms-commitment-to-its-healthy-lives-mission"
      }
    ]
  }
};

function buildNews(_company, primaryItems = []) {
  return sortByRecency(primaryItems).slice(0, 10);
}

function sup(cfg) {
  return cfg;
}

const suppliers = [
  sup({
    id: "nestle",
    name: "Nestle",
    ticker: "NESN.SW",
    market: "Packaged Food",
    logoUrl: "assets/logos/nestle.svg",
    internal: {
      sales: 842000000,
      salesYoy: 4.3,
      margin: 236000000,
      marginYoy: 1.1,
      inflight: 38400000,
      tonnage: 184200,
      tonnageYoy: 2.4,
      aic: 3.68,
      aicYoy: 1.1,
      aip: 3.88,
      aipYoy: -1.9,
      serviceLevel: 94.1,
      serviceYoy: -0.4,
      summary: [
        "Sales grew +4.3% YoY with margin dollars up +1.1%, indicating productive price-pack execution.",
        "Service is slightly down year over year, creating replenishment risk on high-velocity coffee and confectionery SKUs.",
        "Inflight asks are concentrated into one near-term proposal and remain manageable relative to annual supplier spend."
      ],
      itemsListed: 482,
      controlBrandItems: 116,
      nationalBrandItems: 366,
      topBrands: [
        { name: "Nescafe", pct: 13.2, sales: 451000000, yoy: 5.3, topSku: "Nescafe Gold 200g" },
        { name: "KitKat", pct: 10.4, sales: 356000000, yoy: 3.7, topSku: "KitKat 4 Finger" },
        { name: "Purina Pro Plan", pct: 8.6, sales: 294000000, yoy: 4.1, topSku: "Pro Plan Chicken 7lb" },
        { name: "Nespresso", pct: 7.8, sales: 267000000, yoy: 2.4, topSku: "Vertuo Coffee Capsules" },
        { name: "Stouffer's", pct: 5.4, sales: 185000000, yoy: 1.6, topSku: "Mac & Cheese Family Size" }
      ],
      categories: [
        { category: "Coffee", supplierSales: 960000000, supplierPct: 28.1, categorySales: 5900000000, categoryPct: 16.3 },
        { category: "Confectionery", supplierSales: 780000000, supplierPct: 22.8, categorySales: 5300000000, categoryPct: 14.7 },
        { category: "Dairy", supplierSales: 630000000, supplierPct: 18.4, categorySales: 8600000000, categoryPct: 7.3 },
        { category: "Pet Care", supplierSales: 580000000, supplierPct: 17.0, categorySales: 4300000000, categoryPct: 13.5 },
        { category: "Water", supplierSales: 470000000, supplierPct: 13.7, categorySales: 3900000000, categoryPct: 12.1 }
      ],
      commodities: [
        { commodity: "Coffee", portion: 29, yoy: 8.2, qoq: 2.1 },
        { commodity: "Cocoa", portion: 24, yoy: 17.5, qoq: 4.3 },
        { commodity: "Dairy", portion: 19, yoy: -1.2, qoq: 0.5 },
        { commodity: "Sugar", portion: 16, yoy: 3.7, qoq: 1.1 },
        { commodity: "Packaging Resin", portion: 12, yoy: -2.9, qoq: -0.8 }
      ],
      inflightRows: [
        { date: "2026-05-15", topImpactedCategory: "Confectionery", sourcingLead: "Avery Collins", proposed: 8400000, justified: 6100000, proposedPct: 2.8, justifiedPct: 2.1 }
      ],
      historyRows: [
        { date: "2025-03-01", proposed: 9800000, justified: 7600000, accepted: 6900000, proposedPct: 3.3, justifiedPct: 2.6, acceptedPct: 2.3 },
        { date: "2025-06-01", proposed: 7300000, justified: 5500000, accepted: 5100000, proposedPct: 2.5, justifiedPct: 1.9, acceptedPct: 1.7 },
        { date: "2025-09-01", proposed: 10500000, justified: 8100000, accepted: 7900000, proposedPct: 3.6, justifiedPct: 2.8, acceptedPct: 2.7 },
        { date: "2025-12-01", proposed: 9200000, justified: 6800000, accepted: 6400000, proposedPct: 3.1, justifiedPct: 2.3, acceptedPct: 2.1 }
      ]
    },
    external: {
      marketCapLabel: "$261.78B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 22.1,
      stockPriceLabel: "$101.75",
      stockPriceYoy: 22.59,
      summary: [
        "Nestle delivered CHF 91.35B sales in FY 2024 with margin expansion, showing stronger operating discipline.",
        "Guidance and trading commentary point to moderated near-term organic growth in core categories.",
        "Commodity volatility in cocoa and coffee remains the key planning challenge."
      ],
      reportPeriod: "FY 2024",
      reportSalesLabel: "CHF 91.35B",
      reportSalesYoyLabel: "-1.8%",
      grossMarginLabel: "46.7%",
      grossMarginYoyLabel: "+80 bps",
      highlights: [
        "Organic growth was 2.2% with broad-based category contribution.",
        "Reported gross margin expanded to 46.7%.",
        "Underlying trading operating profit margin increased to 17.2%."
      ],
      news: buildNews("Nestle", [
        { title: "Nestle beats annual sales forecasts but sees margin dropping in 2025", date: "2025-02-13", url: "https://news.google.com/search?q=Nestle+annual+sales+margin+2025" },
        { title: "Nestle to remove synthetic food colors from U.S. food and beverage portfolio", date: "2025-06-25", url: "https://news.google.com/search?q=Nestle+food+colors+artificial+additives" },
        { title: "Nestle sees lower annual organic sales growth after setting straight weak 2024", date: "2026-02-12", url: "https://news.google.com/search?q=Nestle+organic+sales+growth+2026" }
      ]),
      sources: [
        { label: "Nestle Full-Year 2024 Results", url: "https://news.google.com/search?q=Nestle+full+year+2024+results" },
        { label: "Nestle Market Cap", url: "https://companiesmarketcap.com/nestle/marketcap/" },
        { label: "Nestle Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=nestle" }
      ]
    }
  }),
  sup({
    id: "kraft-heinz",
    name: "Kraft Heinz",
    ticker: "KHC",
    market: "Packaged Food",
    logoUrl: "assets/logos/kraft-heinz.svg",
    internal: {
      sales: 711000000,
      salesYoy: -1.8,
      margin: 171000000,
      marginYoy: -0.7,
      inflight: 54200000,
      tonnage: 112600,
      tonnageYoy: -1.2,
      aic: 3.54,
      aicYoy: 1.8,
      aip: 3.77,
      aipYoy: -2.2,
      serviceLevel: 92.8,
      serviceYoy: -1.1,
      summary: [
        "Sales and margin dollars are both down year over year, indicating mix pressure and weaker volume realization.",
        "Service is trailing target, aligning with softer demand and tighter retailer inventory posture.",
        "A single sizeable cost ask is in flight; justified value suggests negotiation room before final acceptance."
      ],
      itemsListed: 365,
      controlBrandItems: 92,
      nationalBrandItems: 273,
      topBrands: [
        { name: "Heinz", pct: 16.9, sales: 357000000, yoy: -0.9, topSku: "Heinz Ketchup 38oz" },
        { name: "Kraft Mac & Cheese", pct: 11.2, sales: 236000000, yoy: -1.4, topSku: "Original Dinner 7.25oz" },
        { name: "Philadelphia", pct: 8.3, sales: 175000000, yoy: 0.6, topSku: "Cream Cheese 8oz" },
        { name: "Oscar Mayer", pct: 7.7, sales: 162000000, yoy: -2.1, topSku: "Turkey Bacon 12oz" },
        { name: "Capri Sun", pct: 6.1, sales: 129000000, yoy: 1.1, topSku: "Fruit Punch 10-pack" }
      ],
      categories: [
        { category: "Condiments", supplierSales: 654000000, supplierPct: 31.0, categorySales: 4200000000, categoryPct: 15.6 },
        { category: "Meals", supplierSales: 528000000, supplierPct: 25.0, categorySales: 5100000000, categoryPct: 10.4 },
        { category: "Dairy", supplierSales: 401000000, supplierPct: 19.0, categorySales: 8600000000, categoryPct: 4.7 },
        { category: "Snacks", supplierSales: 295000000, supplierPct: 14.0, categorySales: 9400000000, categoryPct: 3.1 },
        { category: "Beverages", supplierSales: 232000000, supplierPct: 11.0, categorySales: 12300000000, categoryPct: 1.9 }
      ],
      commodities: [
        { commodity: "Tomato", portion: 26, yoy: 4.4, qoq: 1.6 },
        { commodity: "Dairy", portion: 22, yoy: -0.8, qoq: 0.2 },
        { commodity: "Edible Oils", portion: 19, yoy: 6.9, qoq: 2.4 },
        { commodity: "Sugar", portion: 18, yoy: 5.1, qoq: 1.8 },
        { commodity: "Packaging Steel", portion: 15, yoy: -3.3, qoq: -1.1 }
      ],
      inflightRows: [
        { date: "2026-06-15", topImpactedCategory: "Condiments", sourcingLead: "Maya Rodriguez", proposed: 18100000, justified: 13200000, proposedPct: 4.4, justifiedPct: 3.2 }
      ],
      historyRows: [
        { date: "2025-02-01", proposed: 12100000, justified: 8900000, accepted: 7700000, proposedPct: 4.0, justifiedPct: 3.0, acceptedPct: 2.6 },
        { date: "2025-05-01", proposed: 10400000, justified: 7600000, accepted: 6900000, proposedPct: 3.5, justifiedPct: 2.6, acceptedPct: 2.3 },
        { date: "2025-08-01", proposed: 13500000, justified: 10100000, accepted: 9200000, proposedPct: 4.5, justifiedPct: 3.4, acceptedPct: 3.1 },
        { date: "2025-11-01", proposed: 11700000, justified: 8200000, accepted: 7800000, proposedPct: 3.9, justifiedPct: 2.8, acceptedPct: 2.6 }
      ]
    },
    external: {
      marketCapLabel: "$29.16B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: -11.0,
      stockPriceLabel: "$24.64",
      stockPriceYoy: -11.24,
      summary: [
        "Kraft Heinz closed FY 2025 at $24.94B net sales, down 3.5% YoY.",
        "Gross margin stepped down to 33.3%, reflecting a tougher mix/cost balance.",
        "Demand softness and volume pressure remain the primary near-term challenge."
      ],
      reportPeriod: "FY 2025",
      reportSalesLabel: "$24.94B",
      reportSalesYoyLabel: "-3.5%",
      grossMarginLabel: "33.3%",
      grossMarginYoyLabel: "-140 bps",
      highlights: ["Net sales declined 3.5% in FY 2025.", "Gross profit margin was 33.3%.", "Productivity remains a central margin lever."],
      news: buildNews("Kraft Heinz", [
        { title: "Kraft Heinz posts lower annual sales as demand softens", date: "2025-02-12", url: "https://news.google.com/search?q=Kraft+Heinz+annual+profit+forecast+2025" },
        { title: "Kraft Heinz now expects 2024 net sales at lower end of annual forecast", date: "2024-11-13", url: "https://news.google.com/search?q=Kraft+Heinz+net+sales+forecast+2024" },
        { title: "Kraft Heinz reports fourth quarter and full year 2025 results", date: "2026-02-11", url: "https://news.google.com/search?q=Kraft+Heinz+fourth+quarter+full+year+2025+results" }
      ]),
      sources: [
        { label: "Kraft Heinz FY 2025 Results", url: "https://news.google.com/search?q=Kraft+Heinz+FY+2025+results" },
        { label: "Kraft Heinz Market Cap", url: "https://companiesmarketcap.com/kraft-heinz/marketcap/" },
        { label: "Kraft Heinz Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=kraft+heinz" }
      ]
    }
  }),
  sup({
    id: "pepsico",
    name: "PepsiCo",
    ticker: "PEP",
    market: "Beverages & Snacks",
    logoUrl: "assets/logos/pepsico.svg",
    internal: {
      sales: 898000000,
      salesYoy: 2.6,
      margin: 241000000,
      marginYoy: 0.4,
      inflight: 47800000,
      tonnage: 159900,
      tonnageYoy: 1.5,
      aic: 3.61,
      aicYoy: 1.0,
      aip: 3.89,
      aipYoy: -1.7,
      serviceLevel: 93.5,
      serviceYoy: -0.6,
      summary: [
        "Sales are up +2.6% with modest margin expansion, supported by mix in beverages and premium snack packs.",
        "Service slipped versus last year, which may limit upside if seasonal demand accelerates.",
        "Current inflight proposal is moderate and partially justified, suggesting a controlled cost reset."
      ],
      itemsListed: 417,
      controlBrandItems: 103,
      nationalBrandItems: 314,
      topBrands: [
        { name: "Pepsi", pct: 12.4, sales: 370000000, yoy: 2.7, topSku: "Pepsi Zero 12-pack" },
        { name: "Gatorade", pct: 10.8, sales: 322000000, yoy: 4.3, topSku: "Thirst Quencher 28oz" },
        { name: "Lay's", pct: 10.1, sales: 301000000, yoy: 1.9, topSku: "Classic Chips 8oz" },
        { name: "Doritos", pct: 8.5, sales: 253000000, yoy: 1.6, topSku: "Nacho Cheese 9.25oz" },
        { name: "Mountain Dew", pct: 6.4, sales: 191000000, yoy: 2.2, topSku: "Original 12-pack" }
      ],
      categories: [
        { category: "Beverages", supplierSales: 1132000000, supplierPct: 38.0, categorySales: 12300000000, categoryPct: 9.2 },
        { category: "Salty Snacks", supplierSales: 953000000, supplierPct: 32.0, categorySales: 9400000000, categoryPct: 10.1 },
        { category: "Nutrition", supplierSales: 417000000, supplierPct: 14.0, categorySales: 3700000000, categoryPct: 11.3 },
        { category: "Breakfast", supplierSales: 268000000, supplierPct: 9.0, categorySales: 2800000000, categoryPct: 9.6 },
        { category: "Other", supplierSales: 209000000, supplierPct: 7.0, categorySales: 3200000000, categoryPct: 6.5 }
      ],
      commodities: [
        { commodity: "Sugar", portion: 27, yoy: 5.3, qoq: 1.7 },
        { commodity: "Corn", portion: 24, yoy: 2.1, qoq: 0.9 },
        { commodity: "Potatoes", portion: 21, yoy: -1.5, qoq: -0.4 },
        { commodity: "Aluminum", portion: 16, yoy: 3.8, qoq: 1.3 },
        { commodity: "Packaging Resin", portion: 12, yoy: -2.4, qoq: -0.7 }
      ],
      inflightRows: [
        { date: "2026-07-01", topImpactedCategory: "Beverages", sourcingLead: "Jordan Patel", proposed: 14600000, justified: 10300000, proposedPct: 3.7, justifiedPct: 2.6 }
      ],
      historyRows: [
        { date: "2025-03-15", proposed: 10800000, justified: 8000000, accepted: 7600000, proposedPct: 3.2, justifiedPct: 2.4, acceptedPct: 2.2 },
        { date: "2025-06-15", proposed: 9700000, justified: 7100000, accepted: 6800000, proposedPct: 2.9, justifiedPct: 2.2, acceptedPct: 2.0 },
        { date: "2025-09-15", proposed: 11500000, justified: 8600000, accepted: 8300000, proposedPct: 3.4, justifiedPct: 2.6, acceptedPct: 2.5 },
        { date: "2025-12-15", proposed: 10300000, justified: 7700000, accepted: 7400000, proposedPct: 3.1, justifiedPct: 2.3, acceptedPct: 2.2 }
      ]
    },
    external: {
      marketCapLabel: "$233.11B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 20.8,
      stockPriceLabel: "$170.49",
      stockPriceYoy: 21.45,
      summary: [
        "PepsiCo reported FY 2024 revenue of $91.85B with gross margin of 54.6%.",
        "Beverage momentum is outpacing snacks in recent commentary.",
        "Portfolio investments and cost control remain key to 2026 execution."
      ],
      reportPeriod: "FY 2024",
      reportSalesLabel: "$91.85B",
      reportSalesYoyLabel: "+0.4%",
      grossMarginLabel: "54.6%",
      grossMarginYoyLabel: "+35 bps",
      highlights: ["Revenue reached $91.854B.", "Gross profit increased year over year.", "Cash generation remains a strategic strength."],
      news: buildNews("PepsiCo", [
        { title: "PepsiCo forecasts annual profit below estimates as demand for snacks slows", date: "2025-02-04", url: "https://news.google.com/search?q=PepsiCo+annual+profit+forecast+2025" },
        { title: "PepsiCo beats quarterly profit estimates on robust demand for sugar-free drinks", date: "2025-07-17", url: "https://news.google.com/search?q=PepsiCo+quarterly+profit+2025+sugar-free" },
        { title: "PepsiCo to buy prebiotic soda brand Poppi in nearly $2 billion deal", date: "2025-03-17", url: "https://news.google.com/search?q=PepsiCo+Poppi+acquisition" }
      ]),
      sources: [
        { label: "PepsiCo FY 2024 Results", url: "https://investors.pepsico.com/news-events/press-releases/detail/457/pepsico-reports-fourth-quarter-and-full-year-2024-results" },
        { label: "PepsiCo Market Cap", url: "https://companiesmarketcap.com/pepsico/marketcap/" },
        { label: "PepsiCo Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=pepsico" }
      ]
    }
  }),
  sup({
    id: "procter-gamble",
    name: "Procter & Gamble",
    ticker: "PG",
    market: "Household & Personal Care",
    logoUrl: "assets/logos/procter-gamble.svg",
    internal: {
      sales: 865000000,
      salesYoy: 2.1,
      margin: 224000000,
      marginYoy: 0.8,
      inflight: 28900000,
      tonnage: 141300,
      tonnageYoy: 1.2,
      aic: 3.44,
      aicYoy: 0.9,
      aip: 3.76,
      aipYoy: -1.1,
      serviceLevel: 95.0,
      serviceYoy: -0.2,
      summary: ["Steady top-line growth with positive margin leverage.", "Service remains strong with minor year-over-year slippage.", "Inflight request is concentrated and within typical annual range."],
      itemsListed: 398,
      controlBrandItems: 86,
      nationalBrandItems: 312,
      topBrands: [
        { name: "Tide", pct: 12.6, sales: 334000000, yoy: 2.8, topSku: "Tide Pods 42ct" },
        { name: "Pampers", pct: 10.9, sales: 289000000, yoy: 2.1, topSku: "Pampers Swaddlers Size 4" },
        { name: "Gillette", pct: 8.8, sales: 233000000, yoy: 1.4, topSku: "Fusion5 Cartridges 8ct" },
        { name: "Dawn", pct: 7.4, sales: 196000000, yoy: 3.0, topSku: "Dawn Ultra 24oz" },
        { name: "Bounty", pct: 6.7, sales: 178000000, yoy: 1.9, topSku: "Bounty Select-a-Size 8pk" }
      ],
      categories: [
        { category: "Fabric Care", supplierSales: 742000000, supplierPct: 28.0, categorySales: 6400000000, categoryPct: 11.6 },
        { category: "Baby Care", supplierSales: 556000000, supplierPct: 21.0, categorySales: 4500000000, categoryPct: 12.4 },
        { category: "Grooming", supplierSales: 451000000, supplierPct: 17.0, categorySales: 3900000000, categoryPct: 11.6 },
        { category: "Home Care", supplierSales: 477000000, supplierPct: 18.0, categorySales: 5200000000, categoryPct: 9.2 },
        { category: "Health Care", supplierSales: 424000000, supplierPct: 16.0, categorySales: 4700000000, categoryPct: 9.0 }
      ],
      commodities: [
        { commodity: "Pulp", portion: 23, yoy: 3.1, qoq: 0.9 },
        { commodity: "Surfactants", portion: 22, yoy: 2.2, qoq: 0.6 },
        { commodity: "Resins", portion: 20, yoy: -1.7, qoq: -0.5 },
        { commodity: "Fragrances", portion: 19, yoy: 1.3, qoq: 0.4 },
        { commodity: "Packaging Film", portion: 16, yoy: -2.1, qoq: -0.6 }
      ],
      inflightRows: [{ date: "2026-06-20", topImpactedCategory: "Fabric Care", sourcingLead: "Taylor Brooks", proposed: 9200000, justified: 6700000, proposedPct: 2.4, justifiedPct: 1.7 }],
      historyRows: [
        { date: "2025-02-01", proposed: 8400000, justified: 6200000, accepted: 5900000, proposedPct: 2.2, justifiedPct: 1.6, acceptedPct: 1.5 },
        { date: "2025-05-01", proposed: 7600000, justified: 5600000, accepted: 5300000, proposedPct: 2.0, justifiedPct: 1.5, acceptedPct: 1.4 },
        { date: "2025-08-01", proposed: 9300000, justified: 6900000, accepted: 6500000, proposedPct: 2.4, justifiedPct: 1.8, acceptedPct: 1.7 },
        { date: "2025-11-01", proposed: 8700000, justified: 6400000, accepted: 6100000, proposedPct: 2.3, justifiedPct: 1.7, acceptedPct: 1.6 }
      ]
    },
    external: {
      marketCapLabel: "$400.20B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 10.2,
      stockPriceLabel: "$164.12",
      stockPriceYoy: 10.8,
      summary: ["P&G continues to post resilient profitability with measured organic growth.", "Mix and productivity are helping support margins amid normalization in volumes.", "Competitive intensity in value tiers remains a watch item."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "$84.0B",
      reportSalesYoyLabel: "+2.0%",
      grossMarginLabel: "51.2%",
      grossMarginYoyLabel: "+40 bps",
      highlights: ["Core categories remain stable.", "Productivity offsets inflation.", "Cash returns to shareholders remain strong."],
      news: buildNews("Procter & Gamble", [
        {
          title: "P&G updates quarterly performance commentary and category outlook",
          date: "2026-01-23",
          url: "https://news.google.com/search?q=Procter+%26+Gamble+quarterly+results+2026"
        },
        {
          title: "P&G outlines productivity and cost-management priorities for FY 2026",
          date: "2025-11-19",
          url: "https://news.google.com/search?q=Procter+%26+Gamble+productivity+cost+management+FY+2026"
        },
        {
          title: "P&G signals portfolio and premiumization focus across core categories",
          date: "2025-09-23",
          url: "https://news.google.com/search?q=Procter+%26+Gamble+portfolio+premiumization+2025"
        }
      ]),
      sources: [
        { label: "P&G Investor Relations", url: "https://www.pginvestor.com/" },
        { label: "P&G Market Cap", url: "https://companiesmarketcap.com/procter-and-gamble/marketcap/" },
        { label: "P&G Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=procter+and+gamble" }
      ]
    }
  }),
  sup({
    id: "maple-leaf",
    name: "Maple Leaf",
    ticker: "MFI.TO",
    market: "Dairy & Protein",
    logoUrl: "assets/logos/maple-leaf.svg",
    internal: {
      sales: 818000000,
      salesYoy: 1.4,
      margin: 173000000,
      marginYoy: 0.6,
      inflight: 14700000,
      tonnage: 78600,
      tonnageYoy: 0.8,
      aic: 3.21,
      aicYoy: 0.7,
      aip: 3.42,
      aipYoy: -0.9,
      serviceLevel: 93.1,
      serviceYoy: -0.5,
      summary: ["Moderate growth with stable margin progression.", "Service levels are near plan with minor degradation year over year.", "Cost proposal pipeline remains relatively light."],
      itemsListed: 244,
      controlBrandItems: 61,
      nationalBrandItems: 183,
      topBrands: [
        { name: "Maple Leaf", pct: 15.1, sales: 178000000, yoy: 1.8, topSku: "Natural Selections Turkey" },
        { name: "Schneiders", pct: 11.2, sales: 132000000, yoy: 1.2, topSku: "Bacon 375g" },
        { name: "Greenfield", pct: 8.9, sales: 105000000, yoy: 0.9, topSku: "Breakfast Sausage" },
        { name: "Mina", pct: 6.7, sales: 79000000, yoy: 1.5, topSku: "Halal Chicken Strips" },
        { name: "Lightlife", pct: 5.8, sales: 68000000, yoy: -0.4, topSku: "Plant-Based Burgers" }
      ],
      categories: [
        { category: "Prepared Meats", supplierSales: 437000000, supplierPct: 37.0, categorySales: 3500000000, categoryPct: 12.5 },
        { category: "Poultry", supplierSales: 307000000, supplierPct: 26.0, categorySales: 4100000000, categoryPct: 7.5 },
        { category: "Plant Protein", supplierSales: 177000000, supplierPct: 15.0, categorySales: 1800000000, categoryPct: 9.8 },
        { category: "Deli", supplierSales: 165000000, supplierPct: 14.0, categorySales: 2900000000, categoryPct: 5.7 },
        { category: "Other", supplierSales: 94000000, supplierPct: 8.0, categorySales: 1600000000, categoryPct: 5.9 }
      ],
      commodities: [
        { commodity: "Hogs", portion: 28, yoy: 4.8, qoq: 1.5 },
        { commodity: "Poultry Feed", portion: 24, yoy: 2.9, qoq: 1.0 },
        { commodity: "Grains", portion: 20, yoy: 1.7, qoq: 0.4 },
        { commodity: "Packaging", portion: 16, yoy: -1.3, qoq: -0.3 },
        { commodity: "Energy", portion: 12, yoy: 2.2, qoq: 0.8 }
      ],
      inflightRows: [{ date: "2026-05-28", topImpactedCategory: "Prepared Meats", sourcingLead: "Riley Turner", proposed: 5100000, justified: 3600000, proposedPct: 2.2, justifiedPct: 1.5 }],
      historyRows: [
        { date: "2025-02-01", proposed: 4200000, justified: 3000000, accepted: 2810000, proposedPct: 1.8, justifiedPct: 1.3, acceptedPct: 1.2 },
        { date: "2025-05-01", proposed: 3900000, justified: 2800000, accepted: 2600000, proposedPct: 1.7, justifiedPct: 1.2, acceptedPct: 1.1 },
        { date: "2025-08-01", proposed: 4700000, justified: 3400000, accepted: 3150000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 },
        { date: "2025-11-01", proposed: 4400000, justified: 3200000, accepted: 2960000, proposedPct: 1.9, justifiedPct: 1.4, acceptedPct: 1.3 }
      ]
    },
    external: {
      marketCapLabel: "$2.75B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 7.4,
      stockPriceLabel: "$22.40",
      stockPriceYoy: 7.9,
      summary: ["Maple Leaf is executing on margin recovery while volume remains measured.", "Category mix and cost normalization are supporting earnings quality.", "Protein input volatility is the main near-term uncertainty."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "C$5.2B",
      reportSalesYoyLabel: "+1.5%",
      grossMarginLabel: "17.6%",
      grossMarginYoyLabel: "+55 bps",
      highlights: ["Margin recovery continued through FY 2025.", "Prepared meats remained the largest driver.", "Cost controls supported profitability."],
      news: buildNews("Maple Leaf Foods", [
        {
          title: "Maple Leaf Foods Reports Third Quarter 2025 Financial Results",
          date: "2025-11-06",
          url: "https://mapleleaffoods.mediaroom.com/"
        },
        {
          title: "Maple Leaf Foods reports third-quarter profit and sales rise",
          date: "2025-11-06",
          url: "https://mapleleaffoods.mediaroom.com/"
        }
      ]),
      sources: [
        { label: "Maple Leaf Investor Relations", url: "https://www.mapleleaffoods.com/investors/" },
        { label: "Maple Leaf Market Cap", url: "https://companiesmarketcap.com/maple-leaf-foods/marketcap/" },
        { label: "Maple Leaf Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=maple+leaf+foods" }
      ]
    }
  }),
  sup({
    id: "saputo",
    name: "Saputo",
    ticker: "SAP.TO",
    market: "Dairy & Protein",
    logoUrl: "assets/logos/saputo.svg",
    internal: {
      sales: 833000000,
      salesYoy: 1.9,
      margin: 196000000,
      marginYoy: 0.9,
      inflight: 17400000,
      tonnage: 84200,
      tonnageYoy: 1.1,
      aic: 3.33,
      aicYoy: 0.8,
      aip: 3.58,
      aipYoy: -1.0,
      serviceLevel: 93.4,
      serviceYoy: -0.4,
      summary: ["Topline and margin trends are modestly positive.", "Service consistency remains solid across core dairy items.", "Cost asks are selective and concentrated in one request."],
      itemsListed: 271,
      controlBrandItems: 72,
      nationalBrandItems: 199,
      topBrands: [
        { name: "Saputo", pct: 12.3, sales: 164000000, yoy: 2.0, topSku: "Mozzarella Block 1kg" },
        { name: "Dairyland", pct: 10.7, sales: 142000000, yoy: 1.6, topSku: "2% Milk 2L" },
        { name: "Armstrong", pct: 8.5, sales: 113000000, yoy: 1.2, topSku: "Cheddar 400g" },
        { name: "Catelli", pct: 7.1, sales: 94000000, yoy: 1.0, topSku: "Spaghetti 900g" },
        { name: "Frigo", pct: 5.9, sales: 78000000, yoy: 1.4, topSku: "String Cheese 24ct" }
      ],
      categories: [
        { category: "Cheese", supplierSales: 505000000, supplierPct: 38.0, categorySales: 6100000000, categoryPct: 8.3 },
        { category: "Fluid Milk", supplierSales: 319000000, supplierPct: 24.0, categorySales: 5400000000, categoryPct: 5.9 },
        { category: "Cream", supplierSales: 200000000, supplierPct: 15.0, categorySales: 2900000000, categoryPct: 6.9 },
        { category: "Cultured", supplierSales: 173000000, supplierPct: 13.0, categorySales: 2600000000, categoryPct: 6.7 },
        { category: "Other", supplierSales: 133000000, supplierPct: 10.0, categorySales: 1800000000, categoryPct: 7.4 }
      ],
      commodities: [
        { commodity: "Milk", portion: 34, yoy: 3.5, qoq: 1.1 },
        { commodity: "Cream", portion: 22, yoy: 2.8, qoq: 0.9 },
        { commodity: "Packaging", portion: 18, yoy: -1.9, qoq: -0.5 },
        { commodity: "Cultures", portion: 14, yoy: 1.1, qoq: 0.4 },
        { commodity: "Energy", portion: 12, yoy: 2.0, qoq: 0.7 }
      ],
      inflightRows: [{ date: "2026-06-05", topImpactedCategory: "Cheese", sourcingLead: "Casey Morgan", proposed: 6100000, justified: 4300000, proposedPct: 2.4, justifiedPct: 1.7 }],
      historyRows: [
        { date: "2025-02-01", proposed: 4800000, justified: 3400000, accepted: 3200000, proposedPct: 1.9, justifiedPct: 1.3, acceptedPct: 1.2 },
        { date: "2025-05-01", proposed: 4500000, justified: 3200000, accepted: 3000000, proposedPct: 1.8, justifiedPct: 1.3, acceptedPct: 1.2 },
        { date: "2025-08-01", proposed: 5300000, justified: 3800000, accepted: 3540000, proposedPct: 2.1, justifiedPct: 1.5, acceptedPct: 1.4 },
        { date: "2025-11-01", proposed: 5000000, justified: 3600000, accepted: 3320000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 }
      ]
    },
    external: {
      marketCapLabel: "$11.90B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 8.9,
      stockPriceLabel: "$30.85",
      stockPriceYoy: 9.4,
      summary: ["Saputo shows improving operating cadence following portfolio actions.", "Margins are stabilizing as milk input dynamics normalize.", "Execution risk remains around regional demand variability."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "C$18.2B",
      reportSalesYoyLabel: "+1.8%",
      grossMarginLabel: "11.9%",
      grossMarginYoyLabel: "+40 bps",
      highlights: ["Sales and EBITDA improved in FY 2025.", "Cheese remains the largest segment.", "Operational efficiency programs continued."],
      news: buildNews("Saputo", [
        {
          title: "Saputo Inc. Fiscal 2025 Fourth Quarter and Fiscal Year Results",
          date: "2025-06-05",
          url: "https://www.saputo.com/en/investors"
        },
        {
          title: "Saputo Inc. Fiscal 2025 Third Quarter Results",
          date: "2025-02-06",
          url: "https://www.saputo.com/en/investors"
        }
      ]),
      sources: [
        { label: "Saputo Investor Relations", url: "https://www.saputo.com/en/investors" },
        { label: "Saputo Market Cap", url: "https://companiesmarketcap.com/saputo/marketcap/" },
        { label: "Saputo Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=saputo" }
      ]
    }
  }),
  sup({
    id: "general-mills",
    name: "General Mills",
    ticker: "GIS",
    market: "Packaged Food",
    logoUrl: "assets/logos/general-mills.svg",
    internal: {
      sales: 823000000,
      salesYoy: 1.2,
      margin: 207000000,
      marginYoy: 0.5,
      inflight: 26600000,
      tonnage: 126700,
      tonnageYoy: 0.9,
      aic: 3.47,
      aicYoy: 0.9,
      aip: 3.71,
      aipYoy: -1.0,
      serviceLevel: 94.0,
      serviceYoy: -0.3,
      summary: ["Moderate growth with stable margin expansion.", "Service remains dependable with limited variance.", "Inflight cost request is moderate and targeted."],
      itemsListed: 336,
      controlBrandItems: 88,
      nationalBrandItems: 248,
      topBrands: [
        { name: "Cheerios", pct: 11.4, sales: 254000000, yoy: 1.7, topSku: "Honey Nut Cheerios 18oz" },
        { name: "Betty Crocker", pct: 9.6, sales: 214000000, yoy: 1.3, topSku: "Brownie Mix 18.4oz" },
        { name: "Nature Valley", pct: 8.7, sales: 194000000, yoy: 1.1, topSku: "Crunchy Oats 'n Honey" },
        { name: "Pillsbury", pct: 7.9, sales: 176000000, yoy: 0.8, topSku: "Crescent Rolls 8ct" },
        { name: "Blue Buffalo", pct: 7.1, sales: 158000000, yoy: 2.0, topSku: "Life Protection 15lb" }
      ],
      categories: [
        { category: "Cereal", supplierSales: 579000000, supplierPct: 26.0, categorySales: 5100000000, categoryPct: 11.4 },
        { category: "Baking", supplierSales: 468000000, supplierPct: 21.0, categorySales: 4400000000, categoryPct: 10.6 },
        { category: "Snacks", supplierSales: 379000000, supplierPct: 17.0, categorySales: 9400000000, categoryPct: 4.0 },
        { category: "Meal Solutions", supplierSales: 401000000, supplierPct: 18.0, categorySales: 5000000000, categoryPct: 8.0 },
        { category: "Pet", supplierSales: 401000000, supplierPct: 18.0, categorySales: 4300000000, categoryPct: 9.3 }
      ],
      commodities: [
        { commodity: "Oats", portion: 25, yoy: 2.4, qoq: 0.8 },
        { commodity: "Wheat", portion: 22, yoy: 1.6, qoq: 0.5 },
        { commodity: "Sugar", portion: 20, yoy: 3.0, qoq: 1.0 },
        { commodity: "Dairy", portion: 18, yoy: -0.9, qoq: -0.2 },
        { commodity: "Packaging", portion: 15, yoy: -1.7, qoq: -0.4 }
      ],
      inflightRows: [{ date: "2026-06-10", topImpactedCategory: "Cereal", sourcingLead: "Alex Rivera", proposed: 7400000, justified: 5200000, proposedPct: 2.3, justifiedPct: 1.6 }],
      historyRows: [
        { date: "2025-02-01", proposed: 6100000, justified: 4300000, accepted: 4020000, proposedPct: 1.9, justifiedPct: 1.3, acceptedPct: 1.2 },
        { date: "2025-05-01", proposed: 5700000, justified: 4000000, accepted: 3750000, proposedPct: 1.8, justifiedPct: 1.3, acceptedPct: 1.2 },
        { date: "2025-08-01", proposed: 6900000, justified: 4900000, accepted: 4570000, proposedPct: 2.1, justifiedPct: 1.5, acceptedPct: 1.4 },
        { date: "2025-11-01", proposed: 6500000, justified: 4600000, accepted: 4300000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 }
      ]
    },
    external: {
      marketCapLabel: "$39.40B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 6.0,
      stockPriceLabel: "$66.88",
      stockPriceYoy: 6.2,
      summary: ["General Mills is balancing volume discipline with margin protection.", "Core categories remain stable with selective mix pressure.", "Input-cost variability remains manageable but still monitored."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "$19.7B",
      reportSalesYoyLabel: "+1.1%",
      grossMarginLabel: "34.8%",
      grossMarginYoyLabel: "+30 bps",
      highlights: ["Sales were modestly higher year over year.", "Margin expanded on productivity.", "Pet segment remained strategic."],
      news: buildNews("General Mills", [
        {
          title: "General Mills Reports Fiscal 2025 Fourth-quarter and Full-year Results",
          date: "2025-06-25",
          url: "https://www.generalmills.com/news/press-releases"
        },
        {
          title: "General Mills Reports Fiscal 2025 Third-quarter Results",
          date: "2025-03-19",
          url: "https://www.generalmills.com/news/press-releases"
        }
      ]),
      sources: [
        { label: "General Mills Investor Relations", url: "https://www.generalmills.com/news/press-releases" },
        { label: "General Mills Market Cap", url: "https://companiesmarketcap.com/general-mills/marketcap/" },
        { label: "General Mills Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=general+mills" }
      ]
    }
  }),
  sup({
    id: "kellanova",
    name: "Kellanova",
    ticker: "K",
    market: "Beverages & Snacks",
    logoUrl: "assets/logos/kellanova.svg",
    internal: {
      sales: 772000000,
      salesYoy: 1.6,
      margin: 188000000,
      marginYoy: 0.7,
      inflight: 22300000,
      tonnage: 101500,
      tonnageYoy: 1.0,
      aic: 3.39,
      aicYoy: 0.8,
      aip: 3.63,
      aipYoy: -0.9,
      serviceLevel: 93.7,
      serviceYoy: -0.4,
      summary: ["Topline growth is steady with slight margin expansion.", "Service metrics remain stable overall.", "Cost reset activity is focused and manageable."],
      itemsListed: 308,
      controlBrandItems: 77,
      nationalBrandItems: 231,
      topBrands: [
        { name: "Pringles", pct: 12.2, sales: 210000000, yoy: 2.1, topSku: "Original 5.2oz" },
        { name: "Special K", pct: 9.8, sales: 169000000, yoy: 1.2, topSku: "Red Berries 12oz" },
        { name: "Pop-Tarts", pct: 8.7, sales: 150000000, yoy: 1.5, topSku: "Strawberry 8ct" },
        { name: "Cheez-It", pct: 8.1, sales: 139000000, yoy: 2.0, topSku: "Original 12.4oz" },
        { name: "Eggo", pct: 6.3, sales: 108000000, yoy: 0.9, topSku: "Homestyle Waffles 10ct" }
      ],
      categories: [
        { category: "Snacks", supplierSales: 688000000, supplierPct: 40.0, categorySales: 9400000000, categoryPct: 7.3 },
        { category: "Cereal", supplierSales: 413000000, supplierPct: 24.0, categorySales: 5100000000, categoryPct: 8.1 },
        { category: "Frozen Breakfast", supplierSales: 241000000, supplierPct: 14.0, categorySales: 2800000000, categoryPct: 8.6 },
        { category: "Bars", supplierSales: 224000000, supplierPct: 13.0, categorySales: 3500000000, categoryPct: 6.4 },
        { category: "Other", supplierSales: 154000000, supplierPct: 9.0, categorySales: 2200000000, categoryPct: 7.0 }
      ],
      commodities: [
        { commodity: "Corn", portion: 26, yoy: 2.0, qoq: 0.7 },
        { commodity: "Wheat", portion: 23, yoy: 1.5, qoq: 0.5 },
        { commodity: "Palm Oil", portion: 19, yoy: 3.2, qoq: 1.1 },
        { commodity: "Sugar", portion: 17, yoy: 2.8, qoq: 0.9 },
        { commodity: "Packaging", portion: 15, yoy: -1.5, qoq: -0.4 }
      ],
      inflightRows: [{ date: "2026-06-18", topImpactedCategory: "Snacks", sourcingLead: "Sam Bennett", proposed: 6900000, justified: 4800000, proposedPct: 2.5, justifiedPct: 1.7 }],
      historyRows: [
        { date: "2025-02-01", proposed: 5600000, justified: 3900000, accepted: 3650000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 },
        { date: "2025-05-01", proposed: 5300000, justified: 3700000, accepted: 3470000, proposedPct: 1.9, justifiedPct: 1.3, acceptedPct: 1.2 },
        { date: "2025-08-01", proposed: 6400000, justified: 4500000, accepted: 4200000, proposedPct: 2.3, justifiedPct: 1.6, acceptedPct: 1.5 },
        { date: "2025-11-01", proposed: 6100000, justified: 4300000, accepted: 4010000, proposedPct: 2.2, justifiedPct: 1.5, acceptedPct: 1.4 }
      ]
    },
    external: {
      marketCapLabel: "$21.60B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 8.2,
      stockPriceLabel: "$63.80",
      stockPriceYoy: 8.6,
      summary: ["Kellanova is sustaining steady growth across key snack brands.", "Margin progression remains linked to mix and productivity.", "Execution focus remains on global snack expansion."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "$13.6B",
      reportSalesYoyLabel: "+1.6%",
      grossMarginLabel: "35.2%",
      grossMarginYoyLabel: "+35 bps",
      highlights: ["Snack-led growth continues.", "Margins improved modestly.", "International expansion remains a focus."],
      news: buildNews("Kellanova", [
        {
          title: "Kellanova Reports Third Quarter 2025 Results and Updates 2025 Outlook",
          date: "2025-11-06",
          url: "https://investor.kellanova.com/news-events/news-releases"
        }
      ]),
      sources: [
        { label: "Kellanova Investor Relations", url: "https://investor.kellanova.com" },
        { label: "Kellanova Market Cap", url: "https://companiesmarketcap.com/page/search/?q=kellanova" },
        { label: "Kellanova Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=kellanova" }
      ]
    }
  }),
  sup({
    id: "coca-cola",
    name: "Coca-Cola",
    ticker: "KO",
    market: "Beverages & Snacks",
    logoUrl: "assets/logos/coca-cola-company.svg",
    internal: {
      sales: 876000000,
      salesYoy: 2.8,
      margin: 238000000,
      marginYoy: 1.0,
      inflight: 33200000,
      tonnage: 148900,
      tonnageYoy: 1.7,
      aic: 3.52,
      aicYoy: 1.0,
      aip: 3.87,
      aipYoy: -1.3,
      serviceLevel: 94.4,
      serviceYoy: -0.3,
      summary: ["Healthy sales growth with positive margin movement.", "Service remains strong across core beverage formats.", "Inflight request is targeted to one large category."],
      itemsListed: 389,
      controlBrandItems: 95,
      nationalBrandItems: 294,
      topBrands: [
        { name: "Coca-Cola", pct: 14.1, sales: 389000000, yoy: 3.0, topSku: "Coke Zero 12-pack" },
        { name: "Sprite", pct: 10.6, sales: 293000000, yoy: 2.4, topSku: "Sprite Lemon-Lime 2L" },
        { name: "Fanta", pct: 8.7, sales: 240000000, yoy: 2.1, topSku: "Fanta Orange 12-pack" },
        { name: "Dasani", pct: 7.2, sales: 199000000, yoy: 1.8, topSku: "Dasani Water 24-pack" },
        { name: "Minute Maid", pct: 6.1, sales: 168000000, yoy: 1.2, topSku: "Orange Juice 52oz" }
      ],
      categories: [
        { category: "Carbonated Soft Drinks", supplierSales: 1104000000, supplierPct: 40.0, categorySales: 12500000000, categoryPct: 8.8 },
        { category: "Water", supplierSales: 552000000, supplierPct: 20.0, categorySales: 3900000000, categoryPct: 14.2 },
        { category: "Juice", supplierSales: 414000000, supplierPct: 15.0, categorySales: 3600000000, categoryPct: 11.5 },
        { category: "Sports Drinks", supplierSales: 386000000, supplierPct: 14.0, categorySales: 3000000000, categoryPct: 12.9 },
        { category: "Other", supplierSales: 304000000, supplierPct: 11.0, categorySales: 2800000000, categoryPct: 10.9 }
      ],
      commodities: [
        { commodity: "Sugar", portion: 31, yoy: 4.2, qoq: 1.4 },
        { commodity: "Aluminum", portion: 24, yoy: 3.1, qoq: 1.0 },
        { commodity: "PET Resin", portion: 19, yoy: -1.8, qoq: -0.5 },
        { commodity: "Citrus", portion: 14, yoy: 2.3, qoq: 0.8 },
        { commodity: "Energy", portion: 12, yoy: 2.0, qoq: 0.7 }
      ],
      inflightRows: [{ date: "2026-06-30", topImpactedCategory: "Carbonated Soft Drinks", sourcingLead: "Drew Lawson", proposed: 11100000, justified: 7900000, proposedPct: 2.6, justifiedPct: 1.9 }],
      historyRows: [
        { date: "2025-02-01", proposed: 9100000, justified: 6500000, accepted: 6120000, proposedPct: 2.1, justifiedPct: 1.5, acceptedPct: 1.4 },
        { date: "2025-05-01", proposed: 8600000, justified: 6100000, accepted: 5750000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 },
        { date: "2025-08-01", proposed: 9800000, justified: 7000000, accepted: 6580000, proposedPct: 2.3, justifiedPct: 1.6, acceptedPct: 1.5 },
        { date: "2025-11-01", proposed: 9500000, justified: 6800000, accepted: 6390000, proposedPct: 2.2, justifiedPct: 1.6, acceptedPct: 1.5 }
      ]
    },
    external: {
      marketCapLabel: "$303.10B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 13.2,
      stockPriceLabel: "$71.94",
      stockPriceYoy: 13.6,
      summary: ["Coca-Cola continues to show resilient growth and strong profitability.", "Pricing and mix remain supportive despite normalized volumes in some markets.", "Foreign exchange and commodity trends remain key watchpoints."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "$46.8B",
      reportSalesYoyLabel: "+3.2%",
      grossMarginLabel: "60.1%",
      grossMarginYoyLabel: "+50 bps",
      highlights: ["Global brand portfolio remains strong.", "Margin profile remains best-in-class.", "Cash generation supports continued reinvestment."],
      news: buildNews("Coca-Cola", [
        {
          title: "Coca-Cola fourth-quarter revenue tops expectations",
          date: "2025-02-11",
          url: "https://news.google.com/search?q=Coca-Cola+earnings+inflation+pricing"
        },
        {
          title: "Coca-Cola reports fourth quarter and full year 2025 results",
          date: "2026-02-10",
          url: "https://investors.coca-colacompany.com/news-events/press-releases"
        }
      ]),
      sources: [
        { label: "Coca-Cola Investor Relations", url: "https://investors.coca-colacompany.com" },
        { label: "Coca-Cola Market Cap", url: "https://companiesmarketcap.com/coca-cola/marketcap/" },
        { label: "Coca-Cola Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=coca-cola" }
      ]
    }
  }),
  sup({
    id: "unilever",
    name: "Unilever",
    ticker: "UL",
    market: "Household & Personal Care",
    logoUrl: "assets/logos/unilever.svg",
    internal: {
      sales: 847000000,
      salesYoy: 2.0,
      margin: 219000000,
      marginYoy: 0.9,
      inflight: 30100000,
      tonnage: 137400,
      tonnageYoy: 1.3,
      aic: 3.42,
      aicYoy: 0.9,
      aip: 3.73,
      aipYoy: -1.2,
      serviceLevel: 94.2,
      serviceYoy: -0.3,
      summary: ["Balanced growth profile with modest margin expansion.", "Service metrics remain stable with slight YoY drift.", "Inflight cost pressure is manageable and concentrated."],
      itemsListed: 372,
      controlBrandItems: 90,
      nationalBrandItems: 282,
      topBrands: [
        { name: "Dove", pct: 12.1, sales: 299000000, yoy: 2.2, topSku: "Dove Beauty Bar 6-pack" },
        { name: "Hellmann's", pct: 9.7, sales: 240000000, yoy: 1.8, topSku: "Real Mayonnaise 30oz" },
        { name: "Knorr", pct: 8.8, sales: 217000000, yoy: 1.6, topSku: "Chicken Stock Cubes" },
        { name: "Ben & Jerry's", pct: 7.1, sales: 175000000, yoy: 1.2, topSku: "Half Baked Pint" },
        { name: "Tresemme", pct: 6.3, sales: 156000000, yoy: 1.4, topSku: "Shampoo 28oz" }
      ],
      categories: [
        { category: "Personal Care", supplierSales: 889000000, supplierPct: 36.0, categorySales: 7800000000, categoryPct: 11.4 },
        { category: "Home Care", supplierSales: 568000000, supplierPct: 23.0, categorySales: 5200000000, categoryPct: 10.9 },
        { category: "Nutrition", supplierSales: 519000000, supplierPct: 21.0, categorySales: 6300000000, categoryPct: 8.2 },
        { category: "Ice Cream", supplierSales: 321000000, supplierPct: 13.0, categorySales: 3700000000, categoryPct: 8.7 },
        { category: "Other", supplierSales: 173000000, supplierPct: 7.0, categorySales: 2400000000, categoryPct: 7.2 }
      ],
      commodities: [
        { commodity: "Palm Oil", portion: 27, yoy: 3.1, qoq: 1.0 },
        { commodity: "Tea", portion: 21, yoy: 1.9, qoq: 0.6 },
        { commodity: "Dairy", portion: 19, yoy: -0.8, qoq: -0.2 },
        { commodity: "Fragrance", portion: 17, yoy: 1.4, qoq: 0.5 },
        { commodity: "Packaging", portion: 16, yoy: -1.6, qoq: -0.4 }
      ],
      inflightRows: [{ date: "2026-06-25", topImpactedCategory: "Personal Care", sourcingLead: "Morgan Ellis", proposed: 9800000, justified: 7000000, proposedPct: 2.5, justifiedPct: 1.8 }],
      historyRows: [
        { date: "2025-02-01", proposed: 8100000, justified: 5800000, accepted: 5440000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 },
        { date: "2025-05-01", proposed: 7600000, justified: 5400000, accepted: 5070000, proposedPct: 1.9, justifiedPct: 1.3, acceptedPct: 1.2 },
        { date: "2025-08-01", proposed: 9000000, justified: 6400000, accepted: 6000000, proposedPct: 2.2, justifiedPct: 1.6, acceptedPct: 1.5 },
        { date: "2025-11-01", proposed: 8600000, justified: 6100000, accepted: 5710000, proposedPct: 2.1, justifiedPct: 1.5, acceptedPct: 1.4 }
      ]
    },
    external: {
      marketCapLabel: "$142.30B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 7.1,
      stockPriceLabel: "$58.40",
      stockPriceYoy: 7.4,
      summary: ["Unilever remains on a steady growth and margin path.", "Portfolio simplification and productivity actions are supporting execution.", "Consumer trade-down pressure in select markets remains a risk."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "EUR 61.2B",
      reportSalesYoyLabel: "+2.1%",
      grossMarginLabel: "44.0%",
      grossMarginYoyLabel: "+45 bps",
      highlights: ["Broad-based growth across core segments.", "Margin recovery continued.", "Capital discipline remained consistent."],
      news: buildNews("Unilever", [
        {
          title: "Unilever Q3 2025 Trading Statement",
          date: "2025-10-23",
          url: "https://www.investegate.co.uk/announcement/rns/unilever--ulvr/q3-2025-trading-statement/8607229"
        },
        {
          title: "Unilever latest results and presentations",
          date: "2026-02-12",
          url: "https://www.unilever.com/investors/"
        }
      ]),
      sources: [
        { label: "Unilever Investor Relations", url: "https://www.unilever.com/investors/" },
        { label: "Unilever Market Cap", url: "https://companiesmarketcap.com/unilever/marketcap/" },
        { label: "Unilever Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=unilever" }
      ]
    }
  }),
  sup({
    id: "hershey",
    name: "Hershey",
    ticker: "HSY",
    market: "Packaged Food",
    logoUrl: "assets/logos/hershey.svg",
    internal: {
      sales: 792000000,
      salesYoy: 1.7,
      margin: 211000000,
      marginYoy: 0.6,
      inflight: 21400000,
      tonnage: 96500,
      tonnageYoy: 1.1,
      aic: 3.58,
      aicYoy: 1.2,
      aip: 3.92,
      aipYoy: -1.1,
      serviceLevel: 93.6,
      serviceYoy: -0.4,
      summary: ["Confectionery sales remain resilient with modest margin expansion.", "Service is stable, supporting seasonal sell-through execution.", "Current cost requests are focused and commercially manageable."],
      itemsListed: 286,
      controlBrandItems: 69,
      nationalBrandItems: 217,
      topBrands: [
        { name: "Reese's", pct: 16.4, sales: 0, yoy: 2.9, topSku: "Reese's Cups King Size" },
        { name: "Hershey's", pct: 12.1, sales: 0, yoy: 1.8, topSku: "Milk Chocolate Bar 1.55oz" },
        { name: "Kit Kat US", pct: 9.2, sales: 0, yoy: 2.1, topSku: "Kit Kat Standard Bar" },
        { name: "Kisses", pct: 7.7, sales: 0, yoy: 1.5, topSku: "Kisses Milk Chocolate" },
        { name: "Twizzlers", pct: 6.0, sales: 0, yoy: 1.2, topSku: "Strawberry Twists 16oz" }
      ],
      categories: [
        { category: "Chocolate", supplierSales: 412000000, supplierPct: 52.0, categorySales: 6300000000, categoryPct: 6.5 },
        { category: "Seasonal", supplierSales: 135000000, supplierPct: 17.0, categorySales: 2200000000, categoryPct: 6.1 },
        { category: "Candy", supplierSales: 111000000, supplierPct: 14.0, categorySales: 4100000000, categoryPct: 2.7 },
        { category: "Snacking", supplierSales: 87000000, supplierPct: 11.0, categorySales: 3900000000, categoryPct: 2.2 },
        { category: "Other", supplierSales: 47000000, supplierPct: 6.0, categorySales: 1600000000, categoryPct: 2.9 }
      ],
      commodities: [
        { commodity: "Cocoa", portion: 34, yoy: 16.2, qoq: 3.9 },
        { commodity: "Sugar", portion: 24, yoy: 4.4, qoq: 1.2 },
        { commodity: "Dairy", portion: 19, yoy: -0.9, qoq: -0.2 },
        { commodity: "Packaging", portion: 14, yoy: -1.6, qoq: -0.4 },
        { commodity: "Nuts", portion: 9, yoy: 2.7, qoq: 0.8 }
      ],
      inflightRows: [{ date: "2026-07-03", topImpactedCategory: "Chocolate", sourcingLead: "Jamie Monroe", proposed: 7600000, justified: 5400000, proposedPct: 2.7, justifiedPct: 1.9 }],
      historyRows: [
        { date: "2025-02-01", proposed: 5900000, justified: 4200000, accepted: 3910000, proposedPct: 2.1, justifiedPct: 1.5, acceptedPct: 1.4 },
        { date: "2025-05-01", proposed: 5500000, justified: 3900000, accepted: 3620000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 },
        { date: "2025-08-01", proposed: 6700000, justified: 4800000, accepted: 4470000, proposedPct: 2.4, justifiedPct: 1.7, acceptedPct: 1.6 },
        { date: "2025-11-01", proposed: 6300000, justified: 4500000, accepted: 4180000, proposedPct: 2.3, justifiedPct: 1.6, acceptedPct: 1.5 }
      ]
    },
    external: {
      marketCapLabel: "$83.40B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 8.4,
      stockPriceLabel: "$205.10",
      stockPriceYoy: 8.1,
      summary: ["Hershey remains profitable with stable category demand.", "Cocoa inflation continues to pressure near-term cost structure.", "Brand strength supports pricing resilience but mix remains critical."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "$11.4B",
      reportSalesYoyLabel: "+1.8%",
      grossMarginLabel: "43.1%",
      grossMarginYoyLabel: "-20 bps",
      highlights: ["Confectionery remained the core growth contributor.", "Margin held despite elevated cocoa cost.", "Promotional intensity stayed disciplined."],
      news: buildNews("Hershey", [
        { title: "Hershey forecasts annual profit below estimates on weak demand, high cocoa prices", date: "2025-02-06", url: "https://news.google.com/search?q=Hershey+annual+profit+cocoa+prices" },
        { title: "Hershey Q4 earnings call materials", date: "2026-02-12", url: "https://investors.thehersheycompany.com/" }
      ]),
      sources: [
        { label: "Hershey Investor Relations", url: "https://investors.thehersheycompany.com/" },
        { label: "Hershey Market Cap", url: "https://companiesmarketcap.com/page/search/?q=hershey" },
        { label: "Hershey Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=hershey" }
      ]
    }
  }),
  sup({
    id: "lindt",
    name: "Lindt",
    ticker: "LISN.SW",
    market: "Packaged Food",
    logoUrl: "assets/logos/lindt.svg",
    internal: {
      sales: 688000000,
      salesYoy: 2.3,
      margin: 182000000,
      marginYoy: 0.7,
      inflight: 18600000,
      tonnage: 74200,
      tonnageYoy: 1.0,
      aic: 3.71,
      aicYoy: 1.4,
      aip: 4.08,
      aipYoy: -1.2,
      serviceLevel: 93.0,
      serviceYoy: -0.5,
      summary: ["Premium chocolate mix supports topline stability.", "Service remains consistent during seasonal peaks.", "Cost reset requests reflect cocoa and dairy pressure."],
      itemsListed: 243,
      controlBrandItems: 58,
      nationalBrandItems: 185,
      topBrands: [
        { name: "Lindt Excellence", pct: 14.3, sales: 0, yoy: 2.5, topSku: "70% Cocoa Dark 100g" },
        { name: "Lindor", pct: 12.9, sales: 0, yoy: 2.2, topSku: "Lindor Milk Truffles Bag" },
        { name: "Ghirardelli", pct: 8.8, sales: 0, yoy: 1.7, topSku: "Intense Dark 72%" },
        { name: "Russell Stover", pct: 7.1, sales: 0, yoy: 1.0, topSku: "Assorted Chocolates Box" },
        { name: "Caffarel", pct: 5.2, sales: 0, yoy: 1.3, topSku: "Gianduja Bar" }
      ],
      categories: [
        { category: "Premium Chocolate", supplierSales: 365000000, supplierPct: 53.0, categorySales: 5800000000, categoryPct: 6.3 },
        { category: "Seasonal Gifting", supplierSales: 165000000, supplierPct: 24.0, categorySales: 2500000000, categoryPct: 6.6 },
        { category: "Confectionery", supplierSales: 89000000, supplierPct: 13.0, categorySales: 5300000000, categoryPct: 1.7 },
        { category: "Baking Chocolate", supplierSales: 48000000, supplierPct: 7.0, categorySales: 1700000000, categoryPct: 2.8 },
        { category: "Other", supplierSales: 21000000, supplierPct: 3.0, categorySales: 1200000000, categoryPct: 1.8 }
      ],
      commodities: [
        { commodity: "Cocoa", portion: 38, yoy: 17.1, qoq: 4.1 },
        { commodity: "Sugar", portion: 23, yoy: 4.2, qoq: 1.3 },
        { commodity: "Dairy", portion: 18, yoy: -0.7, qoq: -0.1 },
        { commodity: "Packaging", portion: 13, yoy: -1.4, qoq: -0.4 },
        { commodity: "Nuts", portion: 8, yoy: 2.1, qoq: 0.6 }
      ],
      inflightRows: [{ date: "2026-06-29", topImpactedCategory: "Premium Chocolate", sourcingLead: "Hayden Cross", proposed: 6800000, justified: 4700000, proposedPct: 2.8, justifiedPct: 1.9 }],
      historyRows: [
        { date: "2025-02-01", proposed: 5200000, justified: 3600000, accepted: 3340000, proposedPct: 2.1, justifiedPct: 1.5, acceptedPct: 1.4 },
        { date: "2025-05-01", proposed: 4900000, justified: 3400000, accepted: 3160000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 },
        { date: "2025-08-01", proposed: 5900000, justified: 4100000, accepted: 3820000, proposedPct: 2.4, justifiedPct: 1.7, acceptedPct: 1.5 },
        { date: "2025-11-01", proposed: 5600000, justified: 3900000, accepted: 3620000, proposedPct: 2.3, justifiedPct: 1.6, acceptedPct: 1.5 }
      ]
    },
    external: {
      marketCapLabel: "$33.10B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 11.2,
      stockPriceLabel: "$122,500",
      stockPriceYoy: 11.0,
      summary: ["Lindt continues to deliver premium segment outperformance.", "Margin balance is tied to cocoa cost trajectory.", "Brand premiumization remains a structural advantage."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "CHF 5.5B",
      reportSalesYoyLabel: "+3.1%",
      grossMarginLabel: "45.8%",
      grossMarginYoyLabel: "+20 bps",
      highlights: ["Premium assortment maintained growth momentum.", "Mix remained favorable despite cost pressure.", "Seasonal execution was strong."],
      news: buildNews("Lindt", [
        { title: "Lindt sales growth holds as premium chocolate demand stays resilient", date: "2025-03-05", url: "https://news.google.com/search?q=Lindt+sales+growth+premium+chocolate" }
      ]),
      sources: [
        { label: "Lindt Investor Relations", url: "https://www.lindt-spruengli.com/investors/" },
        { label: "Lindt Market Cap", url: "https://companiesmarketcap.com/page/search/?q=lindt" },
        { label: "Lindt Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=lindt" }
      ]
    }
  }),
  sup({
    id: "loreal",
    name: "L'Oreal",
    ticker: "OR.PA",
    market: "Household & Personal Care",
    logoUrl: "assets/logos/loreal.svg",
    internal: {
      sales: 836000000,
      salesYoy: 2.4,
      margin: 229000000,
      marginYoy: 1.0,
      inflight: 20800000,
      tonnage: 88400,
      tonnageYoy: 1.4,
      aic: 3.29,
      aicYoy: 0.8,
      aip: 3.67,
      aipYoy: -1.0,
      serviceLevel: 94.3,
      serviceYoy: -0.2,
      summary: ["Beauty portfolio continues to drive steady growth.", "Service remains high with strong promotional readiness.", "Cost-change asks are selective and largely negotiable."],
      itemsListed: 354,
      controlBrandItems: 84,
      nationalBrandItems: 270,
      topBrands: [
        { name: "L'Oreal Paris", pct: 13.9, sales: 0, yoy: 2.8, topSku: "Elvive Shampoo 12.6oz" },
        { name: "Maybelline", pct: 10.4, sales: 0, yoy: 2.3, topSku: "Sky High Mascara" },
        { name: "La Roche-Posay", pct: 8.9, sales: 0, yoy: 2.5, topSku: "Cicaplast Baume B5" },
        { name: "Kiehl's", pct: 6.8, sales: 0, yoy: 1.7, topSku: "Ultra Facial Cream" },
        { name: "Garnier", pct: 6.1, sales: 0, yoy: 1.6, topSku: "Micellar Water 400ml" }
      ],
      categories: [
        { category: "Hair Care", supplierSales: 292000000, supplierPct: 34.9, categorySales: 5600000000, categoryPct: 5.2 },
        { category: "Skin Care", supplierSales: 251000000, supplierPct: 30.0, categorySales: 7000000000, categoryPct: 3.6 },
        { category: "Color Cosmetics", supplierSales: 151000000, supplierPct: 18.1, categorySales: 4900000000, categoryPct: 3.1 },
        { category: "Fragrance", supplierSales: 92000000, supplierPct: 11.0, categorySales: 4200000000, categoryPct: 2.2 },
        { category: "Other", supplierSales: 50000000, supplierPct: 6.0, categorySales: 2100000000, categoryPct: 2.4 }
      ],
      commodities: [
        { commodity: "Alcohols", portion: 26, yoy: 2.5, qoq: 0.8 },
        { commodity: "Fragrances", portion: 24, yoy: 1.8, qoq: 0.6 },
        { commodity: "Surfactants", portion: 20, yoy: 1.2, qoq: 0.4 },
        { commodity: "Packaging", portion: 18, yoy: -1.4, qoq: -0.4 },
        { commodity: "Actives", portion: 12, yoy: 2.1, qoq: 0.7 }
      ],
      inflightRows: [{ date: "2026-07-08", topImpactedCategory: "Hair Care", sourcingLead: "Parker Stone", proposed: 6200000, justified: 4300000, proposedPct: 2.1, justifiedPct: 1.5 }],
      historyRows: [
        { date: "2025-02-01", proposed: 4800000, justified: 3300000, accepted: 3090000, proposedPct: 1.7, justifiedPct: 1.2, acceptedPct: 1.1 },
        { date: "2025-05-01", proposed: 4500000, justified: 3100000, accepted: 2900000, proposedPct: 1.6, justifiedPct: 1.1, acceptedPct: 1.0 },
        { date: "2025-08-01", proposed: 5600000, justified: 3900000, accepted: 3640000, proposedPct: 2.0, justifiedPct: 1.4, acceptedPct: 1.3 },
        { date: "2025-11-01", proposed: 5300000, justified: 3700000, accepted: 3450000, proposedPct: 1.9, justifiedPct: 1.3, acceptedPct: 1.2 }
      ]
    },
    external: {
      marketCapLabel: "$256.70B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 12.6,
      stockPriceLabel: "$480.20",
      stockPriceYoy: 12.2,
      summary: ["L'Oreal continues to post broad-based category growth.", "Mix quality remains strong across premium and dermocosmetics.", "China recovery pace remains a key external variable."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "EUR 45.1B",
      reportSalesYoyLabel: "+4.2%",
      grossMarginLabel: "74.8%",
      grossMarginYoyLabel: "+35 bps",
      highlights: ["Dermocosmetics and premium beauty stayed strong.", "Margin quality remained high.", "Innovation cadence supported share gains."],
      news: buildNews("L'Oreal", [
        { title: "L'Oreal posts resilient sales as premium beauty demand holds", date: "2025-02-11", url: "https://news.google.com/search?q=Loreal+sales+premium+beauty" }
      ]),
      sources: [
        { label: "L'Oreal Investor Relations", url: "https://www.loreal-finance.com/en/" },
        { label: "L'Oreal Market Cap", url: "https://companiesmarketcap.com/page/search/?q=loreal" },
        { label: "L'Oreal Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=loreal" }
      ]
    }
  }),
  sup({
    id: "kenvue",
    name: "Kenvue",
    ticker: "KVUE",
    market: "Household & Personal Care",
    logoUrl: "assets/logos/kenvue.svg",
    internal: {
      sales: 764000000,
      salesYoy: 1.3,
      margin: 204000000,
      marginYoy: 0.5,
      inflight: 19700000,
      tonnage: 82500,
      tonnageYoy: 0.9,
      aic: 3.17,
      aicYoy: 0.7,
      aip: 3.46,
      aipYoy: -0.8,
      serviceLevel: 93.9,
      serviceYoy: -0.3,
      summary: ["Consumer health portfolio is stable with gradual top-line growth.", "Service remains near target across major SKUs.", "Cost proposals are moderate and linked to ingredient/packaging moves."],
      itemsListed: 319,
      controlBrandItems: 79,
      nationalBrandItems: 240,
      topBrands: [
        { name: "Tylenol", pct: 12.5, sales: 0, yoy: 1.9, topSku: "Tylenol Extra Strength 100ct" },
        { name: "Neutrogena", pct: 10.2, sales: 0, yoy: 1.5, topSku: "Hydro Boost Gel Cream" },
        { name: "Listerine", pct: 9.1, sales: 0, yoy: 1.4, topSku: "Cool Mint Mouthwash 1L" },
        { name: "Aveeno", pct: 7.3, sales: 0, yoy: 1.2, topSku: "Daily Moisturizing Lotion" },
        { name: "Band-Aid", pct: 6.2, sales: 0, yoy: 1.0, topSku: "Flexible Fabric 100ct" }
      ],
      categories: [
        { category: "OTC Pain Relief", supplierSales: 245000000, supplierPct: 32.1, categorySales: 4700000000, categoryPct: 5.2 },
        { category: "Skin Health", supplierSales: 191000000, supplierPct: 25.0, categorySales: 5400000000, categoryPct: 3.5 },
        { category: "Oral Care", supplierSales: 153000000, supplierPct: 20.0, categorySales: 4600000000, categoryPct: 3.3 },
        { category: "Wound Care", supplierSales: 107000000, supplierPct: 14.0, categorySales: 2500000000, categoryPct: 4.3 },
        { category: "Other", supplierSales: 68000000, supplierPct: 8.9, categorySales: 2000000000, categoryPct: 3.4 }
      ],
      commodities: [
        { commodity: "Active Pharma Ingredients", portion: 28, yoy: 2.2, qoq: 0.7 },
        { commodity: "Packaging", portion: 24, yoy: -1.3, qoq: -0.4 },
        { commodity: "Alcohols", portion: 20, yoy: 1.5, qoq: 0.5 },
        { commodity: "Surfactants", portion: 16, yoy: 1.1, qoq: 0.3 },
        { commodity: "Cellulose", portion: 12, yoy: 0.8, qoq: 0.2 }
      ],
      inflightRows: [{ date: "2026-06-26", topImpactedCategory: "OTC Pain Relief", sourcingLead: "Quinn Harper", proposed: 5900000, justified: 4100000, proposedPct: 2.0, justifiedPct: 1.4 }],
      historyRows: [
        { date: "2025-02-01", proposed: 4600000, justified: 3200000, accepted: 2990000, proposedPct: 1.6, justifiedPct: 1.1, acceptedPct: 1.0 },
        { date: "2025-05-01", proposed: 4300000, justified: 3000000, accepted: 2800000, proposedPct: 1.5, justifiedPct: 1.0, acceptedPct: 1.0 },
        { date: "2025-08-01", proposed: 5200000, justified: 3600000, accepted: 3360000, proposedPct: 1.8, justifiedPct: 1.2, acceptedPct: 1.2 },
        { date: "2025-11-01", proposed: 4900000, justified: 3400000, accepted: 3180000, proposedPct: 1.7, justifiedPct: 1.2, acceptedPct: 1.1 }
      ]
    },
    external: {
      marketCapLabel: "$39.80B",
      marketCapAsOf: "Feb 11, 2026",
      marketCapYoy: 6.5,
      stockPriceLabel: "$20.74",
      stockPriceYoy: 6.3,
      summary: ["Kenvue is maintaining steady growth across essential consumer-health categories.", "Margin trajectory is stable with ongoing productivity efforts.", "Competition in skin health and OTC remains the primary pressure point."],
      reportPeriod: "FY 2025",
      reportSalesLabel: "$15.8B",
      reportSalesYoyLabel: "+1.4%",
      grossMarginLabel: "57.3%",
      grossMarginYoyLabel: "+25 bps",
      highlights: ["Consumer health demand remained durable.", "Margin profile stayed stable.", "Portfolio investments focused on core brands."],
      news: buildNews("Kenvue", [
        { title: "Kenvue forecasts annual profit below estimates on cautious consumer spending", date: "2025-02-06", url: "https://news.google.com/search?q=Kenvue+annual+profit+forecast" },
        { title: "Kenvue investor relations updates", date: "2026-02-12", url: "https://www.kenvue.com/" }
      ]),
      sources: [
        { label: "Kenvue Investor Relations", url: "https://www.kenvue.com/" },
        { label: "Kenvue Market Cap", url: "https://companiesmarketcap.com/kenvue/marketcap/" },
        { label: "Kenvue Stock Price & 1Y Change", url: "https://companiesmarketcap.com/page/search/?q=kenvue" }
      ]
    }
  })
];

function applyInternalSalesRange() {
  const rangeValues = [
    596000000, 558000000, 521000000, 486000000, 452000000, 418000000, 384000000,
    349000000, 315000000, 281000000, 247000000, 213000000, 169000000, 123000000
  ];

  suppliers.forEach((supplier, index) => {
    const targetSales = rangeValues[index % rangeValues.length];
    const oldSales = supplier.internal.sales || targetSales;
    const oldMargin = supplier.internal.margin || Math.round(targetSales * 0.25);
    const marginRate = Math.min(0.36, Math.max(0.18, oldMargin / oldSales));
    supplier.internal.sales = targetSales;
    supplier.internal.margin = Math.round(targetSales * marginRate);
  });
}

function normalizeHistoryRowsInData() {
  suppliers.forEach((supplier) => {
    supplier.internal.historyRows = supplier.internal.historyRows.map((row) => {
      let accepted = row.accepted;
      if (accepted <= row.justified) {
        accepted = row.justified + Math.max(1, Math.round((row.proposed - row.justified) * 0.35));
      }
      if (accepted >= row.proposed) {
        accepted = row.proposed - Math.max(1, Math.round(row.proposed * 0.03));
      }
      if (accepted <= row.justified) {
        accepted = Math.min(row.proposed - 1, row.justified + 1);
      }
      return { ...row, accepted };
    });
  });
}

function normalizeInflightRange() {
  suppliers.forEach((supplier) => {
    supplier.internal.inflightRows = supplier.internal.inflightRows.map((row) => {
      const proposed = Math.max(1000000, Math.min(20000000, row.proposed));
      let justified = row.justified;
      if (justified >= proposed) justified = Math.round(proposed * 0.72);
      if (justified < 500000) justified = Math.round(proposed * 0.55);
      return { ...row, proposed, justified };
    });
    supplier.internal.inflight = supplier.internal.inflightRows.length ? supplier.internal.inflightRows[0].proposed : 1000000;
  });
}

function normalizeHistoryDatesAcrossYears() {
  const currentYear = new Date().getFullYear();
  const yearSequence = [currentYear - 4, currentYear - 3, currentYear - 2, currentYear - 1];
  suppliers.forEach((supplier) => {
    supplier.internal.historyRows = supplier.internal.historyRows.map((row, idx) => {
      const dateParts = String(row.date || "").split("-");
      const month = dateParts[1] || "06";
      const day = dateParts[2] || "01";
      const year = yearSequence[idx % yearSequence.length];
      return { ...row, date: `${year}-${month}-${day}` };
    });
  });
}

applyInternalSalesRange();
normalizeHistoryRowsInData();
normalizeInflightRange();
normalizeHistoryDatesAcrossYears();

const tableBody = document.querySelector("#supplier-table tbody");
const dashboardView = document.getElementById("dashboard-view");
const profileView = document.getElementById("profile-view");
const profileName = document.getElementById("profile-name");
const backBtn = document.getElementById("back-btn");
const internalPanel = document.getElementById("internal-panel");
const externalPanel = document.getElementById("external-panel");
const negotiationPanel = document.getElementById("negotiation-panel");
const toggleInternalBtn = document.getElementById("toggle-internal");
const toggleExternalBtn = document.getElementById("toggle-external");
const toggleNegotiationBtn = document.getElementById("toggle-negotiation");
const dashToggleSummaryBtn = document.getElementById("dash-toggle-summary");
const dashToggleDetailBtn = document.getElementById("dash-toggle-detail");
const dashToggleNegotiationsBtn = document.getElementById("dash-toggle-negotiations");
const dashToggleNewsBtn = document.getElementById("dash-toggle-news");
const dashboardSummaryView = document.getElementById("dashboard-summary-view");
const dashboardDetailView = document.getElementById("dashboard-detail-view");
const dashboardSearchInput = document.getElementById("dashboard-search");
const dashboardAiForm = document.getElementById("dashboard-ai-form");
const dashboardAiInput = document.getElementById("dashboard-ai-input");
const dashboardAiSubmit = document.getElementById("dashboard-ai-submit");
const dashboardAiAnswer = document.getElementById("dashboard-ai-answer");
const themeToggleBtn = document.getElementById("theme-toggle");
const profileQuickAiBar = document.getElementById("profile-quick-ai-bar");
const quickAiForm = document.getElementById("quick-ai-form");
const quickAiInput = document.getElementById("quick-ai-input");
const quickAiSubmit = document.getElementById("quick-ai-submit");
const quickAiAnswer = document.getElementById("quick-ai-answer");
const supplierAiForm = document.getElementById("supplier-ai-form");
const supplierAiInput = document.getElementById("supplier-ai-input");
const supplierAiSubmit = document.getElementById("supplier-ai-submit");
const supplierAiAnswer = document.getElementById("supplier-ai-answer");
const negotiationListView = document.getElementById("negotiation-list-view");
const negotiationWorkspaceView = document.getElementById("negotiation-workspace-view");
const openNewNegotiationBtn = document.getElementById("open-new-negotiation-btn");
const negotiationCreateBlock = document.getElementById("negotiation-create-block");
const negotiationNameInput = document.getElementById("negotiation-name-input");
const createNegotiationBtn = document.getElementById("create-negotiation-btn");
const negotiationListEl = document.getElementById("negotiation-list");
const backToNegotiationsBtn = document.getElementById("back-to-negotiations-btn");
const currentNegotiationTitle = document.getElementById("current-negotiation-title");
const commodityReviewFileInput = document.getElementById("commodity-review-file");
const supplierCommunicationFileInput = document.getElementById("supplier-communication-file");
const commodityReviewStatus = document.getElementById("commodity-review-status");
const supplierCommunicationStatus = document.getElementById("supplier-communication-status");

let sortState = { key: "sales", direction: "desc" };
let dashboardMode = "summary";
let dashboardTransitioning = false;
let profileTabTransitioning = false;
let searchTerm = "";
let currentProfileSupplier = null;
let currentNegotiation = null;
const THEME_STORAGE_KEY = "supplier-intel-theme";
const NEGOTIATION_STORAGE_KEY = "supplier-negotiations-v1";

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  if (!themeToggleBtn) return;
  themeToggleBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
  themeToggleBtn.setAttribute("aria-pressed", isLight ? "true" : "false");
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  applyTheme(savedTheme === "light" ? "light" : "dark");
  if (!themeToggleBtn) return;
  themeToggleBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

function loadNegotiationStore() {
  try {
    const raw = localStorage.getItem(NEGOTIATION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveNegotiationStore(store) {
  localStorage.setItem(NEGOTIATION_STORAGE_KEY, JSON.stringify(store));
}

function getSupplierNegotiations(supplierId) {
  const store = loadNegotiationStore();
  const list = store[supplierId];
  return Array.isArray(list) ? list : [];
}

function setSupplierNegotiations(supplierId, list) {
  const store = loadNegotiationStore();
  store[supplierId] = list;
  saveNegotiationStore(store);
}

function showNegotiationListView() {
  currentNegotiation = null;
  negotiationListView?.classList.add("active");
  negotiationWorkspaceView?.classList.remove("active");
  if (negotiationCreateBlock) negotiationCreateBlock.classList.add("hidden");
  renderNegotiationList();
}

function showNegotiationWorkspaceView(negotiation) {
  currentNegotiation = negotiation;
  negotiationListView?.classList.remove("active");
  negotiationWorkspaceView?.classList.add("active");
  if (currentNegotiationTitle) currentNegotiationTitle.textContent = negotiation?.name || "Negotiation Workspace";
  if (supplierAiInput) supplierAiInput.value = "";
  if (supplierAiAnswer) {
    const latest = negotiation?.latestAdvice;
    supplierAiAnswer.textContent = latest || "Ask a negotiation question to generate supplier-specific strategic guidance.";
  }
}

function renderNegotiationList() {
  if (!negotiationListEl || !currentProfileSupplier) return;
  const negotiations = getSupplierNegotiations(currentProfileSupplier.id);

  if (!negotiations.length) {
    negotiationListEl.innerHTML = `<p class="muted-text">No open negotiations for this supplier yet.</p>`;
    return;
  }

  negotiationListEl.innerHTML = negotiations
    .map(
      (n) => `
      <button class="negotiation-card" data-negotiation-id="${n.id}" type="button">
        <div class="negotiation-card-name">${n.name}</div>
        <div class="negotiation-card-meta">Opened ${new Date(n.createdAt).toLocaleDateString()} · Updated ${new Date(n.updatedAt).toLocaleDateString()}</div>
      </button>`
    )
    .join("");

  negotiationListEl.querySelectorAll(".negotiation-card").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.dataset.negotiationId;
      const selected = negotiations.find((x) => x.id === id);
      if (selected) showNegotiationWorkspaceView(selected);
    });
  });
}

function createNegotiation(name) {
  if (!currentProfileSupplier) return null;
  const trimmed = name.trim();
  if (!trimmed) return null;

  const negotiations = getSupplierNegotiations(currentProfileSupplier.id);
  const now = new Date().toISOString();
  const created = {
    id: `neg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name: trimmed,
    createdAt: now,
    updatedAt: now,
    latestAdvice: ""
  };
  setSupplierNegotiations(currentProfileSupplier.id, [created, ...negotiations]);
  return created;
}

function currency(value) {
  if (Math.abs(value) >= 1000000) {
    const sign = value < 0 ? "-" : "";
    return `${sign}$${(Math.abs(value) / 1000000).toFixed(1)}M`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 0
  }).format(value);
}

function moneyPlain(value) {
  if (Math.abs(value) >= 1000000) {
    const sign = value < 0 ? "-" : "";
    return `${sign}$${(Math.abs(value) / 1000000).toFixed(1)}M`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function numberCompact(value) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

function pct(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function yoyClass(value) {
  return value >= 0 ? "value-up" : "value-down";
}

function rowValue(supplier, key) {
  if (key === "name") return supplier.name;
  return supplier.internal[key];
}

function filteredSuppliers() {
  if (!searchTerm.trim()) return suppliers;
  const term = searchTerm.toLowerCase();
  return suppliers.filter((supplier) => supplier.name.toLowerCase().includes(term) || supplier.market.toLowerCase().includes(term));
}

function allNegotiations() {
  const store = loadNegotiationStore();
  const flat = [];
  Object.entries(store).forEach(([supplierId, items]) => {
    const supplier = suppliers.find((s) => s.id === supplierId);
    if (!Array.isArray(items)) return;
    items.forEach((item) => {
      flat.push({
        ...item,
        supplierId,
        supplierName: supplier?.name || supplierId
      });
    });
  });
  return flat.sort((a, b) => Date.parse(b.updatedAt || b.createdAt || 0) - Date.parse(a.updatedAt || a.createdAt || 0));
}

function allRecentNewsItems() {
  const news = [];
  suppliers.forEach((supplier) => {
    itemsWithinDays(supplier.external.news || [], 183, 50).forEach((item) => {
      news.push({
        supplierId: supplier.id,
        supplierName: supplier.name,
        market: supplier.market,
        title: item.title,
        url: item.url,
        date: item.date || "",
        summary: item.summary || ""
      });
    });
  });
  return sortByRecency(news);
}

function sortSuppliers() {
  const { key, direction } = sortState;
  const mod = direction === "asc" ? 1 : -1;
  suppliers.sort((a, b) => {
    const va = rowValue(a, key);
    const vb = rowValue(b, key);
    if (typeof va === "string") return va.localeCompare(vb) * mod;
    return (va - vb) * mod;
  });
}

function renderTable() {
  sortSuppliers();
  tableBody.innerHTML = "";
  const visibleSuppliers = filteredSuppliers();
  if (visibleSuppliers.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="6">No suppliers match your search.</td>`;
    tableBody.appendChild(tr);
    return;
  }
  visibleSuppliers.forEach((supplier, index) => {
    const tr = document.createElement("tr");
    tr.style.setProperty("--i", index.toString());
    tr.innerHTML = `
      <td><span class="row-link">${supplier.name}</span></td>
      <td>${currency(supplier.internal.sales)}</td>
      <td class="${yoyClass(supplier.internal.salesYoy)}">${pct(supplier.internal.salesYoy)}</td>
      <td>${currency(supplier.internal.margin)}</td>
      <td class="${yoyClass(supplier.internal.marginYoy)}">${pct(supplier.internal.marginYoy)}</td>
      <td>${currency(supplier.internal.inflight)}</td>
    `;
    tr.addEventListener("click", () => openProfile(supplier.id));
    tableBody.appendChild(tr);
  });
}

function renderDashboardDetail(sourceSuppliers) {
  const visibleSuppliers = sourceSuppliers ?? filteredSuppliers();
  if (visibleSuppliers.length === 0) {
    dashboardDetailView.innerHTML = `<section class="market-group"><h3>No Results</h3><div class="detail-grid"><article class="supplier-detail-tile"><div class="supplier-detail-name">No suppliers match your search.</div></article></div></section>`;
    return;
  }

  const renderTiles = (list) =>
    [...list]
      .sort((a, b) => b.internal.sales - a.internal.sales)
      .map((supplier, idx) => {
        const inflight = supplier.internal.inflightRows[0];
        return `
          <article class="supplier-detail-tile" data-id="${supplier.id}" style="--i:${idx}">
            <div class="supplier-detail-head">
              <div class="supplier-detail-name">${supplier.name}</div>
            </div>
            <div class="supplier-detail-metrics">
              <div class="mini-metric"><span class="mini-metric-label">Sales</span><span class="mini-metric-value">${currency(supplier.internal.sales)}</span><span class="mini-metric-delta ${yoyClass(supplier.internal.salesYoy)}">${pct(supplier.internal.salesYoy)} YoY</span></div>
              <div class="mini-metric"><span class="mini-metric-label">Margin</span><span class="mini-metric-value">${currency(supplier.internal.margin)}</span><span class="mini-metric-delta ${yoyClass(supplier.internal.marginYoy)}">${pct(supplier.internal.marginYoy)} YoY</span></div>
              <div class="mini-metric"><span class="mini-metric-label">Tonnage</span><span class="mini-metric-value">${numberCompact(supplier.internal.tonnage)} t</span><span class="mini-metric-delta ${yoyClass(supplier.internal.tonnageYoy)}">${pct(supplier.internal.tonnageYoy)} YoY</span></div>
              <div class="mini-metric"><span class="mini-metric-label">Service Level</span><span class="mini-metric-value">${supplier.internal.serviceLevel.toFixed(1)}%</span><span class="mini-metric-delta ${yoyClass(supplier.internal.serviceYoy)}">${pct(supplier.internal.serviceYoy)} YoY</span></div>
              <div class="mini-metric"><span class="mini-metric-label">AIP</span><span class="mini-metric-value">$${supplier.internal.aip.toFixed(2)}</span><span class="mini-metric-delta ${yoyClass(supplier.internal.aipYoy)}">${pct(supplier.internal.aipYoy)} YoY</span></div>
              <div class="mini-metric"><span class="mini-metric-label">AIC</span><span class="mini-metric-value">$${supplier.internal.aic.toFixed(2)}</span><span class="mini-metric-delta ${yoyClass(supplier.internal.aicYoy)}">${pct(supplier.internal.aicYoy)} YoY</span></div>
              <div class="mini-metric"><span class="mini-metric-label">Proposed $</span><span class="mini-metric-value">${inflight ? moneyPlain(inflight.proposed) : "-"}</span></div>
              <div class="mini-metric"><span class="mini-metric-label">Market Cap</span><span class="mini-metric-value">${supplier.external.marketCapLabel}</span></div>
            </div>
          </article>
        `;
      })
      .join("");

  const groups = visibleSuppliers.reduce((acc, supplier) => {
    if (!acc[supplier.market]) acc[supplier.market] = [];
    acc[supplier.market].push(supplier);
    return acc;
  }, {});
  dashboardDetailView.innerHTML = Object.entries(groups)
    .map(
      ([market, groupSuppliers]) => `
      <section class="market-group">
        <h3>${market}</h3>
        <div class="detail-grid">${renderTiles(groupSuppliers)}</div>
      </section>
    `
    )
    .join("");

  dashboardDetailView.querySelectorAll(".supplier-detail-tile").forEach((tile) => {
    tile.addEventListener("click", () => openProfile(tile.dataset.id));
  });
}

function renderNegotiationsDashboard() {
  const negotiations = allNegotiations();
  if (negotiations.length === 0) {
    dashboardDetailView.innerHTML = `<section class="market-group"><h3>Negotiations</h3><div class="detail-grid"><article class="supplier-detail-tile"><div class="supplier-detail-name">No negotiations created yet.</div></article></div></section>`;
    return;
  }

  dashboardDetailView.innerHTML = `
    <section class="market-group">
      <h3>All Negotiations</h3>
      <div class="detail-grid">
        ${negotiations
          .map(
            (n) => `
          <article class="supplier-detail-tile negotiation-summary-card" data-supplier-id="${n.supplierId}" data-negotiation-id="${n.id}">
            <div class="supplier-detail-name">${n.name}</div>
            <div class="supplier-detail-sub">${n.supplierName}</div>
            <div class="supplier-detail-tags"><span class="chip">Updated: ${new Date(n.updatedAt || n.createdAt).toLocaleDateString()}</span></div>
            <p class="section-intro">${(n.latestAdvice || "No advice generated yet.").slice(0, 220)}${(n.latestAdvice || "").length > 220 ? "..." : ""}</p>
            <button class="ghost-btn open-negotiation-btn" type="button">Open</button>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  `;

  dashboardDetailView.querySelectorAll(".open-negotiation-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const card = btn.closest(".negotiation-summary-card");
      if (!card) return;
      const supplierId = card.dataset.supplierId;
      const negotiationId = card.dataset.negotiationId;
      if (!supplierId || !negotiationId) return;
      openProfile(supplierId);
      setProfileTab("negotiation", { instant: true });
      const target = getSupplierNegotiations(supplierId).find((x) => x.id === negotiationId);
      if (target) showNegotiationWorkspaceView(target);
    });
  });
}

function renderNewsDashboard() {
  const newsItems = allRecentNewsItems().filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return `${item.title || ""} ${item.supplierName || ""} ${item.summary || ""}`.toLowerCase().includes(term);
  });

  const conciseSummary = (item) => {
    const text = String(item.summary || "").replace(/\s+/g, " ").trim();
    if (!text) return "No AI summary available.";
    if (text.length <= 140) return text;
    return `${text.slice(0, 137).trimEnd()}...`;
  };

  if (newsItems.length === 0) {
    dashboardDetailView.innerHTML = `<section class="market-group"><h3>News</h3><div class="detail-grid"><article class="supplier-detail-tile"><div class="supplier-detail-name">No recent news in the last 6 months.</div></article></div></section>`;
    return;
  }

  dashboardDetailView.innerHTML = `
    <section class="market-group">
      <h3>Consolidated Supplier News (Last 6 Months)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Supplier</th>
              <th>Story</th>
              <th>AI Summary</th>
            </tr>
          </thead>
          <tbody>
            ${newsItems
              .map(
                (item) => `
              <tr>
                <td>${item.date || "-"}</td>
                <td>${item.supplierName}</td>
                <td><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a></td>
                <td>${conciseSummary(item)}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function buildDashboardAiContext() {
  const sortedByInflight = [...suppliers].sort((a, b) => b.internal.inflight - a.internal.inflight).slice(0, 5);
  const sortedByMarginPressure = [...suppliers].sort((a, b) => a.internal.marginYoy - b.internal.marginYoy).slice(0, 5);
  return {
    supplierCount: suppliers.length,
    highestInflight: sortedByInflight.map((s) => ({
      name: s.name,
      inflight: s.internal.inflight,
      marginYoy: s.internal.marginYoy,
      serviceLevel: s.internal.serviceLevel
    })),
    marginPressure: sortedByMarginPressure.map((s) => ({
      name: s.name,
      marginYoy: s.internal.marginYoy,
      salesYoy: s.internal.salesYoy,
      inflight: s.internal.inflight
    }))
  };
}

function fallbackDashboardAiAnswer(question) {
  const q = question.toLowerCase();
  const topInflight = [...suppliers].sort((a, b) => b.internal.inflight - a.internal.inflight).slice(0, 3);
  if (/risk|margin|pressure|inflation|cost/.test(q)) {
    return `Top near-term risk concentration is in ${topInflight.map((s) => s.name).join(", ")} based on inflight proposals. Start with evidence-based cost bridge requests, sequence talks by exposure, and trade any price movement for service and phased timing protections.`;
  }
  if (/priorit|first|sequence|where/.test(q)) {
    return `Prioritize negotiations by inflight dollar exposure and deteriorating margin/service trends. Recommended first pass: ${topInflight
      .map((s) => `${s.name} (${moneyPlain(s.internal.inflight)})`)
      .join(", ")}.`;
  }
  return `Use a portfolio lens: segment suppliers by inflight exposure, margin trend, and service trend; apply tougher counter-positioning to highest-risk suppliers and reserve concessions for suppliers providing measurable continuity value.`;
}

async function askDashboardAI(question) {
  const context = buildDashboardAiContext();
  const endpoint = window.DASHBOARD_AI_ENDPOINT || "/api/dashboard-ai";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, context })
    });
    if (!response.ok) throw new Error(`Dashboard AI endpoint failed (${response.status})`);
    const data = await response.json();
    if (!data?.answer || typeof data.answer !== "string") throw new Error("Dashboard AI response missing `answer`.");
    return data.answer.trim();
  } catch {
    try {
      const apiKey = window.OPENAI_API_KEY;
      if (!apiKey) throw new Error("No OPENAI_API_KEY configured.");
      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          input: [
            {
              role: "system",
              content:
                "You are a senior grocery sourcing strategist. Provide concise portfolio-level negotiation guidance in 4-6 sentences."
            },
            {
              role: "user",
              content: `Dashboard context:\\n${JSON.stringify(context, null, 2)}\\n\\nQuestion:\\n${question}`
            }
          ]
        })
      });
      if (!response.ok) throw new Error("Direct OpenAI dashboard request failed.");
      const data = await response.json();
      if (data.output_text?.trim()) return data.output_text.trim();
    } catch {
      // fall through to deterministic fallback
    }
    return `${fallbackDashboardAiAnswer(question)}\n\nNote: Live AI endpoint unavailable, showing local strategic fallback.`;
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function setDashboardMode(mode, opts = {}) {
  if (dashboardTransitioning) return;
  if (!opts.instant && dashboardMode === mode) return;
  dashboardTransitioning = true;

  dashboardMode = mode;
  const showSummary = mode === "summary";
  const showNegotiations = mode === "negotiations";
  const showNews = mode === "news";
  dashToggleSummaryBtn.classList.toggle("active", mode === "summary");
  dashToggleDetailBtn.classList.toggle("active", mode === "detail");
  if (dashToggleNegotiationsBtn) dashToggleNegotiationsBtn.classList.toggle("active", showNegotiations);
  if (dashToggleNewsBtn) dashToggleNewsBtn.classList.toggle("active", showNews);

  if (opts.instant) {
    dashboardSummaryView.style.display = showSummary ? "block" : "none";
    dashboardDetailView.classList.toggle("active", !showSummary);
    if (!showSummary) {
      if (showNegotiations) renderNegotiationsDashboard();
      else if (showNews) renderNewsDashboard();
      else renderDashboardDetail();
    }
    dashboardTransitioning = false;
    return;
  }

  if (!showSummary) {
    if (showNegotiations) renderNegotiationsDashboard();
    else if (showNews) renderNewsDashboard();
    else renderDashboardDetail();
    dashboardSummaryView.classList.remove("mode-enter");
    dashboardSummaryView.classList.add("mode-exit");
    await wait(190);
    dashboardSummaryView.style.display = "none";
    dashboardSummaryView.classList.remove("mode-exit");
    dashboardDetailView.classList.add("active");
    dashboardDetailView.classList.remove("mode-exit");
    dashboardDetailView.classList.add("mode-enter");
    await wait(300);
    dashboardDetailView.classList.remove("mode-enter");
  } else {
    dashboardDetailView.classList.remove("mode-enter");
    dashboardDetailView.classList.add("mode-exit");
    await wait(180);
    dashboardDetailView.classList.remove("active");
    dashboardDetailView.classList.remove("mode-exit");
    dashboardSummaryView.style.display = "block";
    dashboardSummaryView.classList.add("mode-enter");
    await wait(240);
    dashboardSummaryView.classList.remove("mode-enter");
  }
  dashboardTransitioning = false;
}

function renderOperationalMetrics(elementId, metrics) {
  const root = document.getElementById(elementId);
  root.innerHTML = metrics
    .map((metric) => {
      let deltaClass = "";
      let deltaText = "";
      if (metric.deltaText) {
        deltaClass = metric.deltaText.trim().startsWith("-") ? "value-down" : "value-up";
        deltaText = `${metric.deltaText} ${metric.deltaLabel || ""}`;
      } else if (metric.delta !== undefined) {
        deltaClass = yoyClass(metric.delta);
        deltaText = `${pct(metric.delta)} ${metric.deltaLabel || ""}`;
      }
      return `
        <div class="op-metric">
          <p class="op-metric-label">${metric.label}</p>
          <p class="op-metric-value">${metric.value}</p>
          ${deltaText ? `<p class="op-metric-delta ${deltaClass}">${deltaText}</p>` : ""}
          ${metric.note ? `<p class="op-metric-note">${metric.note}</p>` : ""}
        </div>
      `;
    })
    .join("");
}

function renderBullets(elementId, items) {
  document.getElementById(elementId).innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

async function setProfileTab(tabName, opts = {}) {
  if (profileTabTransitioning) return;
  profileTabTransitioning = true;
  const panelsByTab = {
    internal: internalPanel,
    external: externalPanel,
    negotiation: negotiationPanel
  };
  const showPanel = panelsByTab[tabName] || internalPanel;
  const hidePanels = Object.values(panelsByTab).filter((panel) => panel && panel !== showPanel);

  toggleInternalBtn.classList.toggle("active", tabName === "internal");
  toggleExternalBtn.classList.toggle("active", tabName === "external");
  toggleNegotiationBtn.classList.toggle("active", tabName === "negotiation");
  if (profileQuickAiBar) {
    profileQuickAiBar.classList.toggle("hidden", tabName === "negotiation");
  }
  if (tabName === "negotiation" && negotiationListView?.classList.contains("active")) {
    renderNegotiationList();
  }

  if (opts.instant) {
    hidePanels.forEach((panel) => panel.classList.remove("active", "mode-enter", "mode-exit"));
    showPanel.classList.remove("mode-enter", "mode-exit");
    showPanel.classList.add("active");
    profileTabTransitioning = false;
    return;
  }

  hidePanels.forEach((panel) => {
    panel.classList.remove("mode-enter");
    panel.classList.add("mode-exit");
  });
  await wait(130);
  hidePanels.forEach((panel) => panel.classList.remove("active", "mode-exit"));

  showPanel.classList.add("active");
  showPanel.classList.remove("mode-exit");
  showPanel.classList.add("mode-enter");
  await wait(170);
  showPanel.classList.remove("mode-enter");
  profileTabTransitioning = false;
}

function renderProfileTiles(internal) {
  const root = document.getElementById("profile-tiles");
  root.innerHTML = `
    <div class="profile-tile">
      <div class="profile-tile-label">Items Listed</div>
      <div class="profile-tile-value">${numberCompact(internal.itemsListed)}</div>
    </div>
    <div class="profile-tile">
      <div class="profile-tile-label">Control Brand Items</div>
      <div class="profile-tile-value">${numberCompact(internal.controlBrandItems)}</div>
    </div>
    <div class="profile-tile">
      <div class="profile-tile-label">National Brand Items</div>
      <div class="profile-tile-value">${numberCompact(internal.nationalBrandItems)}</div>
    </div>
  `;
}

function buildNegotiationApproach(internal) {
  const topCategory = [...internal.categories].sort((a, b) => b.categoryPct - a.categoryPct)[0];
  const totalProposed = internal.historyRows.reduce((acc, row) => acc + row.proposed, 0);
  const totalAccepted = internal.historyRows.reduce((acc, row) => acc + row.accepted, 0);
  const acceptanceRate = totalProposed ? (totalAccepted / totalProposed) * 100 : 0;
  return [
    `Anchor discussions to documented cost drivers in ${topCategory.category}; this supplier holds ${topCategory.categoryPct.toFixed(1)}% of category sales and has leverage where alternatives are limited.`,
    `Use history-based guardrails: accepted dollars run at ${acceptanceRate.toFixed(1)}% of proposed over recent cycles, so target an initial counter below current ask while preserving continuity on high-service SKUs.`,
    `Trade for terms, not only price: tie any concession to service-level recovery (${internal.serviceLevel.toFixed(1)}%) and phased effective dates to protect margin timing.`
  ];
}

function buildReportHighlights(external) {
  const base = [
    `Latest reported sales (${external.reportPeriod}) were ${external.reportSalesLabel} (${external.reportSalesYoyLabel} YoY).`,
    `Gross margin was ${external.grossMarginLabel} (${external.grossMarginYoyLabel} YoY).`
  ];
  return [...base, ...(external.highlights || [])].slice(0, 5);
}

function buildExternalRisks(external) {
  if (external.risks && external.risks.length) return external.risks;
  return [
    `Volume sensitivity risk if demand remains soft while pricing normalizes from recent peaks.`,
    `Input-cost and FX volatility can pressure gross margin despite ongoing productivity programs.`,
    `Execution risk around sustaining ${external.grossMarginLabel} while defending market share.`
  ];
}

function buildExternalOpportunities(external) {
  if (external.opportunities && external.opportunities.length) return external.opportunities;
  return [
    `Mix and premiumization can support margin progression beyond the latest ${external.grossMarginLabel}.`,
    `Portfolio optimization and channel expansion can improve sales momentum from the current ${external.reportSalesYoyLabel} trajectory.`,
    `Productivity and procurement initiatives provide room to reinvest while protecting profit.`
  ];
}

function itemsWithinDays(items = [], days = 183, maxItems = 10) {
  const now = Date.now();
  return sortByRecency(items)
    .filter((item) => {
      const ts = toTimestamp(item.date);
      if (!ts) return false;
      return now - ts <= days * 24 * 60 * 60 * 1000;
    })
    .slice(0, maxItems);
}

function buildExternalEsgStories(supplier, external) {
  const profile = ESG_LIBRARY[supplier.id];
  if (profile && profile.stories && profile.stories.length) {
    const recentProfileStories = itemsWithinDays(profile.stories, 183, 5);
    if (recentProfileStories.length) return recentProfileStories;
  }
  if (external.esg && external.esg.length) {
    const recentExternalEsg = itemsWithinDays(external.esg, 183, 5);
    if (recentExternalEsg.length) return recentExternalEsg;
  }

  const esgFromNews = itemsWithinDays(external.news || [], 183, 20)
    .filter((item) => {
      const text = `${item.title || ""} ${item.summary || ""}`.toLowerCase();
      return ESG_KEYWORDS.some((keyword) => text.includes(keyword));
    })
    .slice(0, 5)
    .map((item) => ({ title: item.title, summary: item.summary || item.title, date: item.date, url: item.url }));

  if (esgFromNews.length) return esgFromNews;

  const latestSource = (external.sources || [])[0];
  if (!latestSource) return [];

  return [
    {
      title: "No ESG story in the last 6 months.",
      summary: `Monitor ${latestSource.label} for new disclosures and policy updates.`,
      date: "",
      url: latestSource.url
    }
  ];
}

function buildExternalEsgSummary(supplier, stories, external) {
  const profile = ESG_LIBRARY[supplier.id];
  if (profile && profile.summary) return profile.summary;
  if (external.esgSummary) return external.esgSummary;
  if (!stories.length) return `No major ESG issues are currently flagged for ${supplier.name} in the tracked sources.`;

  const recentStory = stories[0];
  const storyText = stories.map((item) => `${item.title || ""} ${item.summary || ""}`.toLowerCase()).join(" ");
  const issueTags = [];
  if (/(climate|carbon|emission|energy|water|waste|recycling|deforestation)/.test(storyText)) issueTags.push("environmental");
  if (/(labor|human rights|health|safety|nutrition|workforce|community)/.test(storyText)) issueTags.push("social");
  if (/(governance|board|compliance|regulatory|ethics|disclosure)/.test(storyText)) issueTags.push("governance");
  const issueText = issueTags.length ? issueTags.join(", ") : "cross-functional ESG";

  return `${supplier.name} is currently most exposed to ${issueText} issues based on recent disclosures and media coverage. The latest update (${recentStory.date || "recent"}) highlights ongoing mitigation and compliance actions, with details in the linked stories below.`;
}

function renderTopBrands(brands, totalSales) {
  const tbody = document.querySelector("#top-brands-table tbody");
  tbody.innerHTML = brands
    .map(
      (brand) => `
      <tr>
        <td>${brand.name}</td>
        <td>${brand.pct.toFixed(1)}%</td>
        <td>${moneyPlain((totalSales * brand.pct) / 100)}</td>
        <td class="${yoyClass(brand.yoy)}">${pct(brand.yoy)}</td>
        <td>${brand.topSku}</td>
      </tr>
    `
    )
    .join("");
  const totalCoverage = brands.reduce((sum, brand) => sum + brand.pct, 0);
  document.getElementById("top-brands-coverage").textContent = `Top 5 brands encompass ${totalCoverage.toFixed(1)}% of portfolio`;
}

function buildSupplierContext(supplier) {
  const internal = supplier.internal;
  const external = supplier.external;
  const latestInflight = internal.inflightRows?.[0];
  const topCategory = [...internal.categories].sort((a, b) => b.categoryPct - a.categoryPct)[0];
  const topCommodity = [...internal.commodities].sort((a, b) => Math.abs(b.yoy) - Math.abs(a.yoy))[0];

  return {
    supplier: supplier.name,
    market: supplier.market,
    sales: internal.sales,
    salesYoy: internal.salesYoy,
    margin: internal.margin,
    marginYoy: internal.marginYoy,
    serviceLevel: internal.serviceLevel,
    serviceYoy: internal.serviceYoy,
    inflightProposal: latestInflight
      ? {
          date: latestInflight.date,
          category: latestInflight.topImpactedCategory,
          proposed: latestInflight.proposed,
          justified: latestInflight.justified,
          proposedPct: latestInflight.proposedPct,
          justifiedPct: latestInflight.justifiedPct
        }
      : null,
    topCategory: topCategory
      ? {
          category: topCategory.category,
          supplierPct: topCategory.supplierPct,
          categoryPct: topCategory.categoryPct
        }
      : null,
    topCommodity: topCommodity
      ? {
          commodity: topCommodity.commodity,
          portion: topCommodity.portion,
          yoy: topCommodity.yoy,
          qoq: topCommodity.qoq
        }
      : null,
    externalSalesLabel: external.reportSalesLabel,
    externalSalesYoyLabel: external.reportSalesYoyLabel,
    grossMarginLabel: external.grossMarginLabel,
    grossMarginYoyLabel: external.grossMarginYoyLabel,
    risks: buildExternalRisks(external).slice(0, 3),
    opportunities: buildExternalOpportunities(external).slice(0, 3)
  };
}

function buildDashboardContextForSupplier(supplier) {
  const peers = suppliers
    .filter((x) => x.id !== supplier.id && x.market === supplier.market)
    .sort((a, b) => b.internal.sales - a.internal.sales)
    .slice(0, 4)
    .map((x) => ({
      name: x.name,
      sales: x.internal.sales,
      salesYoy: x.internal.salesYoy,
      marginYoy: x.internal.marginYoy,
      inflight: x.internal.inflight
    }));

  const supplierMedianService =
    [...suppliers]
      .map((x) => x.internal.serviceLevel)
      .sort((a, b) => a - b)
      .at(Math.floor(suppliers.length / 2)) || 0;

  return {
    peerSet: peers,
    supplierCount: suppliers.length,
    medianServiceLevel: supplierMedianService
  };
}

async function readUploadedFile(file) {
  if (!file) return { name: null, text: "", note: "No file provided." };
  const lower = file.name.toLowerCase();
  const isTextLike = /\.(txt|md|csv|json)$/i.test(lower) || file.type.startsWith("text/");

  if (!isTextLike) {
    return {
      name: file.name,
      text: "",
      note: "File attached but not text-readable in browser. Provide key excerpts in text for best results."
    };
  }

  const text = await file.text();
  return {
    name: file.name,
    text: text.slice(0, 18000),
    note: text.length > 18000 ? "File truncated to first 18k characters." : ""
  };
}

function fallbackSupplierAiAnswer(supplier, question) {
  const q = question.toLowerCase();
  const internal = supplier.internal;
  const topCategory = [...internal.categories].sort((a, b) => b.categoryPct - a.categoryPct)[0];
  const latestInflight = internal.inflightRows?.[0];

  if (/leverage|negotiat|counter|ask/.test(q)) {
    return `Near-term leverage is strongest where performance is mixed and asks are concentrated. For ${supplier.name}, service is ${internal.serviceLevel.toFixed(
      1
    )}% (${pct(internal.serviceYoy)} YoY), while current inflight proposal is ${latestInflight ? moneyPlain(latestInflight.proposed) : "n/a"}. Anchor to cost evidence and tie concessions to service recovery and phased timing.`;
  }

  if (/risk|margin|inflation|cost/.test(q)) {
    return `Primary margin risk is concentration in ${topCategory?.category || "core categories"} plus commodity volatility. Current profile: sales ${currency(
      internal.sales
    )} (${pct(internal.salesYoy)} YoY), margin ${currency(internal.margin)} (${pct(internal.marginYoy)} YoY). Focus on validating proposed cost drivers before accepting pass-through.`;
  }

  return `${supplier.name} profile indicates ${currency(internal.sales)} sales and ${currency(internal.margin)} margin with service at ${internal.serviceLevel.toFixed(
    1
  )}%. For this question, use the negotiation approach section plus inflight and history tables to set evidence-based counters and timing conditions.`;
}

async function askSupplierAI(question, commodityReviewFile, supplierCommunicationFile) {
  if (!currentProfileSupplier) throw new Error("No supplier selected.");
  const supplier = currentProfileSupplier;
  const commodityReview = await readUploadedFile(commodityReviewFile);
  const supplierCommunication = await readUploadedFile(supplierCommunicationFile);
  const payload = {
    question,
    supplierId: supplier.id,
    supplierName: supplier.name,
    context: buildSupplierContext(supplier),
    dashboardContext: buildDashboardContextForSupplier(supplier),
    uploadedDocuments: {
      commodityReview,
      supplierCommunication
    }
  };

  const endpoint = window.SUPPLIER_AI_ENDPOINT || "/api/negotiation-assistant";

  async function callOpenAIDirectly() {
    const apiKey = window.OPENAI_API_KEY;
    if (!apiKey) throw new Error("No OPENAI_API_KEY configured in browser.");
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content:
              "You are a senior grocery sourcing strategist. Provide negotiation advice that is specific, data-backed, and practical. Include: 1) recommended stance, 2) counter-arguments, 3) concessions to trade, 4) red lines, 5) next-step script."
          },
          {
            role: "user",
            content: `Supplier context:\\n${JSON.stringify(payload.context, null, 2)}\\n\\nDashboard context:\\n${JSON.stringify(
              payload.dashboardContext,
              null,
              2
            )}\\n\\nCommodity review (${commodityReview.name || "none"}):\\n${commodityReview.text || commodityReview.note}\\n\\nSupplier communication (${
              supplierCommunication.name || "none"
            }):\\n${supplierCommunication.text || supplierCommunication.note}\\n\\nQuestion:\\n${question}`
          }
        ]
      })
    });
    if (!response.ok) throw new Error(`OpenAI request failed (${response.status}).`);
    const data = await response.json();
    return data.output_text?.trim();
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`AI endpoint failed (${response.status})`);
    }
    const data = await response.json();
    if (!data?.answer || typeof data.answer !== "string") {
      throw new Error("AI endpoint response missing `answer`.");
    }
    return data.answer.trim();
  } catch (error) {
    try {
      const directAnswer = await callOpenAIDirectly();
      if (directAnswer) return directAnswer;
    } catch (openAiError) {
      // fall through to deterministic fallback
    }
    return `${fallbackSupplierAiAnswer(
      supplier,
      question
    )}\n\nUse uploaded docs to validate: challenge unsupported cost claims, request line-item evidence, and tie concessions to service + timing commitments.\n\nNote: Live AI endpoint unavailable, showing local strategic fallback.`;
  }
}

function openProfile(id) {
  const supplier = suppliers.find((x) => x.id === id);
  if (!supplier) return;
  currentProfileSupplier = supplier;

  profileName.textContent = `${supplier.name} - Supplier Profile`;
  document.title = `${supplier.name} - Supplier Profile`;
  if (supplierAiInput) {
    supplierAiInput.value = "";
    supplierAiInput.placeholder = `Ask AI negotiation strategy for ${supplier.name}...`;
  }
  if (supplierAiAnswer) {
    supplierAiAnswer.textContent = `Ask a negotiation question about ${supplier.name}. Upload commodity review and supplier communication files for stronger advice.`;
  }
  if (commodityReviewStatus) {
    commodityReviewStatus.textContent = "No file uploaded.";
  }
  if (supplierCommunicationStatus) {
    supplierCommunicationStatus.textContent = "No file uploaded.";
  }
  if (quickAiInput) {
    quickAiInput.value = "";
    quickAiInput.placeholder = `Ask a quick question about ${supplier.name}...`;
  }
  if (quickAiAnswer) {
    quickAiAnswer.textContent = `Ask a quick question about ${supplier.name}, or use Negotiation Assistant for document-aware strategy.`;
  }
  showNegotiationListView();

  const internalTopMetrics = [
    { label: "Sales", value: currency(supplier.internal.sales), delta: supplier.internal.salesYoy, deltaLabel: "YoY" },
    { label: "Margin", value: currency(supplier.internal.margin), delta: supplier.internal.marginYoy, deltaLabel: "YoY" },
    { label: "Tonnage", value: `${numberCompact(supplier.internal.tonnage)} t`, delta: supplier.internal.tonnageYoy, deltaLabel: "YoY" },
    { label: "AIC", value: `$${supplier.internal.aic.toFixed(2)}`, delta: supplier.internal.aicYoy, deltaLabel: "YoY" },
    { label: "AIP", value: `$${supplier.internal.aip.toFixed(2)}`, delta: supplier.internal.aipYoy, deltaLabel: "YoY" },
    { label: "Service Level", value: `${supplier.internal.serviceLevel.toFixed(1)}%`, delta: supplier.internal.serviceYoy, deltaLabel: "YoY" }
  ];
  renderBullets("internal-summary", supplier.internal.summary);
  renderOperationalMetrics("internal-top-metrics", internalTopMetrics);

  renderInflight(supplier.internal.inflightRows);
  renderHistory(supplier.internal.historyRows);
  renderBullets("negotiation-approach", buildNegotiationApproach(supplier.internal));
  renderProfileTiles(supplier.internal);
  renderTopBrands(supplier.internal.topBrands, supplier.internal.sales);
  renderCategoryTable(supplier.internal.categories);
  renderCommodityTable(supplier.internal.commodities, supplier.internal.sales);

  renderBullets("external-summary", supplier.external.summary);
  renderOperationalMetrics("external-top-metrics", [
    { label: "Market Cap", value: supplier.external.marketCapLabel, delta: supplier.external.marketCapYoy, deltaLabel: "YoY", note: `As of ${supplier.external.marketCapAsOf}` },
    { label: "Stock Price", value: supplier.external.stockPriceLabel, delta: supplier.external.stockPriceYoy, deltaLabel: "YoY" },
    { label: `Sales (${supplier.external.reportPeriod})`, value: supplier.external.reportSalesLabel, deltaText: supplier.external.reportSalesYoyLabel, deltaLabel: "YoY" },
    { label: "Gross Margin", value: supplier.external.grossMarginLabel, deltaText: supplier.external.grossMarginYoyLabel, deltaLabel: "YoY" }
  ]);

  document.getElementById("financial-highlights").innerHTML = buildReportHighlights(supplier.external).map((item) => `<li>${item}</li>`).join("");
  renderBullets("external-risks", buildExternalRisks(supplier.external));
  renderBullets("external-opportunities", buildExternalOpportunities(supplier.external));

  const esgStories = buildExternalEsgStories(supplier, supplier.external);
  document.getElementById("esg-summary").textContent = buildExternalEsgSummary(supplier, esgStories, supplier.external);
  document.getElementById("esg-list").innerHTML = esgStories
    .map(
      (item) =>
        `<li>${item.summary || item.title} <a href="${item.url}" target="_blank" rel="noopener noreferrer">Read source</a>${item.date ? `<span class="news-date">(${item.date})</span>` : ""}</li>`
    )
    .join("");

  const recentNews = itemsWithinDays(supplier.external.news || [], 183, 10);
  if (recentNews.length === 0) {
    document.getElementById("news-list").innerHTML = `<li>No news mentions in the last 6 months for this supplier.</li>`;
  } else {
  document.getElementById("news-list").innerHTML = recentNews
    .map(
      (item) =>
        `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a><span class="news-date">(${item.date})</span></li>`
    )
    .join("");
  }

  document.getElementById("source-list").innerHTML = supplier.external.sources
    .map((src) => `<li><a href="${src.url}" target="_blank" rel="noopener noreferrer">${src.label}</a></li>`)
    .join("");

  setProfileTab("internal", { instant: true });
  dashboardView.classList.remove("active");
  profileView.classList.add("active");
}

function renderCategoryTable(rows) {
  const tbody = document.querySelector("#category-table tbody");
  tbody.innerHTML = rows
    .map(
      (row) => `<tr>
          <td>${row.category}</td>
          <td>${moneyPlain(row.supplierSales)}</td>
          <td>${row.supplierPct.toFixed(1)}%</td>
          <td>${moneyPlain(row.categorySales)}</td>
          <td>${row.categoryPct.toFixed(1)}%</td>
        </tr>`
    )
    .join("");
}

function renderInflight(rows) {
  const tbody = document.querySelector("#inflight-table tbody");
  tbody.innerHTML = rows
    .map(
      (r) => `<tr>
        <td>${r.date}</td>
        <td>${r.topImpactedCategory}</td>
        <td>${r.sourcingLead}</td>
        <td>${moneyPlain(r.proposed)}</td>
        <td>${moneyPlain(r.justified)}</td>
        <td>${pct(r.proposedPct)}</td>
        <td>${pct(r.justifiedPct)}</td>
      </tr>`
    )
    .join("");
}

function renderCommodityTable(rows, supplierSales) {
  const tbody = document.querySelector("#commodity-table tbody");
  tbody.innerHTML = rows
    .map(
      (r) => `<tr>
        <td>${r.commodity}</td>
        <td>${r.portion}%</td>
        <td class="${yoyClass(r.yoy)}">${pct(r.yoy)}</td>
        <td class="${yoyClass(r.qoq)}">${pct(r.qoq)}</td>
        <td class="${yoyClass(r.yoy)}">${moneyPlain((supplierSales * r.portion * r.yoy) / 10000)}</td>
        <td class="${yoyClass(r.qoq)}">${moneyPlain((supplierSales * r.portion * r.qoq) / 10000)}</td>
      </tr>`
    )
    .join("");
}

function renderHistory(rows) {
  const tbody = document.querySelector("#history-table tbody");
  const sumProposed = rows.reduce((acc, r) => acc + r.proposed, 0);
  const sumJustified = rows.reduce((acc, r) => acc + r.justified, 0);
  const sumAccepted = rows.reduce((acc, r) => acc + r.accepted, 0);
  const sumProposedPct = rows.reduce((acc, r) => acc + r.proposedPct, 0);
  const sumJustifiedPct = rows.reduce((acc, r) => acc + r.justifiedPct, 0);
  const sumAcceptedPct = rows.reduce((acc, r) => acc + r.acceptedPct, 0);
  const totalRate = sumAccepted ? (sumJustified / sumAccepted) * 100 : 0;

  const bodyRows = rows
    .map((r) => {
      const rate = r.accepted ? (r.justified / r.accepted) * 100 : 0;
      return `<tr>
          <td>${r.date}</td>
          <td>${moneyPlain(r.proposed)}</td>
          <td>${moneyPlain(r.justified)}</td>
          <td>${moneyPlain(r.accepted)}</td>
          <td>${pct(r.proposedPct)}</td>
          <td>${pct(r.justifiedPct)}</td>
          <td>${pct(r.acceptedPct)}</td>
          <td>${rate.toFixed(1)}%</td>
        </tr>`;
    })
    .join("");

  const totalRow = `<tr class="total-row">
      <td>TOTAL</td>
      <td>${moneyPlain(sumProposed)}</td>
      <td>${moneyPlain(sumJustified)}</td>
      <td>${moneyPlain(sumAccepted)}</td>
      <td>${pct(sumProposedPct)}</td>
      <td>${pct(sumJustifiedPct)}</td>
      <td>${pct(sumAcceptedPct)}</td>
      <td>${totalRate.toFixed(1)}%</td>
    </tr>`;

  tbody.innerHTML = bodyRows + totalRow;
}

document.querySelectorAll("#supplier-table th").forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.key;
    if (!key) return;
    if (sortState.key === key) {
      sortState.direction = sortState.direction === "asc" ? "desc" : "asc";
    } else {
      sortState.key = key;
      sortState.direction = key === "name" ? "asc" : "desc";
    }
    renderTable();
  });
});

backBtn.addEventListener("click", () => {
  currentProfileSupplier = null;
  profileView.classList.remove("active");
  dashboardView.classList.add("active");
  document.title = "Supplier Intelligence Dashboard";
});

if (supplierAiForm && supplierAiInput && supplierAiAnswer) {
  supplierAiForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = supplierAiInput.value.trim();
    if (!question || !currentProfileSupplier) return;
    if (!currentNegotiation) {
      supplierAiAnswer.textContent = "Open or create a negotiation first.";
      return;
    }
    const commodityReviewFile = commodityReviewFileInput?.files?.[0] || null;
    const supplierCommunicationFile = supplierCommunicationFileInput?.files?.[0] || null;

    supplierAiAnswer.textContent = "Analyzing supplier context, dashboard signals, and uploaded documents...";
    if (supplierAiSubmit) {
      supplierAiSubmit.disabled = true;
      supplierAiSubmit.textContent = "Thinking...";
    }

    try {
      const answer = await askSupplierAI(question, commodityReviewFile, supplierCommunicationFile);
      supplierAiAnswer.textContent = answer;
      const negotiations = getSupplierNegotiations(currentProfileSupplier.id);
      const updated = negotiations.map((n) =>
        n.id === currentNegotiation.id ? { ...n, updatedAt: new Date().toISOString(), latestAdvice: answer } : n
      );
      setSupplierNegotiations(currentProfileSupplier.id, updated);
      currentNegotiation = updated.find((n) => n.id === currentNegotiation.id) || currentNegotiation;
    } catch (error) {
      supplierAiAnswer.textContent = "Unable to generate AI response right now. Please try again.";
    } finally {
      if (supplierAiSubmit) {
        supplierAiSubmit.disabled = false;
        supplierAiSubmit.textContent = "Ask AI";
      }
    }
  });
}

if (openNewNegotiationBtn && negotiationCreateBlock) {
  openNewNegotiationBtn.addEventListener("click", () => {
    negotiationCreateBlock.classList.remove("hidden");
    negotiationNameInput?.focus();
  });
}

if (createNegotiationBtn && negotiationNameInput) {
  createNegotiationBtn.addEventListener("click", () => {
    const created = createNegotiation(negotiationNameInput.value);
    if (!created) return;
    negotiationNameInput.value = "";
    negotiationCreateBlock?.classList.add("hidden");
    renderNegotiationList();
    showNegotiationWorkspaceView(created);
  });
}

if (backToNegotiationsBtn) {
  backToNegotiationsBtn.addEventListener("click", () => {
    showNegotiationListView();
  });
}

if (commodityReviewFileInput && commodityReviewStatus) {
  commodityReviewFileInput.addEventListener("change", () => {
    const file = commodityReviewFileInput.files?.[0];
    commodityReviewStatus.textContent = file ? `${file.name} (${Math.round(file.size / 1024)} KB)` : "No file uploaded.";
  });
}

if (supplierCommunicationFileInput && supplierCommunicationStatus) {
  supplierCommunicationFileInput.addEventListener("change", () => {
    const file = supplierCommunicationFileInput.files?.[0];
    supplierCommunicationStatus.textContent = file ? `${file.name} (${Math.round(file.size / 1024)} KB)` : "No file uploaded.";
  });
}

if (quickAiForm && quickAiInput && quickAiAnswer) {
  quickAiForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = quickAiInput.value.trim();
    if (!question || !currentProfileSupplier) return;

    quickAiAnswer.textContent = "Analyzing supplier context...";
    if (quickAiSubmit) {
      quickAiSubmit.disabled = true;
      quickAiSubmit.textContent = "Thinking...";
    }

    try {
      const answer = await askSupplierAI(question, null, null);
      quickAiAnswer.textContent = answer;
    } catch {
      quickAiAnswer.textContent = "Unable to generate AI response right now. Please try again.";
    } finally {
      if (quickAiSubmit) {
        quickAiSubmit.disabled = false;
        quickAiSubmit.textContent = "Ask AI";
      }
    }
  });
}

toggleInternalBtn.addEventListener("click", () => setProfileTab("internal"));
toggleExternalBtn.addEventListener("click", () => setProfileTab("external"));
toggleNegotiationBtn.addEventListener("click", () => setProfileTab("negotiation"));
dashToggleSummaryBtn.addEventListener("click", () => setDashboardMode("summary"));
dashToggleDetailBtn.addEventListener("click", () => setDashboardMode("detail"));
if (dashToggleNegotiationsBtn) {
  dashToggleNegotiationsBtn.addEventListener("click", () => setDashboardMode("negotiations"));
}
if (dashToggleNewsBtn) {
  dashToggleNewsBtn.addEventListener("click", () => setDashboardMode("news"));
}
dashboardSearchInput.addEventListener("input", () => {
  searchTerm = dashboardSearchInput.value.trim();
  renderTable();
  if (dashboardMode === "detail") renderDashboardDetail();
  if (dashboardMode === "negotiations") renderNegotiationsDashboard();
  if (dashboardMode === "news") renderNewsDashboard();
});

if (dashboardAiForm && dashboardAiInput && dashboardAiAnswer) {
  dashboardAiForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = dashboardAiInput.value.trim();
    if (!question) return;
    dashboardAiAnswer.textContent = "Analyzing dashboard context...";
    if (dashboardAiSubmit) {
      dashboardAiSubmit.disabled = true;
      dashboardAiSubmit.textContent = "Thinking...";
    }
    try {
      const answer = await askDashboardAI(question);
      dashboardAiAnswer.textContent = answer;
    } catch {
      dashboardAiAnswer.textContent = "Unable to generate AI response right now. Please try again.";
    } finally {
      if (dashboardAiSubmit) {
        dashboardAiSubmit.disabled = false;
        dashboardAiSubmit.textContent = "Ask AI";
      }
    }
  });
}

initThemeToggle();
renderTable();
setDashboardMode(dashboardMode, { instant: true });
