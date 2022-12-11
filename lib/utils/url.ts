export const getCurrentUrl = (pathname: string = '/') => {
  const url = process.env.VERCEL_URL;
  const environment = process.env.VERCEL_ENV;

  const protocol = environment === 'development' ? 'http' : 'https';

  return `${protocol}://${url}${pathname}`;
};
