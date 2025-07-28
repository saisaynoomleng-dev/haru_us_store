import localFont from 'next/font/local';

export const Objectivity = localFont({
  src: [
    {
      path: '../app/fonts/Objectivity-Thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/fonts/Objectivity-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/Objectivity-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/Objectivity-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/Objectivity-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/Objectivity-ExtraBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/Objectivity-Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../app/fonts/Objectivity-Super.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-objectivity',
});
