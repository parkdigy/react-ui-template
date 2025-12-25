import l from '@loadable/component';

const AuthSignUp = l(() => import('./AuthSignUp'), loadable.options);

export { AuthSignUp };

export default AuthSignUp;

export * from './AuthSignUp.types';
