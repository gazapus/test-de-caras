const size = {
    mobile: '50px',
    tablet: '640px',
    desktop: '1024px',
    desktopL: '1440px',
    desktopXL: '2560px'
}

const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`,
    desktopXL: `(min-width: ${size.desktopXL})`,
};

export default device;