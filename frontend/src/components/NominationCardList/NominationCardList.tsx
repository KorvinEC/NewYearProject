import { getTemplate } from '@actions/getTemplate';
import { Box, Grid } from '@mui/material';

import { useQuery } from 'react-query';
import { TemplateCard } from '@components/TemplateCard/TemplateCard';
import { NominationCard } from '../NominationCard/NominationCard';

interface NominationCardListProps {
    isEdit: boolean
}

export const NominationCardList = ({ isEdit }: NominationCardListProps) => {
    const { isLoading, error, data } = useQuery('template', getTemplate);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ';

    return (
        <Box margin="16px 28px">
            <h1>lol i am here</h1>

            <Grid
                container
                direction="row"
                spacing={3}
            >
                {data.data?.[5]?.data.map((nomination, index) => (
                    isEdit
                        ? (
                            <Grid item spacing={2}>
                                <TemplateCard
                                    index={index}
                                    key={nomination.id}
                                    id={nomination.id}
                                    title={nomination.title}
                                    description={nomination.description}
                                    url={nomination.image_url ?? ''}
                                    subtitle={nomination.subtitle}
                                />
                            </Grid>
                        )
                        : (
                            <Grid item spacing={2}>
                                <NominationCard
                                    index={index}
                                    id={nomination.id}
                                    key={nomination.id}
                                    title={nomination.title}
                                    description={nomination.description}
                                    url={nomination.image_url ?? ''}
                                    subtitle={nomination.subtitle}
                                />
                            </Grid>
                        )
                ))}
            </Grid>
        </Box>
    );
};
