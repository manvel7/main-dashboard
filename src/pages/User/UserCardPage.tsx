import React, { useMemo } from 'react';
import { ArrowBack } from '@mui/icons-material';
import CommonModal from '@/shared/common/dialog/CommonModal';
import { Box, Container, DialogActions, styled } from '@mui/material';
import { useStepper } from '@/shared/common/stepper/hooks/useStepper';
import useToogleModal from '@/shared/common/dialog/hooks/useToogleModal';
import CommonLoadingButton from '@/shared/common/forms/CommonLoadingButton';
import { CommonStepper } from '@/shared/common/stepper/CommonStepper';
import { useUserProcessDocument } from '@/processes/UserDocumentProcesses/hooks/uerProcessUserDocument';
import { FormProvider } from 'react-hook-form';
import { DocumentUpload } from '@/processes/UserDocumentProcesses/DocumentUpload/DocumentUpload';

const StyledActionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const UserCardPage: React.FC = () => {
  const { open, toggleModal } = useToogleModal();
  const { handleSubmit, documentForm } = useUserProcessDocument();
  const { activeStep, next, back } = useStepper(4);

  const steps = useMemo(
    () => [
      { label: 'Personal Info', component: <Box>Step 1 Content</Box> },
      { label: 'Address', component: <Box>Step 2 Content</Box> },
      {
        label: 'Confirm',
        component: (
          <DocumentUpload
            reset={documentForm.reset}
            getValues={documentForm.getValues}
          />
        ),
      },
      { label: 'Complete', component: <Box>Step 4 Content</Box> },
    ],
    [documentForm]
  );

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      next();
    } else {
      documentForm.handleSubmit(handleSubmit)();
    }
  };

  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <CommonLoadingButton title="Open Modal" onClick={toggleModal} />

      <CommonModal
        sx={{
          '& .MuiDialogContent-root': {
            display: 'flex',
            flexDirection: 'column',
            minHeight: 400, // set min height
          },
        }}
        open={open}
        onClose={toggleModal}
        title="Complete your profile"
      >
        <FormProvider {...documentForm}>
          <form
            onSubmit={documentForm.handleSubmit(handleSubmit)}
            autoComplete="on"
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <CommonStepper steps={steps} activeStep={activeStep} />

            {/* Push DialogActions to the bottom */}
            <Box mt="auto">
              <DialogActions>
                <StyledActionWrapper>
                  <CommonLoadingButton
                    startIcon={<ArrowBack />}
                    variant="outlined"
                    title="Back"
                    onClick={back}
                    disabled={activeStep === 0}
                  />
                  <CommonLoadingButton
                    variant="contained"
                    title={activeStep < steps.length - 1 ? 'Next' : 'Complete'}
                    onClick={handleNext}
                  />
                </StyledActionWrapper>
              </DialogActions>
            </Box>
          </form>
        </FormProvider>
      </CommonModal>
    </Container>
  );
};
