let config = {
    host: process.env.NODE_ENV === 'development' ? '' : '',
    port: process.env.NODE_ENV === 'development' ? '' : '',
    apiBaseUrl: '/api/'
};
export default config;
