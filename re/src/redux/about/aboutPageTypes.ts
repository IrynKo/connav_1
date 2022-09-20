export interface IAboutContent {
    id: number | null,
    content: IAboutRender,
    acf: IAcf,
    //loading: boolean
}

interface IAcf  {
    title_for_view: string,
    link_for_view: IAboutLink,
    extra_text: string,
}
interface IAboutLink  {
    title: string,
    url: string
}
interface IAboutRender  {
    rendered: string,
}
export interface State  {
    content: IAboutContent;
    loading: boolean;
    error: string | null;
}