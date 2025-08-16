import { SxProps, Theme } from '@mui/material';

export const styles = {
  container: {
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    background: 'rgb(26, 32, 58)',
    minHeight: '100vh',
    padding: 0,
  } as SxProps<Theme>,

  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 3,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  } as SxProps<Theme>,

  cardContent: {
    padding: 4,
    '&:last-child': {
      paddingBottom: 4,
    },
  } as SxProps<Theme>,

  header: {
    textAlign: 'center',
    marginBottom: 3,
  } as SxProps<Theme>,

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
  } as SxProps<Theme>,

  icon: {
    fontSize: 32,
    color: 'white',
  } as SxProps<Theme>,

  title: {
    fontWeight: 700,
    marginBottom: 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } as SxProps<Theme>,

  subtitle: {
    color: 'text.secondary',
    opacity: 0.8,
  } as SxProps<Theme>,

  alert: {
    marginBottom: 2,
  } as SxProps<Theme>,

  footer: {
    marginTop: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
  } as SxProps<Theme>,

  link: {
    textDecoration: 'none',
    color: 'primary.main',
    '&:hover': {
      textDecoration: 'underline',
    },
  } as SxProps<Theme>,
};
