import { Button, Modal } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { MdReadMore } from "react-icons/md";

const Service = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full py-20 px-4 lg:px-28 bg-[#F9F7F7]">
        <div className="content text-[#3F72AF]">
          <h1 className="text-3xl text-center font-bold">Our Service</h1>
          <span className="line"></span>
          <h1 className="text-3xl text-center font-bold text-red">
            Pelayanan Bidang Konsultan Transportasi, Konstruksi & Teknologi
          </h1>
          <div className="lg:flex space-y-4 lg:space-y-0 justify-center lg:px-0 gap-5 mt-14">
            <div className="overflow-hidden w-full bg-[#3F72AF] rounded shadow-md text-slate-500 shadow-slate-200">
              <div className="p-6">
                <h1 className="mb-4 text-9xl flex mx-auto justify-center items-center">
                  <Icon icon="bi:cone-striped" style={{ color: "#de4512" }} />
                </h1>
                <h1 className="text-center h-20 text-3xl font-bold text-[#DBE2EF]">
                  ANDALALIN
                </h1>
                <Button
                  className="mx-auto mt-20 bg-[#112D4E]"
                  onClick={() => setOpenModal(true)}
                >
                  Read More{" "}
                  <span className="text-lg ml-2">
                    <MdReadMore />
                  </span>
                </Button>
                <Modal
                  dismissible
                  show={openModal}
                  onClose={() => setOpenModal(false)}
                >
                  <Modal.Header>Terms of Service</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union
                        enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of
                        service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        (G.D.P.R.) goes into effect on May 25 and is meant to
                        ensure a common set of data rights in the European
                        Union. It requires organizations to notify users as soon
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>
                      I accept
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="overflow-hidden w-full bg-[#3F72AF] rounded shadow-md text-slate-500 shadow-slate-200">
              <div className="p-6">
                <h1 className="mb-4 text-9xl flex mx-auto justify-center items-center">
                  <Icon icon="fluent-emoji:globe-showing-europe-africa" />
                </h1>
                <h1 className="text-center h-20 text-3xl font-bold text-[#DBE2EF]">
                  RKL - RPL, UKL - UPL, AMDAL
                </h1>
                <Button
                  className="mx-auto mt-20 bg-[#112D4E]"
                  onClick={() => setOpenModal(true)}
                >
                  Read More{" "}
                  <span className="text-lg ml-2">
                    <MdReadMore />
                  </span>
                </Button>
                <Modal
                  dismissible
                  show={openModal}
                  onClose={() => setOpenModal(false)}
                >
                  <Modal.Header>Terms of Service</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union
                        enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of
                        service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        (G.D.P.R.) goes into effect on May 25 and is meant to
                        ensure a common set of data rights in the European
                        Union. It requires organizations to notify users as soon
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>
                      I accept
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="overflow-hidden w-full bg-[#3F72AF] rounded shadow-md text-slate-500 shadow-slate-200">
              <div className="p-6">
                <h1 className="mb-4 text-9xl flex mx-auto justify-center items-center">
                  <Icon icon="twemoji:cityscape" />
                </h1>
                <h1 className="text-center h-20 text-3xl font-bold text-[#DBE2EF]">
                  SLF & PBG
                </h1>
                <Button
                  className="mx-auto mt-20 bg-[#112D4E]"
                  onClick={() => setOpenModal(true)}
                >
                  Read More{" "}
                  <span className="text-lg ml-2">
                    <MdReadMore />
                  </span>
                </Button>
                <Modal
                  dismissible
                  show={openModal}
                  onClose={() => setOpenModal(false)}
                >
                  <Modal.Header>Terms of Service</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union
                        enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of
                        service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        (G.D.P.R.) goes into effect on May 25 and is meant to
                        ensure a common set of data rights in the European
                        Union. It requires organizations to notify users as soon
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>
                      I accept
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
