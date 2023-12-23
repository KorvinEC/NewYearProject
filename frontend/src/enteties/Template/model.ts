import { create } from 'zustand';

export interface NominationSchema {
    description: string
    id: number
    image: boolean | string
    subtitle: string
    title: string
}

export interface suggestionSchema {
    description: string
    index: number
}

export interface TemplateSchema {
    nominations: NominationSchema[]
    suggestions: suggestionSchema[]
    templateID: number | null
}

export const emptySuggestion = {
    title: '',
    description: '',
    templateID: null,
};

const initialState = {
    nominations: [],
    suggestions: [],
    templateID: null,
};

export const useTemplate = create<TemplateSchema>(() => ({
    ...initialState,
}));
