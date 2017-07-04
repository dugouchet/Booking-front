import config from '../config.json';
import appConfig from '$core/config';
import getProperty from 'lodash/get';

// copied from offers-tfm-front-plugin
// @TODO make it a shared util
export const getEndpoint = (key, params) => {
    const rootKey = key.split('.')[0];
    let value = getProperty(config, key);

    if (rootKey !== key && appConfig[`base_${rootKey}`]) {
        const base = appConfig[`base_${rootKey}`];
        value = `${base}${value}`;
    }

    if (params) {
        Object.keys(params).forEach(paramKey => {
            const replacement = params[paramKey];
        if (replacement != null) { // eslint disable eqeqeq
            value = value.replace(`:${paramKey}`, replacement);
        }
    });
    }

    value = value.replace(/(\/:)([^\/]+)/g, '');

    return value;
};

export default config;