import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./vcard.css"

function Vcard() {
    const { id } = useParams();
    const [vcard, setVcard] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/vcard/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setVcard(data.vcard);
            })
            .catch((error) => {
                console.error('Error fetching vCard:', error);
            });
    }, [id]);

    const downloadVcard = () => {
        if (vcard) {
            const blob = new Blob([vcard], { type: "text/vcard" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `employee_${id}_vcard.vcf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div>
            {vcard ? (
                <div id="vcard-button">
                    <button onClick={downloadVcard}>Download vcard</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Vcard;
