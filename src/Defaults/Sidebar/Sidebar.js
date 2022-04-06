/*eslint-disable*/
import React from "react";
import { Link, useLocation }  from "react-router-dom";

import './Sidebar.css'

import IconFormat from "../../assets/IconFormat";

import * as Icons from "react-icons/gi";
import * as IconT from "react-icons/md";

import * as IconBack from 'react-icons/io5';



import SideCard from "../../Components/SideCard";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState("hidden ");

  const location = useLocation();

  const iconColor = "#696D8C";
  const iconHoverColor = "#6837EF"
  
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden border-r-1 border-border-color bg-white flex flex-wrap items-center justify-between relative md:w-56 xl:w-64 z-10 ">
        <div className=" px-2 xl:px-4 md:px-0 md:flex-col md:items-stretch md:min-h-full md:flex-nowrap flex items-center justify-between w-full mx-auto  ">
          
          <button
            className="h-12 w-12 cursor-pointer text-black opacity-50 md:hidden mt-2 mr-2 px-3 py-1 text-base leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <Icons.GiHamburgerMenu />
          </button>
          
          <SideCard/>
          
          
          <div
            className={
              " md:flex md:flex-col md:items-stretch md:opacity-100 md:relative  md:mt-4 md:shadow-none absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                    <div className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm p-4 px-0">
                     <h3>Metacare</h3>
                     <p>adeyinka@metacare.app</p>
                   </div>
                  
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <IconT.MdClose className="text-black"/>
                  </button>
                </div>
              </div>
            </div>
            

            <ul className="px-4 py-2 md:flex-col md:min-w-full flex flex-col list-none">
              

            <li className="items-center">
                <Link
                  className={
                    "flex items-center justify-between w-full text-sm capitalize py-3  rounded-md pl-2 " +
                    (location.pathname === "/dashboard/Admin"
                      ? "text-primary-purple hover:bg-border-background  rounded-md"
                      : "text-body-black  ")
                  }
                  to="/dashboard/Admin"
                >
                  <div className="flex items-center justify-end hover:text-primary-purple">
                  <IconFormat messages color={location.pathname === "/dashboard/Admin" ? iconHoverColor : iconColor} className={
                      "mr-2 text-sm " +
                      (location.pathname === "/dashboard/Admin"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }/>{" "}
                  <p className={` ${location.pathname === "/dashboard/Admin"
                      ? "text-primary-purple font-bold"
                      : "text-body-black font-normal"}`}>Admin</p>
                  </div>
                  <IconBack.IoChevronForward className={` ${location.pathname === "/dashboard/Admin"
                      ? "text-primary-purple  "
                      : "text-back-icon "}`} ></IconBack.IoChevronForward>
                </Link>
              </li>


              <li className="items-center">
                <Link
                  className={
                    "flex items-center justify-between w-full text-sm capitalize hover:bg-border-background py-3 font-bold rounded-md pl-2 " +
                    (location.pathname === "/dashboard/knowledge-base"
                      ? "text-primary-purple  rounded-md"
                      : "text-body-black font-normal  ")
                  }
                  to="/dashboard/knowledge-base"
                >
                  <div className="flex items-center justify-end hover:text-primary-purple">
                  <IconFormat projects color={location.pathname === "/dashboard/knowledge-base" ? iconHoverColor : iconColor} className={
                      "mr-2 text-sm " +
                      (location.pathname === "/dashboard/knowledge-base"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }/>{" "}
                  <p className={` ${location.pathname === "/dashboard/knowledge-base"
                      ? "text-primary-purple font-bold"
                      : "text-body-black font-normal"}`}>Knowledge Base</p>
                  </div>
                  <IconBack.IoChevronForward className={` ${location.pathname === "/dashboard/knowledge-base"
                      ? "text-primary-purple "
                      : "text-back-icon"}`} ></IconBack.IoChevronForward>
                </Link>
              </li>


              <li className="items-center">
                <Link
                  className={
                    "flex items-center justify-between w-full text-sm capitalize hover:bg-border-background py-3 font-bold rounded-md pl-2 " +
                    (location.pathname === "/dashboard/train-sam"
                      ? "text-primary-purple  rounded-md"
                      : "text-body-black font-thin  ")
                  }
                  to="/dashboard/train-sam"
                >
                  <div className="flex items-center justify-end hover:text-primary-purple">
                  <IconFormat projects color={location.pathname === "/dashboard/train-sam" ? iconHoverColor : iconColor} className={
                      "mr-2 text-sm " +
                      (location.pathname === "/dashboard/train-sam"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }/>{" "}
                  <p className={` ${location.pathname === "/dashboard/train-sam"
                      ? "text-primary-purple font-bold"
                      : "text-body-black font-normal"}`}>Train SAM</p>
                  </div>
                  <IconBack.IoChevronForward className={` ${location.pathname === "/dashboard/train-sam"
                      ? "text-primary-purple "
                      : "text-back-icon "}`} ></IconBack.IoChevronForward>
                </Link>
              </li>


              <li className="items-center">
                <Link
                  className={
                    "flex items-center justify-between w-full text-sm capitalize hover:bg-border-background py-3 font-bold rounded-md pl-2 " +
                    (location.pathname === "/dashboard/agent-inbox"
                      ? "text-primary-purple  rounded-md"
                      : "text-body-black font-thin  ")
                  }
                  to="/dashboard/agent-inbox"
                >
                  <div className="flex items-center justify-end hover:text-primary-purple">
                  <IconFormat schedule color={location.pathname === "/dashboard/agent-inbox" ? iconHoverColor : iconColor} className={
                      "mr-2 text-sm " +
                      (location.pathname === "/dashboard/agent-inbox"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }/>{" "}
                  <p className={` ${location.pathname === "/dashboard/agent-inbox"
                      ? "text-primary-purple font-bold"
                      : "text-body-black font-normal"}`}>Agent Inbox</p>
                  </div>
                  <IconBack.IoChevronForward className={` ${location.pathname === "/dashboard/agent-inbox"
                      ? "text-primary-purple "
                      : "text-back-icon "}`} ></IconBack.IoChevronForward>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "flex items-center justify-between w-full text-sm capitalize hover:bg-border-background py-3 font-bold rounded-md pl-2 " +
                    (location.pathname === "/dashboard/help-center"
                      ? "text-primary-purple  rounded-md"
                      : "text-body-black font-thin  ")
                  }
                  to="/dashboard/help-center"
                >
                  <div className="flex items-center justify-end hover:text-primary-purple">
                  <IconFormat activity color={location.pathname === "/dashboard/help-center" ? iconHoverColor : iconColor} className={
                      "mr-2 text-sm " +
                      (location.pathname === "/dashboard/help-center"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }/>{" "}
                  <p className={` ${location.pathname === "/dashboard/help-center"
                      ? "text-primary-purple font-bold"
                      : "text-body-black font-normal"}`}>Help Center</p>
                  </div>
                  <IconBack.IoChevronForward className={` ${location.pathname === "/dashboard/help-center"
                      ? "text-primary-purple "
                      : "text-back-icon "}`} ></IconBack.IoChevronForward>
                </Link>
              </li>

              
              <li className="items-center transition-all">
                <Link
                  className={
                    "flex items-center justify-between w-full text-sm capitalize hover:bg-border-background py-3 font-bold rounded-md pl-2 " +
                    (window.location.href.indexOf("/dashboard/analytics") !== -1
                      ? "text-primary-purple  rounded-md"
                      : "text-body-black font-thin  ")
                  }
                  to="/dashboard/analytics"
                >
                  <div className="flex items-center justify-end hover:text-primary-purple">
                  <IconFormat settings color={window.location.href.indexOf("/dashboard/analytics") !== -1 ? iconHoverColor : iconColor} className={
                      "mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/analytics") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }/>{" "}
                  <p className={` ${window.location.href.indexOf("/dashboard/analytics") !== -1
                      ? "text-primary-purple font-bold"
                      : "text-body-black font-normal"}`}>Analytics</p>
                  </div>
                  <IconBack.IoChevronForward className={` ${window.location.href.indexOf("/dashboard/analytics") !== -1
                      ? "text-primary-purple transition-all rotate-90"
                      : "text-back-icon "}`} />
                </Link>


                <ul className={(window.location.href.indexOf("/dashboard/analytics") !== -1
                            ? "flex px-4 md:flex-col md:min-w-full flex-col list-none"
                            : "hidden")}>
                    <li className={(location.pathname === "/dashboard/analytics/teams"
                            ? " "
                            : "border-l-2 border-transparent hover:border-border-color")} >
                      <Link
                        className={
                          "flex items-center justify-between w-full text-sm capitalize hover:text-heading-black hover:border-border-color py-1 hover:font-bold px-2 " +
                          (location.pathname === "/dashboard/analytics/teams"
                            ? " text-heading-black font-bold border-border-color border-l-2"
                            : " text-body-black font-normal")
                        }
                        to="/dashboard/analytics/teams"
                      >
                        Teams  
                      </Link>
                    </li>

                    <li className={(location.pathname === "/dashboard/analytics/knowledge-base"
                            ? " "
                            : "border-l-2 border-transparent hover:border-border-color")} >
                      <Link
                        className={
                          "flex items-center justify-between w-full text-sm capitalize hover:text-heading-black hover:border-border-color py-1 hover:font-bold px-2 " +
                          (location.pathname === "/dashboard/analytics/knowledge-base"
                            ? " text-heading-black font-bold border-border-color border-l-2"
                            : " text-body-black font-normal")
                        }
                        to="/dashboard/analytics/knowledge-base"
                      >
                        Knowledge Base
                      </Link>
                    </li>

                    <li className={(location.pathname === "/dashboard/analytics/training-sam"
                            ? " "
                            : "border-l-2 border-transparent hover:border-border-color")} >
                      <Link
                        className={
                          "flex items-center justify-between w-full text-sm capitalize hover:text-heading-black hover:border-border-color py-1 hover:font-bold px-2 " +
                          (location.pathname === "/dashboard/analytics/training-sam"
                            ? " text-heading-black font-bold border-border-color border-l-2"
                            : " text-body-black font-normal")
                        }
                        to="/dashboard/analytics/training-sam"
                      >
                        Training SAM  
                      </Link>
                    </li>

                    <li className={(location.pathname === "/dashboard/analytics/helping-center"
                            ? " "
                            : "border-l-2 border-transparent hover:border-border-color")} >
                      <Link
                        className={
                          "flex items-center justify-between w-full text-sm capitalize hover:text-heading-black hover:border-border-color py-1 hover:font-bold px-2 " +
                          (location.pathname === "/dashboard/analytics/helping-center"
                            ? " text-heading-black font-bold border-border-color border-l-2"
                            : " text-body-black font-normal")
                        }
                        to="/dashboard/analytics/helping-center"
                      >
                        Helping Center
                      </Link>
                    </li>


                </ul>
              </li>

             </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
