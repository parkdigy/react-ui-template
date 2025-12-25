import l from '@loadable/component';

const Alert = l(() => import('./Alert'), loadable.options) as unknown as typeof import('./Alert').default;

export { Alert };

export default Alert;

export * from './Alert.types';
