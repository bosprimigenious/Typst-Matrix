import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {
  ResumeData,
  ContactInfo,
  Experience,
  Project,
  EducationEntry,
} from '../types/resume'

const nanoid = () => crypto.randomUUID().slice(0, 8)

const defaultContact: ContactInfo = {
  phone: '',
  email: '',
  github: '',
  website: '',
}

const defaultPersonal = {
  name: '',
  alias: '',
  title: '',
  summary: '',
}

const defaultEducationEntry = (): EducationEntry => ({
  id: nanoid(),
  school: '',
  major: '',
  date: '',
  rank: '',
})

const defaultExperience = (): Experience => ({
  id: nanoid(),
  company: '',
  role: '',
  date: '',
  description: [''],
})

const defaultProject = (): Project => ({
  id: nanoid(),
  name: '',
  role: '',
  date: '',
  description: [''],
})

const initialState: ResumeData = {
  templateId: 'resume_aero_minimal',
  personal: { ...defaultPersonal },
  contact: { ...defaultContact },
  education: [defaultEducationEntry()],
  experience: [],
  projects: [],
  skills: {
    frontend: [],
    backend: [],
    algorithms: [],
  },
}

interface ResumeStore extends ResumeData {
  pdfUrl: string | null
  setPdfUrl: (url: string | null) => void
  setPersonal: <K extends keyof ResumeData['personal']>(
    key: K,
    value: ResumeData['personal'][K]
  ) => void
  setContact: <K extends keyof ContactInfo>(key: K, value: ContactInfo[K]) => void
  setTemplateId: (id: ResumeData['templateId']) => void
  addEducation: () => void
  updateEducation: (id: string, patch: Partial<EducationEntry>) => void
  removeEducation: (id: string) => void
  addExperience: () => void
  updateExperience: (id: string, patch: Partial<Experience>) => void
  removeExperience: (id: string) => void
  addProject: () => void
  updateProject: (id: string, patch: Partial<Project>) => void
  removeProject: (id: string) => void
  setSkillList: (
    category: keyof ResumeData['skills'],
    list: string[]
  ) => void
  getPayload: () => ResumeData
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      pdfUrl: null,

      setPdfUrl: (url) => {
        const prev = get().pdfUrl
        if (prev) URL.revokeObjectURL(prev)
        set({ pdfUrl: url })
      },

      setPersonal: (key, value) =>
        set((s) => ({
          personal: { ...s.personal, [key]: value },
        })),

      setContact: (key, value) =>
        set((s) => ({
          contact: { ...s.contact, [key]: value },
        })),

      setTemplateId: (templateId) => set({ templateId }),

      addEducation: () =>
        set((s) => ({
          education: [...s.education, defaultEducationEntry()],
        })),

      updateEducation: (id, patch) =>
        set((s) => ({
          education: s.education.map((e) =>
            e.id === id ? { ...e, ...patch } : e
          ),
        })),

      removeEducation: (id) =>
        set((s) => ({
          education: s.education.filter((e) => e.id !== id),
        })),

      addExperience: () =>
        set((s) => ({
          experience: [...s.experience, defaultExperience()],
        })),

      updateExperience: (id, patch) =>
        set((s) => ({
          experience: s.experience.map((e) =>
            e.id === id ? { ...e, ...patch } : e
          ),
        })),

      removeExperience: (id) =>
        set((s) => ({
          experience: s.experience.filter((e) => e.id !== id),
        })),

      addProject: () =>
        set((s) => ({
          projects: [...s.projects, defaultProject()],
        })),

      updateProject: (id, patch) =>
        set((s) => ({
          projects: s.projects.map((p) =>
            p.id === id ? { ...p, ...patch } : p
          ),
        })),

      removeProject: (id) =>
        set((s) => ({
          projects: s.projects.filter((p) => p.id !== id),
        })),

      setSkillList: (category, list) =>
        set((s) => ({
          skills: { ...s.skills, [category]: list },
        })),

      getPayload: () => {
        const s = get()
        return {
          templateId: s.templateId,
          personal: s.personal,
          contact: s.contact,
          education: s.education,
          experience: s.experience,
          projects: s.projects,
          skills: s.skills,
        }
      },
    }),
    {
      name: 'typst-matrix-storage',
      partialize: (state) => ({
        templateId: state.templateId,
        personal: state.personal,
        contact: state.contact,
        education: state.education,
        experience: state.experience,
        projects: state.projects,
        skills: state.skills,
      }),
    }
  )
)
