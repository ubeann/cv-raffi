import type { CVDataStructure } from "./types";

export const CV_DATA: CVDataStructure = {
  hero: {
    name: ["Raffi", "Achmad", "Riandri"],
    description: "Frontend-focused Software Development Engineer combining deep Information Systems strategy with production-grade React, Next.js, and ML integrations. Architecting digital infrastructure for real people.",
    email: "raffiachmad93@gmail.com",
    linkedin: "https://linkedin.com/in/raffi-achmad-r/",
    github: "https://github.com/RaffiAchmadR",
    metrics: ["Next.js & React", "Flutter & Mobile", "Machine Learning", "UI/UX Architecture"]
  },
  foundation: {
    education: [
      {
        institution: "Universitas Airlangga",
        degree: "Undergraduate Information Systems",
        gpa: "3.38/4.00",
        period: "Aug 2021 - Aug 2025"
      },
      {
        institution: "SMA Negeri 1",
        degree: "Senior High School, Science",
        period: "Jul 2018 - May 2021"
      }
    ],
    techStack: [
      {
        category: "Languages & Frameworks",
        skills: ["TypeScript", "React", "Next.js", "Vue", "Python", "Flutter", "Django", "HTML/CSS"]
      },
      {
        category: "Data & Cloud",
        skills: ["SQL", "Firebase", "Basic Data Manipulation", "Database Management", "Loker Data Studio"]
      },
      {
        category: "Design & Architecture",
        skills: ["Figma", "TailwindCSS", "UI/UX Design", "Data Visualization", "Data Ethics"]
      }
    ]
  },
  experience: [
    {
      title: "UI/UX Designer Intern",
      company: "Ministry of Administrative & Bureaucratic Reform",
      period: "Nov 2025 - May 2026",
      points: [
        "Designed end-to-end UX for government digital services (housing, hajj, civil registration, mining) within INA Digital Design System.",
        "Implemented SSO-based authentication flows and data-driven personalization.",
        "Collaborated with Dukcapil, Kemenkes, KemenPAN-RB, Minerba, and Tapera to align UX with regulations."
      ]
    },
    {
      title: "Independent Study (ML/Mobile)",
      company: "Bangkit Academy",
      period: "Feb 2024 - Jul 2024",
      points: [
        "Designed and developed a mobile app interface for real-time waste classification using image input.",
        "Integrated image capture functionality directly with a backend machine learning model."
      ]
    },
    {
      title: "Fullstack Web & Mobile Dev",
      company: "Nikah Yuk App & Web / E-Learning Web",
      period: "Feb 2023 - Jun 2023",
      points: [
        "Architected E-Learning platform UI using HTML/JS/CSS & Bootstrap 5 with focus on cross-device responsiveness.",
        "Developed \"Nikah Yuk\" mobile app using Flutter, leveraging Firebase for real-time DB and authentication."
      ]
    }
  ],
  leadership: [
    {
      title: "Himpunan Mahasiswa S1 SI",
      year: "2023",
      role: "Arts and Sports Expert Staff",
      description: "Coordinated and developed strategic plans for faculty art and sports activities, ensuring proper promotion and execution."
    },
    {
      title: "Dekan Cup FST",
      year: "2023",
      role: "Volley Expert Staff",
      description: "Collected and analyzed technical data on tournaments and team performances. Provided data-driven recommendations to enhance resource management and team strategy."
    },
    {
      title: "ISAC (Competition)",
      year: "2023",
      role: "Equipment Coordinator",
      description: "Managed the technical infrastructure and equipment procurement for UI/UX Design competition participants, actively communicating with external vendors."
    },
    {
      title: "Information System Festival",
      year: "2022",
      role: "Public Relation & Licensing Staff",
      description: "Acted as the primary liaison between academic batches. Managed event information, multi-channel promotions, and coordinated participant healthcare/security."
    },
    {
      title: "POINTER",
      year: "2023",
      role: "Evaluator Expert Staff",
      description: "Oversaw the orientation and character development process. Managed offline/online media channels, ensured security collaboration, and administered event health protocols."
    }
  ]
};