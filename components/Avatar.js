import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      //   width={80}
      //   height={80}
      src={url}
      alt="profile pic"
      className={`cursor-pointer h-12 rounded-full transition duration-150 transform hover:scale-110 hover:animate-bounce ${className}`}
    />
  );
}

export default Avatar;
