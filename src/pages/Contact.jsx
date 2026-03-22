function Contact() {
  return (
    <>
      <section className="flex justify-between align-center bg-[#222] text-amber-50">
        <div id="contact_info" className="p-15">
          <h1 className="text-4xl my-3">Contact Us</h1>
          <p>
            Reach out to us today to discuss your event, menu preferences, and
            personalized service requirements.
          </p>

          <div
            className="bg-[#474040] px-3 py-1.5 gap-y-3
          my-2.5 flex align-middle justify-between"
          >
            <img
              src="./phone-ico.svg"
              alt="phone for contact icon"
              className="w-5"
            />
            <p>+91 9944885522</p>
          </div>
          <div className="bg-[#474040] px-3 py-1.5 flex align-middle my-2.5 justify-between">
            <img
              src="./location-ico.svg"
              alt="phone for contact icon"
              className="w-5"
            />
            <p className="w-1/3">
              No: 90/2, Main Road, Kutiyankuppam, Edapalayam, Thokkanampakkam
              Post, Cuddalore Taluk
            </p>
          </div>
        </div>
        <img src="./contactus.svg" alt="contact us" className="h-screen" />
      </section>
    </>
  );
}

export default Contact;
