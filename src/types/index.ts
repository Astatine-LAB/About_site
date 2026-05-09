import type { ReactNode } from 'react';

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
    isPrimary?: boolean;
}

export interface NavItem {
    label: string;
    href: string;
}
