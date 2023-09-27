import { createStitches } from "@stitches/react";

export const { config, styled, globalCss, keyframes, getCssText, theme, createTheme, css } = createStitches({
    theme: {
        colors: {
            GOLD1: '#DAA520',
            GOLD2: '#c18f00',

            GRAY1: '#F2F2F2',
            GRAY2: '#D9D9D9',
            GRAY3: '#808080',
            GRAY4: '#333333',
            GRAY5: '#262626',
            GRAY6: '#1A1A1A',
            GRAY7: '#0D0D0D',

            GREEN1: '#008000',
            GREEN2: '#0f6a08',

            RED1: '#8b0000',
            RED2: '#740a01',

            white: '#fff',
            black: '#000',
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        },
    }
})