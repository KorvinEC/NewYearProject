import { Box, Typography } from '@mui/material';
import { SignupForm } from '@components/SignupForm/SignupForm';
import { PageContainer } from '../../shared/ui/PageContainer';

// Component definition
export function SignupPage() {
    return (
        <PageContainer>
            <Box
                display="flex"
                sx={{
                    width: '100%',
                    height: '100%',
                    dispaly: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    maxWidth: '600px',
                    height: '500px',
                }}
                >
                    <Typography color="white">Регистрация</Typography>
                    <SignupForm />
                </Box>
            </Box>
        </PageContainer>
    );
}
