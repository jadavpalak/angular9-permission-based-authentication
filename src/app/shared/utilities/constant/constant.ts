export const constants = {
    SENSOR_NAME: 'AmbientLightSensor',
    SENSOR_POLICY_NAME: 'ambient-light-sensor',
    ACCESS_DENIED: 'denied',
    THEME_OPTIONS_URL: '/assets/options.json',
    THEME_BASE_PATH: 'node_modules/@angular/material/prebuilt-themes',
    STYLE_TO_SET: 'theme',
    DARK_THEME: 'pink-bluegrey',
    LIGHT_THEME: 'deeppurple-amber',

    ERROR_TYPES: {
        SECURITY: 'SecurityError',
        REFERENCE: 'ReferenceError',
        NOT_ALLOWED: 'NotAllowedError',
        NOT_READABLE: 'NotReadableError'
    },

    ERROR_MESSAGES: {
        UNSUPPORTED_FEATURE: 'Your browser doesn\'t support this feature',
        BLOCKED_BY_FEATURE_POLICY: 'Sensor construction was blocked by a feature policy.',
        NOT_SUPPORTED_BY_USER_AGENT: 'Sensor is not supported by the User-Agent.',
        PREMISSION_DENIED: 'Permission to use the ambient light sensor is denied.',
        CANNOT_CONNECT: 'Cannot connect to the sensor.'
    },
}