import { RiCodeView, RiNotionFill } from 'react-icons/ri';
import { LuClipboardCheck } from 'react-icons/lu';
import { TfiHarddrives } from 'react-icons/tfi';

import cosmosProjectLogo from '@/assets/image/project/COSMOS_PROJECT_LOGO.png';
import r10ProjectBanner from '@/assets/image/project/R10_PROJECT_LOGO.png';

import type { ProjectItem, ServiceItem } from '@/types';

export const SERVICES_DATA: ServiceItem[] = [
    {
        icon: <RiCodeView size={30} />,
        title: 'Java Application Ops',
        description: '비즈니스 요구사항에 부합하는 고성능 Java 기반 애플리케이션을 설계하고 구축합니다.',
        delay: 100,
    },
    {
        icon: <LuClipboardCheck size={30} />,
        title: 'Performance Optimization',
        description: '서비스 운영 환경을 분석하여 시스템 리소스를 효율적으로 활용하는 최적화 솔루션을 제안합니다.',
        delay: 200,
    },
    {
        icon: <TfiHarddrives size={30} />,
        title: 'Infrastructure Solution',
        description: '안정적인 서비스 운영을 위한 네트워크 아키텍처 설계부터 서버 구축까지, 올인원 인프라 솔루션을 제공합니다.',
        delay: 300,
    },
];

export const PROJECTS_DATA: ProjectItem[] = [
    {
        imgSrc: r10ProjectBanner,
        alt: 'R10 Project Banner',
        title: 'R10 Core Architecture',
        description: 'Minecraft Astatine Project의 안정적인 서비스를 위한 핵심 서버 코어 및 플러그인 시스템을 개발하였습니다.',
        delay: 0,
        buttons: [
            {
                icon: <RiNotionFill />,
                text: 'Project Docs',
                url: 'https://jaxple.notion.site/R10-Project-1ae92da7e82181e6b595d3dd3128d484',
            },
        ],
    },
    {
        imgSrc: cosmosProjectLogo,
        alt: 'COSMOS Project Logo',
        title: 'Cosmos Data Pipeline',
        description: 'TradingView Webhook을 연동하여 실시간 가상화폐 시장 데이터를 수집, 분석 및 시각화하는 파이프라인을 구축하였습니다.',
        delay: 150,
        buttons: [
            {
                icon: <RiNotionFill />,
                text: 'Project Docs',
                url: 'https://jaxple.notion.site/COSMOS-Project-23592da7e821809dab4eea238f51fd43?source=copy_link',
            },
        ],
    },
];
