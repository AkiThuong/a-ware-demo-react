import React, { Component } from "react";
import QrReader from "react-qr-scanner";

class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
      isClient: false, // Added state to track if we're on the client side
    };

    this.handleScan = this.handleScan.bind(this);
  }
  componentDidMount() {
    // Set isClient to true when the component mounts on the client side
    this.setState({ isClient: true });
  }

  handleScan(data) {
    if (data) {
      const resultData = {
        result: data.text,
        timestamp: new Date().toISOString(),
      };

      // Fetch the last stored result
      const lastStoredResultString = localStorage.getItem("scanData");
      const lastStoredResult = lastStoredResultString
        ? JSON.parse(lastStoredResultString)
        : null;

      // Check if the new result is different from the last stored result
      if (!lastStoredResult || lastStoredResult.result !== resultData.result) {
        // Update state and localStorage only if the result is different
        this.setState({
          result: resultData.result,
        });
        localStorage.setItem("scanData", JSON.stringify(resultData));

        // Dispatch a custom event
        window.dispatchEvent(new Event("scanCompleted"));
      } else {
        // Optionally, handle the case where the result is the same as the last one
        console.log("Scanned result is the same as the last one.");
      }
    }
  }

  handleError(err) {
    console.error(err);
  }
  render() {
    const { cameraMode } = this.props;
    const { delay, result, isClient } = this.state;
    const previewStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };
    const facingMode = cameraMode === 1 ? "rear" : "front";
    console.log(facingMode);
    // Use cameraMode as a key to force re-render
    return (
      <div>
        {isClient && ( // Only render QrReader on the client side
          <QrReader
            key={facingMode} // Change key to force re-render
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            facingMode="rear"
          />
        )}
      </div>
    );
  }
}
export default QRScanner;

