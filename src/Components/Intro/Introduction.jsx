import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import imageTemplate from './../../Assets/template.jpg'
import { Link } from 'react-router-dom';

export default function Introduction() {
    const { setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);



    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }


    return (
        <div className='container-fluid' style={{backgroundColor: "#fff"}}>
                <Container maxW={'100%'} className='container-fluid' style={{backgroundImage: `url(${imageTemplate})`, padding: 100, width: "100%"}}>
                    <Text style={{textAlign: "center", fontSize: 40, color: "#fff", fontWeight: "700"}}>Nos modèles</Text>
                </Container>
                <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Box maxW={{ base: '100%', md: '100%' }} className="templatesList">
                                {
                                    ThemeTemplateData.map((item, index) => {
                                        return <div key={index} className="template" onClick={showTheme} style={{cursor: "pointer"}}>
                                            <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                        </div>
                                    })
                                }
                            </Box>
                </Container>
        </div>
    );
}
