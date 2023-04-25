import React, { Component } from "react";

class KommunicateChat extends Component {
  componentDidMount() {
    if (window.kommunicate) {
      return;
    }

    (function(d, m) {
      var kommunicateSettings = {
        appId: "4a12842ed5f1a4226be757b76f463400",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: "9999",
        }}
      ></div>
    );
  }
}

export default KommunicateChat;