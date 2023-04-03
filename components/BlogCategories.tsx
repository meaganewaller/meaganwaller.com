import Link from 'next/link';
import {
  AiOutlineCode,
  AiOutlineExperiment,
  AiOutlineThunderbolt,
  AiOutlineStar,
  AiOutlineCompass,
} from 'react-icons/ai';

const categories = [
  {
    text: 'Tutorials',
    icon: AiOutlineCode,
    link: '/blog/categories/tutorials',
  },
  {
    text: 'Experiments',
    icon: AiOutlineExperiment,
    link: '/blog/categories/experiments',
  },
  {
    text: 'Tips',
    icon: AiOutlineThunderbolt,
    link: '/blog/categories/tips',
  },
  {
    text: 'Career',
    icon: AiOutlineStar,
    link: '/blog/categories/career',
  },
  {
    text: 'Guides',
    icon: AiOutlineCompass,
    link: '/blog/categories/guides',
  },
];

export function BlogCategories() {
  return (
    <div className="grid grid-cols-5 items-center text-center justify-around w-10/12 mx-auto category-nav">
      {categories.map((category) => (
        <div
          className="h-auto py-4 rounded-lg bg-secondary-darker hover:bg-primary flex-col justify-center items-center relative mx-2 hover:mx-0 border-solid border-2 border-secondary hover:border-secondary-darker hover:translate-y-[-5px] hover:translate-z-0 category-nav_item"
          key={category.link}
          style={{
              boxShadow: "0 14px 26px rgba(0,0,0,0.04)",
              transition: "all 0.3s ease-out"
            }}
        >
          <Link href={category.link} key={category.link}>
            <div className="text-secondary-lighter flex flex-col">
              <category.icon className="text-center mx-auto h-6 w-6 mb-2" />
              <span className="" style={{ fontSize: '1rem' }}>
                {category.text}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
