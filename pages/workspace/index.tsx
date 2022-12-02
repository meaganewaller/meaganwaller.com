// import { WorkspaceList } from '@components/WorkspaceList';
import PageLayout from '@components/PageLayout';
import { GetStaticProps } from 'next';
import { WorkspaceSection, WorkspaceData } from '@localTypes/workspace';
import { convertToWorkspaceSections, getWorkspaceItems } from '@lib/notion/workspace';
import { useEffect, useState } from 'react';
import { Section } from '@components/Section';
import { WorkspaceList } from '@components/WorkspaceList';

interface Props {
  workspace: WorkspaceData[];
  sections: string[];
}

export default function Workspace({ workspace, sections }: Props): ReactElement {
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredItems = workspace
  .filter((item) => {
    return (
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.section.name.toLowerCase() === searchValue.toLowerCase() ||
        item.tags.some((el) => el.name.toLowerCase() === searchValue.toLowerCase())
    );
  });

  useEffect(() => {
    setSearchValue(selectedSection);
  }, [selectedSection]);

  return (
    <PageLayout title="Workspace - Meagan Waller">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          My Workspace
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          All the tools I use to get work done.
        </span>
      </h1>
      <div className="relative my-12 overflow-x-auto">
        <div className="flex space-x-2 not-prose">
          <svg
            className="flex-none w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path
              d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z"
              className="stroke-slate-400 dark:stroke-slate-300"
            ></path>
            <path
              d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5"
              className="stroke-teal-400"
            ></path>
          </svg>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Scroll to view various categories
          </p>
        </div>
        <ul className="flex w-full gap-6 py-8 overflow-x-auto snap-x">
          {/* Initial section for all items */}
          <div className="scroll-ml-6 snap-normal snap-start shrink-0">
            <Section activeSection={selectedSection} section="" cb={() => setSelectedSection('')} />
          </div>
          {sections &&
            sections.map((section) => (
              <div
                key={section}
                className="scroll-ml-6 snap-normal snap-start shrink-0"
              >
                <Section
                  activeSection={selectedSection}
                  section={section}
                  cb={() => setSelectedSection(section)}
                  />
              </div>
            ))}
        </ul>
        <div className="absolute w-8 h-16 top-[40px] left-0 bg-gradient-to-r from-champagne dark:from-dark"></div>
        <div className="absolute w-8 h-16 top-[40px] right-0 bg-gradient-to-l from-champagne dark:from-dark"></div>
      </div>

      <div className="min-h-screen space-y-12">
        {!filteredItems.length && (
          <div className="w-full mx-auto rounded-lg bg-[#F8FAFC] dark:bg-onyx p-4">
            <p className="flex items-center justify-center text-2xl">
              No tools found{' '}
              <span>
                <svg className="ml-3 w-7 h-7" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.75 15.25C7.75 15.25 9 12.75 12 12.75C15 12.75 16.25 15.25 16.25 15.25"
                  ></path>
                  <circle cx="14" cy="10" r="1" fill="currentColor"></circle>
                  <circle cx="10" cy="10" r="1" fill="currentColor"></circle>
                </svg>
              </span>
            </p>
          </div>
        )}
        <WorkspaceList items={filteredItems} />
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false}) => {
  const data = await getWorkspaceItems();
  const { sections, workspace } = convertToWorkspaceSections(data);

  let workspaceItems = workspace;

  if (!preview || preview === undefined) {
    workspaceItems = workspaceItems.filter((item: WorkspaceData) => item.isPublic === true);
  }

  return {
    props: {
      workspace: workspaceItems,
      sections
    },
    revalidate: 30
  };
};
