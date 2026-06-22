import rocketLaunchSvg from '../images/rocket-launch.svg?raw';
import codeBracketSvg from '../images/code-bracket.svg?raw';
import dotnetIcon from '../images/NET.svg?raw';
import reactIcon from '../images/React.svg?raw';
import flutterIcon from '../images/Flutter.svg?raw';
import sqlserverIcon from '../images/SQL-Developer.svg?raw';
import azureIcon from '../images/Azure.svg?raw';
import azureDevOpsIcon from '../images/Azure-Devops.svg?raw';
import dockerIcon from '../images/Docker.svg?raw';
import githubActionsIcon from '../images/GitHub-Actions.svg?raw';
import typescriptIcon from '../images/TypeScript.svg?raw';
import javascriptIcon from '../images/JavaScript.svg?raw';
import html5Icon from '../images/HTML5.svg?raw';
import css3Icon from '../images/CSS3.svg?raw';
import powershellIcon from '../images/Powershell.svg?raw';

export const navItems = ['Home', 'About', 'Work', 'Thoughts', 'Tech Stack', 'Contact'];

export const whatIDoItems = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
    title: 'System Design',
    description: 'Architecting resilient platforms that align business goals with operational reliability.',
  },
  {
    icon: codeBracketSvg,
    title: 'Full-Stack Development',
    description: 'Delivering polished end-to-end experiences with strong front-end and back-end consistency.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    title: 'Leadership',
    description: 'Guiding teams and stakeholders through complex delivery decisions with clarity.',
  },
  {
    icon: rocketLaunchSvg,
    title: 'Delivery Focused',
    description: 'Keeping teams aligned on outcomes and shipping dependable work on time.',
  },
];

export const featuredWork = [
  {
    label: 'Engineering',
    title: 'Platform Architecture',
    description: 'Designing robust platforms that support complex workflows and reliable operations.',
    href: '#',
  },
  {
    label: 'Mobile',
    title: 'Mobile Transformation',
    description: 'Leading a Flutter migration to improve performance, consistency, and user experience across devices.',
    href: '#',
  },
  {
    label: 'DevOps',
    title: 'CI/CD & DevOps Enablement',
    description: 'Enabling teams with automated pipelines, infrastructure best practices, and deployment confidence.',
    href: '#',
  },
];

export const thoughts = [
  {
    date: 'Apr 2026',
    title: 'Designing systems for long-term trust',
    summary: 'How to make architecture decisions that reduce risk and improve confidence for engineering teams.',
    href: '#',
  },
  {
    date: 'Mar 2026',
    title: 'Bridging product and engineering',
    summary: 'Practical approaches for aligning delivery teams around outcomes and operational excellence.',
    href: '#',
  },
  {
    date: 'Feb 2026',
    title: 'Scaling delivery with confidence',
    summary: 'Key practices for maintaining focus and quality as teams grow and systems become more complex.',
    href: '#',
  },
];

export const techStack = [
  { icon: dotnetIcon, name: '.NET' },
  { icon: reactIcon, name: 'React' },
  { icon: flutterIcon, name: 'Flutter' },
  { icon: sqlserverIcon, name: 'SQL Developer' },
  { icon: azureIcon, name: 'Azure' },
  { icon: azureDevOpsIcon, name: 'Azure DevOps' },
  { icon: dockerIcon, name: 'Docker' },
  { icon: githubActionsIcon, name: 'GitHub Actions' },
  { icon: typescriptIcon, name: 'TypeScript' },
  { icon: javascriptIcon, name: 'JavaScript' },
  { icon: html5Icon, name: 'HTML5' },
  { icon: css3Icon, name: 'CSS3' },
  { icon: powershellIcon, name: 'PowerShell' },
];

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/GDDM85',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.217.694.825.576C20.565 21.796 24 17.298 24 12 24 5.372 18.627 0 12 0z"/></svg>',
  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-d-mcdermott/', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' },
  { label: 'Email', href: 'mailto:daniel.d.mcdermott@googlemail.com', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>' },
];

export const footerQuote = 'Everything should be made as simple as possible — but not simpler.';
