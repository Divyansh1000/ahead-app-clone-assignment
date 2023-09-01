import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center my-12 border-t-2  ">
      <Image src="/logo.png" alt="logo" width={60} height={100} />

      <h1 className="text-2xl  text-violet-800 font-semibold"> ahead</h1>

      <div className="flex m-12 ">
        <Image src="/location-pin.png" alt="location" width={20} height={100} />
        <p className="mx-5">AugustsraBe 26, 10117 Berlin</p>

        <Image src="/email.png" alt="email" width={20} height={100} />
        <p className="mx-5">hi@ahead-app.com</p>
      </div>

      <Image
        src="/appStoreLogo.png"
        alt="appStoreLogo"
        width={150}
        height={20}
      />

      <p className="mt-8">@2023 Ahead app. All right reserved</p>
    </footer>
  );
};

export default Footer;
