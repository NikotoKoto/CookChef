const breakpoints = {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px'
};

const media = Object.keys(breakpoints).reduce((acc,label) => {
    acc[label] = (styles) => `
        @media (max-width: ${breakpoints[label]}){
        ${styles}
        }
    `;
    return acc;
}, {});

export default media;