import "./page.css";

export default function Footer() {
  return (
    <footer className="bg-none text-black border-t border-[#D9D9D9] pt-10">
      <div className="container mx-auto px-4">
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="fw-bolder text-[1.25rem] text-primary">
              MORENT
            </h1>
            <p className="text-[#9F9F9F] font-light">Our vision is to provide convence</p>
              <p className="text-size text-[#9F9F9F] font-light">and help and increase your sales business</p>
          </div>
          <div className="d-flex justify-content-around w-50">
          <div>
            <h1 className="font-medium text-[1.25rem] max-sm:leading-6">About</h1>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">How its work</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Featured</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Partnership</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Business Relation</p>
          </div>
          <div>
            <h1 className="font-medium text-[1.25rem] max-sm:leading-6">Community</h1>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Events</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Blog</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Podcast</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Invite a Friend</p>
          </div>
          <div>
            <h1 className="font-medium text-[1.25rem] max-sm:leading-6">Social</h1>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Discord</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Instagram</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Twitter</p>
            <p className="font-semibold leading-[1.2rem] text-[#9F9F9F]  max-sm:leading-5">Facebook</p>
          </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[#D9D9D9] text-zinc-800 d-flex justify-content-between">
            <div>
              <p className="py-6">©2022 MORENT. All right reserved</p>
            </div>
            <div className="mt-4 ">
              <p>
                Privacy & Policy<span className="ms-5">Terms & Condition</span>
              </p>
            </div>
          </div>

      </div>
    </footer>
  );
}
