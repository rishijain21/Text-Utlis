import React, { useState } from "react";

export default function TextForm(props) {
    const [text, settext] = useState("");

    const handleUpClick = () => {
        console.log("Upppercase" + text);
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted To UpperCase!",'success')
        // settext("hey you have Clicked")
    };
    const handleLowClick = () => {
        console.log("Upppercase" + text);
        let newText = text.toLocaleLowerCase();
        settext(newText);
        props.showAlert("Converted To LowerCase!",'success')

    };
    const handleClearClick = () => {
        console.log("Upppercase" + text);
        let newText = "";
        settext(newText);
        
    };

    const handleonChange = (event) => {
        console.log("handleonChange Clicked");
        settext(event.target.value);
    };

    const downloadtxt = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById("text-box").value], {
            type: "text/plain",
        });
        element.href = URL.createObjectURL(file);
        element.download = "Text-Utils.txt";
        element.click();
        
        props.showAlert("File Downloaded",'success')
      

    };

    const copyclipboard = () => {
        let text = document.getElementById("text-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To ClipBoard",'success')

    };
    const ExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showAlert("Removed Extra Spaces",'success')

    };
    return (
    <>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>


            <h2>Your Text Summary</h2>
            <div className="row align-items-start">
                <div className="col">
                    <h5>WORDS</h5>
                </div>
                <div className="col">
                    <h5>CHARACTERS</h5>
                </div>
                <div className="col">
                    <h5>FACEBOOK</h5>
                </div>
                <div className="col">
                    <h5>TWITTER</h5>
                </div>
                <div className="col">
                    <h5>Reading Time </h5>
                </div>
                <div className="col">
                    <h5>Speaking Time</h5>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col">
                    <h6>{text.split(" ").length}</h6>
                </div>
                <div className="col">
                    <h6>{text.length}</h6>
                </div>
                <div className="col">
                    <h6>{250 - text.length}/250</h6>
                </div>
                <div className="col">
                    <h6>{280 - text.length} /280</h6>
                </div>
                <div className="col">
                    <h6>{0.008 * text.split(" ").length} Min </h6>
                </div>
                <div className="col">
                    <h6>{0.6 * text.split(" ").length} Min </h6>
                </div>
            </div>
        </div>

        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="text-box" value={text} onChange={handleonChange} rows="8"> </textarea>
            </div>
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
                Convert To UpperCase
            </button>

            <button className="btn btn-danger mx-1 my-2" onClick={handleLowClick}>
                Convert To LowerCase
            </button>

            <button className="btn btn-info mx-1 my-2" onClick={downloadtxt}>
                Download txt
            </button>
            <button className="btn btn-secondary mx-1 my-2" onClick={copyclipboard}>
                Copy To Clip-Board
            </button>
            <button className="btn btn-dark mx-1 my-2" onClick={ExtraSpace}>
                Remove Extra Spaces
            </button>
            <button
                className="btn btn-success mx-1 my-2"
                onClick={handleClearClick}
            >
                Clear Text
            </button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}
