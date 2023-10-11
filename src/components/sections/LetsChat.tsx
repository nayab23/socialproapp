import React, { Component, useState } from "react";
import { StyledButtonPrimary } from "../muiStyle/style";

const LetsChat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <StyledButtonPrimary className="position-fixed bottom-0 end-0 m-7 px-0" onClick={toggleVisibility}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          style={{borderRadius: "0px", fill: "rgb(255, 255, 255)", width: "32px", height: "32px", flexShrink: "0"}}
        >
          <path
            d="M16 2C8.28 2 2 7.8 2 14.93a12.144 12.144 0 001.696 6.15l-1.668 7.51A1.16 1.16 0 003.63 29.9l6.914-3.072A14.835 14.835 0 0016 27.861c7.72 0 14-5.8 14-12.93S23.72 2 16 2zm4.508 16.32h-9.016a1.16 1.16 0 010-2.32h9.016a1.16 1.16 0 010 2.32zm0-4.638h-9.016a1.16 1.16 0 010-2.318h9.016a1.16 1.16 0 110 2.318z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </svg>
      </StyledButtonPrimary>

      {isVisible && 

      <div className="chat-box">
          {/* ******* header ****** */}
        <div className="chat-header">
          <div className="avatar-wrapper">
            <div className="avatar">
              <img src={process.env.PUBLIC_URL + "/media/socialpro.png"} className="img-fluid" />
              <div className="chatstatus"></div>
            </div>
            <div>
              <h4 className="title">Let's Chat!</h4>
              <p className="status">Online</p>
            </div>
          </div>
          {/* ==== close svg ===== */}
          <span onClick={toggleVisibility}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.077 6l.923.923L12.923 12 18 17.077l-.923.923L12 12.923 6.923 18 6 17.077 11.076 12 6 6.923 6.923 6 12 11.077 17.077 6z" fill="currentColor" fill-rule="evenodd"></path></svg>
          </span>
        
        </div>

          {/* ******* body ****** */}

        <div className="chat-body">

          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white px-3 rounded-1 text-primary time fw-700">4:31 PM</div>
          </div>

          <div className="d-flex flex-column gap-4">
          {/* ==== User Chat ===== */}
            <div className="d-flex justify-content-end align-items-center">
              <div className="bg-white px-3 py-1 rounded-1 text-primary user-chat fw-600">hi</div>
            </div>
          {/* ==== Admin Chat ===== */}
            <div className="d-flex justify-content-start align-items-center">
              <div className="bg-primary px-3 py-1 rounded-1 text-white user-chat admin-chat">Hey there, please leave your details so we can contact you even if you are no longer on the site.</div>
            </div>
          </div>
          
        
        </div>
        
          {/* ******* footer ****** */}
        <div className="chat-footer">
          <textarea aria-label="Type your message. Hit enter to submit." data-hook="input" 
          placeholder="Type your message..." role="textbox" ></textarea>
          {/* ==== emojy svg ===== */}
          <span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="16px" height="16px"><path d="M10,0a10,10,0,1,0,9.85,8.26A10,10,0,0,0,10,0Zm0,19A9,9,0,1,1,18.87,8.44,9.11,9.11,0,0,1,19,10,9,9,0,0,1,10,19Zm4.23-6.88a4.5,4.5,0,0,1-8.72,0l1-.25a3.5,3.5,0,0,0,6.78,0ZM8,8A1,1,0,1,1,7,7,1,1,0,0,1,8,8Zm6,0a1,1,0,1,1-1-1A1,1,0,0,1,14,8Z"></path></svg>
          </span>
          {/* ==== file svg ===== */}
          <span>
            <label htmlFor="#file">
                <svg viewBox="0 0 9 23" fill="currentColor" width="7px" height="17px"><path d="M4.5,23A4.5,4.5,0,0,1,0,18.5V4.5a4.5,4.5,0,0,1,9,0H8a3.5,3.5,0,0,0-7,0v14a3.5,3.5,0,0,0,7,0v-9a1.5,1.5,0,0,0-3,0V17H4V9.5a2.5,2.5,0,0,1,5,0v9A4.5,4.5,0,0,1,4.5,23Z"></path></svg>
            </label>
            <input type="file" hidden id='file'/>
          </span>
        </div>
       

      </div>
      }
    </>
  );
};
export default LetsChat;
