import React, { useContext, useRef } from 'react'
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
    const { showComponent, setShowComponent, loading, handlePrint, pdfRef } = useContext(ResumeContext)

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border' ref={pdfRef}>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'#13287e'} variant={'outline'} onClick={handlePrint}>Télécharger votre Cv</Button>
                <Button className='mx-2 my-5' colorScheme={'#13287e'} variant={'outline'} onClick={handleSelectNewTemplate}>Sélectionnez un autre modèle.</Button>
            </div>
            <Footer />
        </>
    )
}

export default BuilderArea
