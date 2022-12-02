interface Props {
  section: string;
  cb: Function;
  activeSection: string;
}

export function Section({ section, cb, activeSection }: Props) {
  return (
    <button
      onClick={() => cb()}
      className={`mr-4 rounded-full px-6 py-1 ${activeSection === section && 'ring-2 ring-teal-500 text-teal-500'} hover:ring-2 hover:ring-gray-300 `}
    >
      <span className="text-base font-medium uppercase">
        {section === '' ? 'all' : section}
      </span>
    </button>
  );
}
