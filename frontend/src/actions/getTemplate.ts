import { useTemplate } from '@enteties/Template/model';
import AxiosApi from './axiosApi';

export const getTemplate = async () => {
    const data = await AxiosApi.get('cards');

    useTemplate.setState(() => (
        {
            nominations: data.data[1].data,
            suggestions: data.data[1].data,
            templateID: data.data[1].id,
        }
    ));
    return data;
};
