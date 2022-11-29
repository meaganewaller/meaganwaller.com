import Image, { ImageProps } from "next/image";

export const PostImage = (props: ImageProps) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-xl shadow-lg inline-flex">
        <Image
          className={`rounded-xl m-b ${props.className}`}
          {...props}
        />
      </div>
    </div>
  );
};
