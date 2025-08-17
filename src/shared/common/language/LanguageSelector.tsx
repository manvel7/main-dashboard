import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Select, MenuItem, FormControl, Box, Typography } from '@mui/material';
import { useLanguageSelector } from '@shared/hooks/useLanguageSelector';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1, 1.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));

const LanguageOption = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

const FlagIcon = styled('span')(() => ({
  fontSize: '18px',
  lineHeight: 1,
}));

const LanguageName = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 500,
}));

const LanguageSelector: React.FC = () => {
  const {
    languages,
    currentLanguageCode,
    handleLanguageChange: changeLanguage,
    getTranslatedLanguageName,
  } = useLanguageSelector();

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <StyledFormControl variant="outlined" size="small">
      <Select
        ref={selectRef}
        value={currentLanguageCode}
        onChange={handleLanguageChange}
        displayEmpty
        renderValue={(value) => {
          const currentLang = languages.find((lang) => lang.code === value);
          return (
            <LanguageOption>
              <FlagIcon>{currentLang?.flag}</FlagIcon>
              <LanguageName>
                {getTranslatedLanguageName(currentLang?.name || 'English')}
              </LanguageName>
            </LanguageOption>
          );
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            <LanguageOption>
              <FlagIcon>{language.flag}</FlagIcon>
              <LanguageName>
                {getTranslatedLanguageName(language.name)}
              </LanguageName>
            </LanguageOption>
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default LanguageSelector;
