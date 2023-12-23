import AxiosApi from './axiosApi';

export interface SaveCardSchema {
    card_template_id: number | null,
    card_data: { description: string; }[]
}

export const saveCard = async (request: SaveCardSchema) => {
    const data = await AxiosApi.post('/cards', request);
    return data;
};
