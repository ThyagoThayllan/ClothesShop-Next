import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexFlow: 'column',
    width: '100%',
    minHeight: '100vh',
})

export const Header = styled('header', {
    display: 'flex',
    padding: '2rem 0',
    margin: '0 auto',
    maxWidth: '1180px',
    width: '100%',
    gap: '0.5rem',

    'div strong': {
        fontSize: '1.5rem'
    }

})