// Local imports
import {
    Alert, Box, Button, Snackbar,
} from '@mui/material';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useUserStore } from '@enteties/User/model';
import { SuggestionList } from '@components/SuggestionList/SuggestionList';
import { UserCardList } from '@components/UserCardList/UserCardList';
import { useTemplate } from '@enteties/Template/model';
import { saveCard } from '@actions/saveCard';
import Header from '../../components/Header/Header';
import { NominationCardList } from '../../components/NominationCardList/NominationCardList';

const PageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
`;

const ActionButtonContainer = styled(Box)`
  display: flex;
  margin: 20px 28px 0;
  gap: 10px;
`;

function HomePage() {
    const [editRegime, setEditRegime] = useState(false);
    const userId = useUserStore((state) => state.id);
    const [successAlert, setSuccessAlert] = useState(false);

    const shareHandler = () => {
        const linkMessage = `${window.location.href}${userId}`;
        navigator.clipboard.writeText(linkMessage).then(() => { setSuccessAlert(true); });
    };

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSuccessAlert(false);
    };

    const savehandler = () => {
        if (editRegime) {
            const { nominations, templateID } = useTemplate.getState();
            const card_data = nominations.map((nomination) => ({ description: nomination.description }));
            saveCard({
                card_template_id: templateID,
                card_data,
            }).then((res) => setEditRegime(false));
        }
    };

    return (
        <PageContainer>
            <Header />
            <ActionButtonContainer>
                <Button variant="contained" onClick={() => setEditRegime(!editRegime)}>Редактировать</Button>
                <Button type="submit" variant="contained" onClick={savehandler}>Сохранить</Button>
                <Button variant="contained" onClick={shareHandler}>Поделиться</Button>
            </ActionButtonContainer>
            <NominationCardList isEdit={editRegime} />
            <SuggestionList isEdit={editRegime} />
            <Snackbar open={successAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    Ссылка скопирована
                </Alert>
            </Snackbar>
        </PageContainer>
    );
}

// Default export
export default HomePage;
