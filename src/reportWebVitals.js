import { getCLS, getFID, getFCP, getLCP } from 'web-vitals';


const sendToAnalytics = (metric) => {
    console.log(metric); // or send to analytics endpoint
};

export const reportWebVitals = () => {
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
};
