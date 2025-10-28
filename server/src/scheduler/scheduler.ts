import schedule from './schedule';
import { AppReloadJob } from './Jobs';
import { Scheduler } from './scheduler.types';
import { ifEmpty } from '@pdg/compare';

const scheduler: Scheduler = {
  $jobs: [],
  $start() {
    this.$jobs.forEach((j) => {
      ll('cancel');
      j.cancel();
    });
    this.$jobs = [];
    if (process.env.APP_ENV !== 'local') {
      ll('job start');

      if (contains(['true', '1'], process.env.PM2_RELOAD)) {
        ll(
          `!!! PM2 reload activated! Daily at ${ifEmpty(process.env.PM2_RELOAD_HOUR, '5').padStart(2, '0')}:${ifEmpty(process.env.PM2_RELOAD_MINUTE, '0').padStart(2, '0')} !!!`
        );

        this.$jobs.push(
          schedule.dailyAt(
            Number(ifEmpty(process.env.PM2_RELOAD_HOUR, '5')),
            Number(ifEmpty(process.env.PM2_RELOAD_MINUTE, '0')),
            new AppReloadJob()
          )
        );
      }
    }
  },
};

export default scheduler;
