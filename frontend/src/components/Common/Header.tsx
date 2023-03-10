import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import SpecialistExamination from "assets/khamchuyenkhoa.png";
import RemoteExamination from "assets/khamtuxa.png";
import GeneralExamination from "assets/khamtongquat.png";
import MedicalTest from "assets/dichvuxetnghiem.png";
import MentalHealth from "assets/suckhoetinhthan.png";
import DentalExamination from "assets/khamnhakhoa.png";
import SurgeryPackage from "assets/phau-thuat.jpg";
import MedicalProduct from "assets/khamtainha.png";
import BussinessHealth from "assets/icon-lich-su.jpg";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setLanguage } from "redux/languageSlice";
import { FormattedMessage } from "react-intl";
import { languages } from "utils";
interface Props {}

const Header = (props: Props) => {
  const { language } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="left-content">
            <div className="">
              <AiOutlineMenu className="icon-menu" />
            </div>
            <div className="header-logo"></div>
          </div>
          <div className="center-content">
            <div className="child-content">
              <p className="child-content-title">
                <FormattedMessage id="HomeHeader.speciality" />
              </p>
              <p className="child-content-desc">
                <FormattedMessage id="HomeHeader.searchDoctor" />
              </p>
            </div>
            <div className="child-content">
              <p className="child-content-title">
                <FormattedMessage id="HomeHeader.healthFacility" />
              </p>
              <p className="child-content-desc">
                <FormattedMessage id="HomeHeader.selectRoom" />
              </p>
            </div>
            <div className="child-content">
              <p className="child-content-title">
                <FormattedMessage id="HomeHeader.doctor" />
              </p>
              <p className="child-content-desc">
                <FormattedMessage id="HomeHeader.selectDoctor" />
              </p>
            </div>
            <div className="child-content">
              <p className="child-content-title">
                <FormattedMessage id="HomeHeader.checkPackage" />
              </p>
              <p className="child-content-desc">
                <FormattedMessage id="HomeHeader.generalHealthCheck" />
              </p>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <div className="">
                <BsFillQuestionCircleFill className="icon" />
              </div>
              <p>
                <FormattedMessage id="HomeHeader.support" />
              </p>
            </div>
            <div className="d-flex gap-2">
              <button
                onClick={() => {
                  dispatch(setLanguage(languages.VI));
                }}
                className={`flag ${language === languages.VI ? "active" : ""}`}
              >
                VN
              </button>
              <button
                onClick={() => {
                  dispatch(setLanguage(languages.EN));
                }}
                className={`flag ${language === languages.EN ? "active" : ""}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-banner">
        <div className="header-banner-overlay">
          {/* Title */}
          <div className="title">
            <h1 className="text-center">
              <p className="title-top">
                <FormattedMessage id="Banner.titleTop" />
              </p>
              <p className="title-bottom">
                <FormattedMessage id="Banner.titleBottom" />
              </p>
            </h1>
          </div>
          {/* Search */}
          <div className="header-input-search">
            <div className="header-input-search-wrapper">
              <div className="search-icon">
                <AiOutlineSearch />
              </div>
              <input
                type="text"
                placeholder={
                  language === languages.VI
                    ? "Nhập nội dung cần tìm kiếm..."
                    : "Enter content that you want to find..."
                }
              />
            </div>
          </div>
          {/* Application*/}
          <div className="header-application">
            <div className="header-application-wrapper">
              <div className="google-play"></div>
              <div className="app-store"></div>
            </div>
          </div>
        </div>

        {/* Options*/}
        <div className="header-options">
          <div className="header-options-wrapper">
            <div className="option-item">
              <img src={SpecialistExamination} alt="" />
              <p>
                <FormattedMessage id="Options.specializeCheck" />
              </p>
            </div>
            <div className="option-item">
              <img src={RemoteExamination} alt="" />
              <p>
                <FormattedMessage id="Options.remoteCheck" />
              </p>
            </div>
            <div className="option-item">
              <img src={GeneralExamination} alt="" />
              <p>
                <FormattedMessage id="Options.generalCheck" />
              </p>
            </div>
            <div className="option-item">
              <img src={MedicalTest} alt="" />
              <p>
                <FormattedMessage id="Options.medicalCheck" />
              </p>
            </div>
            <div className="option-item">
              <img src={MentalHealth} alt="" />
              <p>
                <FormattedMessage id="Options.mentalHealth" />
              </p>
            </div>
            <div className="option-item">
              <img src={DentalExamination} alt="" />
              <p>
                <FormattedMessage id="Options.dentalCheck" />
              </p>
            </div>
            <div className="option-item">
              <img src={SurgeryPackage} alt="" />
              <p>
                <FormattedMessage id="Options.surgeryPackage" />
              </p>
            </div>
            <div className="option-item">
              <img src={MedicalProduct} alt="" />
              <p>
                <FormattedMessage id="Options.medicalProduct" />
              </p>
            </div>
            <div className="option-item">
              <img src={BussinessHealth} alt="" />
              <p>
                <FormattedMessage id="Options.corporateHealth" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
