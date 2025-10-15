import React from 'react';
import type { Publication, Experience, Education, Project } from './types';

// --- BILINGUAL CONTENT ---
export const CONTENT = {
  en: {
    personalInfo: {
      name: "Tianyue Ma",
      title: "Ph.D. Candidate, Surveying and Mapping Science and Technology",
      affiliation: "China University of Mining and Technology (Beijing)",
      email: "tianyue.ma@example.com",
      links: {
          googleScholar: "https://scholar.google.com/",
          linkedIn: "https://www.linkedin.com/",
          github: "https://github.com/",
          twitter: "https://twitter.com/",
      },
      imageUrl: process.env.GITHUB_PAGES === 'true' ? '/academic-personal-homepage/profile.jpg' : '/profile.jpg'
    },
    aboutMe: {
        title: "About Me",
        body: "I am a Ph.D. candidate in Remote Sensing and Geographic Information Science, specializing in forest ecological remote sensing with a focus on carbon cycle research and long-term time-series change detection. I possess strong hands-on research skills and am proficient in processing diverse long-term time-series data, including the Landsat (5/7/8/9) and Sentinel (1/2/5p) series, as well as spaceborne LiDAR data like GEDI. My technical expertise includes QGIS, ArcGIS, GIS-related Python libraries, machine learning algorithms, and the Google Earth Engine cloud computing platform. I have a keen interest in emerging technologies like AI Agents and Large Language Models (LLMs), and I am currently leading a project as the student head for the National Key R&D Program of China."
    },
    researchInterests: {
        title: "Research Interests",
        list: [
            "Forest Carbon Cycle & Ecological Remote Sensing",
            "Long-Term Time-Series Change Detection",
            "Multi-source Data Fusion (Optical, Radar, LiDAR)",
            "Machine Learning & GEE for Geospatial Analysis",
            "Ecological Restoration in Mining Areas",
            "Ecological Security Pattern Construction"
        ]
    },
    education: {
        title: "Education",
        overseasTitle: "Overseas Experience",
        list: [
            {
                degree: "Ph.D. in Surveying and Mapping Science and Technology",
                field: "",
                institution: "China University of Mining and Technology (Beijing)",
                year: "2021 - Present",
                supervisor: "Supervisor: Prof. Jing Li"
            },
            {
                degree: "M.S. in Cartography and Geographic Information Engineering",
                field: "",
                institution: "China University of Mining and Technology (Beijing)",
                year: "2018 - 2021",
                supervisor: "Supervisor: Prof. Jing Li"
            },
            {
                degree: "B.S. in Surveying and Mapping Engineering",
                field: "",
                institution: "Taiyuan University of Technology",
                year: "2014 - 2018",
            },
            {
                degree: "High School Diploma, Science Track",
                field: "",
                institution: "Hengshui High School, Hebei",
                year: "2011 - 2014",
            },
        ],
        overseasList: [
            {
                degree: "CSC Joint Ph.D. Program",
                field: "Forest Ecology Remote Sensing & Carbon Cycle",
                institution: "Bangor University, UK",
                year: "2024 - 2025",
                supervisor: "Funded by China Scholarship Council"
            }
        ]
    },
    experience: {
        title: "Internship Experience",
        list: [
            {
                role: "GEE Remote Sensing Cloud Platform Intern",
                institution: "Satellite Environment Application Center, Ministry of Ecology and Environment",
                period: "2023",
                description: "Utilized the Google Earth Engine (GEE) cloud platform for large-scale land cover classification and successfully conducted global mangrove target detection and thematic mapping.",
            },
            {
                role: "3D GIS Developer",
                institution: "Beijing Qidaisong Technology Co., Ltd.",
                period: "2021 - 2022",
                description: "Led efficient GeoJSON data processing workflows, contributed to application development on the Cesium 3D geospatial platform, and managed the creation, optimization, and processing of 3D Tiles and LiDAR point cloud data.",
            },
            {
                role: "Remote Sensing Image Processing Intern",
                institution: "Aerospace Xinde Zitu (Beijing) Technology Co., Ltd.",
                period: "2018 - 2019",
                description: "Performed spatial analysis of crop pests and diseases using remote sensing imagery and independently managed the preprocessing and information extraction of UAV hyperspectral data.",
            },
        ]
    },
    projects: {
        title: "Research Projects",
        vertical: "Vertical Projects",
        horizontal: "Horizontal Projects",
    },
    achievements: {
        title: "Achievements",
        journalPapers: {
            title: "Journal Papers",
            firstAuthor: "First Author",
            supervisorFirst: "Supervisor as First Author",
            coAuthored: "Co-authored"
        },
        patents: { title: "Patents" },
        softwareCopyrights: { title: "Software Copyrights" },
        monographs: { title: "Monographs" },
        showMore: "Show more",
        showLess: "Show less"
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} Tianyue Ma. All Rights Reserved.`
    }
  },
  zh: {
    personalInfo: {
      name: "马天跃",
      title: "博士研究生, 测绘科学与技术",
      affiliation: "中国矿业大学（北京）",
      email: "tianyue.ma@example.com",
      links: {
          googleScholar: "https://scholar.google.com/",
          linkedIn: "https://www.linkedin.com/",
          github: "https://github.com/",
          twitter: "https://twitter.com/",
      },
      imageUrl: process.env.GITHUB_PAGES === 'true' ? '/academic-personal-homepage/profile.jpg' : '/profile.jpg'
    },
    aboutMe: {
        title: "关于我",
        body: "我是一名遥感与地理信息科学领域的博士生，专注于森林生态遥感，主攻碳循环研究与长时序变化检测。我具备扎实的科研实践能力，擅长处理多源长时序遥感数据（如Landsat系列、Sentinel系列）及星载激光雷达数据（如GEDI）。我熟练运用QGIS、ArcGIS、GIS相关Python库、机器学习算法以及Google Earth Engine云计算平台等关键技术。此外，我对AI Agent与大语言模型（LLM）等前沿技术抱有浓厚兴趣，并正作为学生负责人承担一项国家重点研发计划项目。"
    },
    researchInterests: {
        title: "研究方向",
        list: [
            "森林碳循环与生态遥感",
            "长时序遥感变化检测",
            "多源数据融合（光学、雷达、激光雷达）",
            "机器学习与GEE地学应用",
            "矿区生态修复",
            "生态安全格局构建"
        ]
    },
    education: {
        title: "教育背景",
        overseasTitle: "海外经历",
        list: [
            {
                degree: "博士, 测绘科学与技术",
                field: "",
                institution: "中国矿业大学（北京）",
                year: "2021.09 - 至今",
                supervisor: "导师: 李晶"
            },
            {
                degree: "硕士, 地图制图学与地理信息工程",
                field: "",
                institution: "中国矿业大学（北京）",
                year: "2018.09 - 2021.06",
                supervisor: "导师: 李晶"
            },
            {
                degree: "学士, 测绘工程",
                field: "",
                institution: "太原理工大学",
                year: "2014.09 - 2018.06",
            },
            {
                degree: "高中, 理科",
                field: "",
                institution: "河北衡水中学",
                year: "2011.09 - 2014.06",
            },
        ],
        overseasList: [
            {
                degree: "国家公派联合培养博士研究生",
                field: "森林生态遥感与碳循环",
                institution: "英国班戈大学",
                year: "2024.09 - 2025.09",
                supervisor: "国家留学基金委资助"
            }
        ]
    },
    experience: {
        title: "实习经历",
        list: [
            {
                role: "GEE遥感云平台地物分类",
                institution: "生态环境部卫星环境应用中心",
                period: "2023 - 2023",
                description: "运用Google Earth Engine (GEE) 云平台执行大规模地物分类任务，并成功开展了全球尺度下的红树林目标检测与专题制图。",
            },
            {
                role: "三维GIS开发",
                institution: "北京奇岱松科技有限公司",
                period: "2021 - 2022",
                description: "主导了GeoJSON数据的高效处理流程，参与Cesium三维地球平台的应用开发，并负责3D Tiles数据的制作、性能优化及三维激光雷达点云数据的处理。",
            },
            {
                role: "遥感影像处理",
                institution: "航天信德智图（北京）科技有限公司",
                period: "2018 - 2019",
                description: "基于遥感影像进行农作物病虫害的空间分布分析，并独立完成了无人机高光谱遥感数据的预处理与信息提取。",
            },
        ]
    },
     projects: {
        title: "科研项目",
        vertical: "纵向项目",
        horizontal: "横向项目",
    },
    achievements: {
        title: "科研成果",
        journalPapers: {
            title: "期刊论文",
            firstAuthor: "第一作者",
            supervisorFirst: "导师一作",
            coAuthored: "合作发表"
        },
        patents: { title: "专利" },
        softwareCopyrights: { title: "软件著作权" },
        monographs: { title: "专著" },
        showMore: "显示更多",
        showLess: "收起"
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} 马天跃. 保留所有权利.`
    }
  }
};

// --- PROJECTS DATA ---
const verticalProjects: Project[] = [
    {
        title: "黄河流域中游煤炭矿区森林地上碳储量遥感监测方法和累积效应评估研究（2022YFE0127700）",
        title_en: "Research on Remote Sensing Monitoring Methods and Cumulative Effect Assessment of Forest Above-Ground Carbon Storage in Coal Mining Areas in the Middle Reaches of the Yellow River Basin (2022YFE0127700)",
        fundingSource: "国家重点研发计划项目 (资助单位：中国科学技术交流中心)",
        fundingSource_en: "National Key R&D Program of China (Funded by: China Science and Technology Exchange Center)",
        period: "2023.01 - 2025.12",
        role: "主持职责学生排名第一 (项目负责人：李晶)",
        role_en: "Lead Student Researcher (PI: Prof. Jing Li)",
        description: [
            "主导项目申请书的核心撰写，完成全面的文献综述、数据采集与统计分析。",
            "创新性地应用多源遥感协同、时序变化检测及多尺度衔接技术，成功开发高精度森林林龄遥感反演模型。",
            "构建了融合林龄、树种与扰动强度的矿区森林地上碳储量估算框架，实现了对不同扰动单元碳储量动态的精准预测与空间差异分析。"
        ],
        description_en: [
            "Led the core writing of the project proposal, conducting comprehensive literature reviews, data acquisition, and statistical analysis.",
            "Innovatively applied multi-source remote sensing collaboration, time-series change detection, and multi-scale integration to develop a high-precision forest age inversion model.",
            "Engineered a framework for estimating forest above-ground carbon storage in mining areas by integrating forest age, species, and disturbance intensity, enabling precise prediction and spatial analysis of carbon dynamics."
        ]
    },
    {
        title: "矿区资源环境监测与绿色生态修复（42142002）",
        title_en: "Resource and Environment Monitoring and Green Ecological Restoration in Mining Areas (42142002)",
        fundingSource: "国家自然基金项目",
        fundingSource_en: "National Natural Science Foundation of China Project",
        period: "2022.01 - 2022.12",
        role: "项目负责人",
        role_en: "Project Investigator",
        description: []
    },
    {
        title: "山西省煤矿智能化变革推动黄河流域生态提升战略研究（2020SX8）",
        title_en: "Strategic Research on Intelligent Transformation of Coal Mines in Shanxi Province to Promote Ecological Enhancement in the Yellow River Basin (2020SX8)",
        fundingSource: "中国工程院重大咨询研究项目",
        fundingSource_en: "Major Consulting Research Project of the Chinese Academy of Engineering",
        period: "2020.01 - 2022.12",
        role: "专题负责人",
        role_en: "Topic Leader",
        description: [
            "独立构建了煤炭开采生态影响评价指标体系，并深入分析了黄河流域植被覆盖度的长时序时空演变规律及其关键驱动因素。"
        ],
        description_en: [
            "Independently constructed a comprehensive ecological impact assessment framework for coal mining and conducted an in-depth analysis of the long-term spatio-temporal evolution of vegetation cover in the Yellow River Basin and its key driving factors."
        ]
    },
    {
        title: "地表生态变化过程反演与土地损毁边界识别(2016YFC0501101-4)",
        title_en: "Inversion of Surface Ecological Change Processes and Identification of Land Degradation Boundaries (2016YFC0501101-4)",
        fundingSource: "国家重点研发计划子课题",
        fundingSource_en: "Sub-project of the National Key R&D Program of China",
        period: "2016.07 - 2020.12",
        role: "草原矿区地表生态变化过程反演与土地影响边界识别子课题负责人",
        role_en: "Leader of the sub-topic on inversion of surface ecological change and identification of land impact boundaries in grassland mining areas",
        description: []
    }
];

const horizontalProjects: Project[] = [
    {
        title: "聊城市国土综合整治与生态修复研究专题（聊城市国土空间规划专题）",
        title_en: "Research on Comprehensive Land Consolidation and Ecological Restoration in Liaocheng City (Liaocheng City Territorial Space Planning Topic)",
        fundingSource: "中国国土勘测规划院",
        fundingSource_en: "China Land Surveying and Planning Institute",
        period: "2020.08 - 2022.12",
        role: "主持负责专题三",
        role_en: "Lead of Topic 3",
        description: [
            "通过系统性分析区域生态系统特征，精准识别出空间格局失衡、资源利用低效及生态功能退化的关键区域。",
            "基于对生态分区、网络结构与保护格局的深入研究，系统性地提出了“山水林田湖草”一体化生态修复与治理规划方案。"
        ],
        description_en: [
            "Pinpointed key areas with imbalanced spatial patterns, inefficient resource utilization, and degraded ecological functions through a systematic analysis of regional ecosystem characteristics.",
            "Formulated a holistic ecological restoration and governance plan ('mountains, waters, forests, fields, lakes, and grasslands') based on in-depth analysis of ecological zoning, network structure, and conservation patterns."
        ]
    },
    {
        title: "资源枯竭型地区转型背景下的国土空间开发保护研究专题（辽宁省国土空间规划专题）",
        title_en: "Research on Territorial Space Development and Protection in the Context of Transformation in Resource-Depleted Areas (Liaoning Province Territorial Space Planning Topic)",
        fundingSource: "辽宁省城乡建设规划设计院有限责任公司",
        fundingSource_en: "Liaoning Urban-Rural Construction and Planning Design Institute Co., Ltd.",
        period: "2020.01 - 2022.12",
        role: "负责人",
        role_en: "Investigator",
        description: []
    },
    {
        title: "国土空间布局现状与规划分析",
        title_en: "Analysis of the Current Status and Planning of Territorial Space Layout",
        fundingSource: "中国水利水电科学院",
        fundingSource_en: "China Institute of Water Resources and Hydropower Research",
        period: "2020.01 - 2020.12",
        role: "负责人",
        role_en: "Investigator",
        description: []
    },
    {
        title: "基于多宜性评价的土地承载能力评估技术方法研究",
        title_en: "Research on Technical Methods for Land Carrying Capacity Assessment Based on Multi-suitability Evaluation",
        fundingSource: "中国土地勘测规划院外协项目",
        fundingSource_en: "External project of the China Land Surveying and Planning Institute",
        period: "2018.01 - 2019.12",
        role: "负责人",
        role_en: "Investigator",
        description: []
    },
    {
        title: "2017 年度全国重点地区生态用地分析",
        title_en: "Analysis of Ecological Land Use in Key National Areas for 2017",
        fundingSource: "自然资源部土地利用重点实验室外协项目",
        fundingSource_en: "External project of the Key Laboratory of Land Use, Ministry of Natural Resources",
        period: "2018.01 - 2019.04",
        role: "负责人",
        role_en: "Investigator",
        description: []
    },
    {
        title: "全国生态用地时空变化特征分析",
        title_en: "Analysis of Spatio-temporal Variation Characteristics of National Ecological Land Use",
        fundingSource: "自然资源部土地利用重点实验室开放项目",
        fundingSource_en: "Open project of the Key Laboratory of Land Use, Ministry of Natural Resources",
        period: "2019.04 - 2020.04",
        role: "负责人",
        role_en: "Investigator",
        description: []
    }
];


// --- PUBLICATIONS DATA ---
const firstAuthorPapers: Publication[] = [
    {
        title: "A dual-pathway framework for mapping forest age in complex mining landscapes by multi-source remote sensing data and tree growth patterns",
        authors: ["Ma Tianyue", "Li Jing", "Tan Jun"],
        venue: "GIScience & Remote Sensing",
        year: 2025,
        links: { doi: "10.1080/15481603.2025.2565858" },
        metrics: {
            en: "SCI, Q1 TOP, IF (2025) ≈ 6.9, First Author.",
            zh: "SCI，一区TOP，IF (2025) ≈ 6.9，第一作者。"
        }
    },
    {
        title: "Optimization and Construction of Ecological Security Patterns Based on Natural and Cultivated Land Disturbance",
        authors: ["Ma, Tianyue", "Jing Li", "Shuang Bai", "Fangzhe Chang", "Zhai Jiang", "Xingguang Yan", "Jiahao Shao"],
        venue: "Sustainability, 2022, 14(24): 16501",
        year: 2022,
        links: {},
        metrics: {
            en: "SCI, Q2, IF (2022) = 3.8, First Author.",
            zh: "SCI，二区，IF (2022) = 3.8，第一作者。"
        }
    },
];

const supervisorFirstPapers: Publication[] = [
    {
        title: "中美土地复垦质量控制标准对比研究——以草原露天矿区为例",
        title_en: "Comparative Study on Quality Control Standards for Land Reclamation in China and the United States: A Case Study of Grassland Open-pit Mining Areas",
        authors: ["李晶", "马天跃", "闫萧萧", "Anna Waitkus"],
        authors_en: ["Jing Li", "Tianyue Ma", "Xiaoxiao Yan", "Anna Waitkus"],
        venue: "矿业科学学报",
        venue_en: "Journal of Mining Science and Technology",
        year: 2022,
        links: { doi: "10.19606/j.cnki.jmst.2022.04.006" },
        metrics: {
            en: "T1-level Excellent Journal, EI, CSCD, PKU Core. (2024) Composite IF: 4.512. Second Author.",
            zh: "T1级卓越期刊, EI, CSCD, 北大核心. (2024版)复合影响因子: 4.512. 第二作者。"
        }
    }
];

const otherPapers: Publication[] = [
    {
        title: "Leveraging Sentinel-1/2 time series and deep learning for accurate forest tree species mapping",
        authors: ["Tan Jun", "Li Jing", "Ma Tianyue", "Yan Xingguang", "Huo Ziye"],
        venue: "Frontiers in Forests and Global Change, 2025, 8: 1599510",
        year: 2025,
        links: {},
        metrics: { en: "SCI, Q1, IF (2024) ≈ 3.6, Third Author.", zh: "SCI，一区，IF (2024) ≈ 3.6，第三作者。" }
    },
    {
        title: "Method for building segmentation and extraction from high-resolution remote sensing images based on improved YOLOv5ds",
        authors: ["Fangzhe Chang", "Tianyue Ma", "Dantong Wang", "Shoujie Zhu", "Dengping Li", "Shuntian Feng", "Xiaoyong Fan"],
        venue: "PloS one, 2025, 20(3): e0317106",
        year: 2025,
        links: {},
        metrics: {
            en: "SCI, Q1, IF (2023) ≈ 3.7, Second Author.",
            zh: "SCI, 一区, IF (2023) ≈ 3.7, 第二作者。"
        }
    },
    {
        title: "融合哨兵2号时序特征与连续变化检测分类算法的优势树种识别",
        title_en: "Identification of Dominant Tree Species by Fusing Sentinel-2 Time-series Features and Continuous Change Detection and Classification Algorithms",
        authors: ["陈丹", "李晶", "霍江润", "马天跃", "闫星光", "李雨霏"],
        authors_en: ["Dan Chen", "Jing Li", "Jiangrun Huo", "Tianyue Ma", "Xingguang Yan", "Yufei Li"],
        venue: "森林工程, 2025, 41(03): 505-516",
        venue_en: "Forest Engineering",
        year: 2025,
        links: {},
        metrics: { 
            en: "CSCD, PKU Core. (2024) Composite IF: 2.135. Fourth Author.",
            zh: "CSCD, 北大核心. (2024版)复合影响因子: 2.135. 第四作者。"
        }
    },
    {
        title: "Fine Resolution Mapping of Forest Soil Organic Carbon Based on Feature Selection and Machine Learning Algorithm",
        authors: ["Li, Yanan", "Jing Li", "Jun Tan", "Tianyue Ma", "Xingguang Yan", "Zongyang Chen", "Kunheng Li"],
        venue: "Remote Sensing, 2025, 17(12): 2000",
        year: 2025,
        links: {},
        metrics: { en: "SCI, Q1, IF (2024) ≈ 5.0, Fourth Author.", zh: "SCI，一区，IF (2024) ≈ 5.0，第四作者。" }
    },
    {
        title: "Identification of tree species using machine learning and phanological features from a 4-year time series of remote sensing data",
        authors: ["Su, Yiting", "Jing Li", "Andrew R. Smith", "Xingguang Yan", "Tianyue Ma", "Jinrui Zhang", "Dan Chen"],
        venue: "International Journal of Remote Sensing, 2025: 1-26",
        year: 2025,
        links: {},
        metrics: { en: "SCI, Q2, IF (2024) ≈ 3.5, Fifth Author.", zh: "SCI，二区，IF (2024) ≈ 3.5，第五作者。" }
    },
    {
        title: "美国怀俄明州煤矿土地复垦基础信息调查浅析",
        title_en: "A Preliminary Analysis of Basic Information Survey on Coal Mine Land Reclamation in Wyoming, USA",
        authors: ["李晶", "李亚楠", "马天跃", "付艳华", "KRZYSZOWSKA Waitkus Anna", "余海霞"],
        authors_en: ["Jing Li", "Yanan Li", "Tianyue Ma", "Yanhua Fu", "KRZYSZOWSKA Waitkus Anna", "Haixia Yu"],
        venue: "中国农业大学学报, 2024, 29(12): 290-302",
        venue_en: "Journal of China Agricultural University",
        year: 2024,
        links: {},
        metrics: { 
            en: "Excellent Journal, EI, CSCD, PKU Core. (2024) Composite IF: 4.881. Third Author.",
            zh: "卓越期刊, EI, CSCD, 北大核心. (2024版)复合影响因子: 4.881. 第三作者。"
        }
    },
    {
        title: "霍东矿区生态服务价值时空特征与成因分析",
        title_en: "Spatio-temporal Characteristics and Genesis Analysis of Ecological Service Value in Huodong Mining Area",
        authors: ["张瑞", "李晶", "邵嘉豪", "闫星光", "李生财", "马天跃"],
        authors_en: ["Rui Zhang", "Jing Li", "Jiahao Shao", "Xingguang Yan", "Shengcai Li", "Tianyue Ma"],
        venue: "山西大学学报(自然科学版), 2024, 47(01): 214-226",
        venue_en: "Journal of Shanxi University (Natural Science Edition)",
        year: 2024,
        links: { doi: "10.13451/j.sxu.ns.2023054" },
        metrics: { 
            en: "CSCD, PKU Core. (2024) Composite IF: 1.957. Sixth Author.",
            zh: "CSCD, 北大核心. (2024版)复合影响因子: 1.957. 第六作者。"
        }
    },
    {
        title: "Assessing open-pit mining impacts on semi-arid grassland: A framework for boundary and intensity quantification",
        authors: ["Xiaoxiao Yan", "Jing Li", "Yang Shao", "Tianyue Ma", "Rui Zhang", "Yiting Su"],
        venue: "Journal of Cleaner Production, 2024, 475: 143464",
        year: 2024,
        links: {},
        metrics: { en: "SCI, Q1 TOP, IF (2023) ≈ 11.1, Fourth Author.", zh: "SCI，一区TOP，IF (2023) ≈ 11.1，第四作者。" }
    },
    {
        title: "一种快速修复Landsat影像条带色差的方法",
        title_en: "A Rapid Method for Repairing Chromatic Aberration Stripes in Landsat Imagery",
        authors: ["闫星光", "李晶", "闫萧蕭", "马天跃", "苏怡婷", "邵嘉豪", "张瑞等"],
        authors_en: ["Xingguang Yan", "Jing Li", "Xiaoxiao Yan", "Tianyue Ma", "Yiting Su", "Jiahao Shao", "Rui Zhang et al."],
        venue: "光谱学与光谱分析, 2023, 43(11): 3483-3491",
        venue_en: "Spectroscopy and Spectral Analysis",
        year: 2023,
        links: {},
        metrics: { 
            en: "SCI (Q4, IF: 1.5), EI, CSCD, PKU Core. (2024) Composite IF: 3.122. Fourth Author.",
            zh: "SCI (Q4, IF: 1.5), EI, CSCD, 北大核心. (2024版)复合影响因子: 3.122. 第四作者。"
        }
    },
    {
        title: "基于地理探测器的山西省2000～2020年NPP时空变化特征及驱动力分析",
        title_en: "Analysis of Spatio-temporal Variation Characteristics and Driving Forces of NPP in Shanxi Province from 2000 to 2020 Based on Geodetector",
        authors: ["邵嘉豪", "李晶", "闫星光", "马天跃", "张瑞"],
        authors_en: ["Jiahao Shao", "Jing Li", "Xingguang Yan", "Tianyue Ma", "Rui Zhang"],
        venue: "环境科学, 2023, 44(01): 312-322",
        venue_en: "Environmental Science",
        year: 2023,
        links: { doi: "10.13227/j.hjkx.202203010" },
        metrics: { 
            en: "Excellent Journal, EI, CSCD, PKU Core. (2024) Composite IF: 5.986. Fourth Author.",
            zh: "卓越期刊, EI, CSCD, 北大核心. (2024版)复合影响因子: 5.986. 第四作者。"
        }
    },
    {
        title: "Evaluation of machine learning methods and multi-source remote sensing data combinations to construct forest above-ground biomass models",
        authors: ["Xingguang Yan", "Jing Li", "Andrew R. Smith", "Di Yan", "Tianyue Ma", "YiTing Su", "Jiahao Shao"],
        venue: "International Journal of Digital Earth, 2023, 16(2): 4471-4491",
        year: 2023,
        links: {},
        metrics: { en: "SCI, Q1, IF (2023) ≈ 4.6, Fifth Author.", zh: "SCI，一区，IF (2023) ≈ 4.6，第五作者。" }
    },
    {
        title: "Rapid Land Cover Classification Using a 36-Year Time Series of Multi-Source Remote Sensing Data",
        authors: ["Yan, Xingguang", "Jing Li", "Andrew R. Smith", "Di Yang", "Tianyue Ma", "Yiting Su"],
        venue: "Land, 2023, 12(12): 2149",
        year: 2023,
        links: {},
        metrics: { en: "SCI, Q1, IF (2023) ≈ 3.9, Fifth Author.", zh: "SCI，一区，IF (2023) ≈ 3.9，第五作者。" }
    },
    {
        title: "Spatial and temporal variation characteristics and driving mechanisms of multidimensional socio-economic development levels in resource-based cities",
        authors: ["Su, Yiting", "Jing Li", "Shouqiang Yin", "Jiabao Yue", "Zhai Jiang", "Tianyue Ma", "Zhangqian Han"],
        venue: "Sustainability, 2023, 15(2): 1573",
        year: 2023,
        links: {},
        metrics: { en: "SCI, Q2, IF (2022) = 3.8, Sixth Author.", zh: "SCI，二区，IF (2022) = 3.8，第六作者。" }
    },
    {
        title: "基于村庄类型差异的农村居民点整治潜力研究——以聊城市为例",
        title_en: "Study on the Consolidation Potential of Rural Settlements Based on Village Type Differences: A Case Study of Liaocheng City",
        authors: ["黄梓鑫", "付艳华", "李晶", "殷守强", "蒋斋", "马天跃"],
        authors_en: ["Zixin Huang", "Yanhua Fu", "Jing Li", "Shouqiang Yin", "Zhai Jiang", "Tianyue Ma"],
        venue: "中国土地科学, 2022, 36(12): 78-90",
        venue_en: "China Land Science",
        year: 2022,
        links: {},
        metrics: { 
            en: "Excellent Journal, CSSCI, CSCD, PKU Core. (2024) Composite IF: 6.473. Sixth Author.",
            zh: "卓越期刊, CSSCI, CSCD, 北大核心. (2024版)复合影响因子: 6.473. 第六作者。"
        }
    },
    {
        title: "Identification of cultivated land change trajectory and analysis of its process characteristics using time-series Landsat images: A study in the overlapping areas of crop and mineral production in Yanzhou City, China",
        authors: ["Jing Li", "Zhai Jiang", "Hui Miao", "Jiaxin Liang", "Zhen Yang", "Yanmei Zhang", "Tianyue Ma"],
        venue: "Science of The Total Environment, 2022, 806: 150318",
        year: 2022,
        links: {},
        metrics: { en: "SCI, Q1 TOP, IF (2022) ≈ 10.7, Seventh Author.", zh: "SCI，一区TOP，IF (2022) ≈ 10.7，第七作者。" }
    },
    {
        title: "A random forest algorithm for landsat image chromatic aberration restoration based on GEE cloud platform—a case study of yucatán peninsula, Mexico",
        authors: ["Yan, Xingguang", "Jing Li", "Di Yang", "Jiwei Li", "Tianyue Ma", "Yiting Su", "Jiahao Shao", "Rui Zhang"],
        venue: "Remote Sensing, 2022, 14(20): 5154",
        year: 2022,
        links: {},
        metrics: { en: "SCI, Q1, IF (2022) ≈ 5.0, Fifth Author.", zh: "SCI，一区，IF (2022) ≈ 5.0，第五作者。" }
    },
    {
        title: "Identification of successional trajectory over 30 Years and evaluation of reclamation effect in coal waste dumps of surface coal mine",
        authors: ["Jing Li", "Xiaoxiao Yan", "Zhiguo Cao", "Zhen Yang", "Jiaxin Liang", "Tianyue Ma", "Qianlong Liu"],
        venue: "Journal of Cleaner Production, 2020, 269: 122161",
        year: 2020,
        links: {},
        metrics: { en: "SCI, Q1 TOP, IF (2020) ≈ 11.1, Sixth Author.", zh: "SCI，一区TOP，IF (2020) ≈ 11.1，第六作者。" }
    }
];

const patents: Publication[] = [
  {
    title: "一种区域森林年龄估算方法",
    title_en: "A Method for Estimating Regional Forest Age",
    authors: ["李晶", "马天跃", "霍江润", "闫星光", "苏怡婷", "梁瑞麟", "余海霞"],
    authors_en: ["Jing Li", "Tianyue Ma", "Jiangrun Huo", "Xingguang Yan", "Yiting Su", "Ruilin Liang", "Haixia Yu"],
    venue: "中国矿业大学(北京), CN202410042055.2",
    venue_en: "China University of Mining and Technology (Beijing), CN202410042055.2",
    year: 2024,
    links: {}
  },
  {
    title: "一种基于密集时序影像的树种识别方法、装置及设备",
    title_en: "A Method, Apparatus, and Equipment for Tree Species Identification Based on Dense Time-series Imagery",
    authors: ["李晶", "苏怡婷", "闫星光", "霍江润", "马天跃", "谭俊", "陈丹"],
    authors_en: ["Jing Li", "Yiting Su", "Xingguang Yan", "Jiangrun Huo", "Tianyue Ma", "Jun Tan", "Dan Chen"],
    venue: "中国矿业大学(北京), CN202510761416.3",
    venue_en: "China University of Mining and Technology (Beijing), CN202510761416.3",
    year: 2025,
    links: {}
  },
  {
    title: "一种基于遥感影像的树种识别的方法、装置和计算设备",
    title_en: "A Method, Apparatus, and Computing Device for Tree Species Identification Based on Remote Sensing Imagery",
    authors: ["李晶", "陈丹", "霍江润", "李雨霏", "马天跃", "苏怡婷"],
    authors_en: ["Jing Li", "Dan Chen", "Jiangrun Huo", "Yufei Li", "Tianyue Ma", "Yiting Su"],
    venue: "中国矿业大学(北京), CN202410647300.2",
    venue_en: "China University of Mining and Technology (Beijing), CN202410647300.2",
    year: 2025,
    links: {}
  },
  {
    title: "一种基于多源遥感数据的森林地上生物量估算方法、装置及设备",
    title_en: "A Method, Apparatus, and Equipment for Estimating Forest Above-ground Biomass Based on Multi-source Remote Sensing Data",
    authors: ["闫星光", "李晶", "马天跃", "苏怡婷", "霍江润", "梁瑞麟"],
    authors_en: ["Xingguang Yan", "Jing Li", "Tianyue Ma", "Yiting Su", "Jiangrun Huo", "Ruilin Liang"],
    venue: "中国矿业大学(北京), CN202410998362.8",
    venue_en: "China University of Mining and Technology (Beijing), CN202410998362.8",
    year: 2024,
    links: {}
  },
  {
    title: "一种基于云平台遥感影像镶嵌后色差条带的快速修复方法",
    title_en: "A Rapid Repair Method for Chromatic Aberration Stripes after Mosaicking Cloud-based Remote Sensing Imagery",
    authors: ["闫星光", "李晶", "马天跃", "苏怡婷", "邵嘉豪"],
    authors_en: ["Xingguang Yan", "Jing Li", "Tianyue Ma", "Yiting Su", "Jiahao Shao"],
    venue: "中国矿业大学(北京), CN202210718755.X",
    venue_en: "China University of Mining and Technology (Beijing), CN202210718755.X",
    year: 2024,
    links: {}
  },
  {
    title: "一种露天矿区生态累积效应的评估方法及装置",
    title_en: "An Assessment Method and Apparatus for the Ecological Cumulative Effect in Open-pit Mining Areas",
    authors: ["李晶", "梁佳欣", "霍江润", "闫星光", "马天跃"],
    authors_en: ["Jing Li", "Jiaxin Liang", "Jiangrun Huo", "Xingguang Yan", "Tianyue Ma"],
    venue: "中国矿业大学(北京), CN202311280495.3",
    venue_en: "China University of Mining and Technology (Beijing), CN202311280495.3",
    year: 2024,
    links: {}
  },
  {
    title: "一种煤炭粉尘污染程度的量化方法及装置",
    title_en: "A Method and Apparatus for Quantifying the Degree of Coal Dust Pollution",
    authors: ["李晶", "霍江润", "王科雯", "闫星光", "马天跃"],
    authors_en: ["Jing Li", "Jiangrun Huo", "Kewen Wang", "Xingguang Yan", "Tianyue Ma"],
    venue: "中国矿业大学(北京), CN202211727069.5",
    venue_en: "China University of Mining and Technology (Beijing), CN202211727069.5",
    year: 2023,
    links: {}
  }
];

const softwareCopyrights: Publication[] = [
  {
    title: "基于多源遥感和机器学习方法的森林地上生物量估算软件 [简称：森林生物量估算软件] V1.0",
    title_en: "Forest Above-ground Biomass Estimation Software Based on Multi-source Remote Sensing and Machine Learning Methods [Abbreviation: Forest Biomass Estimation Software] V1.0",
    authors: ["闫星光", "马天跃", "霍江润"],
    authors_en: ["Xingguang Yan", "Tianyue Ma", "Jiangrun Huo"],
    venue: "登记号: 2024SR0778626",
    venue_en: "Registration No: 2024SR0778626",
    year: 2024,
    links: {}
  },
  {
    title: "基于影像光谱差异的逐年土地分类应用软件 V1.0",
    title_en: "Annual Land Classification Application Software Based on Image Spectral Differences V1.0",
    authors: ["闫星光", "李晶", "马天跃", "苏怡婷", "霍江润"],
    authors_en: ["Xingguang Yan", "Jing Li", "Tianyue Ma", "Yiting Su", "Jiangrun Huo"],
    venue: "登记号: 2023SR1436128",
    venue_en: "Registration No: 2023SR1436128",
    year: 2023,
    links: {}
  },
  {
    title: "Landsat 5归一化植被指数NDVI影像色差修复软件 V1.0",
    title_en: "Landsat 5 Normalized Difference Vegetation Index (NDVI) Image Chromatic Aberration Repair Software V1.0",
    authors: ["闫星光", "李晶", "马天跃", "李亚楠", "霍江润", "苏怡婷"],
    authors_en: ["Xingguang Yan", "Jing Li", "Tianyue Ma", "Yanan Li", "Jiangrun Huo", "Yiting Su"],
    venue: "登记号: 2023SR1436113",
    venue_en: "Registration No: 2023SR1436113",
    year: 2023,
    links: {}
  }
];

const monographs: Publication[] = [
    {
        title: "生态地理遥感云计算",
        title_en: "Ecological Geography Remote Sensing Cloud Computing",
        authors: ["闫星光", "马天跃", "李晶", "杨荻"],
        authors_en: ["Xingguang Yan", "Tianyue Ma", "Jing Li", "Di Yang"],
        venue: "北京航空航天大学出版社, ISBN: 9787512445437",
        venue_en: "Beijing University of Aeronautics and Astronautics Press, ISBN: 9787512445437",
        year: 2025,
        links: {}
    }
];

export const PROJECTS_DATA = {
  vertical: verticalProjects,
  horizontal: horizontalProjects,
};

export const PUBLICATIONS_DATA = {
  firstAuthor: firstAuthorPapers,
  supervisorFirst: supervisorFirstPapers,
  other: otherPapers,
  patents: patents,
  softwareCopyrights: softwareCopyrights,
  monographs: monographs,
};