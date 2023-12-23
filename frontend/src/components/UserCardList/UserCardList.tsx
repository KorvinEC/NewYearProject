import { getCard } from '@actions/getCard';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';

export const UserCardList = () => {
    const { isLoading, error, data } = useQuery('template', getCard);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ';

    console.log(data, 'HERE');
    return (
        <Box>
            userCardList
        </Box>
    );
};
