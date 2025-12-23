import l from '@loadable/component';

const Home = l(
  () => import(/* webpackChunkName: "home" */ './Home'),
  loadable.options
) as unknown as typeof import('./Home').default;

export { Home };

export default Home;
