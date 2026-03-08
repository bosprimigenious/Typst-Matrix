export interface ContactInfo {
  phone: string
  email: string
  github?: string
  website?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  date: string
  description: string[]
}

export interface Project {
  id: string
  name: string
  role: string
  date: string
  description: string[]
}

export interface EducationEntry {
  id: string
  school: string
  major: string
  date: string
  rank?: string
}

export type TemplateId =
  | 'resume_aero_minimal'
  | 'resume_golden_dual'
  | 'cv_bento'
  | 'cv_cli'

export interface ResumeData {
  templateId: TemplateId
  personal: {
    name: string
    alias?: string
    title: string
    summary?: string
  }
  contact: ContactInfo
  education: EducationEntry[]
  experience: Experience[]
  projects: Project[]
  skills: {
    frontend: string[]
    backend: string[]
    algorithms: string[]
  }
}

export const TEMPLATE_OPTIONS: { value: TemplateId; label: string }[] = [
  { value: 'resume_aero_minimal', label: 'Aero Minimal' },
  { value: 'resume_golden_dual', label: 'Golden Dual' },
  { value: 'cv_bento', label: 'Bento' },
  { value: 'cv_cli', label: 'CLI' },
]
