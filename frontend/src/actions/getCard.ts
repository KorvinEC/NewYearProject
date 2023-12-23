import AxiosApi from './axiosApi';

export const getCard = async () => {
    const { data } = await AxiosApi.get('/cards');
    return data;
};
