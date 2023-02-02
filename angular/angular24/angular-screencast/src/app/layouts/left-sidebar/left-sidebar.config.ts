import { PATHS } from 'src/app/paths.constants';
import { NavigationItem } from './left-sidebar.interface';

export const navigationConfig: NavigationItem[] = [
  {
    name: 'Dashboard',
    url: `/${PATHS.dashboard}`,
    icon: 'home',
    routerLinkActiveOptions: { exact: true },
  },
  {
    name: 'Hooks',
    url: '/hooks',
    icon: 'sync_problem',
  },
  {
    name: 'Forms',
    url: '/forms',
    icon: 'dynamic_form',
  },
  {
    name: 'Features directives',
    url: '/features',
    icon: 'arrow_forward_ios',
  },
  {
    name: 'Mat dialog',
    url: '/star',
    icon: 'list_alt',
  },
  {
    name: 'Mat table',
    url: '/table',
    icon: 'table_rows_narrow',
  },
  {
    name: 'Tests',
    url: '/tests',
    icon: 'bug_report',
  },
  {
    name: 'Service',
    url: '/service',
    icon: 'snowing',
  },
];



