import React, {useContext} from 'react'
import { Flex, Container, Heading, Stack, Text, Box } from '@chakra-ui/react';
import ResumeContext from '../../Context/ResumeContext';
import { Link } from 'react-router-dom';
import homeLogo from './../../Assets/home-logo.png'
import acceuil from './../../Assets/acceuil-removebg-preview.png'
import perso from './../../Assets/perso-removebg-preview.png'
import cvIllustration from './../../Assets/cvIllustration-removebg-preview.png'
import cv1 from './../../Assets/cv1.png'
import cv2 from './../../Assets/cv2.jpg'
import cv3 from './../../Assets/cv3.jpeg'
import { Image } from '@chakra-ui/react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiCheckboxCircleLine } from "react-icons/ri";
import Footer from '../../Components/Footer/Footer';


const IntroPage = () => {
    const { setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);



    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }
    return (
        <>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Stack
                width={{ base: '95%', md: '47%' }}
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 1.5, md: 10, sm: '14' }}>
                            <Heading
                                fontWeight={"bold"}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                                lineHeight={'110%'}>
                                <Text as={'span'} color={'#13287e'}>
                                    Générer rapidement votre CV en ligne avec des modèles créatifs.
                                </Text>
                            </Heading>

                            <Text color={'gray.500'} maxW={'3xl'}>
                                Notre outils de création de CV assemblent des CV bien formatés. Grâce à cela, vous pouvez créer votre CV  professionnel en quelques étapes simples. Nous vous proposons différentes options de modèles, vous pouvez donc sélectionner le modèle qui correspond le mieux à vos besoins et à votre style.
                            </Text>
            </Stack>
                    <Stack>
                        <Image src={acceuil} alt='home logo' my={'4'} />
                    </Stack>
        </Container>
        <div className='container-fluid' style={{backgroundColor: "#e8f3fd"}}>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Stack
                width={{ base: '95%', md: '47%' }}
                align={'center'}
                py={{ base: 1.5, md: 10, sm: '14' }}>
                    <div style={{flexDirection: "row", backgroundColor: "#fff", display: "flex", padding: 20, borderRadius: 10}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#e8f3fd", borderRadius: 30, width: 70}}>
                            <Text style={{textAlign: "center", color: "#13287e", fontWeight: "bold", fontSize: 40}}>1</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Sélectionnez un modèle dans notre collection</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</Text>
                        </div>
                    </div>
                    <div style={{flexDirection: "row", backgroundColor: "#fff", display: "flex", padding: 20, borderRadius: 10}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#fff5ea", borderRadius: 30, width: 70}}>
                            <Text style={{textAlign: "center", color: "#ff9b1e", fontWeight: "bold", fontSize: 40}}>2</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Créez votre CV à l'aide de notre générateur de CV</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</Text>
                        </div>
                    </div>
                    <div style={{flexDirection: "row", backgroundColor: "#fff", display: "flex", padding: 20, borderRadius: 10}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#ecf7f3", borderRadius: 30, width: 70}}>
                            <Text style={{textAlign: "center", color: "#3eb688", fontWeight: "bold", fontSize: 40}}>3</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Téléchargez votre CV</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</Text>
                        </div>
                    </div>
            </Stack>
                    <Stack                 
                    width={{ base: '95%', md: '47%' }}
                    height={{ base: '95%', md: '47%' }}
                    align={'center'}
                    py={{ base: 1.5, md: 10, sm: '14' }}>
                        {/* <div style={{display: "flex", flexDirection: "row", alignItems: "start", alignContent: "start", justifyContent: "start"}}>
                        <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 50, textAlign: "start"}}>.</Text>
                        <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 50}}>.</Text>
                        <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 50}}>.</Text>
                        <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 50}}>.</Text>
                        </div> */}
                            <Card style={{ width: '100%', padding: 15 }}>
                                <Card.Body>
                                    <Card.Title style={{color: "#13287e", fontWeight: "bold", fontSize: 25, marginBottom: 60}}>Pourquoi choisir notre platforme ?</Card.Title>
                                    <Card.Text style={{fontSize: 16, marginBottom: 60}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!
                                    </Card.Text>
                                    <Button variant="primary"><Link to={"Modeles"}>Sélectionnez votre modèle</Link></Button>
                                </Card.Body>
                            </Card>
                    </Stack>
        </Container>
        </div>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Stack
                width={{ base: '95%', md: '47%' }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 1.5, md: 10, sm: '14' }}>
                    <p style={{fontSize: 30, color: "#13287e", fontWeight: "bold"}}>Nous offrons le meilleur</p>
                    <div style={{flexDirection: "row", display: "flex"}} >
                        <RiCheckboxCircleLine style={{alignSelf: "center", color: "#38da9f", fontSize: 20}}/>
                        <Text style={{marginLeft: 15, fontSize: 16, fontWeight: 600}}>Modèles de CV éprouvés pour augmenter les chances d'embauche</Text>
                    </div>
                    <div style={{flexDirection: "row", display: "flex"}} >
                        <RiCheckboxCircleLine style={{alignSelf: "center", color: "#38da9f", fontSize: 20}}/>
                        <Text style={{marginLeft: 15, fontSize: 16, fontWeight: 600}}>Conception de modèles créatifs et épurés</Text>
                    </div>
                    <div style={{flexDirection: "row", display: "flex"}} >
                        <RiCheckboxCircleLine style={{alignSelf: "center", color: "#38da9f", fontSize: 20}}/>
                        <Text style={{marginLeft: 15, fontSize: 16, fontWeight: 600}}>Créateur de CV en ligne simple et intuitif</Text>
                    </div>
                    <div style={{flexDirection: "row", display: "flex"}} >
                        <RiCheckboxCircleLine style={{alignSelf: "center", color: "#38da9f", fontSize: 20}}/>
                        <Text style={{marginLeft: 15, fontSize: 16, fontWeight: 600}}>Utilisation gratuite. Développé par des professionnels embauchés</Text>
                    </div>
                    <div style={{flexDirection: "row", display: "flex"}} >
                        <RiCheckboxCircleLine style={{alignSelf: "center", color: "#38da9f", fontSize: 20}}/>
                        <Text style={{marginLeft: 15, fontSize: 16, fontWeight: 600}}>Formatage rapide et facile de CV et de curriculum vitae</Text>
                    </div>
                    <div style={{flexDirection: "row", display: "flex"}} >
                        <RiCheckboxCircleLine style={{alignSelf: "center", color: "#38da9f", fontSize: 20}}/>
                        <Text style={{marginLeft: 15, fontSize: 16, fontWeight: 600}}>Phrases approuvées par le recruteur</Text>
                    </div>
            </Stack>
                    <Stack>
                        <Image src={cvIllustration} alt='home logo' my={'4'} />
                    </Stack>
        </Container>
        <Container my={{ base: 1.5, md: 16 }} alignItems={'center'} maxW={'7xl'}>
                    <div style={{flexDirection: "row",display: "flex", padding: 20, borderRadius: 10, backgroundColor: "#fff", justifyContent: "space-between"}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center"}}>
                            <Image src={perso} alt='home logo' my={'4'} style={{width: 100, height: 100}}/>
                        </div>
                        <div style={{justifyContent: "center", alignContent: "center", alignSelf: "center"}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20, justifyContent: "center", alignContent: "center", alignSelf: "center"}}>Avez-vous besoin d’un modèle de CV personnalisé complet ?</Text>
                        </div>
                        <Button variant="outline-primary" style={{width: "20%", height: "20%", justifyContent: "center", alignContent: "center", alignSelf: "center"}}><Link to={"Modeles"}>Cliquez ici</Link></Button>
                    </div>
        </Container>
        <div className='container-fluid' style={{backgroundColor: "#e8f3fd"}}>
        <Text color={'#13287e'} style={{fontSize: 25, textAlign: "center", fontWeight: "bold"}}>Nos modèles créatifs</Text>
        <Text style={{textAlign: "center", color: "#888888"}}>La douleur en elle-même est très importante, et elle sera suivie d'une prise de poids, mais cela arrive à un moment tel qu'il y a beaucoup de travail et de douleur.</Text>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Card style={{ width: '32%',  marginBottom: 50 }}>
                <Card.Img variant="top" src={cv1} />
                <Card.Body>
                    <Button variant="outline-primary" onClick={showTheme} id='Theme1'>Utiliser le modele</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '32%',  marginBottom: 50 }}>
                <Card.Img variant="top" src={cv2} />
                <Card.Body>
                    <Button variant="outline-primary" onClick={showTheme} id='Theme2'>Utiliser le modele</Button>
                </Card.Body>
            </Card>
        </Container>
        </div>
        <>
        <Text color={'#13287e'} style={{fontSize: 25, textAlign: "center", fontWeight: "bold"}}>Nos principales caractéristiques</Text>
        <Text style={{textAlign: "center", color: "#888888"}}>Le client est très important, le client sera suivi par le client. Mais qui est la bonne personne pour l’utiliser si ce n’est pas la meilleure façon de faire le travail ?</Text>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'} align={'center'}>
            <div style={{backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "32%"}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#e8f3fd", borderRadius: 30, width: 70, alignSelf: "center"}}>
                            <Text style={{textAlign: "center", color: "#13287e", fontWeight: "bold", fontSize: 40}}>1</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Modèles de CV éprouvés pour augmenter les chances d'embauche</Text>
                        </div>
                        <div>
                            <Text style={{color: "#888"}}>Le service client est un service client très important et cohérent. Ce n’est pas possible, la chose la plus importante pour nous en tant que client est de mettre le client lui-même au service client.</Text>
                        </div>
            </div>
            <div style={{backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "32%"}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#fff5ea", borderRadius: 30, width: 70, alignSelf: "center"}}>
                            <Text style={{textAlign: "center", color: "#ff9b1e", fontWeight: "bold", fontSize: 40}}>2</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Modèles de conception créatifs, modernes et épurés</Text>
                        </div>
                        <div>
                            <Text style={{color: "#888"}}>Le service client est un service client très important et cohérent. Ce n’est pas possible, la chose la plus importante pour nous en tant que client est de mettre le client lui-même au service client..</Text>
                        </div>
            </div>
            <div style={{backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "32%"}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#ecf7f3", borderRadius: 30, width: 70, alignSelf: "center"}}>
                            <Text style={{textAlign: "center", color: "#3eb688", fontWeight: "bold", fontSize: 40}}>3</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Générateur de CV en ligne simple et intuitif</Text>
                        </div>
                        <div>
                            <Text style={{color: "#888"}}>Le service client est un service client très important et cohérent. Ce n’est pas possible, la chose la plus importante pour nous en tant que client est de mettre le client lui-même au service client.</Text>
                        </div>
            </div>
        </Container>
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'} align={'center'}>
            <div style={{backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "32%"}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#e8f3fd", borderRadius: 30, width: 70, alignSelf: "center"}}>
                            <Text style={{textAlign: "center", color: "#13287e", fontWeight: "bold", fontSize: 40}}>4</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Utilisation gratuite. Développé par des professionnels embauchés.</Text>
                        </div>
                        <div>
                            <Text style={{color: "#888"}}>Le service client est un service client très important et cohérent. Ce n’est pas possible, la chose la plus importante pour nous en tant que client est de mettre le client lui-même au service client.</Text>
                        </div>
            </div>
            <div style={{backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "32%"}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#fff5ea", borderRadius: 30, width: 70, alignSelf: "center"}}>
                            <Text style={{textAlign: "center", color: "#ff9b1e", fontWeight: "bold", fontSize: 40}}>5</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Phrases approuvées par le recruteur avec notification du module</Text>
                        </div>
                        <div>
                            <Text style={{color: "#888"}}>Le service client est un service client très important et cohérent. Ce n’est pas possible, la chose la plus importante pour nous en tant que client est de mettre le client lui-même au service client..</Text>
                        </div>
            </div>
            <div style={{backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "32%"}} className="shadow p-3 mb-5 bg-white rounded">
                        <div style={{justifyContent: "center", alignContent: "center", backgroundColor: "#ecf7f3", borderRadius: 30, width: 70, alignSelf: "center"}}>
                            <Text style={{textAlign: "center", color: "#3eb688", fontWeight: "bold", fontSize: 40}}>6</Text>
                        </div>
                        <div style={{marginLeft: 20}}>
                            <Text style={{color: "#13287e", fontWeight: "bold", fontSize: 20}}>Formatage rapide et facile de CV</Text>
                        </div>
                        <div>
                            <Text style={{color: "#888"}}>Le service client est un service client très important et cohérent. Ce n’est pas possible, la chose la plus importante pour nous en tant que client est de mettre le client lui-même au service client.</Text>
                        </div>
            </div>
        </Container>
        </>
        <Footer />
        </>
    )
}

export default IntroPage
