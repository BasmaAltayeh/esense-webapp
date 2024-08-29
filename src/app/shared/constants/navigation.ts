import { navigationItem } from '../models/navigation.interface';

export const NAVIGATION_ITEMS: navigationItem[] = [
  {
    label: 'مجموعة المستلمين من الجهات الخارجية',
    link: '/users/settings',
    subItems: [
        {
          label: 'اعدادات النظام',
          link: 'users/settings',
        },
        {
            label: 'لوحة القيادة',
            link: 'users/control',
          },
      ],
  },
  {
    label: 'مجموعة الجهات الداخلية',
    link: '/names',
    subItems: [],
  }
];
