import type { ReactNode } from 'react';

/**
 * 서비스 섹션에서 사용되는 서비스 아이템 타입
 */
export interface ServiceItem {
    icon: ReactNode;
    title: string;
    description: string;
    delay: number;
}

/**
 * 프로젝트 카드 버튼 타입
 */
export interface ProjectButton {
    icon: ReactNode;
    text: string;
    url: string;
    hoverClass: string;
}

/**
 * 프로젝트 아이템 타입
 */
export interface ProjectItem {
    imgSrc: string;
    alt: string;
    title: string;
    description: string;
    delay: number;
    buttons: ProjectButton[];
}

/**
 * 연락처 링크 타입
 */
export interface ContactLink {
    icon: ReactNode;
    text: string;
    url: string;
    hoverClass: string;
}

/**
 * 네비게이션 아이템 타입
 */
export interface NavItem {
    label: string;
    href: string;
}
