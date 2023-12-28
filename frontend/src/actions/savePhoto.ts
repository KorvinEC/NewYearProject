import { useTemplate } from '@enteties/Template/model';
import AxiosApi from './axiosApi';

export const savePhoto = async (data_id: number, file: File) => {
    const card_id = useTemplate.getState().templateID;
    console.log(file);
    const response = await AxiosApi.post(`/cards/${card_id}/images/${data_id}`, { image_file: file }, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response;
};
