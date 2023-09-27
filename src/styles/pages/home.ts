import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: '600px',
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '25px',
    cursor: 'pointer',
    position: "relative",
    overflow: 'hidden',

    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: '25px',

        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',

        background: 'rgba(0, 0, 0, 0.8)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg',
            color: '$GRAY1',
        },

        span: {
            fontSize: '$lg',
            fontWeight: 'bold',
            color: '$GREEN1',
        }
    },

    '&:hover': {
        footer: {
            opacity: 1,
            transform: 'translateY(0%)',
        }
    }

})