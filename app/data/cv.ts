import type { CVDataStructure } from "./types";

export const CV_DATA: CVDataStructure = {
  hero: {
    name: ["Raffi", "Achmad", "Riandri"],
    description: "Frontend-focused Software Development Engineer blending Information Systems strategy with responsive, production-ready applications. I specialize in building intuitive, scalable digital products across web and Flutter, focusing heavily on clean UI, usability, and seamless UX.",
    email: "raffiachmad93@gmail.com",
    linkedin: "https://linkedin.com/in/raffi-achmad-r/",
    github: "https://github.com/RaffiAchmadR",
    metrics: ["Next.js & React", "Flutter & Firebase", "UI/UX Designer", "Data Analytics"]
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
        institution: "Bangkit Academy",
        degree: "Independent Study MSIB (Machine Learning & Mobile Dev)",
        period: "Feb 2024 - Jul 2024"
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
        skills: ["TypeScript", "React", "Next.js", "Vue", "Python", "Flutter", "Dart", "Django", "HTML/CSS", "JavaScript"]
      },
      {
        category: "Data & Cloud",
        skills: ["SQL", "Firebase", "Data Cleaning", "Data Visualization", "Database Management", "Loker Data Studio"]
      },
      {
        category: "Design & Architecture",
        skills: ["Figma", "TailwindCSS", "UI/UX Design", "Cross-functional Collaboration", "Data Ethics"]
      }
    ]
  },
  experience: [
    {
      title: "UI/UX Designer Intern",
      company: "Ministry of Administrative & Bureaucratic Reform",
      period: "Nov 2025 - May 2026",
      points: [
        "Designed end-to-end UX for government digital services (housing, hajj, civil registration) within the INA Digital Design System.",
        "Simplified complex government processes by creating intuitive user journeys, service blueprints, and SSO-based authentication flows.",
        "Collaborated with cross-functional stakeholders (Dukcapil, Kemenkes, Minerba) to align geolocation and document submission features with real-world regulations."
      ]
    },
    {
      title: "Mobile & Fullstack Dev Intern",
      company: "Nikah Yuk App & E-Learning Platforms",
      period: "Feb 2023 - Jun 2023",
      points: [
        "Analyzed user data to identify interaction trends, integrating backend insights to continuously improve front-end layout and accessibility.",
        "Architected an engaging cross-device E-Learning platform UI using HTML/JS/CSS and Bootstrap 5.",
        "Developed the Nikah Yuk mobile app in Flutter, engineering secure user authentication and real-time data storage via Firebase for scalable distribution."
      ]
    }
  ],
  leadership: [
    {
      title: "Dekan Cup FST",
      year: "2023",
      role: "Volley Expert Staff (Data Analyst)",
      description: "Collected and analyzed technical data on tournament and team performances, providing data-driven recommendations to enhance resource management and team strategy."
    },
    {
      title: "Himpunan Mahasiswa S1 SI",
      year: "2023",
      role: "Arts and Sports Expert Staff",
      description: "Developed and coordinated strategic execution plans for faculty activities, ensuring proper promotion and community engagement."
    },
    {
      title: "ISAC (Competition)",
      year: "2023",
      role: "Equipment Coordinator",
      description: "Managed technical infrastructure for UI/UX Design competition participants, maintaining active communication with external procurement vendors."
    },
    {
      title: "Information System Festival",
      year: "2022",
      role: "Public Relation & Licensing Staff",
      description: "Acted as the primary liaison between academic batches, managing multi-channel promotions and coordinating critical participant healthcare and security protocols."
    }
  ],
  projects: [
    {
      title: "Waste Classification ML App",
      description: "A real-time mobile application for waste classification. Designed an accessible UI/UX in Figma and integrated intuitive image capture functionality directly with a backend machine learning model.",
      tech: ["Mobile Dev", "Machine Learning", "Figma", "UI/UX"],
      links: {
        live: "", // Add if deployed
        github: "https://github.com/RaffiAchmadR"
      },
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Nikah Yuk Platform",
      description: "A comprehensive wedding planning ecosystem. Built the mobile application using Flutter and Firebase for real-time secure databases, concurrently developing the responsive web portal interface.",
      tech: ["Flutter", "Firebase", "Dart", "Bootstrap 5"],
      links: {
        live: "", // Add if deployed
        github: "https://github.com/RaffiAchmadR"
      },
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Shopping Trends SVM GUI",
      description: "A Data Science project creating a graphical user interface (GUI) prediction system utilizing a Support Vector Machine (SVM) model to classify and visualize shopping trend data.",
      tech: ["Python", "Data Visualization", "Machine Learning", "Data Cleaning"],
      links: {
        live: "",
        github: "https://github.com/RaffiAchmadR"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Hybrid Zero-DCE & DeblurGAN Model",
      description: "Bachelor's thesis developing a hybrid deep learning pipeline integrating Zero-Reference Deep Curve Estimation (Zero-DCE) for illumination enhancement with DeblurGAN (FPN-MobileNet) for image sharpness restoration. Equipped with a Luminance Detector for adaptive processing. Achieved PSNR of 27.36 dB and SSIM close to 0.99 on CCTV footage and public datasets.",
      tech: ["Deep Learning", "Computer Vision", "Zero-DCE", "DeblurGAN", "Python", "PSNR/SSIM Metrics"],
      links: {
        live: "",
        github: "https://github.com/RaffiAchmadR"
      },
      image: "https://images.unsplash.com/photo-1532935702929-2a7df164ddea?q=80&w=987&auto=format&fit=crop"
    }
  ],
  contact: {
    heading: "Let's build something impactful together.",
    subheading: "I'm currently looking for new opportunities where I can blend robust frontend development with smart data strategies. Say hello!",
    email: "raffiachmad93@gmail.com"
  }
};