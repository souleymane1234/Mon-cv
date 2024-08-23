import ResumeContext from "./ResumeContext";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import generatePDF from 'react-to-pdf';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const ResumeState = (props) => {

    const componentRef = useRef();
    const pdfRef = useRef();
    const handlePrint = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('mon Cv.pdf');
        });
        }
    // <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</button>
    // <div ref={targetRef}>
    //    Content to be included in the PDF
    // </div>


    const initialData = {
        personalData: {
            profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNI3kQLeYMnpy05PhEiuzS1rtRmNVL7VKvwcE4ACmQSQT1rRmUO5mHLyjH-mGHq0ueUQY&usqp=CAU',
            name: "Your Name",
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            profile: "Work Profile",
            address: "Address Line",
            phone: "Phone Number",
            email: "Email Address",
            skill: 'Your, Skills, are, shown, here',
        },
        projectData: {
            projectTitles: { pTitle1: "Project Title 1" },
            projectDesc: { pDescription1: "Project Description 1" },
        },
        educationData: {
            educationTitles: { eTitle1: "Education Title 1" },
            educationDesc: { eDescription1: "Education Description 1" },
        },
        workData: {
            workTitles: { wTitle1: "Work Title 1" },
            workDesc: { wDescription1: "Work Description 1" },
        },
        awardData: {
            awards: 'Certificate of Appreciation - 2019, Certificate of Appreciation - 2018'
        }
    }

    const [themeData, setThemeData] = useState(initialData)
    const [checkProj, setCheckProj] = useState(false);
    const [checkWork, setCheckWork] = useState(false);
    const [checkAward, setCheckAward] = useState(false);
    const [loading, setLoading] = useState(false);
    //Change bellow two state for create any new Theme
    const [showComponent, setShowComponent] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('Theme1');
    const [selectBtn, setSelectBtn] = useState(true)


    return (
        <ResumeContext.Provider value={{ initialData, selectBtn, setSelectBtn, checkAward, setCheckAward, componentRef, handlePrint, currentTheme, setCurrentTheme, showComponent, setShowComponent, loading, setLoading, themeData, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork, pdfRef }}>
            {props.children}
        </ResumeContext.Provider >
    )
}

export default ResumeState