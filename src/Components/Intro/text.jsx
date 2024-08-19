import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Link } from 'react-router-dom';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }


    return (
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Stack
                width={{ base: '95%', md: '47%' }}
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 1.5, md: 10, sm: '14' }}>

                {
                    selectBtn
                        ?
                        <>
                            <Heading
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Votre CV en trois {' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    étapes {' '}
                                </Text>
                                faciles
                            </Heading>

                            <Text color={'gray.500'} maxW={'3xl'}>
                                Outils de création de CV qui assemblent des CV bien formatés. Grâce à un créateur de CV, vous pouvez créer un CV d'aspect professionnel en quelques étapes simples. Ce générateur de CV propose différentes options de modèles, vous pouvez donc sélectionner le modèle qui correspond le mieux à vos besoins et à votre style.
                            </Text>
                            <Heading
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Votre CV en trois {' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    étapes {' '}
                                </Text>
                                faciles
                            </Heading>

                            <Text color={'gray.500'} maxW={'3xl'}>
                                Outils de création de CV qui assemblent des CV bien formatés. Grâce à un créateur de CV, vous pouvez créer un CV d'aspect professionnel en quelques étapes simples. Ce générateur de CV propose différentes options de modèles, vous pouvez donc sélectionner le modèle qui correspond le mieux à vos besoins et à votre style.
                            </Text>

                            {/* <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                <Box className='Bullet_Points'>
                                    <Button>1</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Sélectionnez un modèle dans notre collection.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>2</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Créez votre CV à l'aide de notre générateur de CV.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>3</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Téléchargez votre CV.
                                    </Text>
                                </Box>
                            </Flex> */}
                        </>
                        :
                        <Heading
                            m={'1.5'}
                            textAlign={{ base: 'center', md: 'start' }}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}>
                            Sélectionnez un {' '}
                            <Text as={'span'} color={'#38B2AC'}>
                                modèle {' '}
                            </Text>
                            dans notre collection
                        </Heading>
                }
            </Stack>

            {
                selectBtn ?
                    <Stack>
                        <Image src={homeLogo} alt='home logo' my={'4'} />
                        
                        <Button
                            onClick={handleSelectTemplate}
                            rounded={'full'}
                            px={6}
                            className='mb-4'
                            colorScheme={'teal'}
                            bg={'#38B2AC'}
                            _hover={{ bg: '#319795' }}>
                            Sélectionnez un modèle
                        </Button>
                    </Stack>
                    :
                    <>
                        <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                            {
                                ThemeTemplateData.map((item, index) => {
                                    return <div key={index} className="template" onClick={showTheme}>
                                        <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                    </div>
                                })
                            }
                        </Box>
                    </>
            }
        </Container>
    );
}
