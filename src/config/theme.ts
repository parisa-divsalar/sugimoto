const darkThemePalette = {
  mode: 'dark',
  primary: {
    main: '#3572EF',
    light: '#b2cafa',
  },
  secondary: {
    main: '#0c0101',
  },
  background: {
    paper: '#3a3a3a',
    main: '#006769',
    dark: '#232526',
    default: '#252525',
  },
  info: {
    main: '#0E2954',
  },
  text: {
    main: '#FFFFFF',
    darker: '#DCDFE1',
    dark: '#6A6E73',
  },
  grey: {
    light: '#999',
    A100: '#4a4a4a',
    A200: '#5a5a5a',
    900: '#3572EF',
  },
  action: {
    main: '#6A6E73',
    dark: '#232526',
  },
  typography: {
    h1: {
      color: '#fff',
    },
  },
};

const lightThemePalette = {
  mode: 'light',
  primary: {
    main: '#3572EF',
    lighter: '#EEF7FF',
    light: '#CDE8E5',
    dark: '#3ABEF9',
    darker: '#050C9C',
  },
  info: {
    main: '#b2cbff',
  },
  secondary: {
    main: '#AD49E1',
    lighter: '#B3CDE0',
    light: '#0C6AB0',
    dark: '#084387',
    darker: '#7A1CAC',
  },
  success: {
    main: '#00CC8F',
    lighter: '#CCF5E9',
    light: '#E6FAF4',
    dark: '#00996B',
    darker: '#003324',
  },
  error: {
    main: '#CC0056',
    lighter: '#F5CCDD',
    light: '#FAE6EF',
    dark: '#990041',
    darker: '#330016',
  },
  text: {
    main: '#232526',
    darker: '#232526',
    dark: '#474A4D',
    light: '#6A6E73',
    lighter: '#DCDFE1',
    lightest: '#FFFFFF',
  },
  inherit: {
    main: '#fff',
  },
  action: {
    main: '#232526',
    dark: '#232526',
  },
  grey: {
    darker: '#333',
    dark: '#666',
    light: '#999',
    lighter: '#bbb',
    lightest: '#cdcdcd',
    900: '#3572EF',
    A100: '#f5f5f5',
    A200: '#fafafa',
  },
  background: {
    default: '#FFF',
    paper: '#eaeaea',
    main: '#EEF7FF',
    darkest: '#232526',
    darker: '#A4A9AD',
    dark: '#C8CBD0',
    light: '#F4F5F7',
    lightest: '#FFFFFF',
    footer: '#F1F8FD',
  },
  typography: {
    h1: {
      color: '#000',
    },
  },
};

const themes = {
  dark: darkThemePalette,
  light: lightThemePalette,
};

export const getDesignTokens: any = (darkMode: 'dark' | 'light') => {
  return {
    palette: themes[darkMode],
    breakpoints: {
      values: {
        xxs: 0,
        xs: 320,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1280,
      },
    },
    typography: {
      h1: {
        fontSize: '1.125rem',
        fontWeight: '600',
      },

      h2: {
        fontSize: '1rem',
        fontWeight: '600',
      },

      h3: {
        fontSize: '1rem',
        fontWeight: '600',
      },

      h4: {
        fontSize: '0.875rem',
        fontWeight: '600',
      },

      h6: {
        fontSize: '0.875rem',
        fontWeight: '600',
      },

      subtitle1: {
        fontSize: '.875rem',
        fontWeight: '600',
        lineHeight: '1.5rem',
      },

      subtitle2: {
        fontSize: '.875rem',
        fontWeight: '500',
        lineHeight: '1.5rem',
      },

      body1: {
        fontSize: '.875rem',
        fontWeight: '400',
      },

      body: {
        fontSize: '.875rem',
        fontWeight: '400',
      },

      bodySelected: {
        fontSize: '.875rem',
        fontWeight: '700',
        lineHeight: '1rem',
      },

      paragraph: {
        fontSize: '.875rem',
        lineHeight: '1.5rem',
      },

      caption: {
        fontSize: '.75rem',
        lineHeight: '0.75rem',
      },

      badge: {
        fontSize: '0.625rem',
        lineHeight: '0.75rem',
      },

      paragraphSelected: {
        fontSize: '0.875rem',
        fontWeight: '600',
        lineHeight: '1.5rem',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: (props: any) => ({
            boxShadow: 'none !important',
            borderRadius: '1.25rem',
            height: '2.5rem',
            fontSize: '0.875rem',
            ...(props.disabled ? { color: '#fff !important' } : {}),

            '&:hover': {
              boxShadow: 'none !important',
            },
          }),

          contained: {
            color: 'white',
            fontWeight: '600',

            '&:disabled': {
              opacity: '0.5',
              backgroundColor: '#999',
            },

            '&:hover': {
              backgroundColor: '#3062ca',
              boxShadow: 'none !important',
            },
          },
          secondary: {
            border: '1px solid #ddd',
          },
          outlined: {
            height: '2.5rem',
            fontSize: '0.875rem  ',
            fontWeight: '400',

            '&:disabled': {
              opacity: '0.5',
              color: '#B3CDE0',
            },
          },

          text: {
            color: '#232526',
            fontWeight: '600',
            backgroundColor: 'transparent !important',
          },

          loading: {
            background: '#ECECEC !important',
            color: '#8B8B8B',
            fontWeight: '600',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: themes['dark'].background.default,
            backgroundImage: 'none',
            border: '1px solid #444',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            lineHeight: '1.5rem',
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            transform: 'rotate(180deg)',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            margin: '0.7rem auto',
            height: '2.7rem',
            padding: '0 0.5rem',
            borderRadius: '0.75rem',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          autoComplete: 'off',
          inputProps: {
            autoComplete: 'off',
          },
        },
        styleOverrides: {
          root: {
            width: '100%',
            margin: '0.7rem auto',

            '& .MuiOutlinedInput-input ': {
              height: '1rem',
            },

            '& [class*="MuiOutlinedInput"]': {
              textAlign: 'right',
              borderRadius: '0.75rem',
            },

            '& .MuiInputLabel-root': {
              color: themes['dark'].text.main,
            },

            '& label': {
              transformOrigin: 'right !important',
              left: 'inherit !important',
              right: '1.75rem !important',
              fontSize: 'small',
              color: '#807D7B',
              fontWeight: 400,
              overflow: 'unset',
            },

            '& .MuiFormHelperText-root': {
              textAlign: 'right',
              marginRight: '0',
              marginTop: '.5rem',
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            borderBottom: '2px solid #DCDFE1',
            width: 'fit-content',
          },
          indicator: {
            // borderBottom: `2px solid ${themes[darkMode].secondary.main}`,
          },
        },
      },
      MuiTab: {
        // MuiTabs-flexContainer
        styleOverrides: {
          root: {
            color: '#232526',
            fontWeight: 'bold',
          },
        },
      },
      MuiPagination: {
        defaultProps: {},
        styleOverrides: {
          root: {
            display: 'flex',
            justifyContent: 'flex-end',
            direction: 'rtl',
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            flex: 1,
            marginRight: '0',
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            fontWeight: '700',
            lineHeight: '1.5rem',
            // color: '#232526 !important',

            '& .MuiPaginationItem-icon': {
              transform: 'rotate(180deg) !important',
              filter:
                'brightness(0) saturate(100%) invert(44%) sepia(12%) saturate(2462%) hue-rotate(175deg) brightness(94%) contrast(87%)',
            },
          },
        },
      },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              opacity: '0.3',
            },
          },
        },
      },
    },
  };
};
