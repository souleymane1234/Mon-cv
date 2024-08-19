import React, {useContext} from 'react';
import { Flex, Container, Heading, Stack, Text, Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import ThemeTemplateData from '../../db/ThemeTemplateData';
import ResumeContext from '../../Context/ResumeContext';
import imageTemplate from './../../Assets/template.jpg'
import cv1 from './../../Assets/cv1.png'
import cv2 from './../../Assets/cv2.jpg'
import cv3 from './../../Assets/cv3.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../../Components/Footer/Footer';


const TemplatePage = () => {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }
    return (
        <>
        <div className='container-fluid' style={{backgroundColor: "#fff"}}>
        <Container maxW={'100%'} className='container-fluid' style={{backgroundImage: `url(${imageTemplate})`, padding: 100, width: "100%", backgroundColor: "red"}}>
            <Text style={{textAlign: "center", fontSize: 40, color: "#fff", fontWeight: "700"}}>Nos modèles</Text>
        </Container>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Box maxW={{ base: '100%', md: '100%' }} className="templatesList container">
            <Text color={'#13287e'} style={{fontSize: 25, textAlign: "center", fontWeight: "bold", marginBottom: 20}}>Nos modèles créatifs</Text>
            <Text style={{textAlign: "center", color: "#888888", marginBottom: 50}}>La douleur en elle-même est très importante, et elle sera suivie d'une prise de poids, mais cela arrive à un moment tel qu'il y a beaucoup de travail et de douleur.</Text>
                            {
                                ThemeTemplateData.map((item, index) => {
                                    return <div key={index} className="template" style={{cursor: "pointer", marginBottom: 70}} onClick={showTheme}>
                                        <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                    </div>
                                })
                            }
            </Box>
        </Container>
        </div>
        {/* <div className='container-fluid' style={{backgroundColor: "#e8f3fd"}}>
        <Text color={'#13287e'} style={{fontSize: 25, textAlign: "center", fontWeight: "bold"}}>Nos modèles créatifs</Text>
        <Text style={{textAlign: "center", color: "#888888"}}>La douleur en elle-même est très importante, et elle sera suivie d'une prise de poids, mais cela arrive à un moment tel qu'il y a beaucoup de travail et de douleur.</Text>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Card style={{ width: '32%',  marginBottom: 50 }}>
                <Card.Img variant="top" src={cv1} />
                <Card.Body>
                    <Button variant="outline-primary">Utiliser le modele</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '32%',  marginBottom: 50 }}>
                <Card.Img variant="top" src={cv2} />
                <Card.Body>
                    <Button variant="outline-primary">Utiliser le modele</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '32%',  marginBottom: 50 }}>
                <Card.Img variant="top" src={cv3} />
                <Card.Body>
                    <Button variant="outline-primary">Utiliser le modele</Button>
                </Card.Body>
            </Card>
        </Container>
        </div> */}
        <Footer />
        </>
    )
}

export default TemplatePage
