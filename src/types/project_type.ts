export interface ProjectItemType {
    screens?: string[]
    description?: string
    stack?: string
    gitLink?: string
}
export interface ProjectType {
    title: string
    description: string
    items: ProjectItemType[]
    link?: string
    gitLink?: string
}