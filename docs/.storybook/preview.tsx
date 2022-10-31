import '@ui-kit-2022/theme/dist/style.css';

import { themes } from '@storybook/theming';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';

import { light, dark } from '@ui-kit-2022/theme';
import { useDarkMode } from 'storybook-dark-mode';
//Included React import since sometimes not including it can result in a build failure
import * as React from 'react';

const themeDefaults = {
  brandTitle: 'Adaptive UI Kit 2022',
  brandUrl: 'https://weareadaptive.com/',
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      ...themeDefaults,
      appBg: '#323232',
      appContentBg: '#323232',
      brandImage: 'brand-logo.light.svg',
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      ...themeDefaults,
      appBg: '#FFFFFF',
      appContentBg: '#F9F9F9',
      brandImage: 'brand-logo.dark.svg',
    },
  },
};

export const decorators = [
  (Story) => {
    const isDarkMode = useDarkMode();
    const theme = isDarkMode ? dark : light;

    const StoryContainer = styled.div(() => ({
      margin: 0,
      padding: '1rem',
      width: '100%',
      height: '100%',
      backgroundColor: `${isDarkMode ? '#323232' : '#F9F9F9'}`,
    }));

    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StoryContainer>
            <Story />
          </StoryContainer>
        </ThemeProvider>
      </>
    );
  },
];
