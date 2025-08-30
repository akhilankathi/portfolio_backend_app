export class UiBaseReponse<T> {
    reponseCode: number;
    reponseMessage: string;
    data: T | null
}