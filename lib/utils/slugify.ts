import slugify from 'slugify';

export const slugifyIt = (str: string) => {
  return slugify(str.toLowerCase(), '_');
};
