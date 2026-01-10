

import type { ReactNode } from 'react';
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiCodeView, RiNotionFill } from "react-icons/ri";
import { LuClipboardCheck } from "react-icons/lu";
import { TfiHarddrives } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";

// --- 이미지 애셋 import ---
import cosmos_project_logo from '../assets/image/project/COSMOS_PROJECT_LOGO.png';
import r10_project_banner from '../assets/image/project/R10_PROJECT_LOGO.png';

export interface ServiceItem {
    icon: ReactNode;
    title: string;
    description: string;
    delay: number;
}

export interface ProjectButton {
    icon: ReactNode;
    text: string;
    url: string;
    hoverClass: string;
}

export interface ProjectItem {
    imgSrc: string;
    alt: string;
    title: string;
    description: string;
    delay: number;
    buttons: ProjectButton[];
}

export interface ContactLink {
    icon: ReactNode;
    text: string;
    url: string;
    hoverClass: string;
}

export const SERVICES_DATA: ServiceItem[] = [
    { icon: <RiCodeView size={30} />, title: "Java기반 애플리케이션", description: "요청한 모든 기능을 개발하고 제공해요.", delay: 100 },
    { icon: <LuClipboardCheck size={30} />, title: "최적화 솔루션", description: "서버 컨셉과 맞는 적절한 최적화를 제공해요.", delay: 200 },
    { icon: <TfiHarddrives size={30} />, title: "인프라 솔루션", description: "네트워크 구성과 서버 장비까지 통합 솔루션을 제공해요.", delay: 300 },
];

export const PROJECTS_DATA: ProjectItem[] = [
    {
        imgSrc: r10_project_banner,
        alt: "R10 Project Banner",
        title: "R10 Project",
        description: "Minecraft Astatine Project 서버에 기반이 되는 기능을 제공해요.",
        delay: 0,
        buttons: [
            {
                icon: <SiGithub />,
                text: "code",
                url: "https://github.com/JAXPLE/R10-PUBLIC",
                hoverClass: "hover:bg-black hover:text-white"
            },
            {
                icon: <RiNotionFill />,
                text: "Notion",
                url: "https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484",
                hoverClass: "hover:bg-gray-400"
            }
        ]
    },
    {
        imgSrc: cosmos_project_logo,
        alt: "COSMOS Project Logo",
        title: "Cosmos Project",
        description: "Trading View Webhook을 활용한 코인 정보를 고객에게 제공해요.",
        delay: 150,
        buttons: [
            {
                icon: <RiNotionFill />,
                text: "Notion",
                url: "https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link",
                hoverClass: "hover:bg-gray-400"
            }
        ]
    },
];

export const CONTACT_LINKS: ContactLink[] = [
    { icon: <FaDiscord />, text: "Discord", url: "https://discord.gg/Ek2HXfJUQ3", hoverClass: "hover:bg-[#5865F2] hover:text-white" },
    { icon: <SiGithub />, text: "Github", url: "https://github.com/Astatine-LAB", hoverClass: "hover:bg-black hover:text-white" },
    { icon: <FaLinkedin />, text: "Linkedin", url: "https://linkedin.com/company/astatine-lab", hoverClass: "hover:bg-[#0A66C2] hover:text-white" },
    { icon: <RiNotionFill />, text: "Notion", url: "https://jaxple.notion.site/ASTATINE-LAB-cfd82eaa93fa40a28715a1ba5a0f03bf?source=copy_link/", hoverClass: "hover:bg-gray-400" },
];
