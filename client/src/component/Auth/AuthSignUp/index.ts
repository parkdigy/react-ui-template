import l from '@loadable/component';

const AuthSignUp = l(() => import(/* webpackChunkName: "auth-sign-up" */ './AuthSignUp'), loadable.options);

export { AuthSignUp };

export default AuthSignUp;

export * from './AuthSignUp.types';
