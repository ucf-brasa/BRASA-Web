import ModalWrapper from "@components/ModalWrapper";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EBOARD_MEMBERS } from "@util/constants";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface Props {
  id: number;
  isMobile: boolean;
}

const BoardModal: FC<Props> = ({ id, isMobile }) => {
  const officer = EBOARD_MEMBERS.find((member) => member.id === id);
  if (!officer) return null;
  const { image, imageAlt, officerName, officerTitle } = officer;
  const officerLinkedIn = "https://www.linkedin.com/in/pedro-fachetti-carvalho/";

  return (
    <ModalWrapper>
      <div className="border shadow-lg rounded-md bg-white">
        {/* Modal Header */}
        <div id="modal-header">
          <div className="w-full flex flex-row items-center justify-between p-8 px-6 border-b-1 border-b-black">
            <p className="justify-self-start font-semi-bold text-3xl">{officerTitle}</p>
            {/* Navigates back to the base URL - closing the modal (TODO: CHANGE TO STATE MODAL) */}
            <Link
              href="/meet-the-board"
              className="px-4 py-2 bg-gray-400 text-white text-base font-medium 
              rounded-md shadow-md hover:bg-main-brasa-blue transition duration-200 ease-in-out"
            >
              <FontAwesomeIcon icon={faClose} />
            </Link>
          </div>
        </div>
        <hr />

        {/* Modal Body */}
        <div id="modal-body" className="border-b-1 border-b-black">
          <div className="flex flex-row">
            <Image
              src={image}
              alt={imageAlt}
              className="block w-auto h-auto max-w-[30rem] max-h-[40rem]"
            />
            {/* Description */}
            <div className="p-8">
              <h3 className="font-semi-bold text-xl tracking-[0.02em]">Description</h3>
              <p className="font-regular text-base max-w-lg mt-4">
                Looking to meet new Brazilian students at UCF? We got your back! Come eat some
                coxinhas with us at our hangouts! Looking to meet new Brazilian students at UCF? We
                got your back! Come eat some coxinhas with us at our hangouts!
              </p>
            </div>
          </div>
        </div>
        <hr />

        {/* Modal Actions */}
        <div
          id="modal-actions"
          className="h-20 bg-light-grey flex flex-row items-center justify-end pr-5"
        >
          <a href={officerLinkedIn} className="flex justify-center items-center" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#008cff" }} className="w-5 h-5" />
            <p className="pl-1 font-regular text-regular text-gray-500">
              Connect with {officerName}!
            </p>
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BoardModal;
