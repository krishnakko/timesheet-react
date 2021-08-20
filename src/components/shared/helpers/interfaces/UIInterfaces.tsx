export interface ISidebarProps {
    openAccordion?: boolean;
    highlight?: boolean;
    drawerWidth?: number;
    handleSliderToggle?: any;
}
export interface IHeaderProps {
    isInternalAdmin?: boolean;
    isExternalAdmin?: boolean;
}
export interface IErrorPageProps {
    status?: number;
    type?: string;
    message?: string;
    showErrorPage: boolean;
}
