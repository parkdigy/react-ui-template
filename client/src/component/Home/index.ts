import l from '@loadable/component';

const Home = l(() => import('./Home'), loadable.options) as unknown as typeof import('./Home').default;

export { Home };

export default Home;
